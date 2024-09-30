import * as React from "react";
import * as ReactDOM from "@hot-loader/react-dom";
import {App} from "../App"

window.addEventListener("load", () => {
  ReactDOM.hydrate(<App />, document.getElementById("react_root"))
})
