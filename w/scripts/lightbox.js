function pushImage(id) {
    document.getElementById("floater").src= "images/" + db[id]["IMG"];
    document.getElementById("floaterlabel").innerHTML = db[id]["TEXT"];
    showLightbox(); 
}

function showLightbox() {
    document.getElementById("overlay").style.display = "block";
}

function hideLightbox() {
    document.getElementById("overlay").style.display = "none";
} 