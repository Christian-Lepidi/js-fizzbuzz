const cardsRow = document.getElementById("cards-row");
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
let result = "";
let classe = "";
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    result = "FizzBuzz";
    classe = "red";
  } else if (i % 3 == 0) {
    result = "Fizz";
    classe = "green";
  } else if (i % 5 == 0) {
    result = "Buzz";
    classe = "yellow";
  } else {
    result = i;
    classe = "blue";
  }
  cardsRow.innerHTML += `
    
     <div class="card ${classe}">
      <h3>${result}</h3>
     </div>
   
    `;
}
