function consoleNodesRecursive(root) {
  console.dir(root);
  root.childNodes.forEach(function(child) {
    if (child.childNodes && child.childNodes.length) {
      console.group("ELEMENT " + child.tagName);
      consoleNodesRecursive(child);
      console.groupEnd();
    } else {
      var value =
        child.nodeType !== Node.TEXT_NODE && child.tagName !== "SCRIPT"
          ? child.nodeValue.trim() || ""
          : "";
      console.log(child.nodeName, value);
    }
  });
}

function  createElementWithClass(el, cl) {
  var element = document.createElement(el);
  element.classList.add(cl);
  return element;
}
