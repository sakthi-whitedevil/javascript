
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

    const students={
            first_name:"sriram",
            last_name:"singam",
            age:24,
            class:"12 th",
            gender:"male",

            sports:{

                array:["cricket","volleyball","tennis"]

            }
        }
       // console.log(students);
        
        


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

     const array2=["var","let","const",143]

     let keys=console.log([...array2,array1]);
       // console.log(keys);

     function greeting(){

        let op={
            
            iam:"single",
            bt:"she makes me couple",
            andthen:"she is also make me again single",
            she:"she was go her new couple",
        }
        console.log(op);

     }
    //  greeting()
     let age=17
     let type=age>18 ? "Adults Ticket" : "childrens ticket"
     console.log(type);

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


    //  let i=0

    //  while(i<=10){

    //      if(i%2 !==0){
    //          console.log(i);
    //      }
    //      i++
    //  }

    //  do{
    //     if(i%2 !==0){
    //         console.log(i);
    //     }
    //     i++

    //  }while(i<=10);

    //  const tik={
    //     do:"read daily",
    //     dontdo:"sleep whole day",
    //     dodo:"do exercise"

    //  }

    //  for(let key in tik){
    //     console.log(key+" :" +tik[key]);

    //  }

    // const arrayname=[1,2,3,4,5,6,7,8,9]

    // for(let key of arrayname){
    // console.log(key +":"+arrayname[key]);

    // }

    // const demo={
    //     he:"sakthi",
    //     she:"nairobi",
    //     loving:function(){
    //         let life=`${this.he} and ${this.she} is make for eachother ❤❤❤`
    //         console.log(life);
    //     }
    // }
    // demo.loving();

    // function createpers(dnme){

    //    return{

    //     dnme,
    //     greeting(){
    //         let msgg=`${this.dnme} is TL in this company`
    //         console.log(msgg);
    //     }

    //    }


    // }

    // let sakthi=createpers("sakthi")
    // sakthi.greeting();
    // let nairobi=createpers("naorobi")
    // nairobi.greeting();
    





    function Welcome(dd){
        this.dd=dd
        this.greet=function(){

            let md=`the hero is ${this.dd}`
            console.log(md);
        }
    }
    let relative= new Welcome("sakthi");
    relative.greet();
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
 //console.log(Object1);

 



const arrai=[{

    he:"whitedevil",
    she:"koreangirl",

},
{
    mom:"who is he",
    dad:"who is she",
}]

let it=arrai.find((arrai)=>arrai.she==="koreangirl")

//console.log(it);



let fruit=["string","num","boolean"]
const bag=["book","note","pen"]
const stew=[{he:"sakthi",age:23}]
let accessory=fruit.concat(bag,stew)
//let accessory=[...fruit,...bag,56,stew]
// console.log(accessory);

accessory.forEach((variable) => {
   // console.log(variable);
  //  console.log(variable);
});
//primitive values

//every function
//  const list_of_age=["1","2","3","4","5","6","7"];
//  let var1=list_of_age.some(function(value){
//  return value %2== 0;
//  });
// let vari=list_of_age.forEach(function(data){
//     console.log(data);
// })

// console.log(vari);


//some()function
// const list_of_age=["13","12","14"];
// let var1=list_of_age.some(function(value){
// return value >= 18;
// });
// console.log(var1);

//filtering objects in array

// const stude=[
//     {id:1,student:"sakthi",grade:false},
//     {id:2,student:"venkat",grade:false},
//     {id:3,student:"surya",grade:false}

// ];
// let stu=stude.some(function(value){

// return value.grade==true;

// });
// console.log(stu);
// let objec = stude.forEach(function(data){
//     console.log(data);
//     // console.log(data.student);
//     // console.log(data.grade);
// })

// console.log(objec);


const cart_items=[
    {id:1,items:"chinese",cost:9000},
    {id:2,items:"iphone",cost:20000},
    {id:3,items:"piphone",cost:30000},
    {id:4,items:"android",cost:10000},
    {id:5,items:"android",cost:13000},
    {id:6,items:"android",cost:12500}

];
//filter
// let cart=cart_items.filter((val)=>val.cost >8000 && val.cost < 15000)
// console.log(`cart items:`,cart);

// let item=cart.forEach(function(dat){
//     console.log(dat.items=="android");
//     // console.log(dat.items);
//     // console.log(dat.cost);

// })
// console.log(item);

//find function

// let cart=cart_items.find((val)=>val.cost >8000 && val.cost < 15000)
// console.log(`cart items:`,cart);

// let item=cart.forEach(function(dat){
//     console.log(dat.items=="android");
//     // console.log(dat.items);
//     // console.log(dat.cost);

// })
// console.log(item);


// const Even=[1,2,3,4,5,6,7,8,9,10];

// let prieve=Even.filter((val)=>val % 2 ==0)
// //console.log(prieve);
// let evi=prieve.forEach(function(val){
 
//  console.log(val);

// })
// console.log(evi);



// const demons=[
//     {id:1,first_name:"demon",last_name:"kane"},
//     {id:2,first_name:"death",last_name:"undertaker"},
//     {id:3,first_name:"john",last_name:"cena"}

