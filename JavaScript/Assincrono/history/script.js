const links = document.querySelectorAll('a');

function handleClick(e) {
    e.preventDefault();
    fetchPage(e.target.href);
    window.history.pushState(null, null, e.target.href);
}
async function fetchPage(url) {
    document.querySelector('.content').innerHTML = 'CARREGANDO';
    const pageReponse = await fetch(url);
    const pageText = await pageReponse.text();
    replaceContent(pageText);
}
function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}
window.addEventListener('popstate', () => {
    console.log(window.location);
    fetchPage(window.location.href);
});
links.forEach((item) => {
    item.addEventListener('click', handleClick);
})