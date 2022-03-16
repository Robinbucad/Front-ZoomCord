
import './App.css';
import SignUp from './pages/singUp';
import LoginPage from './pages/login';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home';
import DcHome from './pages/DCapp';
import DiscServer from './components/discordApp/DCserv';
import Chat from './components/discordApp/DcChat';
import CreateServChannel from './components/modal/createServChannel';
import PrivateRoute from './components/private-route';
import Messenger from './components/discordApp/messenger';


function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
        <Routes>
       <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            
            <Route path='/channels/@me/:id' element={<PrivateRoute><DcHome/></PrivateRoute>}></Route>
            <Route path='/server' element={<PrivateRoute><DiscServer/></PrivateRoute>}></Route>   
            <Route path='/@me/:id' element={<PrivateRoute><Chat/></PrivateRoute>}></Route>   
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Routes>
        
      </BrowserRouter>  */}
      <Messenger></Messenger>

      
    </div>
  );
}

export default App;
