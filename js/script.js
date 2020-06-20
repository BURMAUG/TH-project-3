//setting name on focus
const nameInputField = document.getElementById('name');
nameInputField.focus();

//get all children of the select so that i can lis
const seleted = document.querySelector('select');
//console.log(seleted);

//get the input field to hide first
const otherInputTextField = document.getElementById('other-title');
otherInputTextField.style.display = 'none';
//hiding the other textfield based on
//whether or not 'other' was clicked
seleted.addEventListener('change', (e) => {
    // console.log(e.target.value);
    const selecter = e.target.value;
    if(selecter === 'other'){
        otherInputTextField.style.display = 'block';
    }else{
        otherInputTextField.style.display = 'none';
    }
});

//i have to grab the the design and color element
const designElement = document.getElementById('design');//design
//console.log(designElement.value);

const colorElement = document.getElementById('color');//colour
//console.log(colorElement);

//i think i shold make another select option for colorElement
const before = document.createElement('option');
before.innerHTML = 'Please select A T-shirt theme';
before.value = "Tshirt theme";
colorElement.appendChild(before);


var hideSelect = document.querySelector('option[value = "Tshirt theme"]');
hideSelect.hidden = true;
console.log(hideSelect);
//default
if(designElement.value === 'Select Theme'){
  colorElement.value = before.value;//Please select a t-shirt theme
};

//get the please select a t Theme



















//array for matching
//let matching = [];























//the addEventListener for design
// designElement.addEventListener('change', (e) => {
//   let changedDesign = e.target.value;
//   console.log(changedDesign);
//
//   const colorElement2 = document.getElementById('color').children;
//   console.log(colorElement2);
//   if (changedDesign === 'js puns'){
//     //console.log('hey')
//     for (let i = 0; i<colorElement2.length; i++){
//       //console.log(colorElement2[i].textContent);
//       colorElement2[i].className = '';
//       if (colorElement2[i].textContent === 'Cornflower Blue (JS Puns shirt only)' ||
//           colorElement2[i].textContent === 'Dark Slate Grey (JS Puns shirt only)' ||
//           colorElement2[i].textContent === 'Gold (JS Puns shirt only)'){
//         colorElement2[i].className = 'match';
//
//         //console.log('its a match');
//         //matching.push(colorElement2[i]);
//         //matching[i].style.display = 'block';
//        }else{
//         console.log('fuck off');
//       }
//     }
//     console.log(matching);
//   }
//
// });
