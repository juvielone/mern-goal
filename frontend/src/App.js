import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>


        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>




      </Router>
    </>
  );
}

export default App;
