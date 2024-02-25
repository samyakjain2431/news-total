import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default function Navbar() {
  return (
    <nav className='bg-slate-900 p-3 flex justify-between items-center my-nav'>
            <div className='flex items-center  text-white'>
                <Link to="/" className='text-xl font-semibold m-2 flex items-center'>
                <span className="material-symbols-outlined mx-2 text-3xl">newspaper</span>News Total</Link>
                {/* <li><Link className='m-3 ' to="/">About</Link></li> */}
            </div>
            {/* <div className="nav-links flex flex-row justify-between"> */}

            <ul className='nav-links-category justify-evenly items-center text-slate-400' id='nav-links-category'>
                <li className='hover:text-white'><Link className='Link' to="/business">Business</Link></li>
                <li className='hover:text-white'><Link className='Link' to="/entertainment">Entertainment</Link></li>
                <li className='hover:text-white'><Link className='Link' to="/startup">Startup</Link></li>
                <li className='hover:text-white'><Link className='Link' to="/science">Science</Link></li>
                <li className='hover:text-white'><Link className='Link' to="/sports">Sports</Link></li>
                <li className='hover:text-white'><Link className='Link' to="/technology">Technology</Link></li>
            </ul>
            
            <ul className='nav-links-buttons flex justify-evenly items-center'>
                {/* <li><Link className='p-2 m-2 px-4 bg-[#0063eb] text-white rounded-full hover:bg-[#004eba]' target="_blank" href="https://github.com/samyakjain2431">{"</> Get Code"}</Link></li> */}
                <li><a className='p-2 m-2 px-4 bg-[#0063eb] text-white rounded-full hover:bg-[#004eba]'  target="_blank" rel="noreferrer" href="https://samyakjainofficial.netlify.app">{"Go to Portfolio"}</a></li>
            </ul>
          
            
        </nav>
    
  )
}
