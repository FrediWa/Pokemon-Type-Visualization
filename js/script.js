function createGraph(data){
    console.log(data);
    const element = document.getElementById("output");
    const height = 1000;
    const width = 1000;
    var yOffset;

    //max and minvalue are only used to calculate the y-scale, minvalue is not used but will be once the y-scaling is fixed
    var maxValue = 0;
    var minValue = data[0][1]; //set minValue to *something* in the array, the next function will work correct regardless if the minvalue is correct from this initialization



    for(let i=0; i<data.length; i++){
        maxValue = (maxValue < data[i][2] ? data[i][2] : maxValue);
        minValue = (minValue > data[i][1] ? data[i][1] : minValue);
    }
    yOffset = minValue;
    element.setAttribute("width", width);
    element.setAttribute("height", height);
    const xScale = d3.scaleBand()
        .domain(data)
        .rangeRound([0, 1000]);


    const yScale = d3.scaleLinear()
        .domain([0,maxValue]) //y-scaling must be fixed -Fredi
        .range([height, 0]);



    const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])


    const sticks = d3.select('svg')
        .selectAll('.sticks')
        .data(data)
        .enter()
        .append('rect')
        .classed('strick', true)
        .attr('width', 2)
        .attr('height', function(i){ return( height - yScale(Math.abs(i[1]-i[2]) ))})
        .attr('x', function(d, i){return (xScale.bandwidth()) * i + (xScale.bandwidth() * 0.5) }) //Offset all sticks by half of the bandwidth to center the sticks
        .attr('y', function(i){return yScale(i[2])}) //The y-offset for the sticks is just the high value

    const candles = d3.select('svg')
        .selectAll('.candles')
        .data(data)
        .enter()
        .append('rect')
        .classed('candle', true)
        .attr('width', xScale.bandwidth())
        .attr('height', function(i){ return( height - yScale(Math.abs(i[4]-i[3]) ))})
        //A candle is bullish(#00ff00) if close > open and bearish(#ff0000) if close < open
        .attr('fill', function(i){ return(i[4]<i[3] ? "#00ff00" : "#ff0000") })
        .attr('x', function(d, i){return xScale.bandwidth() * i  })
        //Bullish candles go up, so their y-offset from the top should be the close value, while bearish go down, so their y-offset should be the open value
        .attr('y', function(i){ return (i[4]<i[3] ? yScale(i[3]) : yScale(i[4]) ) });


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
    xhttp.open("GET", "https://api.pro.coinbase.com/products/BTC-EUR/candles?start=2021-04-03&end=2021-05-03&granularity=86400", true);
    xhttp.send();
}
