import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import { Box } from '@chakra-ui/react';

const BraftPostEditor = ({ post, setPost, height, placeholder }) => {
  const [isLiving, setIsLiving] = useState(false)
  const [active, setActive] = useState(false);
  const [state, setState] = useState(BraftEditor.createEditorState(post));

  const controls = [
    'bold',
    'italic',
    'underline',
    'strike-through',
    'separator',
    'list-ul',
    'list-ol',
    'blockquote',
  ];

  const handleEditorChange = editorState => {
    setState( editorState );
    if (state.editorState !== null) {
      const htmlContent = state.toHTML();
      setPost(htmlContent);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderColor={active ? 'blue.500' : 'bg.light'}
      color="text.light"
      rounded="md"
      style={{ boxShadow: active ? 'rgb(99 179 237) 0px 0px 0px 1px' : '' }}
    >
      <BraftEditor
        id="post-editor"
        placeholder={placeholder}
        language="en"
        controls={controls}
        stripPastedStyles={true}
        contentStyle={{ height: height }}
        value={state}
        onChange={handleEditorChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </Box>
  );
};

export default BraftPostEditor;