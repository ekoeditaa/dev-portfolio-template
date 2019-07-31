export const MENU = [
  { name: 'Home', value: 'index' },
  { name: 'About', value: 'about' },
  { name: 'Projects', value: 'projects' },
  { name: 'Work', value: 'work' },
  { name: 'Social', value: 'social' },
];

const indexMarkdown = `
  # Home 
  
  ## Hi there, thank you for visiting!  
  My name is Eko.  
  I love writing code and building things but more often than not 
  I break things an systems instead.   
  You can find me on Github working on personal and open source projects.  
  I also write on Quora or Medium sometimes.  
  I enjoy good food, coffee, and travelling a lot.  
  Cheers! 
`;

export const CONTENTS = {
  index: {
    value: indexMarkdown,
  },
  about: {
    value: '# This is a header\n\nAnd this is a paragraph',
  },
  projects: {
    value: `projects balblablalbla`,
  },
  work: {
    value: `work balblablalbla`,
  },
  social: {
    value: `
    # Test

    * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
    * Renders actual, "native" React DOM elements  
    * Allows you to escape or skip HTML (try toggling the checkboxes above)

    `,
  },
};
