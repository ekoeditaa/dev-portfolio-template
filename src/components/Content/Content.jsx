import React from 'react';

import pages from '../../pages';

import './Content.css';

import CodeBlock from './code-block';
import ReactMarkdown from 'react-markdown';

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
