import '../Formulario.css'

export const Formulario = () => {
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
                <h2>Comunicate con nosotros</h2>

                <div className="form-box">
                    <div className="input-box w50">
                            <input type="text" required/>
                            <span>Nombre</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" required/>
                            <span>Apellido</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" required/>
                            <span>Email</span>
                    </div>

                    <div className="input-box w50">
                            <input type="text" required/>
                            <span>Telefono</span>
                    </div>

                    <div className="input-box w100">
                            <textarea required></textarea>
                            <span>Escribe tu mensaje...</span>
                    </div>

                    <div className="input-box w100 btn">
                            <input type="submit" value="Enviar"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
