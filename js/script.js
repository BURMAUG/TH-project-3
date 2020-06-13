//setting name on focus
const nameInputField = document.getElementById('name');
nameInputField.focus();

//get all children of the select so that i can lis
const seleted = document.querySelector('select');
console.log(seleted);

//get the input field to hide first
const otherInputTextField = document.getElementById('other-title');
otherInputTextField.style.display = 'none';
//
seleted.addEventListener('change', (e) => {
    // console.log(e.target.value);
    const selecter = e.target.value;
    if(selecter === 'other'){
        otherInputTextField.style.display = 'block';
    }else{
        otherInputTextField.style.display = 'none';
    }
})

