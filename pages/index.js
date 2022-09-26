import Head from 'next/head'
import Image from 'next/image'
import  styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';


export default function Home() {

  const [showVideo,setShowVideo] = useState(true)

  const [video,setVideo] = useState(null)
  const [video2,setVideo2] = useState(null)

  const myCallback = () => {
    setShowVideo(false)
  };

  
  useEffect(()=>{
    setVideo(
      <video className={styles.videoIntroOverlay} preload="auto" autoPlay={true} onEnded={() => myCallback()}>
        <source src="./video2.webm" type="video/webm"/>
        Your browser does not support the video tag.
      </video>
    )
    setVideo2(
      <video className={styles.videoIntro} preload="auto" autoPlay={true}>
        <source src="./video4.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    )

  },[])
  
  return (
    <>
      {showVideo &&
      <div className={styles.videoContainer}>
        {video2}
      </div>
      }
      {!showVideo &&
        <div className={styles.backContainer}>
        </div>
      }
      <div className={styles.videoContainer} style={{zIndex: 9}}>
          {video}        
      </div>
      <div className={styles.container}>
        
      </div>
    </>
  )
}
