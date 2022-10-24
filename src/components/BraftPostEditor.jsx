import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import { Box } from '@chakra-ui/react';

const BraftPostEditor = ({ setPost, height, placeholder }) => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState({
    editorState: null,
  });
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

  function check() {
    let el = getComputedStyle(
      document.querySelector('.public-DraftEditor-content div')
    );
    let contentHeight = parseInt(el.height.substring(0, el.height.length - 2));
    if (contentHeight > height) {
      document.querySelector('.bf-content').style.height = getComputedStyle(
        document.querySelector('.public-DraftEditor-content div')
      ).height;
    } else {
      document.querySelector('.bf-content').style.height = `${height}px`;
    }
  }

  const handleEditorChange = editorState => {
    setState({ editorState });
    if (state.editorState !== null) {
      const htmlContent = state.editorState.toHTML();
      setPost(htmlContent);
    }
    check();
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