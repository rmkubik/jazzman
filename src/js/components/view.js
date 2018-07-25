import { h } from "hyperapp";

import Answer from "./answer";

const View = (state, actions) => (
    <div>
        {state.answers.map(({ solution }) => <Answer solution={solution} />)}
    </div>
);

export default View;
