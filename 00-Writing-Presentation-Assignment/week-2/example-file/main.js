let loginForm = document.querySelector("#sign-in");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userLogin = {
        username: "asa",
        password: "123"
    }

    let getDataUserLogin = {
        username: username.value,
        password: password.value
    };


    if (userLogin.username == getDataUserLogin.username && 
        userLogin.password == getDataUserLogin.password 
    ){
        console.log("Login su!");
    }

    let userData = [];

    userData.push(getDataUserLogin);

    console.log(userData);

});