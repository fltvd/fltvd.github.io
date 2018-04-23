function Art(data) {
    this.data = data;

    this.parse = function (type) {
        var entriesText = this.data.trim().split("IMG");
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
        return db;
    }
}