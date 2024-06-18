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
  fetch('pages.json')
    .then(response => response.json())
    .then(pages => {
      const routes = {
        '': () => renderPage(pages.home),
        '#/': () => renderPage(pages.home),
        '#/about': () => renderPage(pages.about),
        '#/contact': () => renderPage(pages.contact),
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
          <p class="btn">please click <a href="/#/" class="link link-hover">here</a> to go home.
        `;
      }
    });
}

interface CTA {
  text: string;
  url: string;
}

interface Page {
  title: string;
  subtitle: string;
  content: string[];
  cta: CTA;
}

function renderPage(page: Page) {
  const contentParagraphs = page.content.map((paragraph: string) => `<p>${paragraph}</p>`).join('');
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <article class="prose prose-stone dark:prose-invert ml-10 mr-10">
    <h1>${page.title}</h1>
    <h2>${page.subtitle}</h2>
    ${contentParagraphs}
    <p><a href="${page.cta.url}" class="btn">${page.cta.text}</a></p>
    </article>
  `;
}

// Call the router function when the page loads
router();

// Listen for changes to the URL hash
window.addEventListener('hashchange', router);

