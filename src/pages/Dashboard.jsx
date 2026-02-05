import { useState } from 'react';

import TabsComponent from '../components/Dashboard components/TabsComponent/TabsComponent';
import TableComponent from '../components/Dashboard components/TableComponent/TableComponent';
import ButtonToUp from '../components/Shared components/ButtonToUp/ButtonToUp';

const Dashboard = () => {
  const [pageId, setPageId] = useState(null);
  const [sectionId, setSectionId] = useState(null);

  return (
    <div>
      <TabsComponent
        onChange={(p, s) => {
          setPageId(p);
          setSectionId(s);
        }}
      />

      <TableComponent
        activePage={pageId}
        activeSection={sectionId}
      />

      <ButtonToUp />
    </div>
  );
};

export default Dashboard;
