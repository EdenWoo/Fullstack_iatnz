/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Articles from '../api/articles/articles.model';

Articles.find({}).removeAsync()
  .then(() => {
    Articles.create(
    {
      rel: 0,
      item:
      {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"3个月100万，来看看新西兰官员的公款消费",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    },
    {
       rel: 0,
       item:
       {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"3个月100万，来看看新西兰官员的公款消费",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    });
  });




Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
