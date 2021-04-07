//const a=document.querySelector('.lit')
var x=1
const bg=document.getElementById('cbg');
const par=document.getElementById('p1')
const df=document.getElementById('default');
const colors=['gray','lavenderblush','aqua','lightpink'];
var mybutton = document.getElementById("myBtn");
const plist={'prasadjp':'paid'}
const form = document.querySelector('#form');
const form1 = document.querySelector('#f');
/*window.onload=setInterval(function(){
    if(x%2){$('b').parent.('.lit').css('color','red')}
    else{$('b').parent.('.lit').css('color','red')``}
    x+=1
},300)*/
var child= document.getElementsByClassName('lit');
var z;
console.log(child[1])
 window.onload=setInterval(function(){
     if(x%2){for(z=0;z<2;z++){child[z].style.color='red'}}
     else{for(z=0;z<2;z++){child[z].style.color='blue'}}
     x+=1
 },400)
//Nav bar side
 function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   //document.getElementById("main").style.marginLeft = "250px";
 }

 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   //document.getElementById("main").style.marginLeft= "0";
 }
// backgroun color
bg.addEventListener('click',bcolor)
function bcolor(){
    const index=parseInt(Math.random()*colors.length)
par.style.backgroundColor=colors[index]
par.style.backgroundColor=colors[index]
}
df.addEventListener('click',
function(){

par.style.backgroundColor='white'
});
//scroll fn
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*setTimeout(function() {
    if (window.confirm('Donate:\n Donate and help me to provide certified courses, because i\'ve to pay to UDEMY'))
    {
    window.location.href='#';
    };
}, 8000);*/
function paid(){
    var person = prompt("Please enter your name");
    var x=person in plist;
    if(person in plist){if(window.confirm('Congrats! your name in data base\n click ok to continue'))
    window.location.href='paid.html'
}
    else{alert('Access denied\n please pay to continue')}
}
//BMI
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Invalid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Invalid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }


});
//convert
form1.addEventListener('submit', function(e){
    e.preventDefault();

    const height1 = parseFloat(document.querySelector('#ht').value);
    const result = document.querySelector('#result');

    if((height1 === '') || (height1 < 0) || (isNaN(height1))){
        result.innerHTML = "Invalid height";
    }else {
    const b = (height1*30.48).toFixed(2);
    result.innerHTML = `<span>${b}</span>`
    }


});
