import React from "react";
import { render } from "@wordpress/element";
import Editor from "./wordpress/editor";
import "./wordpress/style.scss";

const rootElement = document.getElementById("root");
render(<Editor />, rootElement);
