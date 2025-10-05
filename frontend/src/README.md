# Bookshop Frontend


## Setup


1. paste files to a new Vite + React project or copy the sections into files as named above.
2. npm install
3. npx tailwindcss init -p (if tailwind files are missing) or ensure tailwind config exists
4. npm run dev


API base: https://bookshop-api-er7t.onrender.com/api


Notes:
- This front-end assumes REST endpoints: GET /items, GET /items/:id, POST /items, PUT /items/:id, DELETE /items/:id
- The code contains a simple polymorphic form; extend it to show/hide fields depending on type (Book/Journal/Comic) if needed.

