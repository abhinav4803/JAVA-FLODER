const loginForm= document.getElementById("login");
const loginButton = document.getElementById("log");

loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;
    if (usernm
        ==="user"&& password==="web_dev") {
            alert("You have successfully logged in.")
            location.reload();
    } 
})