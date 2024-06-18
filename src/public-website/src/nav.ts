import './style.css'

document.querySelector<HTMLDivElement>('#nav')!.innerHTML = `
<div class="navbar bg-primary text-primary-content">
  <button class="btn btn-ghost text-xl">Wyoming</button>
      <ul>
        <li class="ml-1 mr-1"><a href="#/" class="link link-hover">Home</a></li>
        <li class="ml-1 mr-1"><a href="#/about" class="link link-hover">About</a></li>
        <li class="ml-1 mr-1"><a href="#/contact" class="link link-hover">Contact</a></li>
    </ul>
</div>
`
