import {useState} from 'react';
import {Link} from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';




const Navbar = () => {

  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
        to='/'
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}
        >
        <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>Vishwa &nbsp;<span className='sm:block hidden'> | Developer</span></p>
        </Link>
        <div className='hidden sm:flex items-center gap-4'>
          <ul className='list-none flex flex-row gap-10 mr-2'>
            {navLinks.map((link)=>(
              <li key={link.id} className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer` }
              onClick={()=>setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <a
            href='/Vishwa_Subramaniam_Resume.pdf'
            download='Vishwa_Subramaniam_Resume.pdf'
            className='bg-[#915eff] hover:bg-[#804df0] text-white text-[16px] font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-violet-500/20 border border-[#a27bff]/20 cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={()=>setToggle(!toggle)}
          ></img>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col gap-4`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 w-full'>
              {navLinks.map((link)=>(
                <li key={link.id} className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]` }
                onClick={()=>
                  {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="mt-2 w-full">
                <a
                  href='/Vishwa_Subramaniam_Resume.pdf'
                  download='Vishwa_Subramaniam_Resume.pdf'
                  className='bg-[#915eff] text-white font-poppins font-medium text-[15px] py-2 px-3 rounded-lg flex items-center justify-center gap-2 border border-[#a27bff]/20 active:scale-95 cursor-pointer shadow-md'
                  onClick={() => setToggle(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar