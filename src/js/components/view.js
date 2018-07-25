import { h } from "hyperapp";

import Answer from "./answer";

const View = (state, actions) => (
    <div>
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
);

export default View;
