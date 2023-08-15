import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container mx-auto h-16 py-16 px-4 flex justify-between items-center'>
        <div id='logo'>
            <Link to='/' className='text-6xl font-dancingScript'>G</Link>
        </div>
        <div id='nav-items' className='flex gap-8'> 
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/projects'>
                Projects
            </NavLink>
            <NavLink to='/contact'>
                Contact
            </NavLink>
        </div>
    </header>
  )
}

export default Header