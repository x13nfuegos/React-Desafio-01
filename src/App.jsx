import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (

    <>
      <NavBar />
      <ItemListContainer greeting={'Saludo'} />
    </>



  )
}

export default App

