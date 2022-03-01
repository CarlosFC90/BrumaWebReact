// Images
import FrontAlbum from "./images/brumafront.png";
import BackAlbum from "./images/brumaback.png";
import Logo from "./images/logosinfondo.png";
import WeAre from './images/WeAre.JPG';

// Video
import VideoBack from './videos/videoBack.mp4';

// CSS
import Styles from './App.module.css';

function App() {

  const config = {
    title: "YouTube video player",
    frameBorder: "0",
    srcA: "https://www.youtube.com/embed/l4eMTBL57do",
    srcLP: "https://www.youtube.com/embed/FJDlsZ71LCE",
    srcZ: "https://www.youtube.com/embed/adXJ9iEklrM",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  }

  return (
    <section className={Styles.GeneralContainer}>
      <video src={VideoBack} autoPlay loop muted className={Styles.VideoBack}/>
      <section className={Styles.BannerSection}>
        <img src={Logo} alt="Logo"/>
      </section>
      <main className={Styles.VideoSectionContainer}>
        <h1>EP Bruma- Volumen 1</h1>
        <div className={Styles.BrumaAlbum}>
          <img src={FrontAlbum} alt="Front"/>
          <img src={BackAlbum} alt="Back"/>
        </div>
        <div className={Styles.VideoSection}>
          <div className={Styles.Video}>
            <h2>Tema 1 - Alzamontañas</h2>
            <iframe 
              className={Styles.VideoIframe}
              src={config.srcA}
              title={config.title}
              frameBorder={config.frameBorder} 
              allow={config.allow} 
              allowFullScreen
            />
          </div>
          <div className={Styles.Video}>
            <h2>Tema 2 - Los Profundos</h2>
            <iframe 
              className={Styles.VideoIframe} 
              src= {config.srcLP}
              title={config.title} 
              frameBorder={config.frameBorder} 
              allow={config.allow} 
              allowFullScreen
            />
          </div>
          <div className={Styles.Video}>
            <h2>Tema 3 - Zozobra</h2>
            <iframe 
              className={Styles.VideoIframe}
              src= {config.srcZ}
              title={config.title} 
              frameBorder={config.frameBorder} 
              allow={config.allow} 
              allowFullScreen
            />
          </div>
        </div>
        <div className={Styles.WeAre}>
          <h2>Somos Bruma...</h2>
          <img src={WeAre} alt="weAre"/>
        </div>
      </main>
    </section>
  );
}

export default App;
