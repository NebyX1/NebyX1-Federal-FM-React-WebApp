import React from 'react';
import styles from "../../../styles/youtubeframe.module.css";

const YoutubeFeed = () => {
  return (
    <div className={styles.youtubeContainer}>
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=UUi-OugwGvJhHThtqzcyHkew"
        className={styles.youtubeFrame}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Feed"
      ></iframe>
    </div>
  );
};

export default YoutubeFeed;
