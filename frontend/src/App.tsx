import RootRouter from "./routes";
import Header from "./compositions/Header";
import Container from "./layout/Container";
import "./styles.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-12">
          <Container>
            <RootRouter />
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
