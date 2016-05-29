'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ArticlesSchema = new mongoose.Schema({
  rel: Number,
  item:{
  	id:Number,
  	topic_id:Number,
  	title:String,
  	content:String,
  	images:[{
  				url:String
  			}],
  	user_id:Number,
  	gmt_create:Date,
	simple:Number,
	comment_count:Number,
	digg_count:Number,
    is_owner:Number,
    favourite:Number,
    nick:String,
    avatar:String,
    vip_flag:Number,
    vip_desc:String,
    digg:Number
  }
});

export default mongoose.model('Articles', ArticlesSchema);
