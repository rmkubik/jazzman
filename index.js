import { h, app } from "hyperapp";

import "./src/css/main.scss";

import view from "./src/js/components/view";
import state from "./src/js/state/state";
import actions from "./src/js/actions/actions";

const main = app(state, actions, view, document.body);
