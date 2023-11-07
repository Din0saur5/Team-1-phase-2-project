import { useState } from 'react';

function GamerForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // notes to self to handle form submission here or make an API request
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gamertag:</label>
        <input
          type="text"
          name="gamertag"
          value={user.gamertag}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Console:</label>
        <select name="console" value={user.console} onChange={handleChange}>
          <option value="">Select a console</option>
          <option value="OculusRift">Oculus Rift</option>
          <option value="PlayStationVR">PlayStation VR</option>
          <option value="MetaQuest">MetaQuest</option>
          <option value="HTCVive">HTC Vive</option>
          <option value="SamsungGearVR">SamsungGear VR</option>
          <option value="GoogleDaydreamView">Google Daydream View</option>
          <option value="MERGEVRGoggles">MERGE VR Goggles</option>
          <option value="PicoNeo">Pico Neo</option>
          <option value="LenovoMirageSolo">Lenovo Mirage Solo</option>
          <option value="VarjoXR3">Varjo XR-3</option>
          <option value="XREALAirARGlasses">XREAL Air AR Glasses</option>
        </select>
      </div>

      <div>
        <label>Region:</label>
        <select name="region" value={user.region} onChange={handleChange}>
          <option value="">Select a region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default GamerForm