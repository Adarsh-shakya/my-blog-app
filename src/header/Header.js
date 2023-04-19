import './header.css'
import HeaderIng from '../Image/headerImg.jpg'

export default function Header()
{
    return(
        <div className='header'>
            <div className='headerTitel'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
           <img className='headerImg' src={HeaderIng} />
        </div>
    )
}