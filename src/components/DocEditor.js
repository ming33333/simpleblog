import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

/**
 * DocEditor Component
 *
 * This component initializes a Quill editor and provides a rich text editing interface.
 * It can be used on the "blogwriting" page or any other page requiring a text editor.
 *
 * @component
 * @returns {JSX.Element} - The rendered Quill editor.
 */
const DocEditor = ({ onChange, initialContent }) => {
  const editorRef = useRef(null); // Reference to the editor container
  const quillRef = useRef(null); // Reference to the Quill instance

  useEffect(() => {
    // Initialize Quill editor
    quillRef.current = new Quill(editorRef.current, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ],
      },
      placeholder: 'Compose an epic...',
      theme: 'snow', // or 'bubble'
    });

    // // Set initial content if provided
    // if (initialContent) {
    //   quillRef.current.root.innerHTML = initialContent;
    // }

    // // Listen for text changes and call the onChange callback
    // quillRef.current.on('text-change', () => {
    //   if (onChange) {
    //     onChange(quillRef.current.root.innerHTML);
    //   }
    // });

    // // Cleanup on component unmount
    // return () => {
    //   quillRef.current = null;
    // };
  }, [onChange, initialContent]);

  return <div ref={editorRef} style={{ height: '300px' }} />;
};

export default DocEditor;