// TODO: Create a variable that selects the main element, and a variable that selects the back button element
// DONE
const back = document.getElementById('back');
const blogContainer = document.getElementById('main');
let blogList = [];

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

  blogContainer.appendChild(article);
};

// TODO: Create a function that handles the case where there are no blog posts to display
// DONE
function noBlogs () {
    if (blogContainer.children.length === 0) {
        const noBlogsMessage = document.body.createElement('h2');
        noBlogsMessage.textContent = "No Blog posts yet... Go back to the homepage and be the first!";
        blogContainer.appendChild(noBlogsMessage);
      };
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// ??? rebuild
function renderBlogList () {
    if (blogContainer.children.length > 0) { 
      blogList.forEach(blogListData => {
        buildPost();
      })
    } else {noBlogs()};
};

// TODO: Call the `renderBlogList` function
// DONE
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
// DONE
document.getElementById('back').addEventListener('click', () => {
  window.location.href = '/index.html';
});