import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes,Route, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import DataEntry from './pages/DataEntry';
import View from './pages/View';
import About from './pages/About';
import Navbar from './components/Navbar';
import Update from './pages/Update'

function App() {

  return (
    <Router>
     <div className="App">
    <ToastContainer position='top-center'/>
    <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/add" element = {<DataEntry/>}/>
        <Route exact path = "/view/:id" element = {<View/>}/>
        <Route exact path = "/update/:id" element = {<Update/>}/>
        <Route exact path = "/about" element = {<About/>}/>
      </Routes>
      </div>
    </Router>
    
  )
}

export default App
