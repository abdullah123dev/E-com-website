// import { initializeApp } from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyDb4p-fZogDXSgd_sXCHLYxjp2QGMhJcNI",
    authDomain: "website-order-db.firebaseapp.com",
    databaseURL: "https://website-order-db-default-rtdb.firebaseio.com",
    projectId: "website-order-db",
    storageBucket: "website-order-db.appspot.com",
    messagingSenderId: "1004136500419",
    appId: "1:1004136500419:web:30f507e1216086ed6ce676"
};

function initializeApp() {
    firebase.initializeApp(firebaseConfig);
}
// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var phone = getElementVal("phone");
    var addres = getElementVal("address");
    var extras = getElementVal("extras");


    saveMessages(name, emailid, phone, addres, extras);

    //   //   enable alert
    //   document.querySelector(".alert").style.display = "block";

    //   //   remove the alert
    //   setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    //   }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        address: addres,
        extras: extras,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};