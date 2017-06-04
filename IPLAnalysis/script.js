var margin = { top: 50, right: 0, bottom: 100, left: 30 },
    width = 1200 - margin.left - margin.right,
    height = 850 - margin.top - margin.bottom,
    gridSize = Math.floor(width / 24),
    legendElementWidth = gridSize*2,
    buckets = 8,
    colors = ["#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
    overs = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th"];

var alldata;
var opponentsLabels;

// Canvas for drawing Circles
var canvas = d3.select("#circle")
    .append("svg")
    .attr("width",width)
    .attr("height",height / 4);



// svg for drawing heat map
var svg = d3.select("#heatmap").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//for over labels
var oversLabels = svg.selectAll(".oversLabel")
    .data(overs)
    .enter().append("text")
    .text(function(d) { return d; })
    .attr("x", function(d, i) { return i * gridSize; })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + gridSize / 2 + ", -6)")
    .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "oversLabel mono axis" : "oversLabel mono"); });

//Loading TSV Data
d3.tsv("IPL_DATA.txt", function(d) {
        return {
            Season: d.Season,
            MatchNo: d.MatchNo,
            Innings: d.Innings,
            BattingTeam: d.BattingTeam,
            Bowler: d.Bowler,
            RunScored: +d.RunScored,
            Extra: +d.Extra,
            OverNo: d.OverNo,
            HomeTeam: d.HomeTeam,
            AwayTeam: d.AwayTeam,
            MatchBetween: d.MatchBetween,
        }
    },
    function(error, data){

        //Change the format of data - aggreagate runs - group by team
        var data5 = d3.nest()
            .key(function(d) { return  d.BattingTeam; })
            .rollup(function(d) {
                return d3.sum(d, function(g) {return g.RunScored + g.Extra; });
            }).entries(data);

        var data6 = [];

        for (i = 0; i < data5.length; i++){
            if (data5[i].key === "Mumbai Indians") {
                lvDesc = "MI";
                lvColor = "#0033cc";
            }else if (data5[i].key === "Delhi Daredevils") {
                lvDesc = "DD";
                lvColor = "#00004d";
            }else if (data5[i].key === "Rising Pune Supergiants") {
                lvDesc = "RPS";
                lvColor = "#9966ff";
            }else if (data5[i].key === "Kolkata Knight Riders") {
                lvDesc = "KKR";
                lvColor = "#330066";
            }else if (data5[i].key === "Kings XI Punjab") {
                lvDesc = "Kings XI";
                lvColor = "#cc0000";
            }else if (data5[i].key === "Gujarat Lions") {
                lvDesc = "GL";
                lvColor = "#e63900";
            }else if (data5[i].key === "Sunrisers Hyderabad") {
                lvDesc = "SRH";
                lvColor = "#ff884d";
            }else if (data5[i].key === "Royal Challengers Bangalore") {
                lvDesc = "RCB";
                lvColor = "#801a00";
            }
            data6[i] = {teamFullName: data5[i].key, team : lvDesc, runScored : +data5[i].values, color : lvColor}
        }

        // Draw circles for each team with team name and run scored
        var circle = canvas.selectAll(".circle")
            .data(data6)
            .enter()
            .append("circle")
            .attr("cx",function(d,i){return 120 * (i+1)})
            .attr("cy",100)
            .attr("r",function(d){ return d.runScored / 45;})
            .attr("fill", function(d){ return d.color})
            .on("click", function (d){

                alldata = data;
                opponentsLabels
                    .data(opponents)
                    .transition().duration(500)
                    .style("opacity", 0)
                    .transition().duration(500)
                    .style("opacity", 1)
                    .text(function(d) { return "" });

                heatmapChart(d.teamFullName);
            });

        canvas.selectAll(".text")
            .data(data6)
            .enter()
            .append("text")
            .attr("x", function(d,i){return 120 * (i+1)})
            .attr("y", 90)
            .attr("text-anchor", "middle")
            .text(function(d){
                return d["team"];
            })
            .style({
                "fill":"white",
                "font-size": "9pt",
                "font-family": "Consolas, courier"
            });

        canvas.selectAll(".text")
            .data(data6)
            .enter()
            .append("text")
            .attr("x", function(d,i){return 120 * (i+1)})
            .attr("y", 110)
            .attr("text-anchor", "middle")
            .text(function(d){
                return d["runScored"];
            })
            .style({
                "fill":"white",
                "font-size": "9pt",
                "font-family": "Consolas, courier"
            });

        // Aggregate ball by ball data into over by over
        var data2 = d3.nest()
            .key(function(d) { return d.Season + "~" + d.MatchNo +"~"+ d.Innings + "~" + d.BattingTeam + "~" + d.OverNo + "~" + d.HomeTeam + "~" + d.AwayTeam + "~" + d.MatchBetween + "~" + d.Bowler; })
            .rollup(function(d) {
                return d3.sum(d, function(g) {return g.RunScored + g.Extra; });
            }).entries(data);

        var data4 = [];
        var j = 0;
        var index = 0;
        var lvMatchNo;
        var lvOpponentIndex = 0;
        var opponents = [];

        //Change the formate
        for (i = 0; i <data2.length ; i++){
            var data3 = data2[i].key.split('~');
            if (data3[3] === "Mumbai Indians") {

                if (data3[1] != lvMatchNo) {
                    index++;
                    if (data3[5] === "Mumbai Indians") {
                        opponents[lvOpponentIndex++] = data3[6];
                    }else{
                        opponents[lvOpponentIndex++] = data3[5];
                    }
                }
                data4[j++] = {
                    Index: index,
                    Season: data3[0],
                    MatchNo: data3[1],
                    Innings: data3[2],
                    BattingTeam: data3[3],
                    OverNo: data3[4],
                    RunScored: +data2[i].values,
                    MatchBetween: data3[7],
                    Bowler: data3[8]
                };
                lvMatchNo = data3[1];
            }
        }

        //Opponents Labels
        opponentsLabels = svg.selectAll(".opponentsLabel")
            .data(opponents)
            .enter().append("text")
            .attr("x", width)
            .attr("y", function (d, i) { return i * gridSize; })
            .text(function (d) { return d; })
            .style("text-anchor", "end")
            .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
            .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "opponentsLabel mono axis" : "opponentsLabel mono"); });


        var colorScale = d3.scale.quantile()
            .domain([0, buckets - 1, 20])
            .range(colors);


        // Draw boxes
        var cards = svg.selectAll(".OverNo")
            .data(data4, function(d) {return d.Index+':'+d.OverNo;});

        cards.append("title");

        cards.enter().append("rect")
            .attr("x", function(d) { return (d.OverNo - 1) * gridSize; })
            .attr("y", function(d) { return (d.Index - 1) * gridSize; })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("class", "OverNo bordered")
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", colors[0])
            .on("click",function(d){
                cards.select("title").text(function(d) {
                    return "Bowler: " + d.Bowler + ", Runs Scored: " + d.RunScored;
                });
            });

        cards.transition().duration(1000)
            .style("fill", function(d) { return colorScale(d.RunScored); });

        cards.select("title").text(function(d) {
            return "Bowler: " + d.Bowler + ", Runs Scored: " + d.RunScored;
        });

        cards.exit().remove();

        //Legends
        var legend = svg.selectAll(".legend")
            .data([0].concat(colorScale.quantiles()), function(d) { return d; });

        legend.enter().append("g")
            .attr("class", "legend");

        legend.append("text")
            .attr("class","mono")
            .text("Runs Scored per Over")
            .attr("x", function(d,i) {return legendElementWidth * 3;})
            .attr("y", height);

        legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height + gridSize / 2)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });

        legend.append("text")
            .attr("class", "mono")
            .text(function(d)
            {
                return ">= " + Math.round(d);
            })
            .attr("x", function(d, i) { return (legendElementWidth * i) + 25; })
            .attr("y", height + 1.5 * gridSize);



        legend.exit().remove();
    }
)

