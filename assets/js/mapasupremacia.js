
// console.log("antes")
// fetch("https://backend-supremacia.herokuapp.com/maps", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// console.log("despues")


var myHeaders = new Headers();
// myHeaders.append("User-Agent", "\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)\",  \"AppleWebKit/537.36 (KHTML, like Gecko)\", \"Chrome/80.0.3987.106 Safari/537.36\"");
myHeaders.append("Authorization", "Basic 4bd25340-679b-4909-aed4-fd4848ede956");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var url = "https://backend-supremacia.herokuapp.com/api/data";

// fetch("https://backend-supremacia.herokuapp.com/api/maps", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
var tempData = [];
fetch("https://backend-supremacia.herokuapp.com/api/data", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for ( var index=0; index<result.maps.length; index++ ) {
      let carro = {
        "id": index,
        "name": result.maps[index].name,
        //"color": chart.colors.getIndex(0),
        "color": am4core.color("rgba(241, 158, 0, 1)"),
        "data": [
          {
            "title": result.maps[index].title,
            "id": result.maps[index].abbreviation, // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
            "customData": "2021",
            "capital": result.maps[index].capital,
            "latitude": result.maps[index].latitude,
            "longitude": result.maps[index].longitude,
            "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
            "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"       
          },
        ]
       }
      tempData.push(carro);
      //console.log(tempData[index]);
    }
    console.log(tempData);  
    // am4core.ready();
  })      
  .catch(error => console.log('error', error));
  
