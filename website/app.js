console.log("js file is linked to html");

const postData = async ( url = '', data = {}) => {
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
      });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
}

postData('/addMovie', {movie:'avengers EndGame', score :5});
// postData('/addMovie', {movie:'Sultan', score :4.5});


//  Fetch api

// let baseURL = 'http://api.animalinfo.org/data/?animal='
// let apiKey = '&appid=9f15e45060...';

const getAnimal = async(url) => {
  const res = await fetch(url)
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch(error){
    console.log(error);
  }
}

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const fav =  document.getElementById('fav').value;
  getAnimal('/animalData')
  .then((data) => {
    console.log(data)
    postData('/addAnimal', {animal:data.animal, fact:data.fact, fav:fav} )
    updateUI()
  })
   
};

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData);
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  } 
}



/*
//promise syntax
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 2500) 
}) 

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage) 
});
*/