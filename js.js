var map;
function haversine_distance(mk1, mk2) {
    var R = 3970; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * 6371 * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }
function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat:16.03 , lng: 108.22},
      mapTypeId: "terrain",
    });
    var locaiton= new google.maps.Marker({
      position:{ lat:16.03 , lng: 108.22},
      map:map,
      icon:'./images/people.png'
    })
  var listMarker=[
    {
      coords:{lat:16.047980480350443,lng: 108.2467529749532},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.03023497778036, lng: 108.2521420636848},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:15.986239065321238, lng: 108.26747198623006},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:15.983070809344706, lng: 108.23248705444202},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.002079592182234, lng: 108.22069865351344},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:15.984654943606115, lng: 108.19281211368238},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.023766891897697, lng: 108.21372701848777},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.04167541312327, lng: 108.21879729839952},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.034122355591787, lng: 108.22120568138493},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
    {
      coords:{lat:16.064211060441252, lng: 108.18609399256782},
      icon:'./images/car.png',
      title:'xe 4 chỗ-honda civic',
      rate:4,
      price:'1000$/h'
    },
  ];  
  for (const i of listMarker) {
    addMaker(i);
  }
  function addMaker(props){
    var marker=new google.maps.Marker({
      position: props.coords, 
      map: map, 
      icon:props.icon
    });
    if(props.title){
      var info1=new google.maps.InfoWindow({content:props.title});
      marker.addListener('click',function(){
        info1.open(map,marker);
      });
    }
  }

  google.maps.event.addListener(map,'click',function(event){
    addMaker({coords:event.latLng,title:'vị trí của bạn'})
  })
  // const dakota = {lat: 10.81640648471044,   lng: 106.6154081500405};
  // const frick = {lat:21.058491586070584,  lng:  105.79278272020385};
  // var mk1 = new google.maps.Marker({position: dakota, map: map, icon:'./images/car.png'});
  // var info1=new google.maps.InfoWindow({content:'<h2>Xe 4 chỗ -Inova</h2><h4>0941694681</h4><h4>Sài Gòn-80k/giờ</h4>'})
  // mk1.addListener('click',function(){
  //     info1.open(map,mk1);
  // });
  // var mk2 = new google.maps.Marker({position: frick, map: map,icon:'./images/car.png'});
  // var info2=new google.maps.InfoWindow({content:'<h2>Xe 7 chỗ -audi a8</h2><h4>0941694681</h4><h4>Hà Nội-80k/giờ</h4>'})
  // mk2.addListener('click',function(){
  //     info2.open(map,mk2);
  // });
  //   const flightPlanCoordinates = [
  //       dakota,frick
  //   ];
  //   const flightPath = new google.maps.Polyline({
  //     path: flightPlanCoordinates,
  //     geodesic: true,
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 1.0,
  //     strokeWeight: 2,
  //   });
  //   flightPath.setMap(map);
  //   var distance = haversine_distance(mk1, mk2);
  //   document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " km"
  }

function errorHandler(err) {
    if(err.code ===1) {
        alert("Error: Access is denied!");
    } else if( err.code ===2) {
        alert("Error: Position is unavailable!");
    }
}
function getLocation(){
    if(navigator.geolocation){
        // timeout at 60000 milliseconds (60 seconds)
        var options = {timeout:60000};
        navigator.geolocation.getCurrentPosition(initMap,errorHandler, options);
    } else{
        alert("Sorry, browser does not support geolocation!");
    }
    document.getElementById
}
