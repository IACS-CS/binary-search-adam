import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Which Spongebob Character Are You?");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let money = await ti.prompt("Do you believe that money buys happiness?")


