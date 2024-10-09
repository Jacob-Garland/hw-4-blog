// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// DONE
const toggle = document.getElementById('toggle');

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark');

  localStorage.setItem('mode', body.classList.contains('dark') ? 'dark' : 'light');
};

const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  document.body.classList.add('dark');
};

toggle.addEventListener('click', toggleMode);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// 
function readLocalStorage() {
  const storedBlogs = localStorage.getItem("blogList");
  return storedBlogs ? JSON.parse(storedBlogs) || [] : [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogList, newArticle) {
  const existingBlogList = readLocalStorage(blogList);
  const updatedBlogList = [existingBlogList, newArticle];
  localStorage.setItem(blogList, JSON.stringify(updatedBlogList));
}