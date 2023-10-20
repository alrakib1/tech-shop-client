
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  return (
    <div className="max-w-7xl mx-auto border-4">
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
