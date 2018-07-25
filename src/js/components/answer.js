import { h } from "hyperapp";

import "../../css/components/answer.scss";

const Answer = ({ value, updateInputValue, validateAnswer, solved }) => (
    <div className={solved ? "solved" : ""}>
        <input type="text" value={value} onchange={updateInputValue} />
        <button onclick={validateAnswer}>Submit</button>
    </div>
);

export default Answer;
