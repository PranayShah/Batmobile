AccountsTemplates.configure({
	sendVerificationEmail: true,
	showForgotPasswordLink: true,
	privacyUrl: 'privacy',
	termsUrl: 'tos',
    reCaptcha: {
        siteKey: '6LfeVAMTAAAAAGACBHeJr-UsAQc8pHQ41W4lZUlW',
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: true
});
// AccountsTemplates.removeField('email');
/*AccountsTemplates.addFields ([
	{
		_id: 'email',
		type: 'email'
	}]);*/