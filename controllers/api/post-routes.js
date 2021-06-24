const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
      'updated_at',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at', 'updated_at'],
        include: {
          model: User,
          attributes: ['id', 'username']
        }
      },
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
      'updated_at',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at', 'updated_at'],
        include: {
          model: User,
          attributes: ['id', 'username']
        }
      },
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'New post', content: 'This is new content', user_id: 1}
  if (req.session) {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put('/upvote', (req, res) => {
  // custom static method created in models/Post.js
  if (req.session) {
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/users/:user_id', (req, res) => {
    console.log('======================');
    Post.findAll({
      where: {
        user_id: req.params.user_id,
      },
      attributes: [
        'id',
        'title',
        'content',
        'created_at',
        'updated_at',
        [
          sequelize.literal(
            '(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'
          ),
          'comment_count',
        ],
      ],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
            'updated_at',
          ],
          include: {
            model: User,
            attributes: ['id', 'username'],
          },
        },
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    })
      .then((dbData) => res.json(dbData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router;
