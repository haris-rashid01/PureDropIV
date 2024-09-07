function Slide1() {
  document.getElementById("p01").innerHTML =
    "Save up to 30% with a Memberships! <span><button class='joinButton'>Join Now</button></span>";
}
setInterval(Slide1, 4000);
setInterval(Slide2, 2000);
setInterval(Slide1, 4000);

function Slide2() {
  document.getElementById("p01").innerHTML =
    "<strong>August Special:</strong> Members enjoy a free B12 IV and shot. Valid August - August 31. Terms &amp; Conditions Apply.";
}
function changeText() {
  document.getElementById("text").innerHTML =
    "<pre>Experience the pinnacle of mobile IV therapy with PureDropIV. Our elite registered nurses are committed to your health, providing exceptional care wherever you need it.</pre>";
}
//  let x = setInterval(changeText, 2000);
function stop(){
    clearInterval(x)
 }
//  setInterval(stop, 5000)

