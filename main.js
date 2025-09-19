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

// All of the code in this side are if the person answers they are a boy
if (gender.toLowerCase().trim() === "boy") {
  isDriver = await ti.prompt("Do you have a driver's license?") 
} else {
  isRelaxing = await ti.prompt("Do you value relaxing more than working?")
}
// If the person is a boy, we ask if they have a driver's license
// If the person is a girl, we ask if they value relaxing more than working
if (isDriver.toLowerCase().trim() === "no") {
  isMoney = await ti.prompt("Do you think that money buys happiness?") 
} 
if (isDriver.toLowerCase().trim() === "yes") {
  exercise = await ti.prompt("Do you love exercising?")
}
// If the person says no to having a drivers license, they get asked if money buys happiness
// If the person says yes to having a drivers license, they get asked if they love exercising
if (exercise.toLowerCase().trim() === "no") { 
  ti.showImage("https://upload.wikimedia.org/wikipedia/commons/c/ce/Mr_Krabs_character.png")
  ti.output("Congratulations, you are Mr. Krabs!")
};
// If the person says no to if they love exercising they will be told they are Mr. Krabs
if (exercise.toLowerCase().trim() === "yes") {
  ti.showImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1irWxmlPg6fQbncxh0V3wyTSf1qnJNUm2lLHz47DsMv4xu6tkWJPqIk6rGg&s")
  ti.output("Congratulations, you are Larry The Lobster!")
}
// If the person says yes to if they love exercising they will be told they are Larry The Lobster
// The following code below is about if the person likes money
let isMoney
if (isMoney.toLowerCase().trim() === "yes") {
  ti.showImage("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_taIyVUbAyo9qqw24qPF92McMpm_EH97TT2w0OyOd1oqt1hTIqkwfeuheL5UANYFqiu4wbJaLPIMJhgBDNCSOQ0XeffPo-98DjfKOkM5GCw")
  ti.output("Congratulations, you are Plankton")
}
if (isMoney.toLowerCase().trim() === "no") {
  ti.showImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRPvTmlcGwM7NL4HwWG88MJdatDChBztd0tCMxQxvbwSVraluk6Mwc7A&s")
  ti.output("Congratulations, you are Spongebob Squarepants")
}















