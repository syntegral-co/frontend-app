# Syntegral Frontend Webapp

Bootstrapped with [Vite](https://vitejs.dev/). Deployed on [Netlify](https://www.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/88b7cb6c-6669-4b79-ad0f-62ad2d6f5765/deploy-status)](https://app.netlify.com/sites/fanciful-capybara-1c2cf2/deploys?branch=main)

## Main Features ⭐

- React JS + Typescript
- Styling and components by [Tailwind CSS](https://tailwindcss.com/)
- Validation via [Zod](https://zod.dev/)
- Queries with [React Query](https://react-query-v3.tanstack.com/)
- Authentication via [Auth0](https://auth0.com/)
- State via [recoil](https://recoiljs.org/)

## File structure 📂

The file structure follows the pattern:

```
| - src
|  | - components
|  |  | - sidebar
|  |  | - protected-route
|  |  | - chat-input
|  |  | - spinner
|  |  | - nav
|  |  | - watchlist
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

## Global state 🌍

The app's global state is handled through [recoil](https://recoiljs.org/).
The atoms are stored in `src/state/atoms.ts`.

## Development 💻

### Start the server

To start the development, clone this repository.
After cloning it, create a local environment configuration file `.env.local` with the following keys:

```
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENTID=
```

Ask your favourite developer for the keys.
Afterwards, run:

```bash
cd frontend-app
yarn install
yarn dev
```
