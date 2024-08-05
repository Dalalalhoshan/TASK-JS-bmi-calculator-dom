function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  height = height * 0.01;
  let BMI = weight / height ** 2;
  alert(BMI);

  if (BMI < 18.5) {
    alert("underwight");
  } else if (BMI > 18.5 && BMI < 24.9) {
    alert("Healthy weight");
  } else if (BMI > 24.9 && BMI < 29.9) {
    alert("overwight");
  } else {
    alert("Above Obesity");
  }

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert("Healthy");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert("Healthy");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert("Health");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert("Health");
    } else {
      alert("Not Healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert("Health");
    } else {
      alert("Not Healthy");
    }
  } else if (age > 65) {
    if (BMI >= 24 && BMI <= 29) {
      alert("Health");
    } else {
      alert("Not Healthy");
    }
  }
}
