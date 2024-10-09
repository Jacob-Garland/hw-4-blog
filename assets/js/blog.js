// TODO: Create a variable that selects the main element, and a variable that selects the back button element
var
var

// TODO: Create a function that builds an element and appends it to the DOM
function buildPost () {
  const usernameInput = document.getElementById('username');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const article = document.createElement('article');

  const title = document.createElement('h2');
  titleInput.textContent = titleInput.value;
  const content = document.createElement('p');
  contentInput.textContent = document.createElement('p');
  const username = document.createElement('p');
  usernameInput.textContent = usernameInput.value;

  article.appendChild(title);
  article.appendChild(content);
  article.appendChild(username);

  const articleContainer = document.getElementById('ul');
  articleContainer.appendChild(article);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {

}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
    if {

    } else {}
}

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};