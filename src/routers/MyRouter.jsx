import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Contactos, Inicio, Nosotros, Productos } from '../pages'
import Navegacion from '../components/Navegacion'



const MyRouter = () => {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path='/' element={ <Inicio />} /> 
        <Route path='nosotros' element={ <Nosotros />} /> 
        <Route path='productos' element={ <Productos />} /> 
        <Route path='contactos' element={ <Contactos />} /> 
        <Route path='/*' element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter
