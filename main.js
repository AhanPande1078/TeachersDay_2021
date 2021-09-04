function cake() {
    document.getElementById("cake").style.display="inline-block";
    document.getElementById("eat").style.display="inline-block";
    console.log("worked");
    window.alert("cake delivered");
}
function food() {
    document.getElementById("food").style.display="inline-block";
    document.getElementById("eat").style.display="inline-block";
    console.log("worked");
    window.alert("food delivered");
}
function drink() {
    document.getElementById("drink").style.display="inline-block";
    document.getElementById("eat").style.display="inline-block";
    console.log("worked");
    window.alert("drinks delivered");
}
function eat() {
    document.getElementById("cake").style.display="none";
    document.getElementById("food").style.display="none";
    document.getElementById("drink").style.display="none";
    document.getElementById("eat").style.display="none";
    console.log("worked");
    window.alert("yumm");
                 }
