import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Fetch Using Async Rather than .then!</h1>
<div>
  
</div>
`;

let button = document.getElementById("btn");

//Method 1 :- Long Process
//  button.addEventListener("click",_=>{

//    let a=fetch("");
//    a.then((all)=>{
//      console.log(all);
//      let result= all.json();

//      result.then((data)=>{
//        console.log(data);

//      })
//    })
//  })

// Method 2 :- Short process (Avoid Storing into variables)
button.addEventListener("click", (_) => {
  fetch("https://reqres.in/api/users")
    .then((r) => r.json())
    .then((data) => console.log(data));
});

//Method 3 :- Using Async means we use Await keyword async name is mandatory
//            To avoid multiple .then and there call functions we use  async
// Fetch() :- It returns a promise. On resolution, we get the response object.
// json() :- From this object, we need to extract the data that we want. That extraction process is ALSO a promise.in the form of key valur pairs

let button2 = document.getElementById("btn2");
button2.addEventListener("click", async (_) => {
  const data = await fetch("https://reqres.in/api/users");
  const result = await data.json();

  const page2 = await fetch("https://reqres.in/api/users?page=2");
  const data2 = await page2.json();

  const page3 = await fetch("https://reqres.in/api/users?page=3");
  const data3 = await page3.json();

  //data is key here that holds all data array
  console.log(result.data);
  console.log(data2.data);
  console.log(data3.data); //empty data
  //here we merge to data array using spread
  const final_arr = [...result.data, ...data2.data];
  console.log(final_arr);
});

/*
// Use IIFE :-Immediately Invoked Function Expression its excute only once at there life span as per defination
  It gives more security for use that we just have to wrap inside () and also called only using ()

  try :- its same work like then/if when true means find data excute it otherwise catch block excutes
          in this we don't need call back function like .then

  Catch :- Its execute when try block are not able to excute 
          same like else from we show message        
*/
const button3 = document.getElementById("btn3");
button3.addEventListener("click", (_) => {
  (async (_) => {
    try {
      const response = await fetch("");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("Somethin Wrong");
    }
  })();
});
