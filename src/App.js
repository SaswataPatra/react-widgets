import Button from "./components/Button";
import { HiAnnotation } from "react-icons/hi";
import "./index.css";
function App(params) {
  return (
    <div>
      <div>
        <Button primary rounded outline className="ml-5">
          <HiAnnotation></HiAnnotation>Click me !
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <HiAnnotation></HiAnnotation>
          save me !
        </Button>
      </div>
      <div>
        <Button success outline>
          <HiAnnotation></HiAnnotation>
          success
        </Button>
      </div>
      <div>
        <Button warning>
          <HiAnnotation></HiAnnotation> download
        </Button>
      </div>
      <div>
        <Button danger>
          {" "}
          <HiAnnotation></HiAnnotation>danger !
        </Button>
      </div>
    </div>
  );
}

export default App;
