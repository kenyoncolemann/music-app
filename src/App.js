import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Profile from './pages/profile'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/profile" exact element={<Profile />}/>
        <Route path="/sign-up" exact element={<SignUp />}/>
        <Route path="/sign-in" exact element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
