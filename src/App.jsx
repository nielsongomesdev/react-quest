import StyledText from "./components/StyledText";
import AlertButton from "./components/AlertButton";
import "./App.css";

function App() {
  return (
    <>
      <h1>Desafio 1</h1>
      <StyledText text="Hello World" textColor="cyan" />
      <StyledText text="Outro texto" textColor="#FFD700" />

      <hr />

      <h1>Desafio 2</h1>
      <AlertButton label="Baixar CV" />
      <AlertButton label="Ver Mais" />
    </>
  );
}

export default App;
