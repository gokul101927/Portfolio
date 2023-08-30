import { Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { useState } from 'react'

const Header = () => {

    const [isHeaderClicked, setIsHeaderClicked] = useState(false);

    const openNavBar = () => {
        setIsHeaderClicked(true);
    }

    const closeNavBar = () => {
        setIsHeaderClicked(false);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}>
            <header className='container sticky top-0 mx-auto h-16 py-16 px-4 flex justify-between items-center z-50'>
                <div id='logo'>
                    <Link to='/' className='text-6xl drop-shadow-lg font-dancingScript'>
                       G
                    </Link> 
                </div>
                <div id='nav-items' className='hidden md:flex gap-8 text-sm'>
                    <Link to='/about' className="relative px-2 after:content-[''] after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                        About
                    </Link>
                    <Link to='/projects' className="relative px-2 after:content-['']  after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                        Projects
                    </Link>
                    <Link to='/contact' className="relative px-2 after:content-[''] after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                        Contact
                    </Link>
                </div>
                <div className='md:hidden' >
                    <div className={`${isHeaderClicked ? 'hidden' : 'block'} space-y-2 relative`} onClick={openNavBar}>
                        <div className="w-8 h-0.5 bg-gray-500"></div>
                        <div className="w-8 h-0.5 bg-gray-500"></div>
                        <div className="w-8 h-0.5 bg-gray-500"></div>
                    </div>
                    <div className={`${isHeaderClicked ? 'block' : 'hidden'} overflow-y-hidden fixed inset-0 h-screen primary-background w-screen top-0 left-0 z-50 `}>
                        <div className='flex justify-between items-center p-4 pt-8' >
                            <div id='logo' onClick={closeNavBar}>
                                <Link to='/' className='text-6xl font-dancingScript'>G</Link>
                            </div>
                            <div className="text-5xl align-center cursor-pointer" onClick={closeNavBar}
                            >&times;</div>
                        </div>
                        <div className='flex flex-col justify-start pt-20 gap-8 items-center'>
                            <NavLink to='/about' onClick={closeNavBar} className="relative font-bold px-2 after:content-[''] after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                                About
                            </NavLink>
                            <NavLink to='/projects' onClick={closeNavBar} className="relative font-bold  px-2 after:content-['']  after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                                Projects
                            </NavLink>
                            <NavLink to='/contact' onClick={closeNavBar} className="relative font-bold  px-2 after:content-[''] after:mt-1 after:absolute after:left-0 after:top-full after:w-0 after:h-0.5 after:bg-white after:ease-out after:transition-all after:hover:w-full">
                                Contact
                            </NavLink>
                        </div>

                    </div>
                </div>

            </header>
        </motion.div>
    )
}

export default Header