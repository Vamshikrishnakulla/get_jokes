document
  .querySelector("#form-data form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const category = event.target.category.value;
    //console.log(event.target.type.value);
    //console.log(event.target.category.value);
    const url = `https://v2.jokeapi.dev/joke/${category}?type=${type}&safe-mode`;
    try {
      let response = await fetch(url);
      let jsonFormat = await response.json();
      //console.log(jsonFormat);
      if (!jsonFormat.error) {
        if (jsonFormat.type === "single") {
          document.getElementById("joke-content").value = jsonFormat.joke;
        } else if (jsonFormat.type === "twopart") {
          document.getElementById("joke-content").value =
            jsonFormat.setup + "\n" + jsonFormat.delivery;
        } else {
          document.getElementById("joke-content").value =
            "Try again. After some time.!";
        }
      } else {
        console.log("Joke not found with given filter's " + jsonFormat.error);
        document.getElementById("joke-content").value = jsonFormat.message;
      }
      //slowTextEffect();
    } catch (err) {
      console.log(err);
    }
  });

//   The text will be slowly typed.
/*function slowTextEffect() {
  var i = 0;
  var txt = document.querySelector("#joke-content").value;
  console.log(txt);
  document.querySelector("#joke-content").value = "";
  var speed = 100;
  var timmer;
  typeWriter();
  function typeWriter() {
    if (i < txt.length) {
      document.querySelector("#joke-content").value += txt.charAt(i);
      i++;
      console.log(document.querySelector("#joke-content").value + " " + i);
      timmer = setTimeout(typeWriter, speed);
    }
    clearTimeout(timmer);
  }
}
*/

document.querySelector(".left input").addEventListener("click", () => {
  document.querySelector(".left input").style.borderStyle = "outset";
});
