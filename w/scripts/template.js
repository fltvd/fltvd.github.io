function GetPageData()
{
    var page = location.search.split('page=')[1];
    
    switch(page)
    {
        case "art":
            return GetArt();
            break;
        case "info":
            return GetInfo();
        case "games":
            return GetGames();
        case "tools":
            return GetTools();                        
            break;
    }
}

function GetInfo()
{
    var html = "";
    html += `<div id="gallery">`; 
    html += "ff";   
    html += `</div>`;    
    return html ;//"games and tings";
}

function GetGames()
{
    var html = "";
    html += `<div id="gallery">`;

    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;
    html += `<a href="#">`;          
    html += `<img src="art/station.jpg" class="thumb"></img>`;
    html += `</a>`;    
    
    html += `</div>`;    

    return html ;//"games and tings";
}

function GetTools()
{
    return "tewls";
}

function GetArt()
{    
    var entriesText = artdat.trim().split("IMG");
    var db = {};
    for (var i = 1; i < entriesText.length; i++) {
        var lines = entriesText[i].trim().split("\n");
        lines[0] = "IMG" + lines[0];
        var sub = false;
        entry = {};
        subList = [];
        s = 0;
        for (var l in lines) {
            line = lines[l].trim();
            var k = line.split(': ')[0];
            var v = line.split(': ')[1];
            entry[k] = v;
        }
        entry["LIST"] = subList;
        db[i] = entry;
    }

    var html = "";
    html += `<div id="gallery">`;

    for (id in db) {
        var entry = db[id];
        var src = `art/${entry["IMG"]}`;
        var text = entry["TEXT"];
        var date = entry["DATE"];

        html += `<div class="thumbbox">`;

        html += `<a href="#" onClick="pushImage('${src}','${text}','${date}')">`;          
        html += `<img src="${src}" class="thumb"></img>`;
        // html += `<img src="art/station.jpg" class="thumb"></img>`;

        html += `</a>`;
        html += `</div>`;
        
      }
    
    html += `</div>`;
    return html;
}

