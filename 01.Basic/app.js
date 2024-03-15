// let firstfavnum= 7;
// let secondfavnum=9;
// console.log(firstfavnum+secondfavnum);
// console.log(firstfavnum - secondfavnum);
// console.log(firstfavnum * secondfavnum);
// console.log(firstfavnum / secondfavnum);
// console.log(firstfavnum % secondfavnum);

// Falsy, -> false, null, undefined,0,-0, NAN, '', "",(empty quotes)

// let isjsprogrammingLanguage= 10;
// let isjsHard= undefined;
// let firstfavnum=7;
// console.log(firstfavnum+ isjsHard);

// let firstfavnum=7;
// let secondfavnum=9;
// console.log(firstfavnum>secondfavnum);
// console.log(firstfavnum<secondfavnum);
// console.log(firstfavnum>=secondfavnum);
// console.log(firstfavnum<=secondfavnum);
// console.log(firstfavnum===secondfavnum);
// console.log(firstfavnum!==secondfavnum);
// console.log(firstfavnum==secondfavnum);

// --------------------------------------------------
// String
// concatenation== adding both string
// let favfirstactor= "luffy";
// let favlastactor= "monkeyD";
// let fullname= favfirstactor+favlastactor;
// let uppercase= fullname.toUpperCase();
// let message= `${uppercase} goum goum no `
// message= message+ " onepiece";
// console.log(message);


//  condition

// let password;
// if (password===8){
//     console.log("Welcome");
// }
// if (password<8) {
//     console.log("Password is too short");
    
// } else if(password>8){
//     console.log("Password is too long provide 8");
    
// }
// else{
//     console.log("Please proived password");
// }

// Switch cash
// let fruit = "banana";
//  switch(fruit){
//     case "banana":
//         console.log("banana is good");
//         break;
//     case "orange":
//         console.log("i like ornage also")
//         break;
//     case " apple":
//         console.log("no apple for me");
//         break;
//     default:
//         console.log("i will eat fruit");
//  }
// let name= "Puneet";
// let num=10;

// while (num<=100){
//     console.log(name, num);
//     num++;
// }
// let i=20;
// do{
//     console.log("puneet", i);
//     i++;
// }while(i<400);

// let favsinger= ["brook", "arjit singh", "me"];
// console.log(favsinger[0]);
// let firstfavnum=[1,2,3,4];
// let mixarray= ["anjsn",["udwbd"],13,true];


// const car= {
//     type: "swden",
//     model: "XPat",
//     colour: "white",

// }
// console.log(car.type);
// car.type= "toyota";
// console.log(car.type);
// car.wheel= "4";
// console.log(car);

// Funtion

// const person ={
//     name: "Puneet",
//     age: "22",
//     greet: function(){
//         return `Hello, my name is ${person.name} & i am ${person.age} year old,`;
//     },
// };

// console.log(person.greet());
if (confirm("press the button")== true){
    inp= prompt();
    if(inp<=0){
        console.error("age cant be negative");
        document.body.style.background= "red";
        
    }
    if(inp>=0 && inp<=4){
        location.href= "https://www.google.com"
    }
    if(inp>= 18 ){
        alert("you can drive");
        document.body.style.background= "green";
    }else{
        alert("you cant drive");
        document.body.style.background= "green";
    }
};


