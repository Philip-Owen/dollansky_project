var keystone = require('keystone');
var Registration = keystone.list('Registration');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'register';
	// locals.enquiryTypes = Registration.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.registrationSubmitted = false;


	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'register' }, function (next) {

		console.log(Date.now());

		var newRegistration = new Registration.model();
		var updater = newRegistration.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: `
				personalInfo.firstName,
				personalInfo.lastName,
				personalInfo.email,
				personalInfo.phone,
				personalInfo.experience,
				`,
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.registrationSubmitted = true;
				locals.formData = {};
			}
			next();
		});
	});
	// Render the view
	view.render('register');
};
