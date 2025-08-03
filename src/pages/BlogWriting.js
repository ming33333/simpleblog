import React, { useState } from 'react';
import DocEditor from '../components/DocEditor';

const BlogWriting = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
    console.log('Updated Content:', newContent);
  };

  const handleSave = () => {
    console.log('Saving Content:', content);
    // Add logic to save the content (e.g., send it to an API or save it locally)
  };

  return (
    <div>
      <h1>Blog Writing</h1>
      <DocEditor onChange={handleContentChange} initialContent="<p>Start writing your blog...</p>" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BlogWriting;