const heading = document.querySelector('h1');

const runEvent = e => {
  console.log(`EVENT TYPE: ${e.type}`);
  
  heading.innerHTML
  = `MouseX: ${e.offsetX} <br>MouseY: ${e.offsetY}`;
}

document.addEventListener('mousemove', runEvent);