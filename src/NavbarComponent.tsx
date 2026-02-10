import { Link } from "react-router-dom";
// navbar component that is used across all pages
function NavbarComponent() {
  return (
        <nav className='w-full bg-white p-4 flex justify-start space-x-4 text-[#D496BB]'> 
            <ul className="flex space-x-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/discography">Discography</Link></li>
            </ul>
        </nav>
  )
}

export default NavbarComponent;