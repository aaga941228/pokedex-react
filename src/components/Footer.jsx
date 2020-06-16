import React from "react";

const Footer = () => (
    <footer className="container">
        <div className="social">
            <div className="container-icon">
                <a
                    href="https://www.linkedin.com/in/alan-de-jesus-ayala-galvan-649440194/"
                    target="_blank"
                    className="linkedin"
                ><i className="fab fa-linkedin"></i
                ></a>
            </div>
            <div className="container-icon">
                <a href="https://github.com/aaga941228" target="_blank" className="github"
                ><i className="fab fa-github"></i
                ></a>
            </div>
        </div>
        <div className="created-by">
            <p>
                Alan Ayala
                <a href="https://alanayala.herokuapp.com/" target="_blank">visita mi pagina web</a>
            </p>
        </div>
    </footer>
)

export default Footer;