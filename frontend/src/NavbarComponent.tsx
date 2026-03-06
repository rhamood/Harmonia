import { Link } from "react-router-dom";
// navbar component that is used across all pages
function NavbarComponent() {
  return (
        <nav className='w-full bg-white p-4 flex justify-between space-x-4 text-[#D496BB]'> 
            <ul className="flex space-x-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/discography">Discography</Link></li>
                <li><Link to="/game">Game</Link></li>
            </ul>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
  )
}

export default NavbarComponent;