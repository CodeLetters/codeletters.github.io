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

// Loop through the blog data and create HTML elements for each blog post
blogData.forEach((blog) => {
  const blogCard = document.createElement('div');
  blogCard.className = 'blog-card';

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
