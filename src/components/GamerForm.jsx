import { useState } from 'react';
import UserList from './UserList';

function GamerForm({handleSubmitNew}) {
  const [user, setUser] = useState({
    email: '',
    gamertag: '',
    console: '',
    region: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
function handleSubmit(e){
  e.preventDefault()
  handleSubmitNew(user)
  e.target.reset()
  setUser({
    email: '',
    gamertag: '',
    console: '',
    region: '',
  }

  )
}





  return (
    <form className='gamer-form' onSubmit={(e)=>handleSubmit(e, user)}>
      
        <label>Email:&nbsp; </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
     
      
      <br/>
        <label>Gamertag:&nbsp; </label>
        <input
          type="text"
          name="gamertag"
          value={user.gamertag}
          onChange={handleChange}
        />
     
     <br/>
     
        <label>Console:&nbsp; </label>
        <select name="console" value={user.console} onChange={handleChange}>
          <option value="">Select a console</option>
          <option value="OculusRift">Oculus Rift</option>
          <option value="PlayStationVR">PlayStation VR</option>
          <option value="MetaQuest">MetaQuest</option>
          <option value="HTCVive">HTC Vive</option>
          <option value="SamsungGearVR">SamsungGear VR</option>
          <option value="GoogleDaydrMERGEVRGoggleseamView">Google Daydream View</option>
          <option value="MERGEVRGoggles">MERGE VR Goggles</option>
          <option value="PicoNeo">Pico Neo</option>
          <option value="LenovoMirageSolo">Lenovo Mirage Solo</option>
          <option value="VarjoXR3">Varjo XR-3</option>
          <option value="XREALAirARGlasses">XREAL Air AR Glasses</option>
        </select>
    

        <br/>
        <label>Region:&nbsp;</label>
        <select name="region" value={user.region} onChange={handleChange}>
          <option value="">Select a region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      
        <br/>

      <button className='form-btn' type="submit">Submit</button>

    </form>
  );
}

export default GamerForm