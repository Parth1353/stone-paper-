'use strict';
var stone = document.querySelector('.stone');
var paper = document.querySelector('.paper');
var scissor = document.querySelector('.scissor');
let score=0;
let coscore=0;
let x=0;
if((score<=5)||(coscore<=5))
{
    for(let i=0; i<=(score || coscore); i++)

{
    
//stone wala 
stone.addEventListener('click', function()
{
    let random=Math.trunc(Math.random()*3)+1;
document.querySelector('.image').src='img1.png'
document.querySelector('.comp').src=`img${random}.png`
if(random===2)
{
    coscore=coscore+1;
    document.querySelector('#current--1').textContent=coscore;
    x++;
}
if(random===3)
{
score=score+1;
document.querySelector('#current--0').textContent=score;
x++;
}
})

//papaer wala
paper.addEventListener('click', function()
{
    let random=Math.trunc(Math.random()*3)+1;
document.querySelector('.image').src='img2.png'
document.querySelector('.comp').src=`img${random}.png`
if(random===3)
{
    coscore=coscore+1;
    document.querySelector('#current--1').textContent=coscore;
    x++;
}
if(random===1)
{
score=score+1;
document.querySelector('#current--0').textContent=score;
x++;
}
})
//scissor wala 
scissor.addEventListener('click', function()
{
    let random=Math.trunc(Math.random()*3)+1;
document.querySelector('.image').src='img3.png'
document.querySelector('.comp').src=`img${random}.png`
if(random===1)
{
    coscore=coscore+1;
    document.querySelector('#current--1').textContent=coscore;
    x++;
}
if(random===2)
{
score=score+1;
document.querySelector('#current--0').textContent=score;
x++;
}
})

}
}
else
{
    console.log('ruk ja bsdk')
}