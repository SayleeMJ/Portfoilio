
function removeEmptyLink() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.getAttribute('href') === '') {
            link.parentNode.removeChild(link);
        }
    }
}