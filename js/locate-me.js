// var googleMapSrc = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";





let lonD ;
let latD;

function getLoc(){
   let  lat=document.getElementById("lat")
    let lon=document.getElementById("lon")
    navigator.geolocation.getCurrentPosition(function(pos){ 
        
        lonD=pos.coords.longitude
        latD=pos.coords.latitude

        lon.innerText=pos.coords.longitude
        lat.innerText=pos.coords.latitude

          console.log("Latitude", pos.coords.latitude);
          console.log("Longitude",pos.coords.longitude); });
}


function takeMe(){
    var googleMapSrc ="http://maps.google.com/maps?q="+ latD + ",+" +lonD
   console.log(googleMapSrc)
    location.replace( googleMapSrc)
        
    

}