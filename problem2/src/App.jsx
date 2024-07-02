import './App.css'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import { Route,Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
