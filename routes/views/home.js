var keystone = require('keystone');
const axios = require('axios');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';


	// Inits the storage for the news feed API call.
	// When axios request is properly configured set didLoad to true.
	// .articles will be expecting an array of objects.
	// Expected object format. If changed. Each statement in home.hbs will need to be altered to fit new format
	// {
	// 	  "ID": number,
	//   "Title": string,
	//   "Description":null,
	//   "Link": string,
	//   "ImageLink": string,
	//   "DateAdded": date
	// {
	locals.newsFeed = {
		articles: [],
		didLoad: false,
	};

	// API request to populate news feed.
	// Will need to correctly configured with new endpoint.
	// axios
	// 	.get('URL_HERE')
	// 	.then(response => {
	// 		locals.newsFeed.articles = response.**API return**;

	// 		// view.render was put in .then and .catch to solve a race condition between the api call and the page render.
	// 		// If removed page will render before data arrives.
	// 		view.render('home');
	// 	})
	// 	.catch(() => {
	// 		locals.newsFeed.didLoad = false;
	// 		view.render('home');
	// 	});

	// Remove code below this comment when axios request is properly configured
	view.render('home');
};
