const types = ["NA", "Normal", "Fire", "Fighting", "Water", "FLying", "Grass", "Poision", "Electric", "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy"];
const colors = ["#808080", "#e8d6ca", "#ff4d12", "#12c0ff"] //colors for each type's label


//fundera om man borde ändra datasettet så att typerna är numror istället för strängar
//NA -> 0
//Normal -> 1
//Fire -> 2 osv enligt types arrayn

function createGraph(data){
    console.log(data);

}
var button = document.getElementById('getData');
button.addEventListener('click', reqListener);

function reqListener () {
    console.log("hello");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            createGraph(JSON.parse(this.response));
        }
    };
    xhttp.open("GET", "./pokedex.json", true);
    xhttp.send();
}
