import { useEffect, useState } from 'react';
import '../Formulario.css'


const datosEnvio = {

    nombre: '',
    apellido: '',
    email:'',
    telefono: '' ,
    mensaje:''
};

export const Formulario = () => {
    
    const [formState, setFormState] = useState(datosEnvio);
    
    const {nombre, apellido ,email ,telefono,mensaje} = formState;

    const [error, setError] = useState('');

    function onSubmit(e){

        e.preventDefault();

        if (Object.values(formState).some(valor => valor === '')) {
            
            setError('HAY UN INPUT VACIO Y SEXOOOOOOOOOOOOOOOOOOOOOOOO');
            
            setTimeout(() => {           

                setError('');

            },3000)

            return;
        }

        /* VALIDANDO CORREO ELECTRONICO */

        if (email){

            const validateEmail = (correo)=>{
                const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(correo);
            }

            if (!validateEmail(email)){
                
                setError('CORREO ELECTRONICO NO VALIDO');

                setTimeout(() => {           

                    setError('');
    
                },3000)

                return;
            }
        }

        /* VALIDANDO EL INPUT TELEFONO */
        if (!isNaN(parseInt(telefono)) && isFinite(telefono)){
            
           

        }else{
            setError('TELEFONO NO VALIDO');

            setTimeout(() => {           

                setError('');

            },3000)
            
            return;
        }

        alert('SEXOOOOOOOOOOO ENVIADO');

        setError('');

        /* RESETEA LOS INPUTS DEL FORMULARIO */
        setFormState(datosEnvio);

    }

   const onChangeInput = ({target}) =>{

        const {name,value} = target;

        console.log(name+ ' ' + value);
        console.log('*****************');

        setFormState({
            ...formState,
            [name] : value
        })

        



   }

   useEffect(()=>{

    // console.log('ACTIVANDO STATE!!!!!!!!!');

   },[])

   
   useEffect(()=>{

    // console.log('ACTIVANDO nombre!!!!!!!!!');

   },[nombre])

   useEffect(()=>{

    // console.log('ACTIVANDO apellido!!!!!!!!!');

   },[apellido])

   useEffect(()=>{

    // console.log('ACTIVANDO email!!!!!!!!!');

   },[email])

   useEffect(()=>{

    // console.log('ACTIVANDO telefono!!!!!!!!!');

   },[telefono])

   useEffect(()=>{

    // console.log('ACTIVANDO mensaje!!!!!!!!!');

   },[mensaje])

  return (

    <section>
        <div className="container">
            <div className="info">
                <div className="content">
                    <h2>Información de contacto</h2>
                    
                    <div className="info-text">
                            <div className="item">
                                <span className="fas fa-map-marker-alt"></span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque neque.</span>
                            </div>

                            <div className="item">
                                <span className="fas fa-envelope"></span>
                                <span>loremimpsum@gmail.com</span>
                            </div>

                            <div className="item">
                                <span className="fas fa-phone"></span>
                                <span>+00 123 456</span>
                            </div>
                    </div>
                </div>

                <div className="sociales">
                    <a href=""><span className="fab fa-facebook-f"></span></a>
                    <a href=""><span className="fab fa-twitter"></span></a>
                    <a href=""><span className="fab fa-instagram"></span></a>
                    <a href=""><span className="fab fa-youtube"></span></a>
                    <a href=""><span className="fab fa-google"></span></a>
                </div>
            </div>
                       
            <div className="form">
                {error && <div className='bg-red-500 text-white p-2 font-bold'> {error}  </div> }
                <h2>Comunicate con nosotros</h2>
                <form className="form-box" onSubmit={onSubmit}>
                    <div className="input-box w50">
                            <input type="text" onChange={onChangeInput} name='nombre' value={nombre}/>
                            <span>Nombre</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" onChange={onChangeInput} name='apellido' value={apellido}/>
                            <span>Apellido</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" onChange={onChangeInput} name='email' value={email}/>
                            <span>Email</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" onChange={onChangeInput} name='telefono' value={telefono}  />
                            <span>Telefono</span>
                    </div>

                    <div className="input-box w100">
                            <textarea value={mensaje} onChange={onChangeInput} name='mensaje'></textarea>
                            <span>Escribe tu mensaje...</span>
                    </div>

                    <div className="input-box w100 btn">
                            <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
