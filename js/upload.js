upload_url = "https://prod-06.centralus.logic.azure.com:443/workflows/3f578f02bd4945028fb64966b351c42e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MO6scEEl5ka0MRIwmoaAQ24B8Jv45KfId5qdw3YdS4M"


document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the user input
  let title = document.querySelector('#title').value;
  let publisher = document.querySelector('#publisher').value;
  let producer = document.querySelector('#producer').value;
  let genre = document.querySelector('#genre').value;
  let pg = document.querySelector('#agerating').value;
  let file = document.querySelector('#file').files[0];

  // Log the user input to the console
  console.log(title, publisher, producer, genre,pg, file);

  // Create the data object to be sent in the POST request
  var data = {
        "title": title,
        "publisher": publisher,
        "producer": producer,
        "genre": genre,
        "file": file
    };

  // Send the POST request
  postData(upload_url, data)
      .then((responseData) => {
          console.log(responseData);
      });
});

const postData = async (upload_url, data) => {
// Default options are marked with *
const response = await fetch(upload_url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  body: data,
  // headers: {
  //   // 'Content-Type': 'multipart/form-data',
  //   // 'Content-Type': 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
  redirect: 'follow', // manual, *follow, error
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return await response.json(); // parses JSON response into native JavaScript objects
}



