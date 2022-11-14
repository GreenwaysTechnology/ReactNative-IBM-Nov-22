//variable declaration; string
//using var 
var firstName = "Subramanian"
//using let 
let lastName = "Murugan"
//log 
console.log("Name" + firstName + lastName);
console.log("Name ", firstName, lastName);
//es 6 back tick notation
console.log(`Name ${firstName} ${lastName}`);

//using es 5 + operator
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

//backtic noation : multi line strings
let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)
