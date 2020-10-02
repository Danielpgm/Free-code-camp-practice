/* Understanding Uninitialized Variables */
var x; x= 9;
var y; y= 2;
var z; z= "Kota ";
/* deklarasikan var x y z dengan value 2a 8, 10, dan kota solo dibawah baris ini*/ 
x= x + 19;
y= y +8;
z= z + "Solo";

console.log(x);
console.log(y);
console.log(z);
/*----------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/

var a; var b; var c;
a= 98; b= "Nama saya "; c=32;
/* deklarasikan variable a, b, dan c dengan nilai 2, nama saya daniel, dan 100  */
a= a - 96;
b= b + "Daniel";
c= c + 68;

console.log(a);
console.log(b);
console.log(c);

/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/

/* single and double qouting */

single_quote= 'odading mang oleh rasanya anjayyyy banget';
double_qoute= "odading mang oleh rasanya anjayyyy banget";

/* campuran penggunaan tanda kutip dalam sebuah percakapan*/
mix_quote= 'kata mang ade odading mang oleh rasanya "anjayyy banget"'

percakapan= 'dono ask Filbert "Hey let\'s go to noel\'s warung"';
/*kenapa menggunakan backslash (\) dikarenakan ditengah kalimat terdapat tanda petik
yang harus digunakan, maka dari itu backslash digunakan sebagai escape character */
