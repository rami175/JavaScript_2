import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./component/Greet";
import { Welcome, Welcome2 } from "./component/welcome";
import Hello from "./component/hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/functionClick";
import ClassClick from "./component/classClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/parent";
import NameList from "./component/namelist";
import PersonList from "./component/personList";
import FragmentDemo from "./component/FragmentDemo";

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
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <NameList />
      <PersonList /> */}
      <FragmentDemo />
    </div>
  );
}

export default App;
