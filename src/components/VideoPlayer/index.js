import React, {useRef, useState} from 'react';

import './style.scss';

const VideoPlayer = ({src, type}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleToggle = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="player">
            <video
                ref={videoRef}
                className="player__video"
                loop
            >
                <source src={src} type={type} />
            </video>

            <div className="player__controls">
                <button
                    onClick={handleToggle}
                    className="player__button"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
