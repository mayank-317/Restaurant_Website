function login(){
    var userId = document.getElementById("loginUserId").value;
    var password = document.getElementById("loginPassword").value;

    // Check if the user ID and password match the predefined values
    if (userId === "mayank" && password === "1234") {
        // You can redirect to the home page or perform any other actions here
        alert("Login successful!");
        window.location.href = "Lab-3/index.html"; 
    } else {
        alert("Invalid user ID or password");
    }
}