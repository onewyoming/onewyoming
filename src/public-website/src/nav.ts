import './style.css'

document.querySelector<HTMLDivElement>('#nav')!.innerHTML = `
<nav class="navbar">
    <ul>
        <li><a href="#/" class="link link-hover">Home</a></li>
        <li><a href="#/about" class="link link-hover">About</a></li>
    </ul>
</nav>
<span class="countdown">
  <span style="--value:55;"></span>
</span>
`
