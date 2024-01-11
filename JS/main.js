const cardsRow = document.getElementById("cards-row");
let result = "";
let classe = "";
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
    classe = "red";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    result = "Fizz";
    classe = "green";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    result = "Buzz";
    classe = "yellow";
  } else {
    console.log(i);
    result = i;
    classe = "blue";
  }
  cardsRow.innerHTML += `
    
     <div class="card ${classe}">
      <h3>${result}</h3>
     </div>
   
    `;
}
