var username, email, phone, address, extras;

function readFom() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    address = document.getElementById("phone").value;
    phone = document.getElementById("address").value;
    extras = document.getElementById("extras").value;

    console.log(username, email, phone, address, extras);
}

document.getElementById("sumbit").onclick = function() {
    readFom();

    firebase
        .database()
        .ref("buyer/" + username)
        .set({
            username: username,
            email: email,
            contactno: phone,
            address: address,
            extras: extras,

        });
    alert("Data Inserted");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("extras").value = "";

};