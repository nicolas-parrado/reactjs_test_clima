import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright light-blue darken-2">
                <div className="container">
                    <div className="row grey-text text-lighten-5">
                        Uso de API{" "}
                        <a
                            className="white-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.openweathermap.org"
                        >
                            OpenWeatherMap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
