import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function deCode(s) {
  let multyStr = "";
  let multiply = [];
  let repeatStr = [];
  let sollution = "";
  for (let char of s) {
    if (!isNaN(char)) {
      multyStr += char;
    } else if (char == "[") {
      multiply.push(multyStr);
      multyStr = "";
      repeatStr.push(sollution);
      sollution = "";
    } else if (char == "]") {
      sollution = repeatStr.pop() + sollution.repeat(multiply.pop());
    } else {
      sollution += char;
    }
  }
  return sollution;
}

let s = "3[a2[c]]";
let test = deCode(s);
console.log(test);
