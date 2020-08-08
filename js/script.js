//setting name on focus
const nameInputField = document.getElementById("name");
nameInputField.focus();
//get all children of the select so that i can lis
const seleted = document.querySelector("select");
//i have to grab the the design and color element
const designElement = document.getElementById("design"); //design
const colorElement = document.getElementById("color"); //colour

//get the input field to hide first
const otherInputTextField = document.getElementById("other-title");
otherInputTextField.style.display = "none";
//Get the whole activity box;
const activities = document.querySelectorAll('input[type="checkbox"]');
const cost = document.querySelectorAll("input[data-cost");
let sum = 0;
for (let i = 0; i < cost.length; i++) {
  var num = parseInt(cost[i].getAttribute("data-cost"));
  if (num === 100) {
    //console.log(num);
    sum += num;
  } else {
    console.log("no, might be 200: " + cost[i].getAttribute("data-cost"));
  }
}
console.log(sum);
//console.log(cost);

/***
 * Create a div.
 * append the dic to the checkbox area
 * and display a message with the total sum of purchase
 * 
 *
 * now on click you wanna get the data-cost and pass it as an int
 * */
const getActivities = document.querySelector(".activities");
const checkboxDiv = document.createElement("div");
checkboxDiv.className = "showtotal hide_total";
//checkboxDiv.innerHTML = `Total: $ `;
//getActivities.appendChild(checkboxDiv);

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

//get the please select Theme and add an EventListener
designElement.addEventListener("change", (e) => {
  const target = e.target.value;
  const selectall = document.querySelector("#color");

  if (target === "js puns") {
    for (let i = 0; i < selectall.length; i++) {
      selectall[i].hidden = false;
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
console.log("this still works");

/**
 * Now this is where things get interesting
 * i've got to get the data-cost of the the selected
 * checkbox and some how store and calculate the total dynamically.
 *
 ***/
//adding an eventListeners to the checkbox
//let costArray = [];
let anotherSum = 0;
for (let i = 0; i < activities.length; i++) {
  activities[i].addEventListener("change", (e) => {
    var target = e.target;
    var attr = target.getAttribute('data-cost');
    /**
     * There is a problem to solve
     * everytime a checked gets a chnage the result is added into the array regardless 
     * wether or not the checkbox character is already in the array
     * i dont like things added twice even when its being unchecked
     * 
     * check if the items is already in the list 
     * and make sure it can't be added twice
     * - if it's just being unchecked looked for the element in the list and subtracting it from the total
     * - if not add
     * */
    if (activities[i].checked) {
        //costArray.push(parseInt(attr));
      anotherSum += parseInt(attr);
      checkboxDiv.innerHTML = `Total: $${anotherSum}`;
      getActivities.appendChild(checkboxDiv);
      //console.log(anotherSum);
    }else if(activities[i].checked === false){
      //console.log("hey ");
      //console.log(costArray);
      anotherSum -= parseInt(attr);
      console.log(anotherSum);
      checkboxDiv.innerHTML = `Total: $${anotherSum}`;
      getActivities.appendChild(checkboxDiv);
      
    }
    


    //console.log(attr);
    //console.log(target);
    //costArray.push(parseInt(attr));
    //anotherSum += attr;
    //console.log(anotherSum);
    //console.log(costArray);
    
    const selected = activities[i]; //get the activity selected and store it in selected
    const dayTime = selected.getAttribute("data-day-and-time"); //getting data for data-time
    const isChecked = selected.checked === true;
    //console.log(activities[i]);

    //use selected to check for correctness
    for (let j = 0; j < activities.length; j++) {
      const dayTimeForJ = activities[j].getAttribute("data-day-and-time");

      if (isChecked) {
        //use selected and checked through the checkbox list
        if (dayTime === dayTimeForJ && selected.name !== activities[j].name) {
          activities[j].disabled = true; //disable the next one with the same atrtribute
        }
      } else {
        if (dayTime === dayTimeForJ && selected.name !== activities[j].name) {
          activities[j].disabled = false; // enable it again after disable the selected
        }
      }
    }
  });
}
