var keystone = require('keystone');
// var Types = keystone.Field.Types;

/**
 * Registration Model
 * =============
 */

var Registration = new keystone.List('Registration', {
	nocreate: true,
	noedit: true,
});


// COMBAK: This will need to be refactored for use payment gateway. This is a temp mockup.
Registration.add({
	personalInfo: {
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		experience: { type: String, required: true },
	},
	submitted: { type: Date, default: Date.now },
});

Registration.defaultSort = '-submitted';
Registration.defaultColumns = 'personalInfo.firstName, personalInfo.lastName, personalInfo.email, personalInfo.phone, personalInfo.experience, submitted';
Registration.register();
