var e = document.createElement('div');
e.innerHTML = `
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1" title="Never Gonna Give You Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;

while(e.firstChild) {
    document.body.appendChild(e.firstChild);
}
