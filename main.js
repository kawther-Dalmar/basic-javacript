// for(let i = 1; i<= 2; i++){
//     console.log(i)
// }

// let i = 10;
// do {
//     i+=1;
//     console.log(i)

// }while(i <= 11)

// let n = 10;
// while(n < 20){
//     n++;
//     console.log(n)
// }

//ARRAY

// let furits = ["Apples", "Mangoes","Banana"];
// console.log(furits)

//add
// furits.push("New Element");
// console.log(furits);

// furits.pop()
// console.log(furits);

// //ADD FRONT
//  furits.unshift("Limon");
//  console.log(furits);
//  //remove fornt
//  furits.shift();
//  console.log(furits);

//  let pos = furits.indexOf('Mangoes');
//  console.log(pos);

//  let removedItem = furits.splice(pos, 1);
//  console.log(furits)


 //Loop throw Array

 let furits = ["Apples", "Mangoes","Banana"];
// furits.forEach(function (Item){ 
    furits.forEach(Item =>{
        console.log(Item)
  })
    // console.log(Item)
// })



//FUNCTIONS EXPRESSION
// const square = function(num){
//     return num *num;
 
// }
// console.log(square(5))

//ARROW FUNCTION EXPRESSION
//  const square = num => num* num;
//  console.log(square(6))

const ADD = (n1,n2) => n1 + n2;
console.log('the two numbers is' ,+ADD(3,3))

 const add = (num1, num2)=>{ return `the two numbers is ${num1 + num2}`};
 console.log(add(4,5))

 const sub  = (m1 =5, m2 =3) => m1-m2
 console.log('the two substract numbers is',+ sub())

 const square = (v1,v2) =>{return v1 *v2};
 console.log( square(5,4));

 /*
 2^10 =1024

2*1 = 2;
2*2 =4;
2*4 =8;
2*8 =16;
2*16 =32;
2*32 =64;
2*64 =128;
2*128 =256;
2*256 =512;
2*512 =1024;

 */



const power =(base, exponent)=>{
    let result = 1;
    for(let i = 0; i<exponent; i++){
        result = result *base
    }
    return result
}
console.log(power(2,10));
console.log(power(3,10));


//OBJECT
 
let student =[{
    name: 'Kauthar',
    class: 'b610',
    faculty : 'computer Science',
    address: {
        district: 'Hilwaa',
        streat: 'SOS',
        Home: 'lootada sadaxaad'
    },
    hoppites : ['gariir','game','coding'],

    age: function(){
        console.log(`waxay jirtaa ${2022-2000} sano`)
    }

},
{
    name: 'hamdi',
    class: 'b47',
    address: {
        district: 'Hodan',
        streat: 'sigale',
        Home: 'laamiga'

    },
    hoppites:['football','watching TV', 'Driving'],
    age: function(){
        console.log(16)
    }
},

{
    name: 'sihaam',
    class:'b519',
    address: {
        district: 'yaqshiid',
        streat: 'towfiikh',
        Home: 'guriga lixaad'
    },
    hoppites:['programming','watching moves','thiefs'],
    age: function(){
        console.log(25);
    }
}


];
student.forEach((student)=>{
    console.log(student.name+student.class +student.hoppites)
})


// console.log(student[1].address.streat);
// console.log(student[0].address.streat);
// console.log(student[2].address.streat)

// student.age()
// console.log(`waxy jeceshahay ${student.hoppites[0]}ka`)
// console.log('waxay daganthay xaafada',''+ student.address.streat)
// console.log('magaceedu waa',''+student.name);





