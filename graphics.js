function stockPrice() {
  // And then we will define our empty list up here
  const daysList = [];
  let i = 0;
  for (i = 1; i < 23; i++) {
    daysList.push(i);
  }

  const prices = [160.96, 157.58, 156.78, 155.85, 160.59, 188.26, 
186.69, 181.22, 180.73, 178.58, 184.22, 183.77, 183.84, 183.13, 
185.87, 185.01, 190.04, 185.35, 186.43, 187.49, 190.37, 188.07, 185.62];

// Defining the data
const stockData = [{
  x:daysList,
  y:prices,
  mode:"markers",
  type:"scatter"
}];

// Defining the layout
const layout3 = {
  xaxis: {range: [0, 23], title: "Days in August"},
  yaxis: {range: [150, 200], title: "Adjusted Closing Stock Value"},
  title: "Adjusted Closing Novo Nordisk Stock Price (August 2023)"
};

Plotly.newPlot("coolPlot", stockData, layout3);
// End of the first function
}

function profit() {
  // The years we will be providing analysis over
  const yearArray = [2019, 2020, 2021, 2022, 2023];

  // The profit levels for the company last 4-5 years
  const profitArray = [38951000, 42138000, 47757000, 55525000, 
  67239000];

  const profitData = [{
    x:yearArray,
    y:profitArray,
    type:"bar",
    orientation:"v",
    marker: {color:"rgba(255,0,0,.5)"}
  }];

  const layout = {
    title: "<b>" + "Net Profit for Novo Nordisk 2019-present (in USD thousands)" + "</b>",
    xaxis: {title: "Year"},
    yaxis: {title: "Profit"}
  };

  Plotly.newPlot("myPlot", profitData, layout);
}
// New section - New plot

const yearArray2 = [2019, 2020, 2021];
const profitPercent = [.112, .118, .120];

function percent() {
  const percentData = [{
    x:yearArray2,
    y:profitPercent,
    type:"bar",
    orientation:"v",
    marker: {color: "rgba(0,0,255,.5)"}
  }];

  const layoutTwo = {
    title: "<b>" + "What percentage of Denmark GDP is Novo profit?" + "</b>",
    xaxis: {xticks: yearArray2, title: "Year"},
    yaxis: {title: "Percentage of GDP"}
  };

  Plotly.newPlot("percentPlot", percentData, layoutTwo);


  const element = document.getElementById("percentPlot");
}