const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Fugiat ea sunt enim ut dolor. Tempor ex eu cupidatat sint. Aliquip ex velit do duis voluptate fugiat anim ipsum exercitation consectetur labore aliquip qui quis.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Velit excepteur proident consequat ea commodo duis. Do laborum minim mollit consectetur excepteur cupidatat ullamco anim laborum in. Tempor reprehenderit enim elit labore in ullamco proident elit.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Do tempor est dolore labore ex nisi enim velit laboris amet aliquip nisi ea do. Laboris non pariatur laboris velit fugiat qui veniam in ea do in nulla commodo. Laboris magna consectetur aliquip magna.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Culpa amet enim mollit est fugiat minim Lorem sit veniam ad ex dolore. Exercitation ea commodo esse fugiat exercitation nisi esse nisi tempor commodo est minim. Aliquip nisi est irure eiusmod.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Voluptate sit reprehenderit magna aliquip. Anim nisi veniam eu fugiat. Sit et non ad ea consectetur laborum dolor exercitation dolore nostrud deserunt sint. Lorem dolore qui ut id ex ad.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Minim fugiat do deserunt cupidatat commodo dolor irure aliquip sint id reprehenderit adipisicing. Nulla non ullamco amet enim.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Esse qui incididunt dolor consequat. Commodo dolore anim duis laboris duis et. Excepteur culpa consequat laborum dolor. Anim et commodo officia cillum id elit exercitation voluptate ex incididunt id minim.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Non veniam anim qui pariatur nisi proident aliqua amet. Voluptate occaecat sunt do reprehenderit nostrud et sit esse. Cupidatat nostrud esse consectetur laborum Lorem.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Ullamco sint eiusmod irure pariatur laborum et minim nisi occaecat amet. Aute est Lorem excepteur sunt in anim sit amet ea fugiat aliqua eiusmod nulla. Ullamco dolore ipsum eiusmod velit qui nostrud non exercitation magna.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Quis elit sit nisi consectetur id laboris deserunt. Et ad excepteur cupidatat magna ut. Sit amet aliquip aliqua esse in consequat laboris. Dolore aute id eu eu exercitation et. Pariatur laboris ut voluptate irure ex sint duis fugiat.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Dolor nisi culpa adipisicing aliqua. Ut proident cillum exercitation magna reprehenderit excepteur sit. Sint magna aliqua sit nisi aute nisi reprehenderit sint tempor laboris fugiat. Laborum consequat commodo.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
