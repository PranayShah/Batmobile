AccountsTemplates.configure({
	// sendVerificationEmail: true,
	showForgotPasswordLink: true,
	privacyUrl: 'privacy',
	termsUrl: 'tos',
    reCaptcha: {
        siteKey: '6LfeVAMTAAAAAGACBHeJr-UsAQc8pHQ41W4lZUlW',
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: false
});
AccountsTemplates.configureRoute('signUp', {
  path: '/sgup',
  template: 'userOrOrganization'
});
// AccountsTemplates.removeField('email');
Meteor.methods ({
	'userOrOrg' : function (isOrganization)
	{
		if (isOrganization)
		{
			AccountsTemplates.addFields ([
				{
					_id : 'userName',
					type: 'text',
					displayName: 'Your name',
					required: true
				},
				{
					_id : 'organizationName',
					type: 'text',
					displayName: 'Your organization\'s name',
					required: true
				},
				{
					_id : 'address',
					type: 'text',
					displayName: 'Address',
					required: true
				},
				{
					_id : 'number',
					type: 'tel',
					displayName: 'Contact number',
					required: true
				}
				]);
		}
		else 
		{
			AccountsTemplates.removeFields (['userName', 'organizationName', 'address', 'number']);
		}
	}
});