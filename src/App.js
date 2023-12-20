import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign' element={<SignUp/>}/>
                <Route path='/login' element={<LogIn/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
