//web storage api
//API refers to "Application Programing Interface"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      console.log("complete");
      initApp();
    }
  });


  //The following piece of code is an example for web storage api where an object data is stored in the form of json by stringify method and again it turned into object by parse method and consoled for displayed
  
  const initApp = () => {
const myContent = ["Earn", "Grow", "Give"];
const myObject = {
  name: "Aji",
  myContent: ["Earn", "Grow", "Give"],
  logName: function() {
    console.log(this.name);
  }
};

window.localStorage.setItem("mySessionStore", JSON.stringify(myObject)); 
// window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject)); //Note: We should always store the data in JSON form only! Even if it is not in json form, then we have to change the data in json form and then we have to store it. // Here, if we use .sessionStorage then the data will be saved in session storage which will be erased immediately after the application was closed and if we use .localStorage then the data will be saved in local storage which will be not be erased and the data will be there even after the application was closed. This data can be seen by (inspect, >>, application, storage)
const key = window.localStorage.key(0);
console.log(key);
const lock = window.localStorage.length;
console.log(lock);
// const car = window.localStorage.removeItem("mySessionStore"); (This line is to remove a particular data from respective localstorage or session storage)
// const bike = window.localStorage.clear(); (This line is to clear entire data stored in local storage or session storage)
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
  };