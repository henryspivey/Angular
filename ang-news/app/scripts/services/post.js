'use strict';

app.factory('Post', function($firebase){
	var ref = new Firebase('https://blazing-torch-5707.firebaseio.com');
	var posts = $firebase(ref.child('posts')).$asArray();


	var Post = {
		all: posts,
		create: function (post) {
		    return posts.$add(post).then(function(postRef) {
		      $firebase(ref.child('user_posts').child(post.creatorUID))
		                        .$push(postRef.name());
		      return postRef;
		    });
		},
		get: function(postId){
			return $firebase(ref.child('posts').child(postId)).$asObject();
		},
		delete: function(post){
			return posts.$remove(post);
		},
		comments:function(postId){
			return $firebase(ref.child('comments').child(postId)).$asArray();
		}
	};
	return Post;
});