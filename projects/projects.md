# PROJECTS RELATED TO DOM

## Project Link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ntcj2gau?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function (e){
    // console.log(e)
    // console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
}); 

```

## Project 2
```Javascript
const form = document.querySelector('form')
//This step is imp because otherwise it will store a default empty value
form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height == ''|| height < 0 || isNaN(height)){
  results.innerHTML = `Please give a valid height`;
  } else if (weight == ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight`;
  } else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    if (BMI<18.6){
      var message = "Under Weight"
    }
    else if (BMI > 18.6 && BMI < 24.9){
      var message = "Normal Weight"
    }
    else if (BMI > 24.9){
      var message = "Overweight"
    }
    results.innerHTML = `<span>Your BMI is ${BMI} and you are ${message}</span>`
  }
});
```


