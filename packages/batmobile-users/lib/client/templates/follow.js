Template.userInfo_mod.helpers ({
    'showDifferentUserThings' : function ()
    { 
        return this._id !== Meteor.userId();
    },
    'follows' : function ()
    {
        return this.following && _.findWhere (this.following, {_id: Meteor.userId()})? true: false;
    }
});
Template.followButton.helpers ({
    'following' : function ()
    {
        return _.findWhere (Meteor.user().following, {_id: this._id})? true: false ;
    }
});
Template.followButton.events ({
  'click button' : function (event, template)
  {
    var followingUserObject = {_id: this._id, name: this.profile.name };
    var loggedInUser = Meteor.user();
    if(!loggedInUser){
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
    Meteor.call ('addFollowing', loggedInUser, followingUserObject);

  }
});