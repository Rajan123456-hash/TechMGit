import React from "react";

export default function Week2(){
    const [data,setdata]=React.useState(0);
    const [Add,setAdd]=React.useState(0);
    const [statement,setstatement]=React.useState("no action has performed")


    //variabl and operators
    React.useEffect(()=>{
        var name="rajan";
        const a=10;
        const b=20;
        console.log(`operators: Add : ${a+b}, Sub ${b-a} , Div: ${b/2} , module ${b%a} `)
        setAdd(`operators: Add : ${a+b}, Sub ${b-a} , Div: ${b/2} , module ${b%a} , mul ${a*b} `)

    },[Add])                              

    // function control statment

    function increment(){
        setdata(data+1)
        if(data>10){
            setstatement("number is grater than 10")
        }else if(data==10){
            setstatement("number is equal to 10")
        }else{
            setstatement("number is less than 10")
        }

    }
    React.useEffect(()=>{
        document.getElementById('event').addEventListener("click",()=>{
            alert("event trigered")
        })

        // json here#########
        const data={
            name:"rajan"
        }
        const a=data;   //  shallow copy

    },[])

    React.useEffect(()=>{
        // introduction to ES6 ########################

        //symbol###
        const a=Symbol(10);
        const b=Symbol(20);

        if(a==b){
            console.log(true)
        }else{
            console.log(false)
        }

        //promises##########
        const mypromise=new Promise(function(resolve,reject){

            if(10<20){
                reject("10 never grater than 20")
            }else{
                resolve("20 is grater than 10 resolved")
            }
        });

        mypromise.then((resodata,rejdata)=>{
            console.log(resodata)
        }).then(()=>{
            console.log('its callback hell')
        })
        .then(()=>{
            console.log('its callback hell')
        })
        .then(()=>{
            console.log('its callback hell')
        })

        const promisall=Promise.all([mypromise,"hello"]);

        // async and await##################

        const test=async ()=>{

            console.log('hellow')
            const data=await 'await test';
            console.log(data);
            console.log('next')
        }

        test();


        //generators function################
        function* generateSequence() {
            yield 1;
            yield 2;
            return 3;
          }
          
          let generator = generateSequence();
          
          let one = generator.next();
          
          console.log('generater function  '+JSON.stringify(one)); // {value: 1, done: false}


        //   map ans set objects######
        // Create Objects
        let mapObject = new Map([["Batman", 1], [2, "Superman"], [3, "Flash"]]);

        for(let key of mapObject.keys()) {
           console.log('map objects'+key);     // "Batman", 2, 3
        }

        // or
        const mapdata=new Map();

        const key1='mystr',key2={},key3=function(){};

        mapdata.set(key1,"my name");
        mapdata.set(key2,"object here");

        let value1=mapdata.get(key1)

        console.log("mapdata",mapdata)

        // set##########
        let myset=new Set();
        console.log('myset',myset)
        myset.add('this');
        myset.add('hellow');
        myset.add('this');
        console.log('example of set',myset)
        
        // or##
        const mydata={name:'hello',data:"hellow"};

        // const mydataset=new Set(mydata);

        console.log('set with remove duplicate',mydata)

    })

    // syntex changes anf addition################

    function regularfunction(){
        const regular="";
    }

    const arrowfunction=()=>{

    }




    return(

        <div className="row px-4">
            <div className="col-md-12">
                <h1>Java Script </h1>
                <div className="my-4">
                    <h2>Operators</h2>
                    <h5>{Add}</h5>
                </div>
                <div className="my-4">
                    <h2>Function and Statement</h2>
                    <button className="btn btn-primary" onClick={()=>increment()}>Increment <span>{data}</span></button>
                </div>
                <div className="my-4">
                    <h5> Statement : <span className="text-primary">{statement}</span></h5>
                </div>
                <div className="my-4">
                    <h5 id="event"> Event listiner : <span className="text-primary">Events</span></h5>
                </div>
            </div>

        </div>
    )
}