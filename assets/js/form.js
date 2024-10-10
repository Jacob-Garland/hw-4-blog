// TODO: Create a variable that selects the form element
const blogPostForm = document.getElementById('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function postSubmission (event) {
    event.preventDefault();

    const username = blogPostForm.querySelector('#username').value;
    const title = blogPostForm.querySelector('#title').value;
    const content = blogPostForm.querySelector('#content').value;

    if (!username || !title || !content) {
        document.getElementById("error").textContent = `Please complete the form!`;
        return;
    }

    const blogList = { username, title, content };
    const storedBlogs = JSON.parse(localStorage.getItem('blogList')) || [];
    storedBlogs.push(blogList);
    localStorage.setItem('blogList', JSON.stringify(storedBlogs));

    blogPostForm.reset();

    window.location.href = '/blog.html';
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
blogPostForm.addEventListener('submit', postSubmission);