import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Which Spongebob Character Are You?");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let gender = await ti.prompt("Are you a boy or girl?");
let isDriver
let exercise
let isMoney
if (gender === "boy") {
  isDriver = await ti.prompt("Do you have a driver's license?") 
} else {
  isRelaxing = await ti.prompt("Do you value relaxing more than working?")
}
// If the person is a boy, we ask if they have a driver's license
// If the person is a girl, we ask if they value relaxing more than working
if (isDriver === "no") {
  money = await ti.prompt("Do you think that money buys happiness?") 
} 
if (isDriver === "yes") {
  exercise = await ti.prompt("Do you love exercising?")
}
// If the person says no to having a drivers license, they get asked if money buys happiness
// If the person says yes to having a drivers license, they get asked if they love exercising















