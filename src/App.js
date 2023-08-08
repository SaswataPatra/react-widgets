import Button from "./components/Button";
import "./index.css";
function App(params) {
  return (
    <div>
      <div>
        <Button primary> Click me !</Button>
      </div>
      <div>
        <Button secondary> save me !</Button>
      </div>
      <div>
        <Button success> success</Button>
      </div>
      <div>
        <Button warning> download</Button>
      </div>
      <div>
        <Button danger> danger !</Button>
      </div>
    </div>
  );
}

export default App;
