import FormattedText from "./components/FormattedText";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <h1>Desafio 1</h1>
      <FormattedText text="Hello World" textColor="cyan" />
      <FormattedText text="Outro texto" textColor="#FFD700" />

      <hr />
      
      <h1>Desafio 2</h1>
      <Button label="Baixar CV" />
      <Button label="Ver Mais" />
    </>
  );
}

export default App;
