import React from 'react';

import { CONTENTS } from '../../config';

import './Content.css';
const ReactMarkdown = require('react-markdown');

function Content({ activePage }) {
  const content = CONTENTS[activePage].value;

  return (
    <div className="content">
      <ReactMarkdown source={content} />
    </div>
  );
}

export default Content;
