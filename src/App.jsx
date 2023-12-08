import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

// /:itemId los dos puntos define una ruta dinamica porque el valor va cambiar
// itemId viene de useParams in ItemDetailContainer
function App() {
  return (
    <>
      <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title="BookLand"/>}/>
          <Route path={'/product/:itemId'} element={<ItemDetailContainer/>}/>
          <Route path={'/category/:categoryId'} element={<ItemListContainer/>}></Route>
          <Route path={'/cart'} element={<p>Carrito</p>}></Route>
          <Route path={`*`} element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
}

export default App