// ];

// let ss=demons.map(function(val){
// let fullname=[val.first_name, val.last_name].join(" ");
// let ob={id:val.id,fullname};
// console.log(ob);

// });


//sort()function

// const swiggy=[
//     {id:1,first_name:"demon",last_name:"kane"},
//     {id:2,first_name:"death",last_name:"undertaker"},
//     {id:3,first_name:"john",last_name:"cena"}
// ]

// let func1=swiggy.sort(function(a,b){
//      if(a.first_name < b.first_name) return -1;

//      if(a.first_name > b.first_name) return 1;
      
//      return 0;

// });

// console.log(func1);

//reduce()
// const numb=[12,34,55,67,99];
// let result=numb.reduce(function(a,b){
//     console.log(a);
//     console.log(b);
//     return a+b;

// });
// console.log(result);

//shopping cart by reduce()

const shopping_cart=[
    {id:1,item:"cricketBat",cost:1200},
    {id:2,item:"one pack ball",cost:600},
    {id:3,item:"2 pairs stemp",cost:990}
];

let total=shopping_cart.reduceRight(function(a,b){
    return a+b.cost;
    },10);

    //console.log(  `total amount is`,total);



    //function declaration
    //  const no1=2345;
    //  const no2=4566;
    //  function addition(no1,no2){
    //     if(typeof(no2)!="number"){
    //         throw "its not a number pls valid a number"
    //     }
    //     let result=no1+no2;
    //     console.log(result);   
    // }

    // try {
    //     addition(10,"a");
    // } catch (error) {
    //     alert(error)
    // }

    //function Expression
    // const no1=2345;
    // const no2=4566;
    // let addition=function (){
    //     let result=no1+no2;
    //     console.log(result);   

    // }
    // addition();

    //anonymous function
    // const no1=2345;
    // const no2=4566;
    // let addition=( ) =>{
    //     let result=no1+no2;
    //     console.log(result);   

    // }
    // addition();


    //constructor function
    // let no1=2345;
    // let no2=4566;
    // let constru= new Function("console.log(no1+no2)");
    // constru();

    //hoisting method
    // const no1=2345;
    // const no2=4566;


    // addition()

    // function addition(){
    //     let result=no1+no2;
    //     console.log(result);   

    // };

    //hoisting method



    // let addition= function (){ 
    //     let result=no1+no2;
    //     console.log(result);

    // };
    // console.log(addition());
    
    //defualt parameter 
 
    //getter setter


    // let member={

    //     ffname:"venki",
    //     llname:"anonymous",
    //     get fullname(){
       
    //         return `FullName:${member.ffname} ${member.llname}`;
    //     }
    //    set fullname(value){
    //     let result=value.split(" ");
//     //     this.ffname=result[0];
//     //     this.llname=result[1];
        
// //         }

// // }                                                                                                     
// // console.log(member.fullname);
// // member.fullname="tj sakthi";
// // console.log(member.fullname));

// //this keyword

// const chennal={
//     title:"scrunches",
//     subscribe(){

//     }
// }


// function data(){
//     let name="venkat";
    
//     for(i=1;i<=10;i++){
//         console.log(`${name}:${i}`);
//     }
    
//     for(let j=1;j<=10;j--){
//         let name="Ano";
//         console.log(`${name}:${i}`);
//     }
// }

// //practice of javacript


// // let college={
// //     collegeName:"covaiArts",
// //     rank:"tenth",
// //     loaction:"coimbatore",
// //     pincode:"123566


// // // }

// // //console.log(college.rank.toUpperCase());

// // // for(key of Object.entries(college)){
// // //    // let vara=key.toString().toUpperCase();
// // //     console.log(key[1].toString().toUpperCase());

// // // }

// // let he={
// //     name:"sakthi",
// //     age:"12",
// //     qualification:"BSC COMPUTER SCIENCE",
// //     Batch:2021,
    

// // }
// // let studo =`this is ${he.name} his age is ${he.age} he studing in ${he.qualification} on ${he.Batch}`
// // // console.log(studo);
// // // console.log(studo.slice(45));
// // // console.log(studo.slice(0,15));
// // // console.log(studo.slice(-21));


// // const arr=["tj",1,"venki",2,"surya"];

// // function check(val){
// //     let dt=arr.includes(val);
// //     if(dt==true){
// //         console.log(arr.indexOf(val));
// //     }else{
// //         console.log("data is missing");
// //     }
 
// // }
// // //check(3)

// // function dec(d1,d2){
// //    return{ 
// //         one:d1,
// //         two:d2,

// //         farr(){
// //            let  vv=`${this.two} as ${this.one}`;
// //            console.log(vv);
// //         }
    
   
// //     }
  

// // }
// // let ex=dec("tj", "sakthi");
// // //ex.farr()

// // //constructor function

// // function user(val1,val2){
// //     this.fname=val1;
// //     this.pass=val2;
// //     this.welcome=function(){
// //         let ver=`${this.fname} ${this.pass}`;
// //         console.log(ver);
// //     }
// // }

// // let arrs=new user("sakthi",123356);
// // arrs.welcome()


