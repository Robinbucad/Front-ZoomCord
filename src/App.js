
import './App.css';
import SignUp from './pages/singUp';
import LoginPage from './pages/login';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
