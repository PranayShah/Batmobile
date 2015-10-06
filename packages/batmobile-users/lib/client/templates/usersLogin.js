Meteor.startup(function () {

  Template.userOrOrganization.events({
    'click #userOrOrganization' : function (event, template)
    {
    	if ($('#userOrOrganization').bootstrapSwitch('state'))
    	{
    		Meteor.call ('userOrOrganization', true);
    	}
    	else
    	{
    		Meteor.call ('userOrOrganization', false);
    	}
    }
  });

});
