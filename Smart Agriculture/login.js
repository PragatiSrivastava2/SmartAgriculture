let radioBtn = document.querySelectorAll(".btn-group input[type='radio']");
let fieldset = document.querySelectorAll("fieldset");
let submit=document.querySelector(".form button");
let leftpart=document.querySelector(".leftPart");
let form=document.querySelector(".form");


radioBtn.forEach((btn) => {
  btn.addEventListener("change", () => {
    if (btn.checked) {
      fieldset.forEach((field)=>{
        field.removeAttribute('disabled');
      })
    }
  });
});
let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]
let select=document.querySelector("select");
for(let state of states){
    let newOption=document.createElement("option");
    newOption.innerText=state;
    newOption.value=state;
    select.append(newOption);
}

