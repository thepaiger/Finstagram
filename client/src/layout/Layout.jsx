// Packages
import { Link, useLocation } from 'react-router-dom';

// Graphics
import homeIcon from './../assets/graphics/home-icon.svg'
import profileIcon from './../assets/graphics/profile-icon.svg'

export default function Layout({ children, currentUser, handleLogout }) {
  const location = useLocation();

  return (
    <div>
      {currentUser &&
        <nav>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      }
      {children}
      <footer>
        {!currentUser ? (
          <div>
            {(location.pathname === '/sign-in') ?
              <p>Don't have an account? <Link to='/sign-up'>Sign Up.</Link></p>
              : <p>Already have an account? <Link to='/sign-in'>Sign In.</Link></p>
            }
          </div>
        ) : (
          <div>
            <Link to='/'><img src={homeIcon} alt='home icon' /></Link>
            <Link to={`/profile/${currentUser.id}`}><img src={profileIcon} alt='profile icon' /></Link>
          </div>
        )}
      </footer >
    </div>
  )
}
