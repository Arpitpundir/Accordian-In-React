import { useState } from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
function SingleQuestion({title, info}){
  const [isExpanded, setIsExpanded] = useState(false);
  const toogleExpandState = () => {
    const newExpandState = !isExpanded;
    setIsExpanded(newExpandState);
  }

  return (
    <div className="question">
      <article>
        <header><h5>{title}</h5>
        <button className="question-btn" onClick = {toogleExpandState}>{isExpanded? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        </header>
        {isExpanded && <p>{info}</p>}
      </article>
    </div>
  )
};

export default SingleQuestion;