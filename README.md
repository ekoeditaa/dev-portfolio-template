# Dev Portfolio Template

Simple, markdown flavored portfolio website for developers which lets you focuses on your content.

## Getting Started

Clone the project

```bash
git clone
```

Install dependencies and start project

```bash
yarn
yarn start
```

The app will then run in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding new menu

Navigate to `config.js` file.

Suppose I want to add a menu for my travels.

```javascript
export const MENU = [
  { name: 'Home', value: 'index' },
  { name: 'About', value: 'about' },
  { name: 'Projects', value: 'projects' },
  { name: 'Work', value: 'work' },
  { name: 'Social', value: 'social' },
  // adding new menu items
  { name: 'Travels', value: 'travels' },
];
```

Adding objects to the list will create additional menu items.
Each value must be unique.

Next, add the markdown content in `src/pages/` directory.
The markdown file name must be the same as the `value` added in MENU previously.

```
dev-portfol-app
│   README.md
└───config
│
└───src
    └───pages
          │   index.md
          │   projects.md
          │   index.js
          │   ...
          └   travels.md
```

Lastly, we register the new page in the file `pages/index.js`. Use the menu's `value` as the name.

```javascript
import index from './index.md';
import about from './about.md';
import projects from './projects.md';
import social from './social.md';
import work from './work.md';
import travels from './travels.md';

const pages = {
  index,
  about,
  projects,
  social,
  travels,
};

export default pages;
```

The content of each menu can be edited in the corresponding markdown file.

## Deploying

```bash
yarn build
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credits

- Facebook CRA - [Create React App](https://github.com/facebook/create-react-app)
- Raw loader - [raw-loader](https://www.npmjs.com/package/raw-loader)
