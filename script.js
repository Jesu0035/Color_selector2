'use strict';


init()
function init(){
const hex ="#c0ffee";
const rgb = hexToRgb(hex);
 
}

const color = document.querySelector('.color-selector');
color.addEventListener('change', getValue);

color.addEventListener('input', getValue);

function getValue() {
document.querySelector('.box').style.background = color.value
document.querySelector('#hex').textContent = color.value;

const red = hexToRgb(color.value).r;
const green = hexToRgb(color.value).g;
const blue = hexToRgb(color.value).b;

document.querySelector('#rgb').textContent = `(${red}, ${green}, ${blue})`
document.querySelector('#hsl').textContent = rgbToHsl(green, red, blue)
    
}


function hexToRgb(hex) {
 const hexR = hex.substring(1, 3);
 const hexG = hex.substring(3, 5);
 const hexB = hex.substring(5, 7);


const r = parseInt(hexR, 16);
const g = parseInt(hexG, 16);
const b = parseInt(hexB, 16);
    return r, g, b;
 }

  
   
function rgbToHsl(r, g, b) {

r /= 255;
g /= 255;
b /= 255;

let h, s, l;
const min = Math.min(r, g, b);
const max = Math.max(r, g, b);

if (max === min) {
 h = 0;
 } else
if (max === r) {
h = 60 * (0 + (g - b) / (max - min));
 } else
 if (max === g) {
                h = 60 * (2 + (b - r) / (max - min));
} else
if (max === b) {
 h = 60 * (4 + (r - g) / (max - min));
 }


if (h < 0) {
  h = h + 360;
 }


 l = (min + max) / 2;

 

 if (max === 0 || min === 1) {
 s = 0;
} else {
  s = (max - l) / (Math.min(l, 1 - l));
 }
            
s *= 100;
l *= 100;
            
return `hsl (${slicer(h)}, ${slicer(s)}%, ${slicer(l)}%)`
}  
function slicer (string){
 return slicer.toString().substr(0, 5);
        }
        
