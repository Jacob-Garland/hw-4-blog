// TODO: Create a variable that selects the main element, and a variable that selects the back button element
// DONE
const main = document.getElementById('main');
const back = document.getElementById('back');

const articleContainer = document.getElementById('ul');
// TODO: Create a function that builds an element and appends it to the DOM
// DONE
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

  articleContainer.appendChild(article);
};

// TODO: Create a function that handles the case where there are no blog posts to display
// DONE
function noBlogs () {
    if (articleContainer.children.length === 0) {
        const noBlogsMessage = document.createElement('h3');
        noBlogsMessage.textContent = "There are no blogs posted yet. Go back to the homepage and be the first!";
        articleContainer.appendChild(noBlogsMessage);
      };
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// ??? im questioning my method of calling on the array. local storage?? need to debug and test...
function renderBlogList () {
    if (articleContainer.children.length > 0) { 
      blogList.forEach(blogListData => {
        buildPost();
      })
    } else {noBlogs()};
};

// TODO: Call the `renderBlogList` function
// DONE
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
// ??? need to make sure it's linked between both pages, swap 'url' to something else and between apostrophes in let?
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};