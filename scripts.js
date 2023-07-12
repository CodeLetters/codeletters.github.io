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

const blogContainer = document.getElementById('blogContainer');

// Function to generate slug from blog title
function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

// Function to navigate to the blog page with the selected blog slug
function navigateToBlog(blog) {
  const slug = generateSlug(blog.title);

  // Store the selected blog data in localStorage to access it in blog.html
  localStorage.setItem('selectedBlog', JSON.stringify(blog));

  window.location.href = `blogs/blog.html?slug=${slug}`;
}

// Loop through the blog data and create HTML elements for each blog post
blogData.forEach((blog) => {
  const blogCard = document.createElement('div');
  blogCard.className = 'blog-card';

  // Add event listener to the blog card to navigate to the blog page on click
  blogCard.addEventListener('click', () => navigateToBlog(blog));

  const blogTitle = document.createElement('h2');
  blogTitle.textContent = blog.title;

  const blogDate = document.createElement('p');
  blogDate.textContent = 'Published Date: ' + blog.date;

  const blogDescription = document.createElement('p');
  blogDescription.textContent = 'Description: ' + blog.description;

  blogCard.appendChild(blogTitle);
  blogCard.appendChild(blogDate);
  blogCard.appendChild(blogDescription);

  blogContainer.appendChild(blogCard);
});
