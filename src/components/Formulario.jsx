import React from 'react'
import '../Formulario.css'

export const Formulario = () => {
  return (

    <section>
        <div class="container">
            <div class="info">
                <div class="content">
                    <h2>Información de contacto</h2>
                    
                    <div class="info-text">
                            <div class="item">
                                <span class="fas fa-map-marker-alt"></span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque neque.</span>
                            </div>

                            <div class="item">
                                <span class="fas fa-envelope"></span>
                                <span>loremimpsum@gmail.com</span>
                            </div>

                            <div class="item">
                                <span class="fas fa-phone"></span>
                                <span>+00 123 456</span>
                            </div>
                    </div>
                </div>

                <div class="sociales">
                    <a href=""><span class="fab fa-facebook-f"></span></a>
                    <a href=""><span class="fab fa-twitter"></span></a>
                    <a href=""><span class="fab fa-instagram"></span></a>
                    <a href=""><span class="fab fa-youtube"></span></a>
                    <a href=""><span class="fab fa-google"></span></a>
                </div>
            </div>
                       
            <div class="form">
                <h2>Comunicate con nosotros</h2>

                <div class="form-box">
                    <div class="input-box w50">
                            <input type="text" required/>
                            <span>Nombre</span>
                    </div>

                    <div class="input-box w50">
                            <input type="text" required/>
                            <span>Apellido</span>
                    </div>

                    <div class="input-box w50">
                            <input type="text" required/>
                            <span>Email</span>
                    </div>

                    <div class="input-box w50">
                            <input type="text" required/>
                            <span>Telefono</span>
                    </div>

                    <div class="input-box w100">
                            <textarea required></textarea>
                            <span>Escribe tu mensaje...</span>
                    </div>

                    <div class="input-box w100 btn">
                            <input type="submit" value="Enviar"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}