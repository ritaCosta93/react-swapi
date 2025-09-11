# React Swapi Search – Star Wars Edition

This project is a **React.js application** that demonstrates many of React’s core features and components, using a Star Wars-themed data explorer. It covers hooks, state management (now with **Zustand**), conditional rendering, forms, custom hooks, and API integration.

---

![React Swapi Search](./public/screenshot.png)

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ritaCosta93/react-swapi.git
cd react-swapi
npm install
```

Start the development server:

```bash
npm start
```

---

## 🚀 Components

* **Logo**: Displays the app logo at the top of the page.
* **SearchOptions**: Radio button group that lets the user select a Star Wars category (`films`, `people`, `planets`, `species`, `vehicles`, `starships`). Controlled inputs lift state to the global store via **Zustand**.
* **Searchbar**: Accepts the selected category and search term input. Handles user input and triggers a search.
* **Results**: Renders the API results dynamically. Accepts a data array and displays each item. Supports type-checking via TypeScript interfaces.
* **Result**: Displays individual search results with proper formatting.
* **useAPI**: Custom hook fetching data from the Star Wars API (`https://swapi.dev/api`) based on the selected category. Manages loading and error states.
* **useSearch**: Handles filtering API data based on the current search term and selected category. Integrates with **Zustand** for state management.

---

## 🛠️ Tech Stack

* **React** – Functional components and hooks.
* **TypeScript** – Type safety for props, state, and API data.
* **Tailwind CSS** – Rapid and responsive styling.
* **Axios** – API requests to the Star Wars API.
* **Zustand** – Lightweight state management.

---

## ✅ Features

* Fully **type-safe components** with TypeScript interfaces for `films`, `people`, `planets`, `species`, `vehicles`, and `starships`.
* **Global state management** using **Zustand** for selected category, search term, and API results.
* Dynamic **radio button selection** that controls which API category is fetched.
* Controlled **search input** to filter results based on user input.
* **Custom hooks** (`useAPI`, `useSearch`, `useFilteredResults`) for reusable logic and data fetching.
* **Loading and error handling** for API requests.
* **Conditional rendering** for empty results, invalid data, and loading states.
* **Guards** (`resultsGuard`) to prevent invalid API calls.

---

## 📂 Folder Structure

```markdown
src/
├─ components/
│  ├─ Logo.tsx
│  ├─ Result.tsx
│  ├─ Results.tsx
│  ├─ SearchOptions.tsx
│  └─ Searchbar.tsx
├─ guards/
│  └─ resultsGuard.ts
├─ hooks/
│  ├─ useAPI.ts
│  ├─ useFilteredResults.ts
│  ├─ useSearch.ts
│  ├─ useStore.ts
│  └─ useValidateData.ts
├─ models/
│  ├─ films.ts
│  ├─ people.ts
│  ├─ planets.ts
│  ├─ species.ts
│  ├─ starships.ts
│  └─ vehicles.ts
├─ services/
│  └─ api.ts
├─ App.tsx
└─ index.tsx
```


