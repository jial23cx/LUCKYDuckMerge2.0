var data="";
var htmlElement = document.documentElement;
var svDropDown=document.getElementById("sv")
var enDropDown=document.getElementById("en")
var foodCard=document.querySelector(".meny-container");
document.querySelector("h2").style.fontFamily = "'Poppins', sans-serif";
document.querySelector("h3").style.fontFamily = "'Poppins', sans-serif";
const labelVeg= document.querySelector("#label1");
const labelVeg2= document.querySelector("#label2");
const labelVeg3= document.querySelector("#label3");
const labelVeg4= document.querySelector("#label4");
const labelVeg5= document.querySelector("#label5");

const labelAllergy=document.querySelector("#allergy1");
const labelAllergy2=document.querySelector("#allergy2");

const mainCourseH2=document.querySelector("#mainCourseH2");
const allergiesH2=document.querySelector("#allergiesH2");

const h1menu=document.querySelector("h1");


//-----------------FETCH----------

fetch('food.json').then((response) => {
  return response.json();
})
.then((data) => {
console.log(data);

window.onload = () => {
  const currentStorage = localStorage.getItem("isSwedish");
  htmlElement.setAttribute("lang", "sv"); 
  if (currentStorage === "true") {
    translateSwedish();
  } else if (currentStorage === "false") {
    translateEnglish();
  } else {
    // If there's no value in localStorage, set a default language (Swedish in this case).
    localStorage.setItem("isSwedish", "true");
    translateSwedish();
  }
};

//Translate to English function
function translateEnglish(){
  clearForNewDiv();
  data.forEach(function(currentValue,){
    const newDiv=document.createElement("div");
    const newTitle=document.createElement("h2");
    const newParagraph=document.createElement("p");
    
    newTitle.innerHTML=currentValue.title.en;
    newDiv.appendChild(newTitle).style.fontFamily = "'Poppins', sans-serif";
    foodCard.appendChild(newDiv);

    newParagraph.innerHTML=currentValue.description.en;
    newDiv.appendChild(newParagraph).style.fontFamily = "'Poppins', sans-serif";;
    foodCard.appendChild(newDiv);  
    })

  labelVeg.textContent="Vegetarian";
  labelVeg2.textContent="Chicken";
  labelVeg3.textContent="Beef";
  labelVeg4.textContent="Pork";
  labelVeg5.textContent="Seafood";
  labelAllergy.textContent="Gluten-free";
  labelAllergy2.textContent="Dairy-free";
  mainCourseH2.textContent="Main Course";
  allergiesH2.textContent="Allergies";
  h1menu.innerHTML = 'Lucky<br>Duck';
  htmlElement.setAttribute("lang", "en"); 
}

//Translate to Swedish Function
function translateSwedish(){
  clearForNewDiv();
  data.forEach(function(currentValue,){
    const newDiv=document.createElement("div");
    const newTitle=document.createElement("h2");
    const newParagraph=document.createElement("p");
    
    newTitle.innerHTML=currentValue.title.sv;
    newDiv.appendChild(newTitle).style.fontFamily = "'Poppins', sans-serif";
    foodCard.appendChild(newDiv);

    newParagraph.innerHTML=currentValue.description.sv;
    newDiv.appendChild(newParagraph).style.fontFamily = "'Poppins', sans-serif";;
    foodCard.appendChild(newDiv);
    })

  labelVeg.textContent="Vegetariskt";
  labelVeg2.textContent="Kyckling";
  labelVeg3.textContent="Nötkött";
  labelVeg4.textContent="Fläsk";
  labelVeg5.textContent="Fisk & Skaldjur";
  labelAllergy.textContent="Glutenfritt";
  labelAllergy2.textContent="Laktosfriss";
  mainCourseH2.textContent="Huvudrätt";
  allergiesH2.textContent="Allergier";
  h1menu.innerHTML = 'Lucky<br>Duck';
  htmlElement.setAttribute("lang", "sv"); 
}

var clear = document.querySelector(".meny-container");

function clearForNewDiv(){
  clear.innerHTML="";
};


//Check if Swedish in local Storage
const isSwedish=localStorage.getItem("isSwediish");
function checkSwedish(){


  if(isSwedish==="true"){
    translateSwedish();
  }
}
checkSwedish()


//Check if English in local Storage
const isEnglish=localStorage.getItem("isEnglish");

function checkEnglish(){


  if(isEnglish==="true"){
    translateEnglish();
  }
}
checkEnglish();



 

// Dropdown Choose language
enDropDown.addEventListener("click", function () {
  console.log("user chose English");
  localStorage.setItem("isSwedish", "false"); // Set to false for English
  translateEnglish();
});

svDropDown.addEventListener("click", function () {
  console.log("user chose Swedish");
  localStorage.setItem("isSwedish", "true"); // Set to true for Swedish
  translateSwedish();
});


}).catch(function(error){
  console.error("something went wrong with retriving data")
  console.log(error)
})