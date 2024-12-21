function navbarRender() {
let navbar = `
        <nav class="text-white max-w-4xl text-1xl">
            <ul class="flex space-x-12">
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="whoami.html">Who am i</a></li>
                <li><a href="social.html">Social</a></li>
            </ul>
        </nav>
`

document.getElementsByTagName('header')[0].innerHTML = navbar
}

navbarRender()