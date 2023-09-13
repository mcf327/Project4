import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}!</span>
      <div className="nav-links">
        {user.userType === 'user' && (
          <>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new" >Order & Inventory</Link>
            &nbsp; | &nbsp;
          </>
        )}
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}