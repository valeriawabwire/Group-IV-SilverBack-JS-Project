const feeEndpoint = 'http://localhost:3000/FeeDetails';
console.log(feeEndpoint);

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementsByClassName("btn");
    // Array.from(searchButton).forEach(button => {
    //            button.addEventListener('click', getStudentDetails);
    //          });
            //  function getStudentDetails(){
    fetch(feeEndpoint)
        .then(response => response.json())
        .then(data => {
           
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching fee data: ', error);
        });
    // }
    })
