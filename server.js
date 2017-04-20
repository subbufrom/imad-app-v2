var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

			'article-one' : {
			title:'article one by subbu', 	
			heading: 'Article one',
			date: 'feb 7 2017',
			content:`        <p>
								for the first article
								This is my content for the first webpage that i have created.
								This is my content for the first webpage that i have created and
								being executed
							</p>`
            },

			'article-two':{
				title:'article two by subbu', 	
			heading: 'Article two',
			date: 'feb 8 2017',
			content:`        <p>
								for the first article
								This is my content for the first webpage that i have created.
								This is my content for the first webpage that i have created and
								being executed
							</p>`
			},

			'article-three':{
				title:'article three by subbu', 	
			heading: 'Article three',
			date: 'feb 9 2017',
			content:`        <p>
								for the first article
								This is my content for the first webpage that i have created.
								This is my content for the first webpage that i have created and
								being executed
							</p>`
			}
};

function createTemplate (data){
	        var title = data.title;
			var date = data.date;
			var heading = data.heading;
			var content = data.content;
			var htmltemplate = `
			<html>
				<head>
					<title>${title}</title>
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<link href="/ui/style.css" rel="stylesheet" />
				</head>
				<body>
					<div class="container">
						<div>
							<a href="/">HOME</a>
						</div>
						<hr/>
						<h2>${heading}</h2>
						
						<div>
							${date}
						</div>
							<div>
								${content}
							
							</div>	
					</div>
				</body>
			</html>
			`;
			return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
	var articleName= req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/w3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'w3.css'));
});



app.get('/ui/123.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '123.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
