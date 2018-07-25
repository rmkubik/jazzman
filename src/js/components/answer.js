import { h } from "hyperapp";

const Answer = ({ value, updateInputValue, validateAnswer }) => (
    <div>
        <input type="text" value={value} onchange={updateInputValue} />
        <button onclick={validateAnswer}>Submit</button>
    </div>
);

export default Answer;
