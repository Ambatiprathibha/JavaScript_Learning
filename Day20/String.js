let s1 = "Hello";
console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.includes("lo"));
console.log(s1.startsWith("He"));
console.log(s1.endsWith("lo"));
console.log(s1.indexOf("l"));
console.log(s1.lastIndexOf("l"));
console.log(s1.slice(0, 3));
console.log(s1.substring(0, 3));
console.log(s1.substr(0, 3));
console.log(s1.replace("l", "x"));
console.log(s1.replaceAll("l", "x"));
console.log(s1.split("l"));
console.log(s1.charAt(0));
console.log(s1.charCodeAt(0));

let s2 = new String(`Hello`);
console.log(s1 == s2); //true
console.log(s1 === s2); //false

//string interpolation
let name = "John";
let age = 30.8978;
let s3 = `My name is ${name} and I am ${age} years old.`;
console.log(s3);
console.log(`I am ${age >= 18 ? "major" : "minor"}`);
console.log(age.toFixed(2));

const p = new String("hello");
p.customProp = "customValue";
console.log(p.customProp);
// concat method
let s4 = "Hello";
let s5 = "World";
console.log(s4.concat(" ", s5));

//time padstart
let s6 = "5";
console.log(s6.padStart(2, "0"));
console.log(s6.padEnd(2, "0"));
//combine padstart and padend
let s7 = "5";
console.log(s7.padStart(2, "0").padEnd(4, "0"));
