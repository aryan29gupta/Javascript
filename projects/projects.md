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
