postSchemaObject = {
  _id: {
    type: String,
    optional: false
  },
  createdAt: {
    type: Date,
    optional: true
  },
  postedAt: {
    type: Date,
    optional: true
  },
  title: {
    type: String,
    label: "Title"
  },
  url: {
    type: String,
    label: "URL",
    optional: true
  },
  body: {
    type: String,
    optional: true
  },
  commentCount: {
    type: Number,
    optional: false
  },
  comments: {
    type: [Schema.CommentsSchema],
    optional: true
  },
  lastCommentedAt: {
    type: Date,
    optional: true
  },
  upvotes: {
    type: Number,
    optional: true
  },
  upvoters: {
    type: [String],
    optional: true
  },
  downvotes: {
    type: Number,
    optional: true
  },
  downvoters: {
    type: [String],
    optional: true
  },
  tags: {
    type: [String],
    optional: true
  },
  userId: {
    type: String,
    optional: false
  }
};
PostsSchema = new SimpleSchema(postSchemaObject);

