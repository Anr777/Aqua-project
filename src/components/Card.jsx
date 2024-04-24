import { Link } from 'react-router-dom'

const Card = ({dato}) => {
  
  const {img,title,descripcion} = dato;

  return (
    <div className='Card'>
      <img src={img} alt="Imagen1" className='w-full flex-1 object-contain' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-black uppercase'> {title} </div>
        <p className='text-gray-700 text-base'>
            {descripcion}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <Link to={'/productos'}>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                Ver Producto
            </span>
        </Link>
      </div>
    </div>
  )
}

export default Card