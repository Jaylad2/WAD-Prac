document.getElementById("loginform").addEventListener('submit', function(event) {
    event.preventDefault();
    
    users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    
    if(users.some((user) => {
        return user.email == event.target.email.value && user.password == event.target.password.value
    })) {
        console.log("login successfull");
        let currentUser = users.filter((user) => {
            return user.email == event.target.email.value && user.password == event.target.password.value
        })
        console.log(currentUser);
        localStorage.setItem("name",currentUser[0].name);
        localStorage.setItem("email",currentUser[0].email);
        window.location.href = "dashboard.html";

    } else {
        console.log("login failed")
    }
    
})


