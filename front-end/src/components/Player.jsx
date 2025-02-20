import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Player = ({ duration, randonIdFromArtist, audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const timeFormatter = (currentTime) => {
    const minutes = Math.floor(currentTime / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(currentTime - minutes * 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const playOrPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
  };

  const timeInSeconds = (timeString) => {
    const timeStringSplited = timeString.split(":");

    return Number(timeStringSplited[0]) * 60 + Number(timeStringSplited[1]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(timeFormatter(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const durationInSeconds = timeInSeconds(duration);

  // useRef é outro tipo de hook do react
  // 
  const audioPlayer = useRef();
  const progressBar = useRef();

  const [currentTime, setCurrentTime] = useState(timeFormatter(0));

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randonIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playOrPause()}
        />
        <Link to={`/song/${randonIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <div>{currentTime}</div>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <div>{duration}</div>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
