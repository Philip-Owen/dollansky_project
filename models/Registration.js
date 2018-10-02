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
	programName: { type: String, required: false },
	programPrice: { type: Number, required: false },
	personalInfo: {
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		experience: { type: String, required: true },
	},
	paymentInfo: {
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		cardNumber: { type: Number, required: true },
		expDate: { type: String, required: true },
		cvv: { type: Number, required: true },
		billingAddress: { type: String, required: true },
		billingAddress2: { type: String, required: false },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zipcode: { type: Number, required: true },
	},
	submitted: { type: Date, default: Date.now },
});

Registration.defaultSort = '-submitted';
Registration.defaultColumns = 'programName, programPrice, personalInfo, paymentInfo, submitted';
Registration.register();
