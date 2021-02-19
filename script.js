'use strict';

window.addEventListener("DOMContentLoaded",init);
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


function hexToRgb( hex ) {
  const r = Number.parseInt(hex.substring(1,3),16);
  const g = Number.parseInt(hex.substring(3,5),16);
  const b = Number.parseInt(hex.substring(5,7),16);

  return {r,g,b};
}

function rgbToHsl(r,g,b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,  
      h = 0,
      s = 0,
      l = 0;

      // Calculate hue
  // No difference
  if (delta == 0)
  h = 0;

else if (cmax == r)
  h = ((g - b) / delta) % 6;

else if (cmax == g)
  h = (b - r) / delta + 2;

else
  h = (r - g) / delta + 4;

h = Math.round(h * 60);

if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;


  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "" + h + "% " + s + "% " + l + "%";
}
         
       
function hslToRgb( hsl ) {
          const h = hsl.h;
          const s = hsl.s / 100;
          const l = hsl.l / 100;
         
        let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;
        if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
        } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
        } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
        } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
        } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
        } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        
        return {r,g,b};
 }       