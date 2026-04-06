import { Link } from "react-router-dom";
// navbar component that is used across all pages
function NavbarComponent() {
  return (
        <nav className='w-full bg-white p-4 flex justify-between space-x-4 text-[#D496BB]'> 
            <ul className="flex space-x-4 flex-1">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/discography">Discography</Link></li>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            {/* <ul>
                <li><Link to="/auth">Login</Link></li>
            </ul> */}
                <li className="ml-auto"><Link to="/">Logout</Link></li>
            </ul>
        </nav>
  )
}

export default NavbarComponent;