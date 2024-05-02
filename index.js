// Define the endpoint for fetching fee details
const feeEndpoint = 'http://localhost:3000/FeeDetails';
console.log(feeEndpoint);// Log the endpoint to the console for verification


// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
     // Select all elements with the class "btn" and attach an event listener to each
    const searchButton = document.getElementsByClassName("btn");
    Array.from(searchButton).forEach(button => {
               button.addEventListener('click', getStudentDetails);// Listen for click events on buttons
             });
              // Function to handle fetching student details
             function getStudentDetails(){
                 // Fetch data from the defined endpoint
    fetch(feeEndpoint)
        .then(response => response.json())
        .then(data => {
             // Handle the retrieved data
            console.log(data); // Log the data to the console
        })
        .catch(error => {
              // Catch any errors that occurred during the fetch process
            console.error('Error fetching fee data: ', error);// Log the error to the console
        });
    }
    })
