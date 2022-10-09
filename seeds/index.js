

const { User, Post, Comment } = require('../models');

const users = [

  {
    username: 'test',
    password: 'test',
    email: 'test@test.com'
  },
  {
    username: 'test2',
    password: 'test2',
    email: 'test2@test.com'
  },
  {
    username: 'test3',
    password: 'test3',
    email: 'test3@test.com'
  },
]

const posts = [

  {
    title: 'Hello there',
    content: 'This is my first post',
    user_id: 1
  },
  {
    title: 'Moon',
    content: 'The moon is a planet',
    user_id: 2
  },
  {
    title: 'Sun',
    content: 'The sun is a star',
    user_id: 3
  },

]

const comments = [
  {
    content: 'This is a comment',
    user_id: 1,
    post_id: 1
  },
  {
    content: 'This is a comment',
    user_id: 2,
    post_id: 2
  },
  {
    content: 'This is a comment',
    user_id: 3,
    post_id: 3
  },

]
    
  const seedDatabase = async () => {

  await User.bulkCreate(users);
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);

}

seedDatabase();