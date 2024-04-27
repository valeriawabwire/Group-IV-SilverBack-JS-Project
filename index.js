// document.addEventListener('DOMContentLoaded', function () {
//     const searchButton = document.getElementsByClassName("btn");
//     Array.from(searchButton).forEach(button => {
//         button.addEventListener('click', getStudentDetails);
//     });

//     function getStudentDetails() {
//         fetch(`http://localhost:3001/FeeDetails`)
//             .then(response => response.json())
//             .then(data => {
//                 const { Results } = data;
//                 console.log(Results);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }

//});
const feeEndpoint = 'http://localhost:3000/FeeDetails';
console.log(feeEndpoint);

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementsByClassName("btn");
    Array.from(searchButton).forEach(button => {
               button.addEventListener('click', getStudentDetails);
             });
             function getStudentDetails(){
    fetch(feeEndpoint)
        .then(response => response.json())
        .then(data => {
           
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching fee data: ', error);
        });
    }
    })
