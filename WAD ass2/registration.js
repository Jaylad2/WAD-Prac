document.getElementById("registrationform").addEventListener('submit', function(event) {
    event.preventDefault();

    let user;
    let users; 
    
    user = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
    }

    users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    
    if(users.some((singleUser) => {
        return singleUser.email == user.email
    })) {
        document.getElementById("registration-response").innerHTML = "user already exist";
    } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("registration-response").innerHTML = "user successfully registered, redirecting user to login page";
        setTimeout(function() {
            window.location.href = "login.html";
        }, 5000)
        
    }
    })
