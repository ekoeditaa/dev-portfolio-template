import React from 'react';

import pages from '../../pages';

import './Content.css';

const CodeBlock = require('./code-block');
const ReactMarkdown = require('react-markdown');

function Content({ activePage }) {
  return (
    <div className="content">
      <ReactMarkdown
        source={pages[activePage]}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
}

export default Content;
