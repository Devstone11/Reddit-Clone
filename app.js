var app = angular.module("redditApp", ['angularMoment', 'ngAnimate']);

app.controller("redditControl", function($scope) {
  $scope.sort = "-votes";
  $scope.sortDisplay = function() {
    var splitSort = $scope.sort.split('');
    if (splitSort[0] === "-") {
      splitSort.splice(0,1);
    }
    return splitSort.join('');
  }
  $scope.showPostForm = false;
  $scope.submitted = false;
  $scope.functions = {
    countComments: function(post) {
      return post.comments.length;
    },
    upvote: function(post) {
      post.votes++;
    },
    downvote: function(post) {
      post.votes--;
    },
    setSort: function(filt) {
      $scope.sort = filt;
    },
    displayPostForm: function() {
      $scope.showPostForm = !$scope.showPostForm;
      $scope.postSubmitted = false;
    },
    submitPost: function(post) {
      $scope.showPostForm = false;
      $scope.posts.push({
        title: $scope.newPost.title,
        votes: 0,
        author: $scope.newPost.author,
        date: new Date(),
        description: $scope.newPost.description,
        image: $scope.newPost.image,
        comments: []
      })
      $scope.newPost = angular.copy(post);
      $scope.postForm.$setPristine();
    },
    displayComments: function(post) {
      post.showComments = post.showComments ? false : true;
    },
    displayCommentForm: function(post) {
      post.showCommentForm = post.showCommentForm ? false : true;
      post.commentSubmitted = false;
    },
    addComment: function(post) {
      post.showCommentForm = false;
      post.comments.push({
        author: post.newComment.commentAuthor,
        text: post.newComment.commentText
      });
      post.newComment.commentText = "";
    }
  },
  $scope.newPost = {
    title: 'Rorschach',
    votes: 0,
    author: 'Watchman',
    date: new Date(),
    description: "Rorschach (born Walter Joseph Kovacs) is a fictional character and an antihero of the acclaimed 1986 graphic novel miniseries Watchmen, published by DC Comics. Rorschach was created by writer Alan Moore with artist Dave Gibbons, but as with most of the main characters in the series, he was an analogue for a Charlton Comics character, in this case Steve Ditko's the Question and Mr. A.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/be/Rorschach.png",
    comments: []
  }
  $scope.posts = [
    {
      title: 'Spiderman',
      votes: 4,
      author: 'J.R.R. Tolkein',
      date: '2016-08-04T19:16:27.651Z',
      description: 'Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics existing in its shared universe. The character was created by writer-editor Stan Lee and writer-artist Steve Ditko, and first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg',
      comments: [
        {
          author: 'george rr martin',
          text: 'i like the part where ben dies',
        }
      ]
    },
    {
      title: 'Batman',
      votes: 6,
      author: 'DC Comix',
      date: '2016-08-11T19:16:27.651Z',
      description: 'Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[5][6] and first appeared in Detective Comics #27 (May 1939).',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/75/Comic_Art_-_Batman_by_Jim_Lee_%282002%29.png',
      comments: [
        {
          author: 'dark knight',
          text: 'cleaning up gotham one clown at a time',
        },
        {
          author: 'bane',
          text: 'I will crush you',
        }
      ]
    },
    {
      title: 'Wonder Woman',
      votes: 0,
      author: 'Jane Amazonia',
      date: '2016-07-31T19:16:27.651Z',
      description: 'Wonder Woman is a fictional superhero appearing in American comic books published by DC Comics.[1] The character is a founding member of the Justice League, demigoddess, and warrior princess of the Amazons, which are based on the Amazons of Greek mythology.',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8c/WonderWoman-Ross.png',
      comments: [
        {
          author: 'batman',
          text: 'she fights like a girl',
        },
        {
          author: 'superman',
          text: 'i could take her',
        }
      ]
    },
    {
      title: 'Doctor Strange',
      votes: -2,
      author: 'Mark Twain',
      date: '2016-08-10T08:53:27.651Z',
      description: 'Dr. Stephen Vincent Strange, best known as Doctor Strange, is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist and character conceptualist Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963).',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg',
      comments: [
        {
          author: 'some guy',
          text: 'Never heard of him. -1',
        },
        {
          author: 'Benedict Cumbersnatch',
          text: "I think he's handsome",
        }
      ]
    }
  ]
})
