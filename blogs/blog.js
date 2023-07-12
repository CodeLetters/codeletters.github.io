document.addEventListener('DOMContentLoaded', () => {
  const blogContent = document.getElementById('blogContent');

  // Retrieve the selected blog data from localStorage
  const selectedBlog = JSON.parse(localStorage.getItem('selectedBlog'));

  if (selectedBlog) {
    const blogTitle = document.createElement('h2');
    blogTitle.textContent = selectedBlog.title;

    const blogDate = document.createElement('p');
    blogDate.textContent = 'Published Date: ' + selectedBlog.date;

    const blogDescription = document.createElement('p');
    blogDescription.textContent = 'Description: ' + selectedBlog.description;

    blogContent.appendChild(blogTitle);
    blogContent.appendChild(blogDate);
    blogContent.appendChild(blogDescription);
  }
});
