//Created functions to move user input from local storage back to the site.
// vars to control DOM
var storedScoresEl = document.getElementById("stored-scores");
var storedInitialsEl = document.getElementById("stored-initials");

//window.onload function to order the getScores function
window.onload = function () {
  getScores();
};
// getting information from local storage.
function getScores() {
  var loadUserInitials = JSON.parse(localStorage.getItem("userInfo"));
  var loadUserScores = JSON.parse(localStorage.getItem("userTimeScore"));
  //How do I get these on the page?!
  console.log(loadUserInitials);
  console.log(loadUserScores);

  storedScoresEl.textContent = "Score: " + loadUserScores;
  storedInitialsEl.textContent = "Initials: " + loadUserInitials;
}

//window.onload();
