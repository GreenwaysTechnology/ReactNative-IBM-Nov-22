function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Welcome to React'
    //attach on to the existing tree 
    const root = document.getElementById('root')
    root.appendChild(Heading)
}
createElement()