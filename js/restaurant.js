const resultOutput = document.querySelector("#restaurantResultsContainer")
const restaurantItinerary = document.querySelector("#restaurantItinerary")

function lookUp (searchTerm){
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchTerm}&apikey=6e72e09f0a9e5501ab2d5645e8fac52d`)
      
    .then(result => result.json())
        .then(parsedResult => {
            console.log(parsedResult.restaurants);
            parsedResult.restaurants.forEach(element => {
                document.querySelector("#restaurantResultsContainer").innerHTML += `<h3>${element.restaurant.name}</h3>`;
            });
    
        });
    }

    // let outputBox = document.getElementById ("output");

    // for(let i=0; i<HTMLAllCollection.length; i++) {
    //     if (output === "") {
    //         output = 
    //     }
    // }



document.querySelector("#search-restaurants").addEventListener ("click", event => {
    let searchTerm = document.querySelector("#search-bar").value
    lookUp(searchTerm);
})



// function getSelectedOptions()



const restaurantItin = [];






