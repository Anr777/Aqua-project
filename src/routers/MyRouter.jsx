import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../pages'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <Inicio />} /> 
      <Route path='nosotros' element={ <Inicio />} /> 
      {/* <Route path='/*' element={ <Inicio /> } /> */}
    </Routes>
  )
}

export default MyRouter
