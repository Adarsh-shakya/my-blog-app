import './SideBar.css'
import sideBarImg from '../../Image/OIP.jpeg'

export default function SideBar() {
  return (
    <div className="sidebar">
       <div className='sidebarItem'>
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sideBarImg} alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit quisquam optio, voluptas odio ratione.</p>
        </div>   
         
         <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li> 
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li> 
            </ul>
         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>  
         <div className="sidebarSocial">
              <i className="sidebarIcon bi bi-facebook"/>
              <i className="sidebarIcon bi bi-twitter"></i>
              <i className="sidebarIcon bi bi-pinterest"></i>
              <i className="sidebarIcon bi bi-instagram"></i> 
         </div>
         </div>
    </div>
  )
}
