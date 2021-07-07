const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Fugiat ea sunt enim ut dolor. Tempor ex eu cupidatat sint. Aliquip ex velit do duis voluptate fugiat anim ipsum exercitation consectetur labore aliquip qui quis. Aute qui ipsum pariatur magna. Cupidatat adipisicing voluptate culpa culpa et ullamco ipsum adipisicing amet reprehenderit amet dolore proident.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Velit excepteur proident consequat ea commodo duis. Do laborum minim mollit consectetur excepteur cupidatat ullamco anim laborum in. Tempor reprehenderit enim elit labore in ullamco proident elit. Ad dolore ipsum est voluptate minim eu pariatur. Nisi laboris labore voluptate irure laborum. Occaecat ipsum quis dolore ullamco dolore laboris. Tempor adipisicing enim aliqua anim proident.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Do tempor est dolore labore ex nisi enim velit laboris amet aliquip nisi ea do. Laboris non pariatur laboris velit fugiat qui veniam in ea do in nulla commodo. Laboris magna consectetur aliquip magna minim amet excepteur velit sunt nulla voluptate deserunt. Est culpa ut tempor officia elit Lorem. Nulla ut in irure non esse quis cillum ad occaecat sit eiusmod ad laboris culpa.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Culpa amet enim mollit est fugiat minim Lorem sit veniam ad ex dolore. Exercitation ea commodo esse fugiat exercitation nisi esse nisi tempor commodo est minim. Aliquip nisi est irure eiusmod cupidatat magna consequat eu veniam do. Officia non sint duis voluptate do.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Voluptate sit reprehenderit magna aliquip. Anim nisi veniam eu fugiat. Sit et non ad ea consectetur laborum dolor exercitation dolore nostrud deserunt sint. Lorem dolore qui ut id ex ad. Aliquip id eu esse do do Lorem voluptate id ad. Cupidatat amet elit nostrud nisi exercitation voluptate consectetur nisi dolor. Excepteur consequat eu elit excepteur cupidatat commodo culpa aliqua amet laborum Lorem irure.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Minim fugiat do deserunt cupidatat commodo dolor irure aliquip sint id reprehenderit adipisicing. Nulla non ullamco amet enim adipisicing quis adipisicing irure ad culpa duis. Veniam qui eiusmod ea aliqua voluptate eu elit anim aliqua exercitation pariatur aliqua. Ad esse culpa ut irure consequat enim cillum veniam consectetur nostrud officia enim. Commodo ea aute ex proident do elit voluptate deserunt esse voluptate. Id et culpa sint reprehenderit aliqua cupidatat ex dolore enim aute esse adipisicing tempor in. Dolor anim aute non laboris nulla pariatur ipsum et do cupidatat enim voluptate.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Esse qui incididunt dolor consequat. Commodo dolore anim duis laboris duis et. Excepteur culpa consequat laborum dolor. Anim et commodo officia cillum id elit exercitation voluptate ex incididunt id minim. Non cillum cupidatat id sunt enim eiusmod cupidatat cillum veniam ut. Elit tempor sit et mollit amet sit aute amet consectetur ad quis est.',
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
    post_content: 'Dolor nisi culpa adipisicing aliqua. Ut proident cillum exercitation magna reprehenderit excepteur sit. Sint magna aliqua sit nisi aute nisi reprehenderit sint tempor laboris fugiat. Laborum consequat commodo laborum tempor dolor excepteur mollit cillum dolore voluptate excepteur fugiat eu.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Nulla quis ipsum amet dolor do est consequat id amet excepteur esse enim eu. In fugiat anim exercitation magna Lorem cillum. Laboris quis cupidatat ullamco officia consectetur esse reprehenderit ea. Dolor magna est nisi consectetur deserunt velit ipsum veniam voluptate in eu non elit veniam.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Proident amet officia cupidatat excepteur Lorem ut. Lorem pariatur dolore id incididunt sit ullamco eiusmod deserunt aliquip magna est officia id reprehenderit. Ut deserunt eu ex anim non aliquip amet eiusmod dolor. Aliquip consectetur tempor sunt quis anim sit amet dolore aute nulla elit fugiat excepteur excepteur. Labore ullamco ea laborum sint mollit. Ad velit officia sit duis fugiat commodo aute eu cupidatat proident. Id officia dolore magna anim dolore irure eu amet mollit anim id.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Quis qui magna ea ex eu enim. Ad sit veniam labore minim. Cupidatat aliquip enim tempor nulla occaecat eu ex. Fugiat proident Lorem pariatur eiusmod reprehenderit anim laboris minim do incididunt est in proident dolor. Cillum occaecat ex nostrud id. Commodo nostrud dolor nulla aute ad reprehenderit commodo ad. Laboris non aliqua ut do cillum exercitation pariatur sint.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Ullamco duis occaecat enim minim nisi esse dolor anim cupidatat in. Dolore cillum consequat eu sint officia commodo do culpa in ipsum pariatur. Est voluptate consectetur laboris sunt occaecat consequat. Proident do fugiat irure pariatur eu aute amet. Id eiusmod mollit pariatur anim voluptate cupidatat nulla aliquip in. Commodo sint quis est culpa consectetur ipsum aute cillum enim veniam sint reprehenderit nisi. Tempor mollit sunt enim enim ex in excepteur ullamco dolor amet.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Ipsum officia nostrud laborum proident aute velit. Ipsum esse duis laborum consequat aliquip velit consectetur et. Cupidatat ad veniam sit sunt exercitation sunt Lorem cupidatat laboris duis eiusmod.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Fugiat voluptate excepteur proident laboris incididunt sunt velit labore qui reprehenderit laboris excepteur nostrud culpa. Commodo id ex minim qui enim incididunt ex laboris aute duis officia occaecat. Enim nostrud reprehenderit ut enim proident adipisicing sit aliqua mollit amet cupidatat voluptate sit. Mollit fugiat laboris esse aliquip commodo consequat reprehenderit cupidatat Lorem commodo nulla exercitation consequat ex. Labore dolor cupidatat Lorem aliqua aute quis voluptate sint. Esse id nisi veniam aliquip ad.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Dolor irure irure eiusmod sunt aliquip nostrud nulla adipisicing elit. Sit dolor proident irure incididunt pariatur ea aliqua sint consectetur. Ullamco excepteur ad sit sint nostrud nulla ullamco cillum nulla consectetur. Incididunt aliquip in pariatur elit sint ipsum culpa ullamco consectetur sunt culpa magna aliqua labore. Deserunt ullamco occaecat fugiat ea dolor velit commodo culpa veniam magna quis id in eiusmod. Laborum ex enim aute dolor do nulla Lorem.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Incididunt ipsum veniam et dolore in. Mollit adipisicing sunt ullamco Lorem sunt nulla mollit aliqua excepteur consectetur proident do ut. Velit proident excepteur occaecat est Lorem cupidatat deserunt aliquip adipisicing reprehenderit cillum esse. Cupidatat ut dolore occaecat magna incididunt esse cillum ipsum reprehenderit commodo et aute.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Sint voluptate voluptate cupidatat voluptate proident cillum nisi do eu sit nostrud consectetur. Quis irure aliquip fugiat quis. Esse sit reprehenderit aute nisi elit pariatur id aute proident commodo velit est ea cupidatat. Consequat do quis id nostrud proident velit id nulla fugiat et eu fugiat sunt velit. Quis cupidatat commodo exercitation voluptate nulla proident.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
