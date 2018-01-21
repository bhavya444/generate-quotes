
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json');

  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      
    } else {
      console.log("error.");
    }
     
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

});

var i= 0;
function renderHTML(data) {
  var htmlString = "";
 htmlString += "<p>" + data[i].quoteAuthor + " quotes:" + data[i].quoteText ;
   htmlString += '.</p>';
  
i++;
  animalContainer.insertAdjacentHTML('beforeend', htmlString);

}




