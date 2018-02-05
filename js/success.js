window.onload = function () {
  var chart = new CanvasJS.Chart("center", {

    title:{
      text:"Best selling dishes"				

    },
                      animationEnabled: true,
    axisX:{
      interval: 1,
      gridThickness: 1,
      labelFontSize: 10,
      labelFontStyle: "normal",
      labelFontWeight: "normal",
      labelFontFamily: "Lucida Sans Unicode"

    },
    axisY2:{
      interlacedColor: "rgba(1,77,101,.2)",
      gridColor: "rgba(1,77,101,.1)"

    },

    data: [
    {     
      type: "bar",
              name: "dishes",
      axisYType: "secondary",
      color: "#541055",				
      dataPoints: [
      
      {y: 5, label: "Chicken Noodles"  },
      {y: 6, label: "Chips"  },
      {y: 7, label: "Fried Rice"  },
      {y: 8, label: "Chicken Curry"  },
      {y: 10, label: "Spice Box"  }
      ]
    }
    
    ]
  });

chart.render();
}