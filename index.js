const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const totalNews = require('./data/News.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send('news is running');
});

app.get('/categories', (req, res) => {
	console.log(categories);
	res.send(categories);
});

app.get('/news', (req, res) => {
	console.log(totalNews);
	res.send(totalNews);
});

app.get('/news/:id', (req, res) => {
	const id = req.params.id;
	const selectedNews = totalNews.find((n) => n._id === id);
	res.send(selectedNews);
});

app.get('/categories/:id', (req, res) => {
	const id = parseInt(req.params.id);
	console.log(id);
	if (id === 0) {
		res.send(totalNews);
	} else {
		const categoryNews = totalNews.filter(
			(n) => parseInt(n.category_id) === id
		);
		res.send(categoryNews);
	}
});

app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
