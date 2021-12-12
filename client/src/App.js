// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// CSS
import './App.css';

// Screens/Containers
import Layout from './layout/Layout';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

// Services
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout} >
        <Switch>
          <Route path='/sign-in'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
