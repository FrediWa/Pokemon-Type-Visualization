const types = ["NA", "Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric", "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy"];
const colors = ["#282828", "#A8A878", "#F08030", "#C03028", "#12c0ff", "#A890F0", "#78C850", "#A040A0", "#F8D030", "#E0C068", "#F85888", "#B8A038", "#98D8D8", "#A8B820", "#7038F8", "#705898", "#705848", "#B8B8D0", "#EE99AC"] //colors for each type's label

//precalculated positions for nodes
const cartesianNodeLocations=[
    [450, 0],
    [425.6177587652856, 146.11476114210757],
    [355.1132292283771, 276.39572071035053],
    [246.1266711550921, 376.7249152181378],
    [110.46846921335965, 436.23011967269866],
    [-37.16070546254952, 448.4630218530014],
    [-180.76294109383616, 412.0979969947759],
    [-304.7767072315834, 331.07575980290926],
    [-395.76318804292004, 214.17632686668316],
    [-443.862586531225, 74.06756562633032],
    [-443.8625865312251, -74.06756562633021],
    [-395.7631880429201, -214.17632686668307],
    [-304.77670723158366, -331.0757598029091],
    [-180.76294109383645, -412.09799699477577],
    [-37.160705462549736, -448.4630218530014],
    [110.46846921335946, -436.2301196726987],
    [246.12667115509197, -376.72491521813794],
    [355.113229228377, -276.39572071035064],
    [425.6177587652856, -146.11476114210768]
];

function calculateNodeLocation(i){
    let x = Math.cos((Math.PI * 2/19 * i))*450
    let y = Math.sin((Math.PI * 2/19 * i))*450

    return [x, y];
}
function createGraph(data){
    const element = document.getElementById("output");
    const height = 1000;
    const width = 1000;
    const nineteen = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


    element.setAttribute("width", width);
    element.setAttribute("height", height);

    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("class", "noice")

    const lineGenerator = d3.line()
        .curve(d3.curveBundle);
    const pieGenerator = d3.pie();
    const arcData = pieGenerator(nineteen);

    d3.select("svg")
    .append("g")
    .attr("style", "transform: translate(500px, 500px)")
    .attr('class', "curves")
    .selectAll('path')
    .data(data)
    .enter()
        .append('path')
        .attr('d', function(d, i){
            let x = cartesianNodeLocations[d.type_1]
            let y = cartesianNodeLocations[d.type_2]
            return lineGenerator([x,[0,0] ,y])

         })
         .style('stroke', function(d, i){return colors[d.type_1]})
         .style('stroke-width', 2)
         .style('stroke-opacity', 0.2)
         .style("mix-blend-mode", "darken")
         .style('fill', "none")





    const arcGenerator = d3.arc()
      .innerRadius(400)
      .outerRadius(500);

      d3.select('svg')
      .append("g")
      .attr('class', "pie")
      .selectAll('path')
      .data(arcData)
      .enter()
      .append('g')
      .attr("class", "label-node")
      .append('path')
      .attr('d', arcGenerator)
      .attr('class', "arc")
      .style('fill', function(d, i){ return colors[i]});

      d3.selectAll('.label-node')
      .append("text")
      .text(function(d, i){ return types[i]})
      .attr('x', function(d, i){ return cartesianNodeLocations[i][0]  })
      .attr('y', function(d, i){ return cartesianNodeLocations[i][1] })
      .attr('class', "node-labels")
      .attr('style', "transform: rotate(-80deg) translateX(-18px)")
      .style('fill', "#fff")


      d3.select(".pie")
          .style("fill", "#ff0000")
          .attr("style", "transform: translate(500px, 500px)")

    console.log(data);


    d3.select('.curves')
        .raise();

}
//var button = document.getElementById('getData');
//button.addEventListener('click', reqListener);

function reqListener () {
    console.log("hello");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            createGraph(JSON.parse(this.response));
        }
    };
    xhttp.open("GET", "./js/pokedex.json", true);
    xhttp.send();
}

reqListener();
