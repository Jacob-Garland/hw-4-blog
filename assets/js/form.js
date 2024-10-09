// TODO: Create a variable that selects the form element
// DONE
const blogPost = document.getElementById('blogPost');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. 
// TODO PART 2: If the form is submitted with missing data, display an error message to the user.
// DONE
function postSubmission () {
    blogPost.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = blogPost.querySelector('#username').value;
        const title = blogPost.querySelector('#title').value;
        const content = blogPost.querySelector('#content').value;

        if (!username || !title || !content) {
            alert('Please fill in all three fields before submitting.');
            return;
        }

        const blogPost = [username, title, content];
        const storedBlogs = JSON.parse(localStorage.getItem('blogPost')) || [];
        storedBlogs.push(blogPost);
        localStorage.setItem('blogPost', JSON.stringify(storedBlogs));

        blogPost.reset();

        window.location.href = 'blog.html';
    });
};
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
// DONE???
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', postSubmission());