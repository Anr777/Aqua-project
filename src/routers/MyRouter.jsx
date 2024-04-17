import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio, Nosotros } from '../pages'

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio />} /> 
        <Route path='nosotros' element={ <Nosotros />} /> 
        {/* <Route path='/*' element={ <Inicio /> } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter
