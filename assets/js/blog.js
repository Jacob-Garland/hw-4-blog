// TODO: Create a variable that selects the main element, and a variable that selects the back button element
// DONE
const back = document.getElementById('back');
const blogContainer = document.querySelector('#blogs');
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
  usernameInput.textContent = "Posted by:" + usernameInput.value;

  article.appendChild(title);
  article.appendChild(content);
  article.appendChild(username);

  blogContainer.appendChild(article);
};

// TODO: Create a function that handles the case where there are no blog posts to display
// DONE
function noBlogs () {
  const noBlogsMessage = document.createElement('h2');
  noBlogsMessage.textContent = 'No blog posts yet... Press the back button at the top and be the first!';
  blogContainer.appendChild(noBlogsMessage);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// ??? rebuild
function renderBlogList () {
  const storedBlogs = readLocalStorage('blogList');

  if (storedBlogs.length === 0) {
    noBlogs();
  } else {
    storedBlogs.array.forEach(blogPost => {
      const blogPost = document.createElement('article');

      blogPost.innerHTML = `
      <h2>${blogPost.title}</h2>
      <p>${blogPost.content}</p>
      <p>${blogPost.username}</p>
      `;

      blogContainer.appendChild(blogPost)
    });
  }
};

// TODO: Call the `renderBlogList` function
// DONE
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
// DONE
document.getElementById('back').addEventListener('click', () => {
  window.location.href = '/index.html';
});