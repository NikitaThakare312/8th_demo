function submitForm() {
    // Get user input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Create an object to store user details
    var userDetails = {
        firstName: firstName,
        lastName: lastName
    };

    // Convert the object to a JSON string
    var userDetailsString = JSON.stringify(userDetails);

    // Store the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsString);

    // Optional: You can also console log the stored data
    console.log('User details stored:', userDetails);

    // Optionally, you can redirect to another page or perform other actions
}

