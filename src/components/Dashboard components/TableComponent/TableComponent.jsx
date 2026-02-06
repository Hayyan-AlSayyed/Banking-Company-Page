import { useEffect, useState } from "react";
import { tableSchemas } from "../dashboardData";
import "./TableComponent.css";
// import { h1 } from "framer-motion/client";
import Delete from "/Images/Dashboard/Delete.png"
import Cancel from "./Images/Dashboard/Cancel.png"

/**
 * TableComponent
 * --------------
 * A dynamic, reusable table component that:
 * - Changes columns based on active page & section
 * - Supports CRUD operations (Add, Edit, Delete)
 * - Persists data in localStorage
 *
 * Props:
 * - activePage: currently selected page ID
 * - activeSection: currently selected section ID
 */
const TableComponent = ({ activePage, activeSection }) => {

  // Generate a unique key for the table based on page and section
  const tableKey = `${activePage}-${activeSection}`;

  // Get column definitions from schema (fallback to empty array)
  const columns = tableSchemas[tableKey] || [];

  // LocalStorage key for this specific table
  const storageKey = `tableData-${tableKey}`;

  // ======================
  // Component State
  // ======================
  const [rows, setRows] = useState([]);           // Table rows data
  const [editingId, setEditingId] = useState(null); // ID of the row currently being edited
  const [editedData, setEditedData] = useState({}); // Edited row values
  const [isAdding, setIsAdding] = useState(false);  // Add-new-row mode flag
  const [newRowData, setNewRowData] = useState({}); // New row values

  /**
   * Effect: Load table data from localStorage
   * -----------------------------------------
   * Runs whenever the storage key changes
   * (i.e., when page or section changes)
   */
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const data = JSON.parse(saved);

        // Ensure stored data is always treated as an array
        if (Array.isArray(data)) {
          setRows(data);
        } else {
          setRows([data]);
        }
      } catch (e) {
        console.error("Error parsing table data:", e);
        setRows([]);
      }
    } else {
      setRows([]);
    }
  }, [storageKey]);

  /**
   * Enable edit mode for a specific row
   */
  const handleEdit = (row) => {
    setEditingId(row.id);
    setEditedData({ ...row });
  };

  /**
   * Update edited field value
   */
  const handleChange = (column, value) => {
    setEditedData(prev => ({
      ...prev,
      [column]: value
    }));
  };

  /**
   * Save edited row data
   */
  const handleSave = () => {
    const updatedRows = rows.map(row =>
      row.id === editingId ? editedData : row
    );

    setRows(updatedRows);
    localStorage.setItem(storageKey, JSON.stringify(updatedRows));
    setEditingId(null);
    setEditedData({});
  };

  /**
   * Cancel edit mode without saving
   */
  const handleCancel = () => {
    setEditingId(null);
    setEditedData({});
  };

  /**
   * Delete a row
   */
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      const updatedRows = rows.filter(row => row.id !== id);
      setRows(updatedRows);
      localStorage.setItem(storageKey, JSON.stringify(updatedRows));
    }
  };

  /**
   * Initialize adding a new row
   */
  const handleAddNew = () => {
    setIsAdding(true);
    const emptyRow = {};

    // Create empty values for each column
    columns.forEach(col => {
      emptyRow[col] = "";
    });

    setNewRowData(emptyRow);
  };

  /**
   * Update new row field value
   */
  const handleNewRowChange = (column, value) => {
    setNewRowData(prev => ({
      ...prev,
      [column]: value
    }));
  };

  /**
   * Save newly added row
   */
  const handleSaveNew = () => {
    const newId =
      rows.length > 0
        ? Math.max(...rows.map(r => r.id || 0)) + 1
        : 1;

    const newRow = {
      id: newId,
      ...newRowData
    };

    const updatedRows = [...rows, newRow];
    setRows(updatedRows);
    localStorage.setItem(storageKey, JSON.stringify(updatedRows));
    setIsAdding(false);
    setNewRowData({});
  };

  /**
   * Cancel adding new row
   */
  const handleCancelNew = () => {
    setIsAdding(false);
    setNewRowData({});
  };

  // If no schema exists for this section, show fallback message
  if (!columns.length) {
    return <p className="ma-no-table">No table available for this section</p>;
  }

  return (
    <div className="ma-table-container">

      {/* Table header with Add button */}
      <div className="ma-table-header flex-between">
        <h1>Admin Control Center</h1>
        <button className="ma-btn ma-btn-add" onClick={handleAddNew}>
          <img src="./Images/Dashboard/Add.png" alt="" />
          <h2>
            Add a New Row
          </h2>
        </button>
      </div>

      <div className="ma-table-wrapper">
        <table className="ma-table">

          {/* Table column headers */}
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col} className="ma-th">
                  {col}
                </th>
              ))}
              <th className="ma-th">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Existing rows */}
            {rows.map((row, index) => (
              <tr key={row.id || index} className="ma-tr">
                {columns.map((col) => (
                  <td key={col} className="ma-td">
                    {editingId === row.id ? (
                      <input
                        type="text"
                        className="ma-input-edit"
                        value={editedData[col] ?? ""}
                        onChange={(e) => handleChange(col, e.target.value)}
                      />
                    ) : (
                      (col === "image" || col === "icon" || col === "imag") ? (
                        <img
                          src={row[col]}
                          alt=""
                          className="ma-table-img"
                        />
                      ) : (
                        row[col] ?? ""
                      )
                    )}
                  </td>

                ))}

                {/* Row actions */}
                <td className="ma-td ma-actions">
                  {editingId === row.id ? (
                    <>
                      <button
                        className="ma-btn ma-btn-save"
                        onClick={handleSave}
                      >
                        <img src="/Images/Dashboard/Save.png" alt="" />

                      </button>
                      <button
                        className="ma-btn ma-btn-cancel"
                        onClick={handleCancel}
                      >
                        <img src={Cancel} alt="" />

                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="ma-btn ma-btn-edit"
                        onClick={() => handleEdit(row)}
                      >
                        <img src="./Images/Dashboard/Edit.png" alt="" />
                      </button>
                      <button
                        className="ma-btn ma-btn-delete"
                        onClick={() => handleDelete(row.id)}
                      >
                        <img src={Delete} alt="" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            {/* New row input */}
            {isAdding && (
              <tr className="ma-tr ma-new-row">
                {columns.map((col) => (
                  <td key={col} className="ma-td">
                    <input
                      type="text"
                      className="ma-input-edit"
                      placeholder={`Enter ${col}`}
                      value={newRowData[col] ?? ""}
                      onChange={(e) => handleNewRowChange(col, e.target.value)}
                    />
                  </td>
                ))}
                <td className="ma-td ma-actions">
                  <button
                    className="ma-btn ma-btn-save"
                    onClick={handleSaveNew}
                  >
                    <img src="/Images/Dashboard/Save.png" alt="" />

                  </button>
                  <button
                    className="ma-btn ma-btn-cancel"
                    onClick={handleCancelNew}
                  >
                    <img src="./Images/Dashboard/Cancel.png" alt="" />
                  </button>
                </td>
              </tr>
            )}

            {/* Empty state */}
            {rows.length === 0 && !isAdding && (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="ma-td ma-empty-state"
                >
                  No data available. Click "Add New Row" to get started.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TableComponent;
