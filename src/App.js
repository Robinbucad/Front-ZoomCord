
import './App.css';
import SignUp from './pages/singUp';
import LoginPage from './pages/login';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home';
import PrivateRoute from './components/private-route';
import Messenger from './components/discordApp/messenger';
import ValidateEmail from './pages/validation';
import UserProvider from './context/user/user.provider';
function App() {



  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>

            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/validate' element={<ValidateEmail></ValidateEmail>}></Route>
            <Route path='/discord/:id' element={<PrivateRoute><Messenger></Messenger></PrivateRoute>}></Route>

          </Routes>

        </BrowserRouter>



      </div>
    </UserProvider>


  );
}

export default App;
