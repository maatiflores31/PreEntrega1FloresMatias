import Carta from './components/Carta';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer';
import './estilos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Titulo titulo={"BULLDOG GYM"}/>
          {/* <Carta/> */}
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>} />
            <Route path={"/category/:id"} element={<ItemListContainer/>} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404/>} />
          </Routes>
          <Carta/>
          <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
