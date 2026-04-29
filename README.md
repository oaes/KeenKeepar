 📘 KeenKeepar

**KeenKeepar** is a modern relationship management app that helps you stay connected with your friends, track interactions, and maintain meaningful relationships over time.

---

## 🚀 Features

* 👥 Manage your friends list
* 📅 Track last contact time (`days_since_contact`)
* 🔔 Smart status indicators:

  * `on-track`
  * `almost due`
  * `overdue`
* 🏷️ Tag-based categorization (e.g. tech, travel, mentor)
* 📊 Dashboard summary:

  * Total friends
  * Status breakdown
  * Monthly interaction stats
* 🧠 Timeline tracking for interactions
* ⚡ Fast UI built with modern React + Next.js

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Frontend:** React, Tailwind CSS
* **Image Optimization:** Next.js Image
* **Data Handling:** Local API routes (`/api/friends`)
* **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)

---

## 📁 Project Structure

```bash
app/
 ├── api/
 │   └── friends/
 │       └── route.js
 ├── components/
 │   ├── home/
 │   │   ├── Banner.jsx
 │   │   └── Summary.jsx
 │   └── friends/
 │       ├── FriendsCard.jsx
 │       └── FriendsGrid.jsx
 ├── lib/
 │   ├── constant.js
 │   └── timeline.js
 └── page.js
```

---

## ⚙️ Installation

```bash
git clone https://github.com/oaes/KeenKeepar.git
cd KeenKeepar
npm install
npm run dev
```

App will run on:

```bash
http://localhost:3000
```

---

## 🔧 Configuration

### Allow external images (Unsplash)

Update `next.config.js` or `next.config.mjs`:

```js
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

---

## 📡 API Example

### GET `/api/friends`

Returns:

```json
[
  {
    "id": 1,
    "name": "Arif Hasan",
    "days_since_contact": 9,
    "status": "on-track",
    "tags": ["tech", "travel"]
  }
]
```

---

## 🧠 How It Works

* Friends data is fetched from a local API route
* Dashboard stats are computed using `useMemo`
* Timeline data is used to calculate monthly interactions
* UI updates dynamically based on relationship status

---

## ⚠️ Known Issues & Fixes

### Hydration mismatch (fixed)

Avoid using dynamic values like:

```js
new Date()
Math.random()
```

inside render.

✔ Fixed using `useEffect` + state

---

### Next.js Image Error

Fix by allowing external domains in config.

---

### Browser Extension Errors

Errors like:

```
removeChild NotFoundError
```

👉 Usually caused by browser extensions, not app code

