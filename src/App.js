
import './App.css';
import SignUp from './pages/singUp';
import LoginPage from './pages/login';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home';
import PrivateRoute from './components/private-route';
import Messenger from './components/discordApp/messenger';
import ValidateEmail from './pages/validation';
import InvitationPage from './pages/inviteServ/indes';
import ServerMessenger from './pages/serverMessenger';
import PageNotFound from './pages/not Found';
import VideoCall from './pages/videocall';
import NotificationProvider from './context/notifications/notifications.provider';

function App() {



  return (

    <NotificationProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>

            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/validate' element={<ValidateEmail></ValidateEmail>}></Route>
            <Route path='/discord/@me/:id' element={<PrivateRoute><Messenger></Messenger></PrivateRoute>}></Route>
            <Route path='/@me/:id/' element={<PrivateRoute><Messenger></Messenger></PrivateRoute>}></Route>
            <Route path='/discord/:id' element={<PrivateRoute><ServerMessenger></ServerMessenger></PrivateRoute>}></Route>
            <Route path='/invite/:id' element={<InvitationPage></InvitationPage>}></Route>
            <Route path='/videocall' element={<PrivateRoute><VideoCall></VideoCall></PrivateRoute>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

          </Routes>

        </BrowserRouter>



      </div>
    </NotificationProvider>




  );
}

export default App;
