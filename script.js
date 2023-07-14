// Get the draggable element
let draggableElement = document.getElementById("draggable");

// Initialize variables for drag functionality
let offsetX, offsetY;
let isDragging = false;

// Add event listeners for mouse down, mouse move, and mouse up events
draggableElement.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", dragElement);
document.addEventListener("mouseup", stopDragging);

// Start dragging the element
function startDragging(e) {
      isDragging = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
}

// Drag the element
function dragElement(e) {
      if (isDragging) {
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            draggableElement.style.left = x + "px";
            draggableElement.style.top = y + "px";
      }
}

// Stop dragging the element
function stopDragging() {
      isDragging = false;
}
