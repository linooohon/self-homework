var weight = 60
var height = 1.7
var bmi = weight / (height * height)
console.log(bmi)
if (bmi < 18.5) {
  console.log('體重過輕：BMI < 18.5')
} else if (bmi < 24 && bmi >= 18.5) {
  console.log('正常範圍：18.5 <= BMI < 24')
} else if (bmi < 27 && bmi >= 24) {
  console.log('過重：24 <= BMI < 27')
} else if (bmi < 30 && bmi >= 27) {
  console.log('輕度肥胖：27 <= BMI < 30')
} else if (bmi < 35 && bmi >= 30) {
  console.log('中度肥胖：30 <= BMI < 35')
} else {
  console.log('重度肥胖：35 <= BMI')
}