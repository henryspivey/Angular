'use strict';

app.controller('PostsCtrl', function($scope, $location, Post, Auth){
	$scope.posts = Post.all;
	$scope.user = Auth.user;
	$scope.post = {url:'http://'};

	
	// ng-repeat has a variable named '$index'
	$scope.deletePost = function(post){
		// $scope.posts.splice(index,1);
		Post.delete(post);
	};

});