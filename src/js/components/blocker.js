import { h } from "hyperapp";

import "../../css/components/blocker.scss";
import "../../css/animations/flash.scss";

const Blocker = ({ show }) => (
    <div className={show ? "blocker flash" : "hidden"} />
);

export default Blocker;
