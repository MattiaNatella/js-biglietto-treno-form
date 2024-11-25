// Seleziono gli elementi del form
const titleField = document.getElementById('title-field');
const nameField = document.getElementById('name-field');
const roleField = document.getElementById('role-field');
const emailField = document.getElementById('email-field');
const phoneField = document.getElementById('phone-field');
const companyField = document.getElementById('company-field');
const companyPicField = document.getElementById('company-pic-field');
const form = document.querySelector('form');

// seleziono gli elementi target
const company = document.getElementById('company');
const title = document.getElementById('title');
const name = document.getElementById('name');
const role = document.getElementById('role');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const companyPic = document.getElementById('company-pic');



form.addEventListener('submit', (event) => {
  // inibisco l'invio del form
  event.preventDefault();
  
  name.innerText = nameField.value.trim();
  title.innerText = titleField.value;
  role.innerText = roleField.value.trim();
  email.innerText = emailField.value.trim();
  phone.innerText = phoneField.value.trim();
  company.innerText = companyField.value.trim();
  companyPic.src = companyPicField.value.trim();
  
  // verifica validità dei campi.....
  
  // invio....
  
  // reset form
  resetForm();
  
  
})


function resetForm(){
  nameField.value = '';
  titleField.value = '';
  roleField.value = '';
  emailField.value = '';
  phoneField.value = '';
  companyField.value = '';
  companyPicField.value = '';
}