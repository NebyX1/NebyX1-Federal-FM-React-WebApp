import React, { useEffect } from 'react';

export const Feeds = () => {

    useEffect(() => {
        // Cargar el SDK de Facebook de manera asincrónica
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    return (
        <div>
            <div className="mt-5 mb-2 text-white heading-size d-flex flex-column justify-content-center align-items-center">
                <h4 className="headings-font">Escuchá nuestros últimos podcasts:</h4>
            </div>
            <div className="container mb-5 d-flex flex-column justify-content-center align-items-center" style={{ height: '200px', maxWidth: '50vh' }}>
                <iframe
                    width="80%"
                    height="200px"
                    scrolling="no"
                    frameBorder="no"
                    // allow="false"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1523818066&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    title="SoundCloud Player"
                ></iframe>
            </div>

            <div className="mb-2 text-white heading-size d-flex flex-column justify-content-center align-items-center">
                <h4 className="headings-font">Mirá nuestras últimas entrevistas en vídeo:</h4>
            </div>
            <div className="container mb-5 d-flex flex-column justify-content-center align-items-center" style={{ height: '260px', maxWidth: '50vh' }}>
                <iframe
                    width="400px"
                    height="260px"
                    src="https://www.youtube.com/embed/BaOEIo59YFg"
                    title="YouTube video player"
                    frameBorder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="mb-2 text-white heading-size d-flex flex-column justify-content-center align-items-center">
                <h4 className="headings-font">Enterate de las últimas noticias:</h4>
            </div>
            <div className="container mb-5 d-flex flex-column justify-content-center align-items-center" style={{ height: '500px', maxWidth: '50vh' }}>
                <div id="fb-root"></div>
                <div
                    style={{ minWidth: '320px' }}
                    className="fb-page"
                    data-href="https://www.facebook.com/BBCnewsMundo"
                    data-tabs="timeline"
                    data-width=""
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                >
                    <blockquote cite="https://www.facebook.com/BBCnewsMundo" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/BBCnewsMundo">BBC News Mundo</a>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
