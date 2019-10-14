const Post = require('../models/post');

const deleteOldPosts = () => {
  const todaysDate = new Date();
  console.log(todaysDate);
}

deleteOldPosts();