let name = "Ilya";
console.log(`hello ${1}`); //hello
console.log(`hello ${"name"}`); //hello Ilya
console.log(`hello ${name}`); //hello name

5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //false
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

console.log(null || 2 || undefined); //2
console.log(alert(1) || 2 || alert(3)); //1 2
console.log(1 && null && 2); //null
console.log(alert(1) && alert(2)); //1 undifined
console.log(null || (2 && 3) || 4); //3

if (age >= 14 && age <= 90);

if (!(age >= 14 && 90 <= age));
if (14 < age || age > 90);

if (-1 || 0) alert("first"); //first
if (-1 && 0) alert("second"); //chi tpum second
if (null || (-1 && 1)) alert("third"); //third
