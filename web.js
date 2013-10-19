var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function (request, response) {
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            console.log(err);
            html = "Error reading file ./index.html";
        }

        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
});

app.get('/help.html', function (request, response) {
    fs.readFile('./help.html', function (err, html) {
        if (err) {
            console.log(err);
            html = "Error reading file ./index.html";
        }

        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
