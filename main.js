import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Which Spongebob Character Are You?");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
let gender = await ti.prompt("Are you a boy or a girl?");
let isDriver
let exercise
let isMoney
let isRelaxing
let cooking
let smart
// All of the code in this side are if the person answers they are a boy
if (gender === "boy") {
  isDriver = await ti.prompt("Do you have a driver's license?") 
} else {
  isRelaxing = await ti.prompt("Do you value relaxing more than working?")
}
// If the person is a boy, we ask if they have a driver's license
// If the person is a girl, we ask if they value relaxing more than working
if (isDriver === "no") {
  isMoney = await ti.prompt("Do you think that money buys happiness?") 
} else if (isDriver === "yes") {
  exercise = await ti.prompt("Do you love exercising?")
}
// If the person says no to having a drivers license, they get asked if money buys happiness
// If the person says yes to having a drivers license, they get asked if they love exercising
if (exercise === "no") { 
  ti.showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Squidward_Tentacles.svg/165px-Squidward_Tentacles.svg.png")
  ti.output("Congratulations, you are Squidward!")
} else if (exercise === "yes") {
  ti.showImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1irWxmlPg6fQbncxh0V3wyTSf1qnJNUm2lLHz47DsMv4xu6tkWJPqIk6rGg&s")
  ti.output("Congratulations, you are Larry The Lobster!")
}
// If the person says yes to if they love exercising they will be told they are Larry The Lobster
// The following code below is about if the person likes money
if (isMoney === "yes") {
  ti.showImage("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_taIyVUbAyo9qqw24qPF92McMpm_EH97TT2w0OyOd1oqt1hTIqkwfeuheL5UANYFqiu4wbJaLPIMJhgBDNCSOQ0XeffPo-98DjfKOkM5GCw")
  ti.output("Congratulations, you are Plankton!")
} else if (isMoney === "no") {
  ti.showImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRPvTmlcGwM7NL4HwWG88MJdatDChBztd0tCMxQxvbwSVraluk6Mwc7A&s")
  ti.output("Congratulations, you are Spongebob Squarepants!")
}
// The following lines of code below is if the person answered girl as their gender.
if (isRelaxing === "yes") {
  smart = await ti.prompt("Would you consider yourself smart and creative?")
} else if (isRelaxing === "no") {
  cooking = await ti.prompt("Do you like cooking/baking?")
}
if (smart === "yes") {
  ti.showImage("https://static.wikia.nocookie.net/spongebob/images/8/84/Sandy_stock_art.png/revision/latest?cb=20200407131514")
  ti.output("Congratulations, you are Sandy Cheeks!")
} else if (smart === "no") {
  ti.showImage("https://vignette.wikia.nocookie.net/spongebob/images/c/c6/Pearl_Krab_Nickelodeon_1.png/revision/latest?cb=20180929234620")
  ti.output("Congratulations, you are Pearl Krabs!")
}
if (cooking === "yes") {
  ti.showImage("https://th.bing.com/th/id/OIP.QmLBF6Milt_suKCoVEsOvAHaHa?w=310&h=198&c=7&rs=1&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=23.1")
  ti.output("Congratulations, you are Grandma Squarepants!")
} else if (cooking === "no") {
  ti.showImage("https://th.bing.com/th/id/OIP.QjCp-LLVs0sekezxq3gn8gHaHa?w=108&h=108&c=1&bgcl=2666d4&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3")
  ti.output("Congratulations, you are Mr. Krabs!")
}













