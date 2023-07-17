// fetch elements

let inputKey = document.getElementById("input-key");

let theResult = document.querySelector(".result span");

let buttons = document.querySelectorAll(".buttons span");

let inputValue = inputKey.value;

  
  

buttons.forEach((e)=> {

e.addEventListener("click",(e)=> {

if(e.target.className === "Add-Items") {

addItem();

} else if (e.target.className === "Delete-Items") {

deleteItem();

} else if (e.target.className === "Check-Items") {

checkItem();

} else if (e.target.className === "Show-Items") {

showItem();

}

} );

});

  
  

let errorMassage = () => {

theResult.innerHTML = `Please Enter Value In The Box`;

}

  

let addItem = ()=> {

if (inputKey.value === "" ) {

errorMassage();

} else if (inputKey.value !== "" && !localStorage.getItem(inputKey.value) ) {

localStorage.setItem(inputKey.value,"Testing");

theResult.innerHTML = `The Item <span> ${inputKey.value} </span> Add Successfully`

inputKey.value = "";

} else if (localStorage.getItem(inputKey.value)) {

theResult.innerHTML = `The Item <span> ${inputKey.value} </span> Already In Local Storage`;

}

}

  
  
  

let deleteItem = () => {

if (inputKey.value === "") {

theResult.innerHTML = `Please Enter Value To Delete`;

} else if (inputKey.value !== "") {

if (!localStorage.getItem(inputKey.value)) {

theResult.innerHTML = `There Is No Item Of <span> ${inputKey.value }</span> In Local Storage Founded`

} else if (localStorage.getItem(inputKey.value)) {

localStorage.removeItem(inputKey.value);

theResult.innerHTML = `The Item Of <span> ${inputKey.value }</span> In Local Storage Deleted`;

inputKey.value = "";

}

}

inputKey.focus();

}

  

let checkItem = () => {

if (inputKey.value === "") {

theResult.innerHTML = `Please Enter Value To Check`;

} else if (inputKey.value !== "") {

if (!localStorage.getItem(inputKey.value)) {

theResult.innerHTML = `There Is No Item Of <span> ${inputKey.value }</span> In Local Storage Founded`

} else if (localStorage.getItem(inputKey.value)) {

theResult.innerHTML = `The Item Of <span> ${inputKey.value }</span> In Local Storage`;

inputKey.value = "";

}

}

}

  

let showItem = () => {

if (localStorage.length) {

theResult.innerHTML = "";

for(let [key, value] of Object.entries(localStorage)) {

theResult.innerHTML += `<span>${key}</span>`

document.querySelectorAll(".result > span span").forEach((e)=>{

e.classList.add("shwn");

})

}

} else if (!localStorage.length) {

theResult.innerHTML = `There Is No Data In Local Storage`

}

};