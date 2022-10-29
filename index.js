localStorage.clear();

filldata();
function selectValue() {
  let selectedValue = document.querySelector("select").value;
  return selectedValue;
}
// let se=document.querySelector("select");
let na = document.querySelector(".name");
let da = document.querySelector(".date");
let am = document.querySelector(".amount");

const button = document.querySelector("button");


let arr = [];

button.addEventListener("click", (e) => {
  let type = selectValue();
  let name = na.value;
  let date = da.value;
  let amount = am.value;
  validate(type, name, date, amount);
});

function validate(type, name, date, amount) {
  if (type == "choose") {
    alert("please choose the expense type");
  } else if (name == "") {
    alert("name cannot be empty");
  } else if (name.length < 3) {
    alert("name should be greater than 3 character");
  } else if (date == "") {
    alert("provide the complete date");
  } else if (amount == "") {
    alert("amount cannot be empty");
  } else if (Number(amount) < 0) {
    alert("amount cannot be negative");
  } else if (Number(amount) == 0) {
    alert("amount should be greater than 0");
  } else {
    localStorageValidate(type, name, date, amount);
  }
}

function localStorageValidate(type, name, date, amount) {
  let array = JSON.parse(window.localStorage.getItem("expenses"));
//   console.log(array);
  if (array == null) {
    arr.push({ type, name, date, amount });
    window.localStorage.setItem("expenses", JSON.stringify(arr));
  } else {
    arr.push({ type, name, date, amount });
    window.localStorage.setItem("expenses", JSON.stringify(arr));
  }
  // se.value="choose";
  am.value = "";
  na.value = "";
  da.value = "";
  filldata();
}

function filldata() {
    let save=JSON.parse(window.localStorage.getItem("expenses"));
    let count = 0;
  if (save != null) {
    for(key in save){
        let newElement = document.createElement("tr");
        // let newButton=document.createElement("button");
        newElement.innerHTML = `<td>${save[key].type}</td>
        <td>${save[key].name}</td>
        <td>${save[key].date}</td>
        <td>${save[key].amount}</td>
        <td><button class="small-button" onclick="del(${key})">Delete</button></td>`;
        let table = document.querySelector("table");
        table.append(newElement);
        count += 1; 
    }
   
  }
}

function del(key){
    let save=JSON.parse(window.localStorage.getItem("expenses"));
    arr.splice(key,1);
    window.localStorage.setItem("expenses", JSON.stringify(arr));
    filldata();
}