am4core.ready(function() {
  

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  /**
    * Define SVG path for target icon
    */

  var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


  /* Create map instance */
  var chart = am4core.create("chartdiv", am4maps.MapChart);
  
  /* Set map definition */
  chart.geodata = am4geodata_worldLow;
  
  /* Set projection */
  chart.projection = new am4maps.projections.Miller();

  /* Create map polygon series */
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  
  // Exlude Antartica y China
  polygonSeries.exclude = ["AQ"];

  /* Make map load polygon (like country names) data from GeoJSON */
  polygonSeries.useGeodata = true;
  am4core.options.autoSetClassName = true;

  // Add some custom data
  polygonSeries.data = [
    {
    "id": "US",
    "name": "Estados unidos"
    }, {
      "id": "CA",
      "name": "Canadá"
    }, {
      "id": "MX",
      "name": "México"
    }, {
      "id": "BZ",
      "name": "Belice"
    }, {
      "id": "ES",
      "name": "España"
    }, {
      "id": "DO",
      "name": "República Dominicana"
    }, {
      "id": "PA",
      "name": "Panamá"
    }, {
      "id": "PE",
      "name": "Perú"
    }, {
      "id": "FR",
      "name": "Francia"
    }, {
      "id": "DE",
      "name": "Alemania"
    }, {
      "id": "IT",
      "name": "Italia"
    }, {
      "id": "GB",
      "name": "Reino Unido"
    }, {
      "id": "GL",
      "name": "Groenlandia"
    }, {
      "id": "RU",
      "name": "Rusia",
      "zoomLevel": 2.5,
      "zoomGeoPoint": {
        "latitude": 62,
        "longitude": 96
      }
    }
  ]

  var excludedCountries = ["AQ"];

  // var groupDatat = [];

  // fetch("https://backend-supremacia.herokuapp.com/api/maps", requestOptions)
  // .then(response => response.json())
  // .then(result => {
  //   // console.log(result.data)
  //   var dato = result.data;
  //   for(let valor of dato){ 
  //     let country = {
  //       "name": valor.name,
  //       "color": am4core.color("rgba(241, 158, 0, 1)"),
  //       "data": [
  //         {
  //           "name": valor.name,
  //           "capital": valor.capital,
  //           "id": valor.abbreviation, // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
  //           "flag": valor.flag, 
  //           "latitude": valor.latitude,
  //           "longitude": valor.longitude,
  //           "title": valor.title,
  //           "head": valor.head,
  //           "description": valor.description
  //         },
  //       ]
  //     }
  //     groupDatat.push(country);
  //   }      
  //   //console.log(groupDatat);
  // })
  // .catch(error => console.log('error', error));

  // console.log(groupDatat);
  // console.log("yaea");
  // var groupDatas = [];
  // groupDatas = groupDatat;
  // console.log(groupDatas);

  

  var groupData = [
    {
      "name": "Argentina",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Argentina",
          "id": "AR", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "json":"argentinaLow",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Buenos Aires",
          "latitude": -34.6118,
          "longitude": -64.4173,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"       
        },
      ]
    },
    {
      "name": "Belice",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Belice",
          "id": "BZ", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Belmopán",
          "latitude": 17.189877,
          "longitude": -88.49765,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1000px-Flag_of_Belize.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"       
        },
      ]
    },
    {
      "name": "Bolivia",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Bolivia",
          "id": "BO", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Sucre",
          "latitude": -19.0421,
          "longitude": -65.2559,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/800px-Flag_of_Bolivia_%28state%29.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        },
      ]
    },
    {
      "name": "Chile",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Chile",
          "id": "CL", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Santiago de Chile",
          "latitude": -33.4691,
          "longitude": -70.642,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1500px-Flag_of_Chile.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        },
      ]
    },
    {
      "name": "Colombia",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Colombia",
          "id": "CO", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Bogotá",
          "latitude": 4.6473,
          "longitude": -74.0962,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/640px-Flag_of_Colombia.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        },
      ]
    },
    {
      "name": "Cuba",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Cuba",
          "id": "CU", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "La Habana",
          "latitude": 21.521757,
          "longitude": -77.781167,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/800px-Flag_of_Cuba.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        },
      ]
    },
    {
      "name": "Ecuador",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Ecuador",
          "id": "EC", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Quito",
          "latitude": -1.2295,
          "longitude": -78.5243,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/640px-Flag_of_Ecuador.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        },
      ]
    },
    {
      "name": "España",
      //"color": chart.colors.getIndex(0),
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "España",
          "id": "ES", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Madrid",
          "latitude": 40.4167,
          "longitude": -3.7033,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        },
      ]
    },
    {
      "name": "México",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "México",
          "id": "MX",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Ciudad de México",
          "latitude": 19.4271,
          "longitude": -99.1276,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    },
    {
      "name": "Panamá",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Panamá",
          "id": "PA",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Panamá",
          "latitude": 8.9943,
          "longitude": -79.5188,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/800px-Flag_of_Panama.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }
      ]
    },
    {
      "name": "Paraguay",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Paraguay",
          "id": "PY",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Asunción",
          "latitude": -25.3005,
          "longitude": -57.6362,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    },
    {
      "name": "Perú",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Perú",
          "id": "PE",
          "json":"peruLow",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Lima",
          "latitude": -11.0931,
          "longitude": -77.0465,
          "description": "Orgulloso de ser peruanop",
          "bandera": "https://i.pinimg.com/originals/77/1a/8a/771a8a7393778e546f80cdcded48aa94.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"      
        }
      ]
    },
    {
      "name": "Puerto Rico",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Puerto Rico",
          "id": "PR",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "San Juan",
          "latitude": 18.2208,
          "longitude": -66.5901,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    },
    {
      "name": "República Dominicana",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "República Dominicana",
          "id": "DO",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Santo Domingo",
          "latitude": 18.735693,
          "longitude": -70.162651,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1024px-Flag_of_the_Dominican_Republic.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    },
    {
      "name": "Uruguay",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Uruguay",
          "id": "UY",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Montevideo",
          "latitude": -32.522779,
          "longitude": -55.765835,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/800px-Flag_of_Uruguay.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    },
    {
      "name": "Venezuela",
      "color": am4core.color("rgba(241, 158, 0, 1)"),
      "data": [
        {
          "title": "Venezuela",
          "id": "VE",
          "customData": "Auditorio Biblioteca Nacional",
          "capital": "Caracas",
          "latitude": 8.4961,
          "longitude": -66.8983,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"        
        }
      ]
    }
  ];
  console.log(tempData);
  console.log(groupData);
  var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
  var worldSeriesName = "world";
  worldSeries.name = worldSeriesName;
  worldSeries.useGeodata = true;
  worldSeries.geodata = am4geodata_worldLow;
  console.log('gaeaeaefasdkas')
  console.log(worldSeries.geodata)
  worldSeries.exclude = excludedCountries;

  var usPolygonTemplate = worldSeries.mapPolygons.template;
  //usPolygonTemplate.tooltipText = "{name}";
  usPolygonTemplate.fill = am4core.color("#000030"),

  worldSeries.fillOpacity = 0.8;
  worldSeries.hiddenInLegend = true;
  worldSeries.mapPolygons.template.nonScalingStroke = true;

  var countrySeries=0
  // Create a series for each group, and populate the above array
  groupData.forEach(function(group) {
    var series = chart.series.push(new am4maps.MapPolygonSeries());
    series.name = group.name;
    series.useGeodata = true;
    
    var includedCountries = [];
    group.data.forEach(function(country) {
      includedCountries.push(country.id);
      excludedCountries.push(country.id);
    });
    series.include = includedCountries;
  
    series.fill = am4core.color(group.color);
  
    // By creating a hover state and setting setStateOnChildren to true, when we
    // hover over the series itself, it will trigger the hover SpriteState of all
    // its countries (provided those countries have a hover SpriteState, too!).
    series.setStateOnChildren = true;
    series.calculateVisualCenter = true;
  
    // Country shape properties & behaviors
    var mapPolygonTemplate = series.mapPolygons.template;
    // Instead of our custom title, we could also use {name} which comes from geodata  
    mapPolygonTemplate.fill = am4core.color(group.color);
    mapPolygonTemplate.fillOpacity = 0.8;
    mapPolygonTemplate.nonScalingStroke = true;
    mapPolygonTemplate.tooltipPosition = "fixed"
  
    mapPolygonTemplate.events.on("over", function(event) {
      series.mapPolygons.each(function(mapPolygon) {
        mapPolygon.isHover = true;
      })
      event.target.isHover = false;
      event.target.isHover = true;
    })
  
    mapPolygonTemplate.events.on("out", function(event) {
      series.mapPolygons.each(function(mapPolygon) {
        mapPolygon.isHover = false;
      })
    })
     countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
     var countryPolygon = countrySeries.mapPolygons.template;

     countryPolygon.fill =  am4core.color("rgba(241, 158, 0, 1)")
     countryPolygon.stroke = am4core.color("#19284C");
    countrySeries.geodataSource.events.on("done", function(ev) {
           groupData.color = "#FFFFF"
      worldSeries.hide();
      chart.seriesContainer.draggable = false;
      console.log(worldSeries)
      countrySeries.show();
    });

    mapPolygonTemplate.events.on("hit", function(ev) {      
   
      const cambiar = document.querySelector('.txt');
      if(cambiar){
        cambiar.className = "txthidden";
      }
      ev.target.series.chart.zoomToMapObject(ev.target);
      var data = ev.target.dataItem.dataContext;
      var map = ev.target.dataItem.dataContext.map;
      console.log(data)
      console.log(data.title)
      //info.innerHTML = "<h3>" + data.title + " (" + data.id  + ") </h3>";
      if (data.json) {
        console.log('entre al map')
        ev.target.isHover = false;
        countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + data.json + ".json";
        countrySeries.geodataSource.load();
      }
   /*    setTimeout(function() {
        chart.closeAllPopups();
        //var popup = chart.openPopup("Final 2021 <a href='#'>" + ev.target.dataItem.dataContext.title + "</a>");
        var popup = chart.openPopup(`
        <style>
          .flecha:hover {
          transform: scale(1.2);
          box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
          }
          .amcharts-ampopup-content {
            background: rgb(0 0 0 / 80%) !important;
            border: 1px;
            border-color: #fff;
            color: #fff !important;
            border-style: solid;
            border-width: 1px;
            display: inline-block;
            position: absolute;
            top: 0px;
            left: 0px;
            max-width: 100%;
            max-height: 100%;
            overflow: auto;
            z-index: 2002;
            border-radius: 0%;          
          }
          element.style {
            inset: 260px auto auto 456px;
            margin: 0px;
            width: 278.375px;
            height: 116.969px;
          }
          .info-card a{
            text-transform: uppercase;
            padding: 5px;
            margin-top: -9px;
            text-decoration: none;
            font-family: 'Montserrat-ExtraBold';
            font-weight: var(--font-bold);
            text-transform: uppercase;
            text-align: center;
            transition: 1s ease all;
            font-size: 0.6rem;            
          }
          .info-card a:nth-child(1){
            color: #f19e00;
            border: 1px solid #f19e00;
            cursor: pointer;
          }
          .info-card a:nth-child(2){
            color: #fff;
            border: 1px solid #fff;
            cursor: pointer;
          }
          .info-card  a:nth-child(1):hover{
            letter-spacing: 0.5px;
            background: #f19e00;
            color: #111;
          }
          .info-card  a:nth-child(2):hover{
            letter-spacing: 0.5px;
            background: #fff;
            color: #111;
          }
          element.style {
            inset: 50% auto auto 50%;
            margin: -113px 0px 0px -144px;
            width: 395.891px;
            height: 225.969px;
          }
        </style>
        
          <div class="infomapa" style="text-align: left;text-transform: uppercase;line-height: 15pt;">
            <p style="font-size: 1rem;">Final nacional 2021 - ${ev.target.dataItem.dataContext.title}</p>
          </div>
          <div style="text-align: left;text-transform: uppercase; color: #f19e00;line-height: 15pt;">
            <p style="font-size: 0.6rem;">${ev.target.dataItem.dataContext.customData}, ${ev.target.dataItem.dataContext.capital}</p>
            <p style="font-size: 0.6rem;">23 de agosto</p>
          </div>
          <div class="info-card" style="display: flex;justify-content: space-between;padding-top: 15px;text-transform: uppercase;">
              <a href="#">Más info <i class="fas fa-arrow-right"></i></a>
              <a href='#'>Ultimas noticias ${ev.target.dataItem.dataContext.title} <i class="fas fa-arrow-right"></i></a>
          </div>` );
        popup.defaultStyles = false;
      
        //marker.tooltipHTML = '<b>{title}</b><br><a href="https://en.wikipedia.org/wiki/{name.urlEncode()}">More info informacion</a><br>dale click aqui';
        //popup.title = ev.target.dataItem.dataContext.title+"";                        justify-content: space-between
        popup.title = `<div style="display: flex;align-items: center;">
                        <div style="text-transform: uppercase;font-size: 2rem;">
                          ${ev.target.dataItem.dataContext.title}
                        </div>
                        <div style="padding: 0px 10px;">
                          <img src="${ev.target.dataItem.dataContext.bandera}" alt="bandera" height="24px" width="36px" style="margin-top: 4px; text-align: right"/>
                        </div>
                      </div>
                      <div style="display: flex;align-items: center;">
                        <div style="text-transform: uppercase; color:#fff; font-size: 1rem;">
                          ${ev.target.dataItem.dataContext.capital}
                        </div>
                      </div>`;
        //popup.left = ev.svgPoint.x;
        //popup.top = ev.svgPoint.y;
        popup.draggable = false;
        popup.showCurtain = true;	
      }, 10); */
      // create capital markers
      var imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.id = "markers";
        //desabilitar el zoom con el scroll
        chart.chartContainer.wheelable = false;

      // define template
      var imageSeriesTemplate = imageSeries.mapImages.template;

      var circle = imageSeriesTemplate.createChild(am4core.Image);
      circle.scale = 1.2;//0.6
      circle.href = "./assets/img/smc.svg";

      imageSeriesTemplate.propertyFields.latitude = "latitude";
      imageSeriesTemplate.propertyFields.longitude = "longitude";
      imageSeriesTemplate.nonScaling = true;
      imageSeriesTemplate.nonScalingStroke = false;
      imageSeriesTemplate.horizontalCenter = "middle";
      imageSeriesTemplate.verticalCenter = "middle";
      imageSeriesTemplate.width = 8;
      imageSeriesTemplate.height = 8;
      imageSeriesTemplate.tooltipText = "{capital}";
      imageSeriesTemplate.fill = am4core.color("#000");

      circle.events.on("hit", function(ev) {  
        const cambiar = document.querySelector('.txt');
        if(cambiar){
          cambiar.className = "txthidden";
        }
        var data = ev.target.dataItem.dataContext;            
      //info.innerHTML = "<h3>" + data.title + " (" + data.id  + ") </h3>";
      
        setTimeout(function() {
          chart.closeAllPopups();
          //var popup = chart.openPopup("Final 2021 <a href='#'>" + ev.target.dataItem.dataContext.title + "</a>");
          var popup = chart.openPopup(`
          <style>
          .flecha:hover {
          transform: scale(1.2);
          box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
          }
          .amcharts-ampopup-content {
            background: rgb(0 0 0 / 80%) !important;
            border: 3px;
            border-color: #fff;
            color: #fff !important;
            border-style: solid;
            border-width: 1px;
            display: inline-block;
            position: absolute;
            top: 0px;
            left: 0px;
            max-width: 100%;
            max-height: 100%;
            overflow: auto;
            z-index: 2002;
            border-radius: 0%;    
            clip-path: polygon(5% 0, 100% 0%, 100% 100%, 5% 100%, 5% 55%, 0 50%, 5% 45%);      
          }
          .amcharts-ampopup-header {
            padding: 0em 0.9em !important;
          }
          .amcharts-ampopup-inside {
            padding: 1.2em 2em !important;
          }
          element.style {
            inset: 260px auto auto 456px;
            margin: 0px;
            width: 400px;
            height: 116.969px;
          }
          .info-card a{
            text-transform: uppercase;
            padding: 5px;
            margin-top: -9px;
            text-decoration: none;
            font-family: 'Montserrat-ExtraBold';
            font-weight: var(--font-bold);
            text-transform: uppercase;
            text-align: center;
            transition: 1s ease all;
            font-size: 0.6rem;            
          }
          .info-card a:nth-child(1){
            color: #f19e00;
            border: 1px solid #f19e00;
            cursor: pointer;
          }
          .info-card a:nth-child(2){
            color: #fff;
            border: 1px solid #fff;
            cursor: pointer;
          }
          .info-card  a:nth-child(1):hover{
            letter-spacing: 0.5px;
            background: #f19e00;
            color: #111;
          }
          .info-card  a:nth-child(2):hover{
            letter-spacing: 0.5px;
            background: #fff;
            color: #111;
          }
          element.style {
            inset: 50% auto auto 50%;
            margin: -113px 0px 0px -144px;
            width: 395.891px;
            height: 225.969px;
          }
        </style>
        
          <div class="infomapa" style="text-align: left;text-transform: uppercase;line-height: 15pt;">
            <p style="font-size: 1rem;">Final nacional 2021 - ${ev.target.dataItem.dataContext.title}</p>
          </div>
          <div style="text-align: left;text-transform: uppercase; color: #f19e00;line-height: 15pt;">
            <p style="font-size: 0.6rem;">${ev.target.dataItem.dataContext.customData}, ${ev.target.dataItem.dataContext.capital}</p>
            <p style="font-size: 0.6rem;">23 de agosto</p>
          </div>
          <div class="info-card" style="display: flex;justify-content: space-between;padding-top: 15px;text-transform: uppercase;">
              <a href="#">Más info <i class="fas fa-arrow-right"></i></a>
              <a href='#'>Ultimas noticias ${ev.target.dataItem.dataContext.title} <i class="fas fa-arrow-right"></i></a>
          </div>` );
          popup.defaultStyles = false;
      
          //marker.tooltipHTML = '<b>{title}</b><br><a href="https://en.wikipedia.org/wiki/{name.urlEncode()}">More info informacion</a><br>dale click aqui';
          //popup.title = ev.target.dataItem.dataContext.title+"";                        justify-content: space-between
          popup.title = `<div style="display: flex;align-items: center;">
          <div style="text-transform: uppercase;font-size: 2rem;">
            ${ev.target.dataItem.dataContext.title}
          </div>
          <div style="padding: 0px 10px;">
            <img src="${ev.target.dataItem.dataContext.bandera}" alt="bandera" height="24px" width="36px" style="margin-top: 4px; text-align: right"/>
          </div>
        </div>
        <div style="display: flex;align-items: center;">
          <div style="text-transform: uppercase; color:#fff; font-size: 1rem;">
            ${ev.target.dataItem.dataContext.capital}
          </div>
        </div>`;
          popup.left = ev.svgPoint.x + 5;
          popup.top = ev.svgPoint.y + -100;
          popup.draggable = false;
          popup.showCurtain = true;	
        }, 10);
      
      });
      
      // set zoom events
      imageSeries.events.on("datavalidated", updateImageVisibility);
      chart.events.on("zoomlevelchanged", updateImageVisibility);

      function updateImageVisibility(ev) {
        var chart = ev.target.baseSprite;
        var series = chart.map.getKey("markers");
        series.mapImages.each(function(image) {
          if (image.dataItem.dataContext.minZoomLevel) {
            if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel) {
              image.hide();
            }
            else {
              image.show();
            }
          }
        });
      }
      

      imageSeries.data = [        
        {
          "minZoomLevel": 4,
          "title": "Argentina",
          "id": "AR",
          "capital": "Buenos Aires",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -34.6118,
          "longitude": -64.4173,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"         
        }, {
          "minZoomLevel": 10,
          "title": "Belice",
          "id": "BZ",
          "capital": "Belmopán",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 17.25,
          "longitude": -88.76667,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1000px-Flag_of_Belize.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"       
  
        }, {
          "minZoomLevel": 5,
          "title": "Bolivia",
          "id": "BO",
          "capital": "Sucre",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -19.0421,
          "longitude": -65.2559,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/800px-Flag_of_Bolivia_%28state%29.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
        }, {
          "minZoomLevel": 3,
          "title": "Chile",
          "id": "CL",
          "capital": "Santiago de Chile",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -33.02457,
          "longitude": -73.55183,/*-71*/
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1500px-Flag_of_Chile.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "Colombia",
          "id": "CO",
          "capital": "Bogotá",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 4.6473,
          "longitude": -74.0962,
          "latitude": 4.6473,
          "longitude": -74.0962,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/640px-Flag_of_Colombia.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 10,
          "title": "Cuba",
          "id": "CU",
          "capital": "La Habana",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 21.521757,
          "longitude": -77.781167,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/800px-Flag_of_Cuba.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "Ecuador",
          "id": "EC",
          "capital": "Quito",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -1.2295,
          "longitude": -78.5243,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/640px-Flag_of_Ecuador.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "España",
          "id": "ES",
          "capital": "Madrid",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 40.4167,
          "longitude": -3.7033,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "México",
          "id": "MX",
          "capital": "Ciudad de México",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 19.4271,
          "longitude": -99.1276,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 10,
          "title": "Panamá",
          "id": "PA",
          "capital": "Panamá",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 8.9943,
          "longitude": -78.5188,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/800px-Flag_of_Panama.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
        }, {
          "minZoomLevel": 5,
          "title": "Paraguay",
          "id": "PY",
          "capital": "Asunción",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -23.39985,
          "longitude": -57.43236,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "Perú",
          "id": "PE",
          "capital": "Lima",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -11.0931,
          "longitude": -77.0465,
          "bandera": "https://i.pinimg.com/originals/77/1a/8a/771a8a7393778e546f80cdcded48aa94.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, 
        {
          "minZoomLevel": 4,
          "title": "Perú",
          "id": "PE",
          "capital": "Arequipa",
          "customData": "Auditorio Arequipa Nacional ",
          "latitude": -15.0000,
          "longitude": -72.5000,
          "bandera": "https://i.pinimg.com/originals/77/1a/8a/771a8a7393778e546f80cdcded48aa94.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        },
        {
          "minZoomLevel": 18,
          "title": "Puerto Rico",
          "id": "PR",
          "capital": "San Juan",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 18.2269,
          "longitude": -66.391,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 18,
          "title": "República Dominicana",
          "id": "DO",
          "capital": "Santo Domingo",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 18.735693,
          "longitude": -70.162651,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1024px-Flag_of_the_Dominican_Republic.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
        },{
          "minZoomLevel": 5,
          "title": "Uruguay",
          "id": "UY",
          "capital": "Montevideo",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": -32.522779,
          "longitude": -55.765835,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/800px-Flag_of_Uruguay.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
        }, {
          "minZoomLevel": 4,
          "title": "Venezuela",
          "id": "VE",
          "capital": "Caracas",
          "customData": "Auditorio Biblioteca Nacional",
          "latitude": 8.4961,
          "longitude": -66.8983,
          "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png",
          "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"   
        }
      ];

    })

    // States  
    var hoverState = mapPolygonTemplate.states.create("hover");
    hoverState.properties.fill = am4core.color("rgba(241, 158, 0, 0.8)");
  
    // Tooltip
    mapPolygonTemplate.tooltipText = "{title}"; // enables tooltip
    // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
    // series.tooltip.background.fill = am4core.color(group.color);
  
    // MapPolygonSeries will mutate the data assigned to it, 
    // we make and provide a copy of the original data array to leave it untouched.
    // (This method of copying works only for simple objects, e.g. it will not work
    //  as predictably for deep copying custom Classes.)
    
    series.data = JSON.parse(JSON.stringify(group.data));
  });
  
  // The rest of the world.
 

// Add Western European countries
polygonSeries.exclude = ["AQ"];

chart.zoomControl = new am4maps.ZoomControl();



  /* Configure series */
//  var polygonTemplate = polygonSeries.mapPolygons.template;
//  polygonTemplate.togglable = true;
  //polygonTemplate.tooltipText = "{name}";
//  polygonTemplate.fill = am4core.color("#000");//color del mapa
  
  /* Create selected and hover states and set alternative fill color */
//    var ss = polygonTemplate.states.create("active");
//    ss.properties.fill = chart.colors.getIndex(2);
  
  // var hs = polygonTemplate.states.create("hover");
  // hs.properties.fill = am4core.color("#EFB810");
  
     // Add bottom zoom control
     chart.zoomControl = new am4maps.ZoomControl();
     chart.zoomControl.marginRight = 1500;
    chart.zoomControl.marginLeft = 10;

    /* Agregar boton inicio*/
    var button = chart.chartContainer.createChild(am4core.Button);
    //button.label.text = "...";     button.width = 20;
    button.padding(7, 7, 7, 7);
    button.width = 30;
    // button.align = "left";
    // button.marginLeft = 15;
    button.marginBottom = 10;
    // button.dy = 250;
    button.events.on("hit", function() {
      console.log('Entre a la casita')
      chart.seriesContainer.draggable = true;
      worldSeries.show();
      countrySeries.hide()
      chart.goHome();
      const cambiar = document.querySelector('.txthidden');
      if(cambiar){
        cambiar.className = "txt";
      }
    });
    button.icon = new am4core.Sprite();
    button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    button.parent = chart.zoomControl;
    button.insertBefore(chart.zoomControl.plusButton);

    chart.zoomControl.plusButton.disabled = true;
chart.zoomControl.minusButton.disabled = true;

var plusButton = chart.zoomControl.createChild(am4core.Button);
plusButton.shouldClone = false;
plusButton.label.text = "+";
plusButton.width = am4core.percent(100);

// chart.zoomControl.plusButton.marginLeft = 10;
// chart.zoomControl.plusButton.marginRight = 10;
// chart.zoomControl.minusButton.marginLeft = 10;
// chart.zoomControl.minusButton.marginRight = 10;
// chart.zoomControl.minusButton.width = 30;
plusButton.padding(5, 5, 5, 5);
plusButton.marginBottom = 2;
plusButton.insertBefore(chart.zoomControl.slider);

var minusButton = chart.zoomControl.createChild(am4core.Button);
minusButton.shouldClone = false;
minusButton.label.text = "-";
minusButton.width = am4core.percent(100);
minusButton.padding(5, 5, 5, 5);
minusButton.marginTop = 1;
minusButton.insertAfter(chart.zoomControl.slider);

var customZoomFactor = 3; // default: 2

plusButton.events.on("hit", function() {
  chart.zoomToGeoPoint(
    chart.zoomGeoPoint,
    chart.zoomLevel * customZoomFactor,
    false
  );
  console.log("zoom");
  const cambiar = document.querySelector('.txt');
  if(cambiar){
    cambiar.className = "txthidden";
  }
});
minusButton.events.on("hit", function() {
  chart.zoomToGeoPoint(
    chart.zoomGeoPoint,
    chart.zoomLevel / customZoomFactor,
    false
  );
  const cambiar = document.querySelector('.txthidden');
  if(cambiar){
    cambiar.className = "txt";
  }
});

  //Disabling pan
    chart.seriesContainer.draggable = true;
    chart.seriesContainer.resizable = false;

  //Desactivación del zoom
  //chart.maxZoomLevel = 1;

  //Deshabilitar el zoom con doble clic
  /*chart.seriesContainer.events.disableType("doublehit");
  chart.chartContainer.background.events.disableType("doublehit");*/

  //desabilitar el zoom con el scroll
  chart.chartContainer.wheelable = false;
  

// create capital markers
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

chart.seriesContainer.events.on("doublehit", function(ev) {
//console.log(chart.svgPointToGeo(ev.svgPoint));
  console.log("ff");
  const cambiar = document.querySelector('.txt');
  if(cambiar){
    cambiar.className = "txthidden";
  }
});
// define template
        /*
var imageSeriesTemplate = imageSeries.mapImages.template;
var ter = imageSeriesTemplate.states.create("hover");
ter.properties.fill = am4core.color("#000");
var marker = imageSeriesTemplate.createChild(am4core.Image);
marker.propertyFields.href = "flag";
//marker.href = "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png";
marker.width = 25;
marker.height = 25;
marker.nonScaling = true;
marker.nonScalingStroke = false;
marker.tooltipText = "{name}";
marker.horizontalCenter = "middle";
marker.verticalCenter = "bottom";
marker.tooltipText = "{title}";
//marker.tooltipHTML = '<b>{title}</b><br><a href="https://en.wikipedia.org/wiki/{name.urlEncode()}">More info informacion</a><br>dale click aqui';
//marker.calculateVisualCenter = true;
//marker.tooltipPosition = "fixed";
//marker.tooltip.label.interactionsEnabled = true;
//marker.tooltip.keepTargetHover = true;
marker.fill = am4core.color("#000");
marker.propertyFields.fill = "color";

/*--Desaparesca popup al hace rclick en otro lugar--*/
// am4core.getInteraction().body.events.on("hit", function(ev) {
//   chart.closeAllPopups();
// });

            /*
marker.events.on("hit", function(ev) {  

  var data = ev.target.dataItem.dataContext;
//info.innerHTML = "<h3>" + data.title + " (" + data.id  + ") </h3>";

  setTimeout(function() {
    chart.closeAllPopups();
    //var popup = chart.openPopup("Final 2021 <a href='#'>" + ev.target.dataItem.dataContext.title + "</a>");
    var popup = chart.openPopup(`
    <style>
      .flecha:hover {
        transform: scale(1.2);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        
      }
    </style>
    <div style="display: flex;">
      <div style="float: left; width: 180px;text-align: left;" >
        <h4>Final 2021</h4>  <h4>Más info</h4>
      </div>
      <div class="flecha" style="float: right; width: 20px;position:absolute;margin: 10px 10px; bottom: 0px; right: 0px;" >
        <a href='https://www.google.com/'><img id="miBoton" src="./assets/img/aereo.png" alt="bandera" width="19px" height="19px" style="filter: grayscale(1);margin-top: 0px; border-radius: 50%;"/></a>
      </div>
    </div>` );
    popup.defaultStyles = false;

    //marker.tooltipHTML = '<b>{title}</b><br><a href="https://en.wikipedia.org/wiki/{name.urlEncode()}">More info informacion</a><br>dale click aqui';
    //popup.title = ev.target.dataItem.dataContext.title+"";                        justify-content: space-between
    popup.title = `<div style="display: flex;align-items: center;">
                    <div>
                      ${ev.target.dataItem.dataContext.title}
                    </div>
                    <div style="padding: 0px 10px;">
                      <img src="${ev.target.dataItem.dataContext.bandera}" alt="bandera" height="18px" width="27px" style="margin-top: 4px; text-align: right"/>
                    </div>
                  </div>`;
    popup.left = ev.svgPoint.x + 5;
    popup.top = ev.svgPoint.y + -62;
    popup.draggable = false;
    popup.showCurtain = true;	
  }, 10);

//popup.elements.close = myCustomCloseButton;
/*polygonTemplate.events.on("hit", function(ev) {
  ev.target.isActive = !ev.target.isActive;
})*/
      /*});*/
//--Agregar fondo al mapa--
//chart.background.fill = am4core.color("#252850");
//chart.background.fillOpacity = 1;
//--Controlar eventos del pop ups
chart.popups.template.events.on("opened", function(ev) {
  console.log(ev);
});

chart.popups.template.events.on("closed", function(ev) {
console.log(ev);
});

// what about scale...

  /* Configure series */
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}";
  polygonTemplate.fill = am4core.color("#000");
  polygonTemplate.events.on("hit", function(ev) {
    console.log("ff");
    marker.nonScaling = false;
    marker.width = 50;
    marker.height = 50; 
    ev.target.series.chart.zoomToMapObject(ev.target);
  })
  
  /* Create hover state and set alternative fill color */
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#f19e00");

