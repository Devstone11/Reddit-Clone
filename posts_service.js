// app.service('postsService', function () {
//   return {
//     countComments: function(post) {
//       return post.comments.length;
//     },
//     upvote: function(post) {
//       post.votes++;
//     },
//     downvote: function(post) {
//       post.votes--;
//     },
//     setSort: function(filt) {
//       $scope.sort = filt;
//     },
//     displayPostForm: function() {
//       $scope.showPostForm = !$scope.showPostForm;
//       $scope.postSubmitted = false;
//     },
//     submitPost: function(post) {
//       $scope.showPostForm = false;
//       $scope.newPost.votes = 0;
//       $scope.newPost.comments = [];
//       $scope.newPost.date = new Date();
//       $scope.posts.push($scope.newPost)
//       $scope.postForm.$setPristine();
//     },
//     displayComments: function(post) {
//       post.showComments = post.showComments ? false : true;
//     },
//     displayCommentForm: function(post) {
//       post.showCommentForm = post.showCommentForm ? false : true;
//       post.commentSubmitted = false;
//     },
//     addComment: function(post) {
//       post.showCommentForm = false;
//       post.comments.push({
//         author: post.newComment.commentAuthor,
//         text: post.newComment.commentText
//       });
//       post.newComment.commentText = "";
//     }
//   }
// })
