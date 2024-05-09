import { Link } from 'react-router-dom'
import { Button } from './Button';

const Card = ({dato}) => {
  
  const {img,title,descripcion} = dato;

  return (
    <div className='Card '>
      <img src={img} alt="Imagen1" className='w-full flex-1 object-cover' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-black uppercase'> {title} </div>
        <p className='text-gray-700 text-base'>
            {descripcion}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <Link to={'/productos'}>
            <span className=''>
                <Button title='Ver Producto' color={'text-white'} clases={'font-semibold mr-2 hover:bg-blue-500 hover:text-white max-sm:w-full'} 
                  background={'bg-gray-400'}
                />
            </span>
        </Link>
      </div>
    </div>
  )
}

export default Card
