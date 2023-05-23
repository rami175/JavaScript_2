import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./component/Greet";
import { Welcome, Welcome2 } from "./component/welcome";
import Hello from "./component/hello";
import Message from "./component/Message";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Rami" nickname="Ram">
        <button>Visit Website </button>
        <p>Hello world, this is my paragraph</p>
      </Greet>
      <Greet2 name="Timothy" nickname="Tim" />
      <Greet3 name="Lilian" nickname="Lili" />
      <Welcome name="Rami" nickname="Ram" />
      <Welcome2 name="Timothy" nickname="Tim" />
      <Hello /> */}
      <Message />
    </div>
  );
}

export default App;
