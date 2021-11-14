import logo from "./logo.svg";
import "./App.css";
import "./styles.css"
import cleanreactimage from "./srcc.jpg";

function App() {
  return (
    <div className="App">
      <div className="chivo">
        <h1 className="title">KHAL DIEKO</h1>
        {"\n"}
        <img src={cleanreactimage} alt="cleanreactimage" />

        {"\n"}
        <img src="\public.jpg" alt="myimage" />
        {"\n"}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0XbO9C3-vqM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
