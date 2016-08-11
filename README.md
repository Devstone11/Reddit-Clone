Stories of this Angular app:

Home page:
  - When I view the homepage, I see all posts displayed.

  - Each post has a Title, a number of upvotes, an author, a date, a description, an image url, a link to comments, and a link to add comments.

  - By default, the posts are ordered on the page by the number of upvotes.

  - On the header, there is a link to submit post, a search box, and a sort-by field.

  - You can re-sort the posts by votes, date, or title.

Upvotes:
  - If the number is >0, the number is green. If it's =0, it's black. If it's <0, it's red.

Add a Post:
  - Opens a form with Title, Author, Image URL, and Description.

  - validation - all fields are required. If I try to submit an incomplete form, the empty fields are highlighted red.

  - If I submit a valid post, the form disappears and the new post appears in my list.

Search:
  - searches across all fields in post collection.

  - As I type in words, it dynamically filters out posts.

  - As posts are filtered in or out, there is animation of them fading out.

Dates:
  - formatted to say today, yesterday, monday, last monday, etc. Needs an external library to work.

Comments:
  - each post has a link that displays the number of comments, pluralized correctly (1 comment, 2 comments, etc.)

  - When I click on the comments, it toggles showing all comments and their authors.

  - When I click "add comment", a form appears with "author" and "text" and an "add comment" button. When I click it, my comment appears with all the others.
