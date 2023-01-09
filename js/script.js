  //get all videos
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


users = "https://prod-22.centralus.logic.azure.com:443/workflows/836dd91b0cf34d66b762ed1d99f3dc5b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5klntrxxRrSbY1mXGzR1sxpHmMyyrMYXW3K6onfWdno"

document.getElementById('btn').addEventListener('click', function(e) {
    e.preventDefault();  // prevent the form from being submitted
    
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;
    
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    
    // fetch(users, requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //       let data = result
    //       console.log(data)
    //       data.forEach(function (item, index) {
    //           console.log(item, index)
    //           if (email in data) {
    //             console.log("welcome")
    //           }
    //           else{
    //             console.log("None")
              
    //           }
          
    //       });
       
    //   })
    //   .catch(error => console.log('error', error));

    fetch(users, requestOptions)
    .then(response => response.json())
    .then(result => {
        let data = result
        console.log(data)
        let userExists = data.some(user => user.email === email && user.password === password)
        if (userExists) {
          console.log("welcome")
          let user = data.find(user => user.email === email && user.password === password)
          let creator = data.some(user => user.isCreator === true)
          console.log(data[0])
          if (data.some(user => user.isCreator === true)) {
            window.location.href = 'http://localhost:5500/pages/Dashboard/creator.html' // replace with the URL of the creator dashboard
          }
        } else {
          window.location.href = 'http://localhost:5500/pages/Dashboard/user.html'
        }
    })
    .catch(error => console.log('error', error));
  });
  


  






  
  
  
  