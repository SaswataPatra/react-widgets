import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import Button from "./Button";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const content = isExpanded && <div>{item.context}</div>;
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            setExpandedIndex(index);
          }}
        >
          {item.label}
        </div>
        <div>{content}</div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;

//<div onClick={()=>{setExpandedIndex(index)}}>{item.label}</div>
