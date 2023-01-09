document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
  
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const isCreator = document.getElementById('isCreator').checked;
  
    console.log({firstname, lastname, email, password, isCreator});
  
    const currentDate = new Date();
    const rfc1123Date = currentDate.toUTCString();
    const key = "Djshai4b8tzsZmcDGr1jGt6tTUpmyjjCqCekfqweXSgmNhVISIuWw7Qjos6U8Iz3wHftGvVglaMCACDbrSC64g=="
    
  
    fetch("https://vidflix.documents.azure.com:443/dbs/vidflix/colls/Users/docs", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "x-ms-version": "2016-07-11",
            "Authorization": key,
            "x-ms-date": rfc1123Date,
            "Content-Type": "application/json",
            "x-ms-documentdb-query-enablecrosspartition": "false",
            "x-ms-documentdb-partitionkey": firstname,
        },
        body: JSON.stringify({
        id: firstname,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        isCreator: isCreator
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  });
  