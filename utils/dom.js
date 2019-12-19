function consoleNodesRecursive(root) {
    root.childNodes.forEach(function(child){
        if (child.childNodes && child.childNodes.length) {
            console.group('element ' + child.tagName)
            consoleNodesRecursive(child)
            console.groupEnd();
        } else {
            var value = child.nodeType !== Node.TEXT_NODE && child.tagName !== 'script' 
            ? child.nodeValue.trim() || ""
            : "";
        }
    });
}