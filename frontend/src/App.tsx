import RootRouter from "./routes";
import Container from "./layout/Container";
import "./styles.css";

function App() {
  return (
    <>
      <Container>
        <RootRouter />
      </Container>
    </>
  );
}

export default App;
