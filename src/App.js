import "./App.css";
import Counter from "./components/Counter/Couter";
import Feedback from "./components/Feedback/Feedback";
import { LoginForm } from "./components/LoginForm";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <LoginForm />
      <Feedback />
    </>
  );
}

export default App;
