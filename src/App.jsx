import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Navbar from './tasks/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const data = {
    name:"Rock Star",
    age: 21,
    des:"Time to shine",
    src: "https://play-lh.googleusercontent.com/-gQlRSL8c_ekb1c5b2ftwVQgtoNde70KI4CDO36gdxl9RDcjrg864_Wj4JvYjAVZU7PM=w240-h480-rw"
  };

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:userName' element={<UserPage />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
