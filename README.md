# React Swapi Search – Star Wars Edition

This project is a **React.js application** that demonstrates many of React’s core features and components, using a Star Wars-themed data explorer. It covers hooks, state management, context, conditional rendering, forms, custom hooks, and API integration.

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ritaCosta93/react-swapi.git
cd react-swapi
npm install
````

Start the development server:

```bash
npm start
```

---

## 🚀 Components

* **Logo**: Displays the app logo at the top of the page.
* **SearchOptions**: Radio button group that lets the user select a Star Wars category (`films`, `people`, `planets`, `species`, `vehicles`, `starships`). Uses controlled inputs and lifts state up to `App`.
* **Searchbar**: Accepts the selected category and search term input. Handles user input and triggers a search when the button is clicked.
* **Results**: Renders the API results dynamically. Accepts a data array and displays each item. Supports type-checking via TypeScript interfaces.
* **useAPI**: Custom hook that fetches data from the Star Wars API (`https://swapi.dev/api`) based on the selected category and manages loading and error states.
* **useSearch**: Handles filtering API data based on the current search term and selected category. Can be extended to integrate dynamic search and live filtering.

---

## 🛠️ Tech Stack

* **React** – Functional components and hooks.
* **TypeScript** – Type safety for props, state, and API data.
* **Tailwind CSS** – Rapid and responsive styling.
* **Axios** – API requests to the Star Wars API.

---

## ✅ Features

* Fully **type-safe components** with TypeScript interfaces for `films`, `people`, `planets`, `species`, `vehicles`, and `starships`.
* Dynamic **radio button selection** that controls which API category is fetched.
* Controlled **search input** to filter results based on user input.
* **Custom hooks** (`useAPI` and `useSearch`) for reusable logic and data fetching.
* **Loading and error handling** for API requests.
* **Conditional rendering** for empty results, invalid data, and loading states.

---

## 📂 Folder Structure

```markdown
src/
├─ components/
│  ├─ Logo.tsx
│  ├─ SearchOptions.tsx
│  ├─ Searchbar.tsx
│  ├─ Results.tsx
├─ hooks/
│  ├─ useAPI.ts
│  ├─ useSearch.ts
├─ models/
│  ├─ films.ts
│  ├─ people.ts
│  ├─ planets.ts
│  ├─ species.ts
│  ├─ starships.ts
│  └─ vehicles.ts
├─ App.tsx
└─ index.tsx
```

