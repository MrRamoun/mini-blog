function push() {
    mdText = document.querySelector(".CodeMirror-scroll").innerText;
    alert(mdText);
    html_content = marked(mdText);
    
    document.querySelector(".articles").innerHTML += `<article>${html_content}</article>`;
    
}