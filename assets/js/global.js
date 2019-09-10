// API KEY = AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0
var file = https://sheets.googleapis.com/v4/spreadsheets/1AWIDHqtH7m6715XM7yhVqrOUumjJZzzPCBLwpvlSKAw/values/stages!2:1000?key=AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0


function stageComponent (name, startDate, endDate, location, link) {
  "<div class=\"row\">" +
    "<div class=\"col-12\">" +
      "<span>Du " + startDate + " au " + endDate + " à " + location + " → " + name + "</span>" +
      "<a href=\" " + link + " \" target=\"_blank\" rel=\"nofollow\" class=\"btn btn-secondary ml-5 rounded-pill shadow\">En savoir +</a>" +
    "</div>" +
  "</div>"
}

function loadStage(file) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur
            document.getElementById('stages_list').innerHTML = '<span>' + xhr.responseText + '</span>'; // Et on affiche !
        }
    });
    xhr.send(null);
}

(function() {
    loadStage(file)
})();
