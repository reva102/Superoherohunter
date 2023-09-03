var container = $("#container");
var searchResult=[];

function myFunction(){
  alert("You are added to favourites list")
}
// API use the fetching images
const ApiUrl="https://www.superheroapi.com/api.php/891370368026086";//Api url
$("button").click(function () {
    var heroName=document.getElementById("searchbar").value;//searching the name of hero
    $("#container").html("");
    searchResult = [];
    $.get(`${ApiUrl}/search/${heroName}`, function (herodata) {
        let searchResult = herodata.results;
        
        for (let ele of searchResult) {
          //appending the search results in the list 
            container.append(`
                  <li> 
                  <div id="search-results">
                  
                 <div id="name"> <a href="details.html?id=${ele.id}">
                   ${ele.name}
                   </a>
                   <br>
                  ${
                    ele.biography['full-name']
                  }</div>
                  <div id="image"><img src="${ele.image.url}"></div>
                  <button id="add-to-fav" onclick="addToFav(${ele.id}); myfunction();">favourites</button>
             
               
                </a></div>
               
                </div>
            </li>
            <br>
               
          `);
      }
  });

});