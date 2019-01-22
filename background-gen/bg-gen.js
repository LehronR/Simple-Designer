// Variables
const colorA = document.getElementById('color-a');
const colorB = document.getElementById('color-b');
const display = document.getElementById('display');
const solid = document.getElementById('bg-solid');
const linear = document.getElementById('bg-linear');
const radial = document.getElementById('bg-radial');
const selector = document.getElementById('grad-direction');
const linearGradient = 'linear-gradient';
const radialGradient = 'radial-gradient';

// Gradient direction array
const direction = {
  toTop: 'to top',
  toLeft: 'to left',
  toRight: 'to right',
  topLeft: 'to top left',
  topRight: 'to top right',
  bottomLeft: 'to bottom left',
  bottomRight: 'to bottom right'
} 

// App Start function
const init = () => {
  solid.checked = true;
  solidFunction();
  colorA.value = '#044A54';
  display.style.background = `${colorA.value}`;
};

// background controls conditional statements
// conditions for solid gradients
const solidFunction = function() {
  solid.value = 'on';
  linear.value = 'off';
  radial.value = 'off';
  colorB.style.display = 'none';
  selector.style.display = 'none';
  
  if(solid.value === 'on') {
    linear.value = 'off';
    radial.value = 'off';
    display.style.background = colorA.value;
  } 
}

// conditionals for linear gradients
const linearFunction = function() {
    solid.value = 'off';
    linear.value = 'on';
    radial.value = 'off';
    colorB.style.display = 'inline-block';
    selector.style.display = 'inline-block';
    
    if(linear.value === 'on' && selector.selectedIndex === 0) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 1) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 2) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${colorB.value}, ${colorA.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 3) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.toLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 4) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.toRight}, ${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 5) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.topLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 6) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.topRight}, ${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 7) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.bottomLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(linear.value === 'on' && selector.selectedIndex === 8) {
      solid.value = 'off';
      radial.value = 'off';
      display.style.background = `${linearGradient}(${direction.bottomRight}, ${colorA.value}, ${colorB.value})`;
    } 
}
  
  // conditionals for radial gradients
const radialFunction = function() {
    solid.value = 'off';
    linear.value = 'off';
    radial.value = 'on';  
    colorB.style.display = 'inline-block';
    selector.selectedIndex = 1;
    selector.style.display = 'none';

    if(radial.value === 'on' && selector.selectedIndex === 0) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 1) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 2) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${colorB.value}, ${colorA.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 3) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.toLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 4) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.toRight}, ${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 5) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.topLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 6) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.topRight}, ${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 7) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.bottomLeft}, ${colorA.value}, ${colorB.value})`;
    } else if(radial.value === 'on' && selector.selectedIndex === 8) {
      solid.value = 'off';
      linear.value = 'off';
      display.style.background = `${radialGradient}(${direction.bottomRight}, ${colorA.value}, ${colorB.value})`;
    }
}

// Conditionals for colors
const colorAndDirectionFunction = function() {
    if(solid.value === 'on'){
      solidFunction();
    } else if(linear.value === 'on') {
      linearFunction();
    } else if(radial.value === 'on') {
      radialFunction();
    }
}
  
  
// Color Picker Controls
colorA.addEventListener('input', colorAndDirectionFunction);
colorB.addEventListener('input', colorAndDirectionFunction);
solid.addEventListener('click', solidFunction);
linear.addEventListener('click', linearFunction);
radial.addEventListener('click', radialFunction);
selector.addEventListener('change', colorAndDirectionFunction);

init();