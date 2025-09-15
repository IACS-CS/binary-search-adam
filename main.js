import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Which Spongebob Character Are You?");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let gender = await ti.prompt("Are you a boy or girl?");
if (gender === "boy") {
  let isDriver = await ti.prompt("Do you have a driver's license?") 
if ("no" == isDriver) {
} let isMoney = await ti.output("Do you think that money buys happiness?") 
{

}


  

 
  let isRelaxing = await ti.prompt("Do you value relaxing more than working?")
}


