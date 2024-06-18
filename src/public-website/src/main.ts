import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function router() {
  const routes = {
    '#/': () => {
      // Render home page
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      `;
    },
    '#/about': () => {
      // Render about page
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <h1>About Page</h1>
        <p>This is the about page!</p>
      `;
    },
    // Add more routes as needed
  };

  const currentRoute = window.location.hash as keyof typeof routes;
  const route = routes[currentRoute];

  if (route) {
    route();
  } else {
    // Handle 404 page not found
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    `;
  }
}

// Call the router function when the page loads
router();

// Listen for changes to the URL hash
window.addEventListener('hashchange', router);
