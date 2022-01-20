// Class to create a new customer
class Customer {
    constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    }
}

// Creating new customer using the form 

var firstName;
var lastName;
var email;
var lista = new Array();

const formi = document.getElementById('formi');

formi.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('tietoja');
    firstName = document.getElementById('firstNameField').value;
    lastName = document.getElementById('lastNameField').value;
    email = document.getElementById('emailField').value;
    let customer = new Customer(firstName, lastName, email);
    document.getElementById('nappilabel').innerText = 'Tervetuloa tupaan ' + firstName +' '+ lastName;
    lista.push(customer);
    console.log(lista);
}); 

function ihmeNappi() {
    if (lista[0] == undefined){ console.log('persereikä')}
    else {
    document.getElementById('ekajasen').innerText = 'Eka jäsen oli ' + lista[0].firstName;}
}






