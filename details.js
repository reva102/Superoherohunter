const container = document.querySelector('.my-container');
//getting id of supero hero
function getId(id) {
    const url = new URLSearchParams(window.location.search);
    return url.get(id);
  }
  //to get all the details
function getDetails(id)
{ 
    // API use the facting images
const url="https://www.superheroapi.com/api.php/891370368026086";
$.get(`${url}/${id}`,function(herodetails)
{
    $('#my-container').append(`
   
    <div id="details">
    <h1 id="more-details">More about the superhero</h1>
    <img src="${herodetails.image.url}">
    
    <h1>${herodetails.name}</h1>
    <h2>${herodetails.biography['full-name']}</h2>
    <h2> Intelligence : ${herodetails.powerstats.intelligence}</span>
    <h2> Strength : ${herodetails.powerstats.strength}</h2>
    <h2>Speed : </span> <span> ${herodetails.powerstats.speed}</h2>
    <h2> Durability: </span> <span> ${herodetails.powerstats.durability}</h2>
    <h2>Power :</span> <span>${herodetails.powerstats.power}</h2>
     <h2> Combat :</span> <span>${herodetails.powerstats.combat}</h2>
   </div>`
        
    );

});  
}
const heroId = getId('id');
getDetails(heroId);                          
         