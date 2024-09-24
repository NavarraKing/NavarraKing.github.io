document.getElementById("registerForm").addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; 

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(result => {
    document.getElementById("result").innerHTML = `
    <h3>Válasz a szervertől:</h3>
    <p>Név: ${result.name}</p>
    <p>E-mail: ${result.email}</p>
    <p>Gáspár Dani megbasztam anyádat</p>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<p>Hiba történt: ${error.message}</p>`;
    });
})
