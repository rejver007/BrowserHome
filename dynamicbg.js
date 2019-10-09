var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 10) {
    if (document.body) {
        document.body.background = "dist/images/morning.jpg",
            document.body.style.backgroundSize = "cover";
    }
}
else if (10 <= currentTime && currentTime < 13){
    if (document.body){
        document.body.background = "dist/images/day.jpg",
            document.body.style.backgroundSize = "cover";
    }
}
else {
    if (document.body) {
        document.body.background = "dist/images/night.jpg",
            document.body.style.backgroundSize = "cover";
    }
}


