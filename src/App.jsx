import './App.css';
import Banner from "./Header/Banner";
import Navbar from "./Header/Navbar";
import Recipe from "./Recipe/Recipe";
function App() {


  return (
    <>

      <h1 className='bg-slate-600 text-yellow-300'>Vite + React</h1>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>

    </>
  )
}

export default App
