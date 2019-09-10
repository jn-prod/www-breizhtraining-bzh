// API KEY = AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0
var file = "https://sheets.googleapis.com/v4/spreadsheets/1AWIDHqtH7m6715XM7yhVqrOUumjJZzzPCBLwpvlSKAw/values/stages!2:1000?key=AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0"


function stageComponent (name, startDate, endDate, location, link) {
  return "<div class=\"row my-3\">" +
    "<div class=\"col-12\">" +
      "<span>Du " + startDate + " au " + endDate + " à " + location + " → " + name + "</span>" +
      "<a href=\" " + link + " \" target=\"_blank\" rel=\"nofollow\" class=\"btn btn-secondary ml-5 rounded-pill shadow\">En savoir +</a>" +
    "</div>" +
  "</div>"
}

function loadStage(file) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // check no load file error 
            var stages = JSON.parse(xhr.response).values // select values in response
            var formateWithStageComponent = "" // initialization of the final display element
            
            for (var i = 0; i < stages.length; i++) { // build elements
              formateWithStageComponent += stageComponent(stages[i][0],stages[i][1], stages[i][2], stages[i][3], stages[i][4])
            }
          
            document.getElementById('stages_list').innerHTML = formateWithStageComponent; // Display elements
        }
    });
    xhr.send(null);
}

(function() {
    loadStage(file)
})();
