function myFunction(){
    var greeting;
    var time = new Date().getHours();

    if (6 <= time && time < 10){
        greeting = "Good morning";
    }
    else if (10 <= time && time < 18) {
        greeting = "Good day";
    }  
    else {
        greeting = "Good evening";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

function myFunction2() {
    var greeting;
    var time = new Date().getHours();

    if (6 <= time && time < 10) {
        greeting = "this morning ?";
    }
    else if (10 <= time && time < 18) {
        greeting = "today ?";
    }
    else {
        greeting = "tonight ?";
    }
    document.getElementById("greeting2").innerHTML = greeting;
}

