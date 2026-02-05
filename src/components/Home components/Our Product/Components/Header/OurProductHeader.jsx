import './OurProductHeader.css'


const OurProductHeader = ({ Headerdata, activeCategory, setCategory }) => {
  return (
    <div className="hs-product-header flex-between">
      <div className="hs-header-text">
        <h1>
          {Headerdata.titleOne} <span>{Headerdata.titleTwo}</span>
        </h1>
        <p className='hs-description'>{Headerdata.description}</p>
      </div>


      {/* Right side: Category Toggle Buttons */}
      <div className="hs-toggle-container border">
        <button
          className={`hs-btn-text ${activeCategory == 'individual' ? 'hs-active-btn' : 'hs-not-active-btn'}`}
          onClick={() => setCategory('individual')}
        >
          {Headerdata.individualBtn}
        </button>
        {/* Button for Businesses category */}
        <button className={`hs-btn-text ${activeCategory == 'businesses' ? 'hs-active-btn' : 'hs-not-active-btn'} `} onClick={() => setCategory('businesses')}>
          {Headerdata.businessesBtn}
        </button>
      </div>
    </div>
  );
};

export default OurProductHeader;