// Add image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{capital}";
imageSeries.mapImages.template.propertyFields.url = "url";

var circle4 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle4.radius = 1;
circle4.propertyFields.fill = "color";

var circle5 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle5.radius = 1;
circle5.propertyFields.fill = "color";


circle5.events.on("inited", function(event){
  animateBullet(event.target);
})


function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}


imageSeries.data = [        
  {
    "minZoomLevel": 4,
    "title": "Argentina",
    "id": "AR",
    "capital": "Buenos Aires",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -34.6118,
    "longitude": -64.4173,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"         
  }, {
    "minZoomLevel": 10,
    "title": "Belice",
    "id": "BZ",
    "capital": "Belmopán",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 17.25,
    "longitude": -88.76667,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1000px-Flag_of_Belize.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"       

  }, {
    "minZoomLevel": 4,
    "title": "Bolivia",
    "id": "BO",
    "capital": "Sucre",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -19.0421,
    "longitude": -65.2559,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/800px-Flag_of_Bolivia_%28state%29.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
  }, {
    "minZoomLevel": 3,
    "title": "Chile",
    "id": "CL",
    "capital": "Santiago de Chile",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -33.02457,
    "longitude": -71.55183,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1500px-Flag_of_Chile.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "Colombia",
    "id": "CO",
    "capital": "Bogotá",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 4.6473,
    "longitude": -74.0962,
    "latitude": 4.6473,
    "longitude": -74.0962,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/640px-Flag_of_Colombia.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 10,
    "title": "Cuba",
    "id": "CU",
    "capital": "La Habana",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 21.521757,
    "longitude": -77.781167,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/800px-Flag_of_Cuba.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "Ecuador",
    "id": "EC",
    "capital": "Quito",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -1.2295,
    "longitude": -78.5243,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/640px-Flag_of_Ecuador.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "España",
    "id": "ES",
    "capital": "Madrid",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 40.4167,
    "longitude": -3.7033,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "México",
    "id": "MX",
    "capital": "Ciudad de México",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 19.4271,
    "longitude": -99.1276,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 10,
    "title": "Panamá",
    "id": "PA",
    "capital": "Panamá",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 8.9943,
    "longitude": -78.5188,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/800px-Flag_of_Panama.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
  }, {
    "minZoomLevel": 4,
    "title": "Paraguay",
    "id": "PY",
    "capital": "Asunción",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -23.39985,
    "longitude": -57.43236,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "Perú",
    "id": "PE",
    "capital": "Lima",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -11.0931,
    "longitude": -77.0465,
    "bandera": "https://i.pinimg.com/originals/77/1a/8a/771a8a7393778e546f80cdcded48aa94.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  },
  {
    "minZoomLevel": 4,
    "title": "Perú",
    "id": "PE",
    "capital": "Arequipa",
    "customData": "Auditorio Arequipa Nacional ",
    "latitude": -16.2000,
    "longitude": -72.5000,
    "bandera": "https://i.pinimg.com/originals/77/1a/8a/771a8a7393778e546f80cdcded48aa94.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  },
  {
    "minZoomLevel": 18,
    "title": "Puerto Rico",
    "id": "PR",
    "capital": "San Juan",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 18.2269,
    "longitude": -66.391,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 18,
    "title": "República Dominicana",
    "id": "DO",
    "capital": "Santo Domingo",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 18.735693,
    "longitude": -70.162651,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1024px-Flag_of_the_Dominican_Republic.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"  
  },{
    "minZoomLevel": 4,
    "title": "Uruguay",
    "id": "UY",
    "capital": "Montevideo",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": -32.522779,
    "longitude": -55.765835,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/800px-Flag_of_Uruguay.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"
  }, {
    "minZoomLevel": 4,
    "title": "Venezuela",
    "id": "VE",
    "capital": "Caracas",
    "customData": "Auditorio Biblioteca Nacional",
    "latitude": 8.4961,
    "longitude": -66.8983,
    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png",
    "flag": "https://res.cloudinary.com/freestylestats/image/upload/w_300,c_scale,f_auto/gwj6q62fruj2zyahyop1.png"   
  }
];


});
  