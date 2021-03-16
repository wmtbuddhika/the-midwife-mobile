var nvd3Charts = function() {
	
        var myColors = ["#7a6770","#ead0de","#4bea5d","#4bea5d",
			"#4bea5e", "#deea74", "#d77e14","#d70007",
			"#d73026", "#000000"];
        d3.scale.myColors = function() {
            return d3.scale.ordinal().range(myColors);
        };
        
	var startChart1 = function(r) {
		/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
		nv.addGraph(function() {
			var chart = nv.models.lineChart().margin({
				left : 100
			})//Adjust chart margins to give the x-axis some breathing room.
			.useInteractiveGuideline(true)//We want nice looking tooltips and a guideline!
			.transitionDuration(350)//how fast do you want the lines to transition?
			.showLegend(true)//Show the legend, allowing users to turn on/off line series.
			.showYAxis(true)//Show the y-axis
			.showXAxis(true)//Show the x-axis
			.color(d3.scale.myColors().range());;

			chart.xAxis//Chart x-axis settings
			.axisLabel('Age (month)').tickFormat(d3.format(',r'));

			chart.yAxis//Chart y-axis settings
			.axisLabel('Weight (kg)').tickFormat(d3.format('.02f'));

			/* Done setting the chart up? Time to render it!*/
			var myData = sinAndCos();
			//You need data...

			d3.select('#chart-1 svg')//Select the <svg> element you want to render the chart in.
			.datum(myData)//Populate the <svg> element with chart data...
			.call(chart);
			//Finally, render the chart!

			//Update the chart when window resizes.
			nv.utils.windowResize(function() {
                            chart.update();
			});
			return chart;
		});

		function sinAndCos() {
			var overWeight = [], overWeightMin = [], normalWeightMax = [], normalWeight = [],
				normalWeightMin = [], lowWeightMin = [], lowWeightMax = [], max = [], min = [], weight = [];

			max.push(
				{x : 0, y : 17.5},
				{x : 1, y : 17.5},
				{x : 2, y : 17.5},
				{x : 3, y : 17.5},
				{x : 4, y : 17.5},
				{x : 5, y : 17.5},
				{x : 6, y : 17.5},
				{x : 7, y : 17.5},
				{x : 8, y : 17.5},
				{x : 9, y : 17.5},
				{x : 10, y : 17.5},
				{x : 11, y : 17.5},
				{x : 12, y : 17.5},
				{x : 13, y : 17.5},
				{x : 14, y : 17.5},
				{x : 15, y : 17.5},
				{x : 16, y : 17.5},
				{x : 17, y : 17.5},
				{x : 18, y : 17.5},
				{x : 19, y : 17.5},
				{x : 20, y : 17.5},
				{x : 21, y : 17.5},
				{x : 22, y : 17.5},
				{x : 23, y : 17.5},
				{x : 24, y : 17.5},
			);
			overWeight.push(
				{x : 0, y : 4.8},
				{x : 1, y : 6.2},
				{x : 2, y : 7.5},
				{x : 3, y : 8.5},
				{x : 4, y : 9.3},
				{x : 5, y : 10.0},
				{x : 6, y : 10.5},
				{x : 7, y : 11.0},
				{x : 8, y : 11.5},
				{x : 9, y : 11.9},
				{x : 10, y : 12.3},
				{x : 11, y : 12.7},
				{x : 12, y : 13.1},
				{x : 13, y : 13.45},
				{x : 14, y : 13.75},
				{x : 15, y : 14.1},
				{x : 16, y : 14.4},
				{x : 17, y : 14.75},
				{x : 18, y : 15.1},
				{x : 19, y : 15.4},
				{x : 20, y : 15.7},
				{x : 21, y : 16.05},
				{x : 22, y : 16.4},
				{x : 23, y : 16.7},
				{x : 24, y : 17.0},
			);
			overWeightMin.push(
				{x : 0, y : 4.3},
				{x : 1, y : 5.5},
				{x : 2, y : 6.6},
				{x : 3, y : 7.5},
				{x : 4, y : 8.2},
				{x : 5, y : 8.8},
				{x : 6, y : 9.3},
				{x : 7, y : 9.8},
				{x : 8, y : 10.2},
				{x : 9, y : 10.55},
				{x : 10, y : 10.9},
				{x : 11, y : 11.2},
				{x : 12, y : 11.5},
				{x : 13, y : 11.8},
				{x : 14, y : 12.1},
				{x : 15, y : 12.4},
				{x : 16, y : 12.6},
				{x : 17, y : 12.9},
				{x : 18, y : 13.2},
				{x : 19, y : 13.45},
				{x : 20, y : 13.75},
				{x : 21, y : 14.05},
				{x : 22, y : 14.3},
				{x : 23, y : 14.6},
				{x : 24, y : 14.85},
			);
			normalWeightMax.push(
				{x : 0, y : 3.7},
				{x : 1, y : 4.75},
				{x : 2, y : 5.8},
				{x : 3, y : 6.6},
				{x : 4, y : 7.25},
				{x : 5, y : 7.75},
				{x : 6, y : 8.2},
				{x : 7, y : 8.6},
				{x : 8, y : 8.95},
				{x : 9, y : 9.25},
				{x : 10, y : 9.65},
				{x : 11, y : 9.8},
				{x : 12, y : 10.1},
				{x : 13, y : 10.35},
				{x : 14, y : 10.55},
				{x : 15, y : 10.8},
				{x : 16, y : 11.05},
				{x : 17, y : 11.3},
				{x : 18, y : 11.55},
				{x : 19, y : 11.8},
				{x : 20, y : 12.1},
				{x : 21, y : 12.3},
				{x : 22, y : 12.55},
				{x : 23, y : 12.8},
				{x : 24, y : 13.0},
			);
			normalWeight.push(
				{x : 0, y : 3.2},
				{x : 1, y : 4.15},
				{x : 2, y : 5.1},
				{x : 3, y : 5.8},
				{x : 4, y : 6.4},
				{x : 5, y : 6.9},
				{x : 6, y : 7.3},
				{x : 7, y : 7.65},
				{x : 8, y : 7.95},
				{x : 9, y : 8.25},
				{x : 10, y : 8.5},
				{x : 11, y : 8.7},
				{x : 12, y : 8.95},
				{x : 13, y : 9.15},
				{x : 14, y : 9.4},
				{x : 15, y : 9.6},
				{x : 16, y : 9.8},
				{x : 17, y : 10.0},
				{x : 18, y : 10.2},
				{x : 19, y : 10.45},
				{x : 20, y : 10.65},
				{x : 21, y : 10.85},
				{x : 22, y : 11.05},
				{x : 23, y : 11.25},
				{x : 24, y : 11.5},
			);
			normalWeightMin.push(
				{x : 0, y : 2.8},
				{x : 1, y : 3.6},
				{x : 2, y : 4.45},
				{x : 3, y : 5.15},
				{x : 4, y : 5.65},
				{x : 5, y : 6.05},
				{x : 6, y : 6.45},
				{x : 7, y : 6.75},
				{x : 8, y : 7.0},
				{x : 9, y : 7.25},
				{x : 10, y : 7.5},
				{x : 11, y : 7.75},
				{x : 12, y : 7.95},
				{x : 13, y : 8.15},
				{x : 14, y : 8.3},
				{x : 15, y : 8.5},
				{x : 16, y : 8.65},
				{x : 17, y : 8.8},
				{x : 18, y : 9.0},
				{x : 19, y : 9.2},
				{x : 20, y : 9.4},
				{x : 21, y : 9.55},
				{x : 22, y : 9.75},
				{x : 23, y : 9.95},
				{x : 24, y : 10.15},
			);
			lowWeightMin.push(
				{x : 0, y : 2.4},
				{x : 1, y : 3.15},
				{x : 2, y : 3.95},
				{x : 3, y : 4.5},
				{x : 4, y : 5.0},
				{x : 5, y : 5.35},
				{x : 6, y : 5.7},
				{x : 7, y : 5.95},
				{x : 8, y : 6.2},
				{x : 9, y : 6.45},
				{x : 10, y : 6.65},
				{x : 11, y : 6.85},
				{x : 12, y : 7.0},
				{x : 13, y : 7.15},
				{x : 14, y : 7.35},
				{x : 15, y : 7.5},
				{x : 16, y : 7.7},
				{x : 17, y : 7.85},
				{x : 18, y : 8.0},
				{x : 19, y : 8.2},
				{x : 20, y : 8.45},
				{x : 21, y : 8.65},
				{x : 22, y : 8.75},
				{x : 23, y : 8.9},
				{x : 24, y : 9.15},
			);
			lowWeightMax.push(
				{x : 0, y : 2.15},
				{x : 1, y : 2.75},
				{x : 2, y : 3.45},
				{x : 3, y : 4.0},
				{x : 4, y : 4.45},
				{x : 5, y : 4.8},
				{x : 6, y : 5.1},
				{x : 7, y : 5.35},
				{x : 8, y : 5.55},
				{x : 9, y : 5.75},
				{x : 10, y : 5.95},
				{x : 11, y : 6.15},
				{x : 12, y : 6.3},
				{x : 13, y : 6.5},
				{x : 14, y : 6.65},
				{x : 15, y : 6.8},
				{x : 16, y : 6.95},
				{x : 17, y : 7.1},
				{x : 18, y : 7.25},
				{x : 19, y : 7.35},
				{x : 20, y : 7.5},
				{x : 21, y : 7.65},
				{x : 22, y : 7.8},
				{x : 23, y : 7.9},
				{x : 24, y : 8.1},
			);

			min.push(
				{x : 0, y : 0},
			);

			for (let i = 0; i < r.data.length; i++) {
				if (r.data[i].month <= 24) {
					weight.push({x: r.data[i].month, y: r.data[i].weight});
				}
			}

			//Line chart data should be sent as an array of series objects.
			return [{
				values : max,
				key : 'Max',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : overWeight,
				key : 'Over Weight Max',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : overWeightMin,
				key : 'Over Weight Min',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : normalWeightMax,
				key : 'Median Weight Max',
				area : false //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : normalWeight,
				key : 'Median Weight',
				area : false //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : normalWeightMin,
				key : 'Median Weight Min',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : lowWeightMin,
				key : 'Low Weight Min',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : lowWeightMax,
				key : 'Low Weight Max',
				area : true //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : min,
				key : 'Min',
				area : false //area - set to true if you want this line to turn into a filled area chart.
			}, {
				values : weight,
				key : 'Weight',
				area : false //area - set to true if you want this line to turn into a filled area chart.
			}];
		}

	};

	return {		
		init : function(user_id) {
			$.ajax({
				url : 'http://54.166.227.166:3000/api/get/weight',
				type : 'post',
				dataType: 'json',
				processData: false,
				data: JSON.stringify({"user_id" : user_id}),

				error : function(e){
					console.log(e);
					if (e.status === 401) {
					}
				},
				success : function(r){
					if (r.data != null && r.data.length > 0) {
						$("#weight-details").show();
						startChart1(r);

						$('html, body').animate({
							scrollTop: $("#weight-details").offset().top
						}, 2000);
					} else {
						$("#weight-details").hide();
					}
				}
			});
		}
	};
}();