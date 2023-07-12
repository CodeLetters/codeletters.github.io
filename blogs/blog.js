const blogData = [
  {
    title: 'Blog Title 1',
    date: 'July 1, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo, metus in tincidunt fringilla, nisl nunc commodo nisi, in cursus ligula neque non arcu.'
  },
  {
    title: 'Blog Title 2',
    date: 'July 5, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo, metus in tincidunt fringilla, nisl nunc commodo nisi, in cursus ligula neque non arcu.'
  },
  {
    title: 'Blog Title 3',
    date: 'July 10, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo, metus in tincidunt fringilla, nisl nunc commodo nisi, in cursus ligula neque non arcu.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const blogContent = document.getElementById('blogContent');

  // Function to generate slug from blog title
  function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  // Retrieve the blog slug from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  if (slug) {
    // Retrieve the selected blog data from localStorage
    const selectedBlog = JSON.parse(localStorage.getItem('selectedBlog'));

    if (selectedBlog.id && generateSlug(selectedBlog.title) === slug) {
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card';

      const blogTitle = document.createElement('h2');
      blogTitle.textContent = selectedBlog.title;

      const blogDate = document.createElement('p');
      blogDate.textContent = 'Published Date: ' + selectedBlog.date;

      const blogDescription = document.createElement('p');
      blogDescription.textContent = 'Description: ' + selectedBlog.description;

      blogCard.appendChild(blogTitle);
      blogCard.appendChild(blogDate);
      blogCard.appendChild(blogDescription);

      blogContent.appendChild(blogCard);
    } else {
      const noBlogMessage = document.createElement('p');
      noBlogMessage.textContent = 'No blog found with the provided slug.';
      blogContent.appendChild(noBlogMessage);
    }
  } else {
    const noBlogMessage = document.createElement('p');
    noBlogMessage.textContent = 'No blog slug provided.';
    blogContent.appendChild(noBlogMessage);
  }

  // Clear the selected blog from localStorage
  // localStorage.removeItem('selectedBlog');
});
