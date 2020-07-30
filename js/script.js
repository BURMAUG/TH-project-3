//setting name on focus
const nameInputField = document.getElementById("name");
nameInputField.focus();
//get all children of the select so that i can lis
const seleted = document.querySelector("select");
//console.log(seleted);
//i have to grab the the design and color element
const designElement = document.getElementById("design"); //design
//console.log(designElement.value);
const colorElement = document.getElementById("color"); //colour
//console.log(colorElement);

//get the input field to hide first
const otherInputTextField = document.getElementById("other-title");
otherInputTextField.style.display = "none";
//hiding the other textfield based on
const activities = document.querySelectorAll('input[type="checkbox"]');
console.log(activities);
//Get the whole activity box;

//whether or not 'other' was clicked
seleted.addEventListener("change", (e) => {
  // console.log(e.target.value);
  const selecter = e.target.value;
  if (selecter === "other") {
    otherInputTextField.style.display = "block";
  } else {
    otherInputTextField.style.display = "none";
  }
});

//i think i shold make another select option for colorElement
const before = document.createElement("option");
before.innerHTML = "Please select A T-shirt theme";
before.value = "Tshirt theme";
colorElement.appendChild(before);

//get the option with Tshirt theme
var hideSelect = document.querySelector('option[value = "Tshirt theme"]');
hideSelect.hidden = true;
//console.log(hideSelect);
//default
if (designElement.value === "Select Theme") {
  colorElement.value = before.value; //Please select a t-shirt theme
}

//get the please select at Theme
designElement.addEventListener("change", (e) => {
  const target = e.target.value;
  console.log(target);
  const selectall = document.querySelector("#color");
  if (target === "js puns") {
    for (let i = 0; i < selectall.length; i++) {
      selectall[i].hidden = false;
      //console.log(selectall[i].value);
      if (
        selectall[i].value === "cornflowerblue" ||
        selectall[i].value === "darkslategrey" ||
        selectall[i].value === "gold"
      ) {
        selectall[i].className = "match";
      } else {
        selectall[i].hidden = true;
      }
    }
  } else {
    for (let i = 0; i < selectall.length; i++) {
      //console.log(selectall[i].value);
      selectall[i].hidden = false; //make all of them visible for the moment
      //this if statement check for some possiblities and displays a desired result
      if (
        selectall[i].value === "tomato" ||
        selectall[i].value === "steelblue" ||
        selectall[i].value === "dimgrey"
      ) {
        selectall[i].className = "match"; //give a classname of match
      } else {
        selectall[i].hidden = true; //hide thoses items are are't matches
      }
    }
  }
});

//adding the eventListeners to the checkbox
for (let i = 0; i < activities.length; i++) {
  activities[i].addEventListener("change", (e) => {
    const target = e.target;
    const selected = activities[i];
    //console.log(selected.name);
    for (let j = 0; j < activities.length; j++) {
      if (selected.checked === true) {
        console.log("true");
        if (
          selected.getAttribute("data-day-and-time") ===
            activities[j].getAttribute("data-day-and-time") &&
          selected.name !== activities[j].name
        ) {
          activities[j].disabled = true;
        }
      } else {
        activities[j].disabled = false;
      }
    }
  });
}
