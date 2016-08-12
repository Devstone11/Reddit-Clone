var app = angular.module("redditApp", []);

app.controller("redditControl", function($scope) {
  $scope.countComments = function(post) {
    return post.comments.length;
  }
  $scope.upvote = function(post) {
    post.votes++;
  }
  $scope.downvote = function(post) {
    post.votes--;
  }
  $scope.posts = [
    {
      title: 'Spiderman',
      votes: 4,
      author: 'J.R.R. Tolkein',
      date: '08-04-2016',
      description: 'Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics existing in its shared universe. The character was created by writer-editor Stan Lee and writer-artist Steve Ditko, and first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg',
      comments: [
        {
          author: 'web-slingr',
          text: 'I love spidey!!!!',
        },
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
      date: '08-11-2016',
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
      date: '07-31-2016',
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
      date: '08-10-2016',
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
  ];

})
