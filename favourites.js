//list of all superhero added to favourites
const searchList = document.getElementById('search-results-list');

const FAV = 'favourites';


  function getFavouriteSuperheroes() {
    return localStorage.getItem(FAV)
      ? JSON.parse(localStorage.getItem(FAV))
      : [];
  }
  //adding superhero to list
  function addToFav(hero) {
    if (!hero) return;

    const favouriteshero = getFavouriteSuperheroes();
    favouriteshero.push(hero);
    localStorage.setItem(
      FAV,
      JSON.stringify(favouriteshero)
    );
  }
  //get the id of all superhero added to favourites
  function getFavouriteSuperheroes() {
    return localStorage.getItem(FAV)
      ? JSON.parse(localStorage.getItem(FAV))
      : [];
  }
  //for remove the added superhero from favourites
  function removeFromFavourites(heroId) {
    let fav = getFavouriteSuperheroes();
    function check(fav) {
        return fav != heroId;
      }
      function myFunction() {
      let newages=[];
      newages.push(fav.filter(check));
       // document.getElementById("demo").innerHTML =  JSON.stringify(newages[0]);
        localStorage.setItem(
            FAV,
            JSON.stringify(newages[0])
          );
      }
   
   myFunction();
   $('#container').html("");
   renderFavourites();
    
  
  
  }
  //extract id from link
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  //for showing the list 
  function renderFavourites() {
    const favouritesData = getFavouriteSuperheroes();
    searchList.innerHTML = ''; 

    if (!favouritesData || favouritesData.length === 0) {
      searchList.innerHTML = '<li>No results found!</li>';
    } else {
      favouritesData.forEach((element) => {
        const li = document.createElement('li');
       
        const url="https://www.superheroapi.com/api.php/891370368026086";
        $.get(`${url}/${element}`,function(data)
        {
            //searchList.innerHTML = `${url}/${element}`;
            $('#container').append(`
            
            <div id="my-contain">
            <div id="image"><img src="${data.image.url}"></div>
            <div id="name">${data.name}</div>
            <div id="remove-from-favourite" ><button  id="remove-from-fav"onclick="removeFromFavourites('${data.id}') ">Delete</button></div>
           </div>
           <br>` 
            );
        });
    });
}
}
const heroId = getQueryParameter('id');
addToFav(heroId);
renderFavourites() ; 