import './setting.css'
import pp from '../../Image/topImg.jpg'

import Sidebar from "../../components/sidebar/SideBar"

export default function Setting() {
  return (
    <div className='setting'>
        <div className="settingsWrapper">
         <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
         </div>
         <form  className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={pp} alt="sorry"/>
                <label htmlFor="fileInput">
                <i className="settingsPPIcon bi bi-person-circle"></i>  
                </label>
                <input type='file' id='fileInput' style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Safak'/>
            <label>Email</label>
            <input type='email' placeholder='Safak@gmail.com'/>
            <label>Password</label>
            <input type='password' />
            <button className="settingsSubmit">Update</button>
         </form>
        </div>
      <Sidebar/>
    </div>
  )
}
