//Created functions to move user input from local storage back to the site.
// vars to control DOM
var storedScoresEl = document.getElementById("userTimeScore");
var storedInitialsEl = document.getElementById("userInfo");

//function to order the getScores function
window.onload = function () {
  getScores();
};
// getting information from local storage.
function getScores() {
  //var loadUserInitials = JSON.parse(localStorage.getItem("userInfo"));
  //var loadUserScores = JSON.parse(localStoreage.getItem("userTimeScore"));

  // functions to load data from local storage to scores.html

  // document.createAttribute("stored-scores").innerHTML = loadUserScores;
  //document.createAttribute("stored-initials").innerHTML = loadUserInitials;
  console.log("HOW DO I DO THIS?!");
}

//window.onload();
