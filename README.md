# React + TypeScript + Vite

## To run FE part
git clone git@github.com:yostsone/hw_esynergy.git . 
cd hw_esynergy
npm install
npm run dev
project should be available: http://localhost:5173

## For BE few additions were made (to resolve CORS errors)
- package was installed:
npm install cors

- cors was imported in crud_api/src/app.js:
import cors from 'cors';

- following code lines changed:
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({
origin: allowedOrigin,
credentials: true, // set true if you use cookies/auth; can't use '*' with credentials
}));

// Optionally enable preflight for all routes explicitly
app.options('*', cors({ origin: allowedOrigin, credentials: true }));




