import { h } from "hyperapp";

import Answer from "./answer";
import Blocker from "./blocker";

import "../../css/animations/shake.scss";

function areAllQestionsSolved(state) {
    return state.answers.every(answer => answer.solved === true);
}

const View = (state, actions) => (
    <div>
        <Blocker show={areAllQestionsSolved(state)} />
        <div className={areAllQestionsSolved(state) ? "shake" : ""}>
            {state.answers.map(({ solution }, index) => (
                <Answer
                    value={state.answers[index].value}
                    updateInputValue={({ target: { value } }) => {
                        actions.updateInputValue({ index, value });
                    }}
                    validateAnswer={() => actions.validateAnswer(index)}
                    solved={state.answers[index].solved}
                />
            ))}
        </div>
    </div>
);

export default View;
