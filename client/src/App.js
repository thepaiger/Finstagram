// Packages
import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// CSS
import './App.css';

// Screens
import Layout from './layout/Layout';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

// Services
import { loginUser, registerUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

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


  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/sign-in'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
