import React from 'react';
import { useState } from 'react';


function SearchBar({handleSearch}) {
  const [controlQuery, setSearchCriteria] = useState({
    gamertag: '',
    console: '',
    region: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...controlQuery,
      [name]: value,
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSearch(controlQuery)
    console.log(controlQuery)
    e.target.reset()
  setSearchCriteria({
    gamertag: '',
    console: '',
    region: '',
  })
  }

  

  return (
    <form onSubmit={handleSubmit} className="search-bar" value = {controlQuery}>
      <input
      style={{marginRight:'5%', backgroundColor:'#19191a', color:'#FFA500', borderRadius: 0 }}
        type="text"
        placeholder="Search by Gamertag"
        name="gamertag"
        value={controlQuery.gamertag}
        onChange={handleInputChange}
      />
       <select style={{marginRight:'5%',backgroundColor:'#19191a', color:'#FFA500',borderRadius: 0}} name="console" value={controlQuery.console} onChange={handleInputChange}>
          <option value="">Select a console</option>
          <option value="Oculus Rift">Oculus Rift</option>
          <option value="PlayStation VR">PlayStation VR</option>
          <option value="MetaQuest">MetaQuest</option>
          <option value="HTC Vive">HTC Vive</option>
          <option value="SamsungGear VR">SamsungGear VR</option>
          <option value="Google Daydream View">Google Daydream View</option>
          <option value="MERGE VR Goggles">MERGE VR Goggles</option>
          <option value="Pico Neo">Pico Neo</option>
          <option value="Lenovo Mirage Solo">Lenovo Mirage Solo</option>
          <option value="Varjo XR-3">Varjo XR-3</option>
          <option value="XREAL Air AR Glasses">XREAL Air AR Glasses</option>
        </select>
    
      <select style={{marginRight:'5%',backgroundColor:'#19191a', color:'#FFA500',borderRadius: 0}} name="region" value={controlQuery.region} onChange={handleInputChange}>
          <option value="">Select a region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
    
      <style>
        {`
          ::placeholder {
            color: grey;
        }`
        }

      </style>
      <button className='filter-btn' type="submit">Search/Reset</button>
    </form>
  );
}
export default SearchBar