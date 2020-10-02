/* Understanding Uninitialized Variables */
var x; x= 9;
var y; y= 2;
var z; z= "Kota ";
/* deklarasikan var x y z dengan value 28, 10, dan kota solo dibawah baris ini*/ 
x= x + 19;
y= y +8;
z= z + "Solo";

console.log(x);
console.log(y);
console.log(z);