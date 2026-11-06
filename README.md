# My Bookshelf

[GitHub repository](https://github.com/jsphnmgt/my-bookshelf)

A React app for adding books to a personal collection and displaying them on a responsive virtual shelf. Includes Home and About pages and a wood-and-parchment theme.

Originally developed as a course project for 6APSI at Holy Angel University, using a provided starter template to practice JavaScript, React, and styling.

## Development

Install Node.js 22 and npm, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. On Windows, use `npm.cmd` if PowerShell blocks `npm`.

## Commands

- `npm run dev`: start the development server.
- `npm test`: run the app tests once.
- `npm run test:watch`: rerun tests as files change.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: preview the production build locally.

## Project layout

- `src/App.jsx`: app layout and navigation.
- `src/components/`: bookshelf, add-book form, book list, and route content.
- `src/*.module.css` and `src/components/*.module.css`: app and shelf styles.
- `test/`: component, routing, and app structure tests.
- `.github/workflows/test.yml`: automated tests and build checks.

Books are held in memory and reset when the page reloads. Both a title and an author are required to add a book. Production hosting must serve `index.html` for client routes such as `/about`.

The project began with a course template; original attribution is retained in [NOTICE](NOTICE).