// // // function loop(n){
    
// // //     for(let i=0;i<n;i++){
        
// // //         console.log(" * ");
// // // }
// // // console.log("\n");

// // // }

// // // loop(5);
// // //legend loop
// // let string="";
// // for(let i=0;i<=5;i++){
   
// //     console.log(string+="*");
     
   
// // }

// // for(let i=1;i<=10;i++){
// //     for(let k=1;k<=(10-i);k++){
// //         document.write("&nbsp &nbsp &nbsp&nbsp&nbsp    ");
// //     }
// //     for(let j=1;j<=i;j++){
// //         document.write("* ");
// //     }
// //     document.write("<br/>");
// // }

// // function looping(n){


// //     for(let i=n;i>=1;i--){
// //         for(let k=1;k<=(n-i);k++){
// //             document.write("&nbsp");
// //         }
      
// //         for(let j=1;j<=i;j++){
// //             document.write("* ");
// //         }
// //         document.write("<br/>");
// //     }
    
// // }
// looping(10);
//****************************************************************************************************************** */
                                                //DOM PRACTICE            
/* ***************************************************************************************************************** */
// const doods={
//     do1:"stupid",
//     do2:"fellow",

//     merch(val){
//         let join=`sakthi ${val} ${this.do1} ${this.do2}`;
//         console.log(join);
//     }
// }

// let another={...doods};
// another.merch("is")

let art=[1,2,3,4,5,6,7,8];

// art.forEach(function(value){
//     console.log(value);
// });

 art=[];
//console.log(art);
//console.log(window.screen.height);

function sizing(){
 console.log(   screen.width);
    if(
        screen.width>=1000){
        confirm("pls reduce the screen size"); 
       }
     
}
//sizing();

//console.log(window.location );

// setInterval(() => {

//  document.title="yeah, i hav change my title"
// }, 5000);

//console.log(window.navigator);


//object for dom

// const terry={
//     person1:"anonymous",
//     city1:"chennai",
//      wel(){
//         return `the person is ${this.person1} living in ${this.city1}`;
        
//      },
// }
// let inputname=prompt("what is your name ?");
// let inputcity=prompt("where are you coming from ?");

// terry.person1=inputname;
// terry.city1=inputcity;
//document.write(run);

//document.body.innerHTML=`<h1>${run}</h1>`;
//document.write(terry.wel());



// document.addEventListener('DOMContentLoaded',()=>{
//     const myapp=document.getElementById("app");
//     myapp.innerHTML='<h1>this is Tj wats</h1>'
//     console.log(myapp);
// })

// console.log(document.body.nodeType);
// console.log(document.body.clientHeight);

// let getEl=document.getElementById("heading");
// getEl.innerText="hello this is another tj watts😎";
// console.log( getEl.innerText);

// let infood=document.getElementById('input-food');
// let inbutt=document.getElementById('input-but');
// let respon=document.getElementById('response');
// inbutt.addEventListener('click',()=>{
//     respon.innerText=infood.value
// });



// let infood=document.getElementById('input-food');
// let inbutt=document.getElementById('input-but');
// let respon=document.getElementById('food-container');


// inbutt.addEventListener('click',()=>{
//     // respon.innerHTML +=`<li class="food-item">${infood.value}</li>`
//     const lis=document.createElement("li");
//     const textnode=document.createTextNode(infood.value);

//     //assigning a classname
//    lis.className="food-item";

//     lis.append(textnode);

//     respon.append(lis);

// });

//getElementsByClassName

        let foodItems=document.getElementsByClassName('food-item');

        let allfoods=[].map.call(foodItems,(food)=>food.textContent);
        console.log(allfoods);


//querySelector and querySelectorall()


// const ini=document.querySelector("li");

// const init=document.querySelectorAll("li");
// console.log(init[0].innertext);

//creating dom elements using javascript


//
// function addelement(message){


// const main=document.getElementById("main");

// //creating div elements
// const div= document.createElement("div");
// const textnode=document.createTextNode(message)

// //assigning classname
// div.className="alert";

// // div.innerText="food is ready to eat";

// div.append(textnode);


// main.prepend(div);
// };


// addelement("✅successfuly updated!");

//another creating dom element 


let infood=document.getElementById('input-food');
let inbutt=document.getElementById('input-but');
let respon=document.getElementById('food-container');
let query = document.querySelector(".food-container .food-item1")
console.log(`Query : ${query.innerText}`);
// values a insert panna
//respon.before()
//respon.after()
//respon.insertAdjusentHtml("afterbegin","hello")
//respon.insertAdjusentHtml("afterend","hello")
//respon.insertAdjusentHtml("beforebegin","hello")
//respon.insertAdjusentHtml("beforeend","hello")


inbutt.addEventListener("click",()=>{

       respon.innerHTML +=`<li class="food-item">${infood.value}</li>`
       
        //   let lis=document.createElement('li');

        //   let textno=document.createTextNode(infood.value);

        //     lis.className('food-item');

        //     lis.append(textno);

        //     respon.append(lis);
});




let tt=document.createDoucmentFragment();
console.log("hello world");

//






