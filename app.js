//web storage api
//API refers to "Application Programing Interface"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      console.log("complete");
      initApp();
    }
  });

  const initApp = () => {

  };