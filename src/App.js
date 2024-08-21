
import './App.css';
import Login from './Components/Login.jsx'
import SignUp from './Components/signUp.jsx'
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Login/>}/>

          <Route path="/*" element={<h1>404 page not found</h1>} />
      </Routes>
      </BrowserRouter>
      
       

  
      </header>
    </div>
  );
}

export default App;
