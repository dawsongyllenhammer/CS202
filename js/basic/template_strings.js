// template strings

const title = "modern Javascript";
const author = "Juastice B";
const likes = 10;




// concatenation way
    /* let result = "the blog called" +title+ "by" +author+ 
    "has"+likes+ "likes"

console.log(result);
 */


// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);




// creating html templates
let html = `
    <h1>${title} </h1>
    <p>${author} </p>
    <span>This blog hs ${likes} likes </span>
`

console.log(html);

document.write(html);


