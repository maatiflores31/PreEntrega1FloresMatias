import Carousel from './components/Carousel';
import Carta from './components/Carta';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Titulo from './components/Titulo';
import ItemListContainer from './components/itemListContainer';
import './estilos.css'

function App() {

  return (
  <>
    <NavBar/>
    <Titulo titulo={"BULLDOG GYM"}/>
    <Carousel/>
    <Carta/>
    <ItemListContainer mensaje={"NO HAY MAS ACTIVIDADES!!!"} />
    <Footer/>
  </>
  )
}

export default App;
