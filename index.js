
    let person=
    {
        fname:"sakthi",
        lname:"Tj",
        age:21,
        city:"palladam",

        native:{
            city:"thanjavur",
            doorno:1223
        }
    }

    let array=["element1","element2","element3"]


let a=10  
let b=22
 let c=5
 let d=8
 // console.log(++a+b-a+d++)
    let x=10
    x*=x
  //  alert(x);

     function func(age){

        let check=age>18 ? "adult" : "child"
        console.log(check);
     }

     //func(18)
     let array1=[12,23,33,44,55,"sakthi"]
        

    // console.log(array1)

    //  let hrs=new Date().getHours();
    //  //let hrs=hour.getHours;
    //  console.log(hrs);
    // if(hrs>=6 && hrs <12){
    //     console.log("Good Morning🐱‍🏍");
    // }
    // else if(hrs>12 && hrs<15) {
    //         console.log("Good Aternoon😍");

    // }
    // else if(hrs=>15 && hrs<=20){
    //     console.log("Good Evening❤");
    // }
    // else{
    //     console.log("Good night😘");
    // }


    // let amt=80000;
    // switch(true){
    //     case(amt>=10000 && amt<60000):
    //         console.log("Buy Android Mobile");
    //     break;
    //     case(amt>=60000):
    //         console.log("Buy Iphone Mobile");
    //     break;
    //     case(amt=>5000 && amt<10000):
    //         console.log("Buy Basic Mobiles");
    //     break;
    //     default:
    //         console.log("You can't afford buy Mobile Phone");    


    // }
    // for(let i=100;i>=0;i--){
    //     if(i%2==0){
    //         console.log(`the even num ${i}`);
    //     }
    // }

    // let object={
    //     name:"kunjumon",
    //     athu:34,
    //     ithu:"therla",


    // }
    // for(let key of object){
    //     console.log(key);
    // }
    // //
    //     let ano={
    //         he:"gay",
    //         age:33,

    //     }


    // for(let key in object){
    //     console.log(`${key}:${object[key]}`);
    // }

     //



       // alert("one day is our life will change like ous that day there are going to miss you more who were rejected you for sappa reason😢😢😢😢😢😢😢😢😢"); 
    //x=x*xthis 
    // console.log(array)
    // console.log(array.length);
    // array[3]=32



    // console.log(person)
    // console.log(person.fname.length)
    // console.log(person.native)
    // console.log(person.native.city)

// let num=10;
// let i=1;
// do{
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }while(i<=num);

// let people={
//     hename:"Tjsakthi",
//     age:12,
//     hobby:["cricket" ,"football","volleyball "],
//     wrk:{

//         location:"chennai",
//         company:"sortscript",
//     },
//     family:function(){
//         let msg=`hi this is ${this.hename} and he wrk for ${this.wrk.company}`;
//         console.log(msg);
//         console.log(this.age);
//     }
// }

function employee (emp,design,dept,pack,num) {

    return{
        name:emp,
        designation:design,
        department:dept,
        salary:pack,
        phoneNO:num,

        members(){
            let text=`
            Employee Name ${this.name}
            Employee designation ${this.designation}
            Employee department ${this.department}
            Employee salary ${this.salary}
            Employee phoneNO ${this.phoneNO}`
            console.log(text);
        }
    }

    
}
let aravind=employee("aravind","juniordeveloper","delevepment",100000,9876543210)
let praveen=employee("pravven","seniordeveloper","delevepment",230000,9876543210)
aravind.members();
praveen.members();

//Constructor factory fumnction

function CreatePerson(name){
    this.name=name
    this.welcome=function(){

        let txt=`this is ${this.name}`
        console.log(txt);

    }


}

let newer=new CreatePerson("sakthi");
newer.welcome();

let nname="String";
let num=34;
let Boolean2=true;
console.log(nname,num,Boolean2);

let nname1=new String("sakthi");
let num1=new Number(23);
let Boolean1= new Boolean(true);
console.log(nname1,num1,Boolean1);


let object={
    he:"whitedevil",

    hack :function(){
        console.log(`u hacked by${this.he}`);
    }
}  

for(civil in object){
    console.log(civil);
}


let obj=Object.keys(object)
for(civil of obj){

    console.log(civil);
}


//Object Cloning


let Object1={

    // gender1:"male",
    // sex1:"male",
    // city:"chennai"

}

let object2={
    gender:"female",
    sex:"female",

    detail(){
        let dd=`she is ${this.sex}`;
        console.log(dd);
    }
    
}

 
// for(let dt in object2 ){
//       Object1[dt]=object2[dt]
    
//  }
Object1={...object2}
 console.log(Object1);

 



const arrai=[{

    he:"whitedevil",
    she:"koreangirl",

},
{
    mom:"who is he",
    dad:"who is she",
}]

let it=arrai.find((arrai)=>arrai.she==="koreangirl")

console.log(it);



let fruit=["string","num","boolean"]
const bag=["book","note","pen"]
const stew=[{he:"sakthi",age:23}]
let accessory=fruit.concat(bag,stew)
//let accessory=[...fruit,...bag,56,stew]
console.log(accessory);
















