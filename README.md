# React + TypeScript + Vite

## To install and run FE part
```bash
git clone git@github.com:yostsone/hw_esynergy.git . 

cd hw_esynergy

npm install

npm run dev
```
project should be available: http://localhost:5173

## For BE few additions were made (to resolve CORS errors)
- package was installed:
```bash
npm install cors
```

- cors was imported in crud_api/src/app.js:
```bash
import cors from 'cors';
```
- following code lines changed:
```bash
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({
origin: allowedOrigin,
credentials: true,
}));

app.options('*', cors({ origin: allowedOrigin, credentials: true }));
```


