function getTokenFromCookies(cookieName) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}

const mainChartOptions = {
  chart: {
    height: 240,
    type: "area",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    dropShadow: {
      enabled: true,
      opacity: 0.1,
      blur: 1,
      left: -5,
      top: 18,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#02172C"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      inverseColors: true,
      opacityFrom: 0.15,
      opacityTo: 0.02,
      stops: [40, 100],
    },
  },
  grid: {
    borderColor: "#dbeaea",
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 4,
    fontSize: "14px",
    markers: {
      width: 9,
      height: 9,
      strokeWidth: 0,
      radius: 20,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  tooltip: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    style: {
      color: "#343a40",
    },
  },
  subtitle: {
    text: "Tren Jumlah Pelanggaran Setiap Bulan",
    align: "left",
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "15px",
      color: "text-dark",
      fontWeight: "bold",
      marginBottom: "1rem",
      fontFamily: "Poppins",
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    categories: Array.from(new Array(12), (_, i) => monthToLabel(i)),
    labels: {
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: -10,
      offsetY: 0,
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
  },
};

const locationChartOptions = {
  chart: {
    height: 240,
    type: "bar",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["rgba(255, 99, 132, 1)"],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 4,
    fontSize: "14px",
    markers: {
      width: 9,
      height: 9,
      strokeWidth: 0,
      radius: 20,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  tooltip: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    style: {
      color: "#343a40",
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
  },
};

const areaChartOptions = {
  chart: {
    height: 240,
    type: "bar",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["rgba(54, 162, 235, 1)"],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 4,
    fontSize: "14px",
    markers: {
      width: 9,
      height: 9,
      strokeWidth: 0,
      radius: 20,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  tooltip: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    style: {
      color: "#343a40",
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#8480ae",
        fontSize: "12px",
        fontFamily: "Poppins",
      },
    },
  },
};

const typeChartOptions = {
  chart: {
    height: 240,
    type: "pie",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 205, 86, 1)",
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 4,
    fontSize: "14px",
    markers: {
      width: 9,
      height: 9,
      strokeWidth: 0,
      radius: 20,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  tooltip: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    style: {
      color: "#343a40",
    },
  },
  dataLabels: {
    enabled: false,
  },
};

const subtypeChartOptions = {
  chart: {
    height: 240,
    type: "doughnut",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    "rgba(255, 99, 132, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 205, 86, 1)",
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    offsetY: 4,
    fontSize: "14px",
    markers: {
      width: 9,
      height: 9,
      strokeWidth: 0,
      radius: 20,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  tooltip: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    style: {
      color: "#343a40",
    },
  },
  dataLabels: {
    enabled: false,
  },
};

const fetchDataFromServer = async () => {
  try {
    const token = getTokenFromCookies("Login");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Authentication Error",
        text: "Kamu Belum Login!",
      }).then(() => {
        window.location.href = "https://portsafe-apps.github.io/";
      });
      return [];
    }

    const targetURL =
      "https://asia-southeast2-ordinal-stone-389604.cloudfunctions.net/GetAllReportbyUser";

    const myHeaders = new Headers();
    myHeaders.append("Login", token);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(targetURL, requestOptions);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function monthToLabel(month) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return monthNames[month];
}

function getReportsCountByMonth(data, month) {
  return data.filter((report) => new Date(report.date).getMonth() === month).length;
}

function getLocationReportsCount(data, location) {
  return data.filter((report) => report.location.locationName === location).length;
}

function getAreaReportsCount(data, area) {
  return data.filter((report) => report.area.areaName === area).length;
}

function getTypeReportsCount(data, type) {
  return data.filter((report) =>
    report.typeDangerousActions.some((t) => t.typeName === type)
  ).length;
}

function getSubtypeReportsCount(data, subtype) {
  return data.filter((report) =>
    report.typeDangerousActions.some((t) => t.subTypes.includes(subtype))
  ).length;
}

function createApexChart(chartId, chartOptions, clickCallback) {
  try {
    const options = {
      chart: {
        type: chartOptions.chart.type,
        height: chartOptions.chart.height,
        plotOptions: chartOptions.plotOptions,
      },
      colors: chartOptions.colors,
      legend: chartOptions.legend,
      tooltip: chartOptions.tooltip,
      dataLabels: chartOptions.dataLabels,
      xaxis: chartOptions.xaxis,
      yaxis: chartOptions.yaxis,
    };

    const chart = new ApexCharts(document.getElementById(chartId), options);
    chart.render();

    document.getElementById(chartId).addEventListener("click", function () {
      try {
        if (chart && chart.w && chart.w.globals && chart.w.globals.selectedDataPoints) {
          const selectedDataPoints = chart.w.globals.selectedDataPoints;

          if (selectedDataPoints && selectedDataPoints.length > 0) {
            const clickedIndex = selectedDataPoints[0].dataPointIndex;

            if (clickCallback) {
              clickCallback(clickedIndex);
            }
          }
        }
      } catch (error) {
        console.error("Error handling click event:", error);
      }
    });
  } catch (error) {
    console.error("Error creating ApexChart:", error);
  }
}

const processDataAndCreateCharts = (data) => {
  const allChartData = {
    monthly: {
      chartData: {
        chart: {
          type: "line",
        },
        series: [
          {
            name: "Total Reports per Month",
            data: Array.from(new Array(12), (_, i) => getReportsCountByMonth(data, i)),
          },
        ],
        xaxis: {
          categories: Array.from(new Array(12), (_, i) => monthToLabel(i)),
        },
      },
      updateCallback: null,
    },
    location: {
      chartData: {
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        series: [
          {
            name: "Total Reports by Location",
            data: Array.from(new Set(data.map((report) => report.location.locationName)))
              .map((location) => getLocationReportsCount(data, location)),
          },
        ],
        xaxis: {
          categories: Array.from(new Set(data.map((report) => report.location.locationName))),
        },
      },
      updateCallback: updateLocationChart,
    },
    // Add other chart data as needed
  };

  createApexChart("monthlyChart", allChartData.monthly.chartData, allChartData.monthly.updateCallback);

  function updateLocationChart(locationIndex) {
    const selectedLocation = allChartData.location.chartData.xaxis.categories[locationIndex];
    const locationData = data.filter((report) => report.location.locationName === selectedLocation);

    updateAreaChart(locationData);
  }

  function updateAreaChart(data) {
    const areas = Array.from(new Set(data.map((report) => report.area.areaName)));
  
    const areaChartData = {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      series: [
        {
          name: "Total Reports by Area",
          data: areas.map((area) => getAreaReportsCount(data, area)),
        },
      ],
      xaxis: {
        categories: areas,
      },
    };
  
    createApexChart("areaChart", areaChartData, allChartData.location.updateCallback);
  }
  
  const typeChartData = {
    chartData: typeChartOptions,
    updateCallback: null,
  };

  createApexChart("typeChart", typeChartData.chartData, typeChartData.updateCallback);

  const subtypeChartData = {
    chartData: subtypeChartOptions,
    updateCallback: null,
  };

  createApexChart("subtypeChart", subtypeChartData.chartData, subtypeChartData.updateCallback);
};

fetchDataFromServer()
  .then((data) => {
    processDataAndCreateCharts(data);
  })
  .catch((error) => console.error("Error fetching data:", error));