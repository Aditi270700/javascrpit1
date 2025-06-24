// Dom Tree
// rootnode is document object
// roonode child is html

const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);// NodeList(3) [head,text,body]
const headElementnode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);
console.log(textNode1);
console.log(headElementnode.childNodes);
// parent relationship
 console.log(headElementnode.parentNode);

// sibling relationship
console.log(headElementnode.nextElementSibling);

