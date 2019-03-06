function date_time(id)
{
        date = new Date;
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        document.getElementById("s").innerHTML = ''+s;
        document.getElementById("m").innerHTML = ''+m;
        document.getElementById("h").innerHTML = ''+h;
        setTimeout('date_time("'+"s"+'");','1000');
        return true;
}
window.onload = date_time('s');

function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);

var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude
}