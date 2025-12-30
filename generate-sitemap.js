import { SitemapStream } from 'sitemap';
import fs from 'fs';
import blogs from './src/configs/blogData.js'; // Use ES Modules import

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  { url: '/cookies', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 },
  { url: '/sitemap', changefreq: 'yearly', priority: 0.5 },
];

// Add blog post URLs dynamically
blogs.forEach((blog) => {
  links.push({
    url: `/blog/${blog.url}`,
    changefreq: 'weekly',
    priority: 0.7,
  });
});

const sitemap = new SitemapStream({ hostname: 'https://jermingo.com' });

// Create a writable stream to save the sitemap to a file
const writeStream = fs.createWriteStream('./public/sitemap.xml');

// Pipe the sitemap stream to the writable file stream
sitemap.pipe(writeStream);

// Write each link to the sitemap
links.forEach((link) => sitemap.write(link));

// End the sitemap stream
sitemap.end();

writeStream.on('finish', () => {
  console.log('Sitemap generated successfully!');
});

writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});