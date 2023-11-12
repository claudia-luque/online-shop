import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer title="BookLand"/>
    </>
  )
}

export default App
