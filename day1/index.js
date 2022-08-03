// // var person =[];
// // var contact =[];
// // results=[];

// // new URLSearchParams(window.location.search).forEach((value,key)=>{results.push(value)})
// // console.log(results);
// // const searchParams = new URLSearchParams(window.location.search)
// // console.log(Array.from(searchParams.values()));
// // results.push(Array.from(searchParams.values()));

// const person=document.getElementById("name")
// const contact=document.getElementById("contact")
// const form=document.getElementById("myForm")

// form.addEventListener('submit', (e)=>{
//     let messages=[];
//     if (person.value === "" || person.value ==null){
//         messages.push("Name is empty.")
//         // alert("Name is empty.")
//     } 
//     if (person.value.length == 3){
//         messages.push("Contact should be of length 10.")
//         // alert("Contact should be of length 10.")
//     } 
//     if (messages.length>0){
//         e.preventDefault()
//         errorElement.innerText = messagesjoin(", ")
//         alert('Contact submitted successfully.');
//     }
// });


// function showAlert(){
//     alert('Contact submitted successfully.');
// }

// function validateForm() {

//     let x = document.forms["myForm"]["name"].value;
//     let y = document.forms["myForm"]["contact"].value;
//     console.log(x);
//     if ((x == "") && (y == "")){
//         alert("Name and contact must be filled out");
//         return false;
//     } 
//     else if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//     else if (y == "") {
//       alert("Contact must be filled out");
//       return false;
//     }
//     else{
//         person.push(x)
//         contact.push(y)
//         showAlert();
//         return true;
//     }
// }


const form=document.getElementById('form');
const person=document.getElementById('Name');
const contact=document.getElementById('Contact');

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  validateForm();
})
function validateForm(){
    if ((person == null) || (contact == null)){
        alert("Null Input.")
    }
    const personValue = person.value;
    const contactValue = contact.value;
    var corrPerson = false;
    var corrPhone =false;

    if (personValue === ''){
    setErrorFor(person,'Name cannot be Empty')
    }else{
    corrPerson=true;
    setSuccessFor(person)
    }
    if (contactValue.length != 3){
    setErrorFor(contact,'Contact should be of appropriate length')
    }else{
        corrPhone=true;
        setSuccessFor(contact)
    }
    if (corrPerson && corrPhone){
        localStorage.setItem(personValue,contactValue)
        alert("Contact Saved.")
    }
    else{
        alert("Invalid Data.")
    }
}
function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText =message;
  formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

