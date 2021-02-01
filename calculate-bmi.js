function bmi(weight, height) {
    let bodyMassIndex = weight / (height*height);
      
      if(bodyMassIndex <= 18.5){
          return "Underweight"
      } else if (bodyMassIndex <= 25.0){
          return "Normal"
      } else if (bodyMassIndex <= 30.0){
          return "Overweight"
      } else {
          return "Obese"
      }
  }

console.log(bmi(80, 1.80));
console.log(bmi(80, 1.40));
console.log(bmi(60, 2.00));
console.log(bmi(78, 1.78));
