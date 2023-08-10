import Button from "./components/Button";
import { HiAnnotation } from "react-icons/hi";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import "./index.css";
import Accordion from "./components/Accordion";

import items from "./text_input";
function App(params) {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default App;
