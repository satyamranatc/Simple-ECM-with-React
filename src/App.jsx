import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// ?----------------Components----------
import NavBar from './Components/NavBar'
// ?----------------Pages----------------
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails.jsx'

export default function App() {


let [products, setProducts] = useState([
  {
    id: 1,
    name: "Dell Inspiron 7591",
    desc: "I7 with 16 Gb Ram With 6 Gb Graphics Card",
    price: 120000,
    category: "Electronics",
    image: "https://placehold.co/600x400?text=Dell+Laptop"
  },
  {
    id: 2,
    name: "HP Pavilion X360",
    desc: "Intel Core i5 with 8 Gb Ram With 128 Gb SSD",
    price: 80000,
    category: "Electronics",
    image: "https://placehold.co/600x400?text=HP+Laptop"
  },
  {
    id: 3,
    name: "Lenovo IdeaPad S145",
    desc: "Intel Core i5 with 8 Gb Ram With 512 Gb SSD",
    price: 65000,
    category: "Electronics",
    image: "https://placehold.co/600x400?text=Lenovo+Laptop"
  },
  {
    id: 4,
    name: "Apple Macbook Air",
    desc: "Intel Core i5 with 8 Gb Ram With 128 Gb SSD",
    price: 100000,
    category: "Electronics",
    image: "https://placehold.co/600x400?text=Apple+Macbook"
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    desc: "Qualcomm Snapdragon 855 with 8 Gb Ram With 128 Gb SSD",
    price: 150000,
    category: "Electronics",
    image: "https://placehold.co/600x400?text=Samsung+Phone"
  }
]);

let [Index,setIndex] = useState();




  return (
    <div>
      <BrowserRouter >
        <NavBar/>

        <Routes>

          <Route path='' element = {<Home/>} />
          <Route path='/Products' element = {<Products setIndex = {setIndex} products = {products}/>} />
          <Route path='/ProductDetails' element = {<ProductDetails Index = {Index} products = {products}/>} />




        </Routes>
      
      
      </BrowserRouter>


    </div>
  )
}
