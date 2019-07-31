import React from 'react';

import pages from '../../pages';

import './Content.css';

const ReactMarkdown = require('react-markdown');

function Content({ activePage }) {
  return (
    <div className="content">
      <ReactMarkdown source={pages[activePage]} />
    </div>
  );
}

export default Content;
