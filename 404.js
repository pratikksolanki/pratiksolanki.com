// Automatic Website Redirect
var timeleft = 8;
var timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timer);
    window.location.href = 'https://pratiksolanki.com/';
    document.getElementById("countdown").innerHTML = "1 second.";
  } else {
    document.getElementById("countdown").innerHTML = (timeleft + 1) + " seconds.";
  }
  timeleft -= 1;
}, 1000);

