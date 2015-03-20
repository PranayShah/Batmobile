Template.singleLevelComments.helpers ({
	'showReplyButton' : function ()
	{
		return !this.parentCommentId;
	}
});