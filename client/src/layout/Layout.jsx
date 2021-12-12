// Packages
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <footer>
        <p>Don't have an account? <Link to='/sign-up'>Sign Up.</Link></p>
        <p>Already have an account? <Link to='/sign-in'>Sign In.</Link></p>
      </footer >
    </div>
  )
}