//heatmap chart function to refresh data on click
var heatmapChart = function(selectedTeam) {

    var data2 = d3.nest()
        .key(function(d) { return d.Season + "~" + d.MatchNo +"~"+ d.Innings + "~" + d.BattingTeam + "~" + d.OverNo + "~" + d.HomeTeam + "~" + d.AwayTeam + "~" + d.MatchBetween + "~" + d.Bowler; })
        .rollup(function(d) {
            return d3.sum(d, function(g) {return g.RunScored + g.Extra; });
        }).entries(alldata);

    var data4 = [];
    var j = 0;
    var index = 0;
    var lvMatchNo;
    var lvOpponentIndex = 0;
    var opponents = [];
    for (i = 0; i <data2.length ; i++){
        var data3 = data2[i].key.split('~');
        if (data3[3] === selectedTeam) {

            if (data3[1] != lvMatchNo) {
                index++;
                if (data3[5] === selectedTeam) {
                    opponents[lvOpponentIndex++] = data3[6];
                }else{
                    opponents[lvOpponentIndex++] = data3[5];
                }
            }
            data4[j++] = {
                Index: index,
                Season: data3[0],
                MatchNo: data3[1],
                Innings: data3[2],
                BattingTeam: data3[3],
                OverNo: data3[4],
                RunScored: +data2[i].values,
                MatchBetween: data3[7],
                Bowler: data3[8]
            };
            lvMatchNo = data3[1];
        }
    }
    opponentsLabels
        .data(opponents)
        .transition().duration(500)
        .style("opacity", 0)
        .transition().duration(500)
        .style("opacity", 1)
        .text(function(d) { return d })

    var colorScale = d3.scale.quantile()
        .domain([0, buckets - 1, 20])
        // d3.max(data4, function (d) { return d.RunScored; })])
        .range(colors);


    var cards = svg.selectAll(".OverNo")
        .data(data4, function(d) {return d.Index+':'+d.OverNo;});

    cards.append("title");

    cards.enter().append("rect")
        .attr("x", function(d) { return (d.OverNo - 1) * gridSize; })
        .attr("y", function(d) { return (d.Index - 1) * gridSize; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "OverNo bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("fill", colors[0])
        .on("click",function(d){
            cards.select("title").text(function(d) {
                return "Bowler: " + d.Bowler + ", Runs Scored: " + d.RunScored;
            });
        });

    cards.transition().duration(1000)
        .style("fill", function(d) { return colorScale(d.RunScored); });

    cards.select("title").text(function(d) {
        return "Bowler: " + d.Bowler + ", Runs Scored: " + d.RunScored;
    });

    cards.exit().remove();

    var legend = svg.selectAll(".legend")
        .data([0].concat(colorScale.quantiles()), function(d) { return d; });

    legend.enter().append("g")
        .attr("class", "legend");

    legend.append("text")
        .attr("class","mono")
        .text("Runs Scored per Over")
        .attr("x", function(d,i) {return legendElementWidth * 3;})
        .attr("y", height);

    legend.append("rect")
        .attr("x", function(d, i) { return legendElementWidth * i; })
        .attr("y", height + gridSize / 2)
        .attr("width", legendElementWidth)
        .attr("height", gridSize / 2)
        .style("fill", function(d, i) { return colors[i]; });

    legend.append("text")
        .attr("class", "mono")
        .text(function(d)
        {
            return ">= " + Math.round(d);
        })
        .attr("x", function(d, i) { return (legendElementWidth * i) + 25; })
        .attr("y", height + 1.5 * gridSize);

    legend.exit().remove();
}
