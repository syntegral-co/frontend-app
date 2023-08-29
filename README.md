# Syntegral Frontend Webapp

Bootstrapped with [Vite](https://vitejs.dev/). Deployed on [Netlify](https://www.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/88b7cb6c-6669-4b79-ad0f-62ad2d6f5765/deploy-status)](https://app.netlify.com/sites/fanciful-capybara-1c2cf2/deploys?branch=production)

## Main Features ⭐

- React JS + Typescript
- Styling and components by [Tailwind CSS](https://tailwindcss.com/)
- Validation via [Zod](https://zod.dev/)
- Queries with [React Query](https://react-query-v3.tanstack.com/)
- Authentication via [Auth0](https://auth0.com/)
- State via [recoil](https://recoiljs.org/)
- Testing via [Vitest](https://vitest.dev/)
- Icons from [Icomoon](https://icomoon.io/)
- Tracking via [Mixpanel](https://mixpanel.com/)
- Error logging via [Sentry](https://sentry.io/)

## File structure 📂

The file structure follows the pattern:

```
| - src
|  | - components
|  |  | - sidebar
|  |  | - chat-input
|  |  | - spinner
|  |  | - nav
|  |  | - chat-output
|  | - pages
|  |  | - dashboard
|  |  | - 404
```

- `components` contains all the app components that are reused throghout the entire application.
- `pages` contains the entire app routing system, with the following structure:

```
| - dashboard
|  | - index.tsx //corresponds to /dashboard
|  | - settings
|  |  | - index.tsx //corresponds to /dashboard/settings

```

### Utilities 🧰

The `src/utils` folder contains some utility files:

- api.ts: all API calls are listed here
- helpers.ts: some general-purpose functions
- session.ts: handles the user session management
- tracking.ts: contains some Mixpanel functions
- icons.json: lists all icons downloaded from Icomoon

## Global state 🌍

The app's global state is handled through [recoil](https://recoiljs.org/).
Every component handles its own state in its _atom.ts_ file.

## API Calls 🤙🏻

The app's general API calls are handled and tracked in `src/utils/api.ts` while each component handles its own API calls in its _api.ts_ file.

## Environmental variables

The app uses two kinds of environmental variables:

- **public**: listed in the _.env_ file
- **private**: not commited to the GitLab repo and listed in a _.env.local_ file, which is in the .gitignore file.

The environmental variables used throughout the app are defined in `src/vite-env.d.ts`. Any new variable must be defined here to have autocompletion for `import.meta.env` in the IDE.

## Development 💻

The repository uses _pnpm_. It will give you an error if you try to install its dependencies with npm or yarn.

### Start the server

To start the development, clone this repository.
After cloning it, run:

```bash
cd frontend-app
```

Then, create a local environment configuration file `.env.local` by duplicating `env.sample`.

Ask your favourite developer for the keys.
Afterwards, run:

```bash
pnpm install
pnpm dev
```

### Testing

To run tests use:

```bash
pnpm test
```

this will run the testing suite in watch mode.
Other useful commands are:

```bash
pnpm test-ui
```

or

```bash
pnpm coverage
```

The first command opens a testing UI in the browser, while the second one run the testing suite in watch mode with code coverage informations.
