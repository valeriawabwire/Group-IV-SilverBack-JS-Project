const feeEndpoint = 'http://localhost:3000/FeeDetails';
console.log(feeEndpoint);

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementsByClassName("btn");

    fetch(feeEndpoint)
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching fee data: ', error);
        });
})

document.getElementById('people-btn').addEventListener('click', function () {
    alert("The following is a display of the students in the system only, for more information click on the search bar and enter your name");

    const names = ['Gerald Kisilu', 'Edwin Mwangi', 'Abdi Shukri', 'Grace Gitau', 'Brian Onduso', 'Valeria Wabwire',
        'Ernest Musau', 'Emmanuel Waseth', 'Brian Omondi', 'Sharon Bygeon'];
    const namesContainer = document.getElementById('namesContainer');
    namesContainer.innerHTML = ''; // Clear previous content
    names.forEach(name => {
        const p = document.createElement('p');
        p.textContent = name;
        namesContainer.appendChild(p);
    });
});

document.querySelector('.searchbtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting which reloads the page
    const inputName = document.querySelector('[name="enter name"]').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    const feeDetails = [
        { id: "1", FirstName: "Gerald", LastName: "Kisilu", FeePaid: "ksh100,000", FeeBalance: "ksh100,000" },
        { id: "2", FirstName: "Edwin", LastName: "Mwangi", FeePaid: "ksh75,000", FeeBalance: "ksh125,000" },
        { id: "3", FirstName: "Abdi", LastName: "Shukri", FeePaid: "ksh50,000", FeeBalance: "ksh150,000" },
        { id: "4", FirstName: "Grace", LastName: "Gitau", FeePaid: "ksh100,000", FeeBalance: "ksh100,000" },
        { id: "5", FirstName: "Brian", LastName: "Onduso", FeePaid: "ksh145,000", FeeBalance: "ksh55,000" },
        { id: "6", FirstName: "Valeria", LastName: "Wabwire", FeePaid: "ksh100,000", FeeBalance: "ksh100,000" },
        { id: "7", FirstName: "Ernest", LastName: "Musau", FeePaid: "ksh77,000", FeeBalance: "ksh123,000" },
        { id: "8", FirstName: "Emmanuel", LastName: "Waseth", FeePaid: "ksh123,000", FeeBalance: "ksh77,000" },
        { id: "9", FirstName: "Brian", LastName: "Omondi", FeePaid: "ksh15,000", FeeBalance: "ksh185,000" },
        { id: "10", FirstName: "Sharon", LastName: "Bygeon", FeePaid: "ksh200,000", FeeBalance: "ksh0.000" }
    ];

    // Filter the array for names that include the search input
    const filteredResults = feeDetails.filter(person =>
        person.FirstName.toLowerCase().includes(inputName) || person.LastName.toLowerCase().includes(inputName)
    );

    // Display the results
    if (filteredResults.length > 0) {
        filteredResults.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.innerHTML = `<strong>${person.FirstName} ${person.LastName}</strong><br>Fee Paid: ${person.FeePaid}<br>Fee Balance: ${person.FeeBalance}`;
            resultsContainer.appendChild(personDiv);
        });
    } else {
        resultsContainer.innerHTML = 'No results found';
    }
});
