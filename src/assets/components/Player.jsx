import React, { useRef, useState } from 'react';

export const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(1);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    return (
        <div className="rounded-5 container-fluid sticky-top bg-player d-flex align-items-center justify-content-center p-2 mb-1 mt-1">
            <h6 className="me-2 text-player-responsive text-white">En vivo</h6>
            <div className="player-wrapper d-flex align-items-center justify-content-center">
                <button id="playButton" className="play-pause-button" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                <div className="mx-4" id="volumeControl">
                    <input 
                        type="range" 
                        id="volume" 
                        name="volume" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
            </div>
            <audio ref={audioRef}>
                <source src="http://usa15.ciudaddigital.com.uy:8040/FederalFM" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    );
}
