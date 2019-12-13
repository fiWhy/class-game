function consoleNodesRecursive(root){
    console.dir(root);
root.child.forEach(function(element){
    console.log(element);
    if(element.childNodes&& element.childNodes.lenght){
        console.group("ELEMENT"+child.tagName);
        consoleNodesRecursive(child);
        console.groupEnd();
    }else{
        var value = node
    }
    }
}

}