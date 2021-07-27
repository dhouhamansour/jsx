import './styles.css';
import bird from "./bird.jpg"

function App() {
  return (
    <div className="App">
      <header className="appHeader">
      <div style={{border:'solid 1 black',maxWidth:'100vw'}}>
      <h1 className="title red">Dhouha mansour</h1>
    <br/>
    <img src={bird} alt='bird' width="500" height="400"/>
    {/* <br/> */}
    <img src={"./dog.jpg"} alt="dog" width="500" height="400" />
    </div>
    <vidéo width="320" height="240" contrôles>
    <source src="maVidéo.mp4" type="video/mp4" />
    </vidéo>
    </header>
    </div>
  );
}

export default App;
