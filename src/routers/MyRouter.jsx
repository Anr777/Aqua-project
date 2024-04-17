import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contactos, Inicio, Nosotros, Productos } from '../pages'

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio />} /> 
        <Route path='nosotros' element={ <Nosotros />} /> 
        <Route path='productos' element={ <Productos />} /> 
        <Route path='contactos' element={ <Contactos />} /> 
        <Route path='/*' element={ <Inicio /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter
