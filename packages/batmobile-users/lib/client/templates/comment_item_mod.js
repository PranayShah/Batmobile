Template.comment_item_mod.helpers ({
	'showReplyButton' : function ()
	{
		return !this.parentCommentId;
	}
});