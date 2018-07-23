function pushImage(source,text,date,tools) {       
    console.log(source);
    document.getElementById("floaterImage").src = source;
    var labelcontents = `
    <div class="img-time">${date}
    ${text}
    </div>
    <a href="${source}" target="blank" class=zoomButton>⤢</a>
    `;
    document.getElementById("floaterLabel").innerHTML = labelcontents;
    showLightbox(); 
}

function showLightbox() {
    document.getElementById("overlay").style.display = "block";
}

function hideLightbox() {
    document.getElementById("overlay").style.display = "none";
} 