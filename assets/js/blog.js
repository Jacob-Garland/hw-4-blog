// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const back = document.getElementById('back');
const blogContainer = document.getElementById('blogs');

// TODO: Create a function that builds an element and appends it to the DOM
function buildPost (username, title, content) {
  const article = document.createElement('article');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  const contentElement = document.createElement('p');
  contentElement.textContent = content;
  const usernameElement = document.createElement('blockquote');
  usernameElement.textContent = "Posted by: " + username;

  article.appendChild(titleElement);
  article.appendChild(contentElement);
  article.appendChild(usernameElement);

  blogContainer.appendChild(article);
};

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogs () {
  const noBlogsMessage = document.getElementById('blogs');
  noBlogsMessage.textContent = `No blog posts yet...`;
  blogContainer.appendChild(noBlogsMessage);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
  function readLocalStorage() {
    const storedPosts = localStorage.getItem('blogList');
    return storedPosts ? JSON.parse(storedPosts) || [] : [];
  };

  const storedBlogs = readLocalStorage();

  if (storedBlogs.length === 0) {
    noBlogs();
  } else {
    storedBlogs.forEach(blog => {
      buildPost(blog.username, blog.title, blog.content)
    });
  }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
back.addEventListener('click', () => {
  window.location.href = '/index.html'
});