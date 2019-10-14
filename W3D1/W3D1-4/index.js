fetch("https://swapi.co/api/people/1/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })

 /* function testJava(){
    document.getElementById("test2").innerHTML="java werkt"
  }*/