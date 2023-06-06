// This is a basic structure. You will need to implement the actual drawing logic.

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle toolbar actions
    document.getElementById('reset').addEventListener('click', resetCanvas);
    document.getElementById('lineColor').addEventListener('change', changeLineColor);
    document.getElementById('lineWidth').addEventListener('change', changeLineWidth);
    document.getElementById('lineOpacity').addEventListener('change', changeLineOpacity);
    document.getElementById('backgroundColor').addEventListener('change', changeBackgroundColor);
    document.getElementById('shape').addEventListener('change', changeShape);
    document.getElementById('save').addEventListener('click', saveCanvas);

    function resetCanvas() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function changeLineColor() {
        // Get the selected color
        const color = document.getElementById('lineColor').value;

        // Set the stroke style
        context.strokeStyle = color;
    }

    function changeLineWidth() {
        // Get the selected width
        const width = document.getElementById('lineWidth').value;

        // Set the line width
        context.lineWidth = width;
    }

    function changeLineOpacity() {
        // Get the selected opacity
        const opacity = document.getElementById('lineOpacity').value;

        // Set the global alpha
        context.globalAlpha = opacity;
    }

    function changeBackgroundColor() {
        // Get the selected color
        const color = document.getElementById('backgroundColor').value;

        // Set the fill style and fill the canvas
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function changeShape() {
        // Get the selected shape
        const shape = document.getElementById('shape').value;

        // Based on the selected shape, change the drawing function
        // This is a placeholder, you will need to implement the actual drawing logic
        if (shape === 'square') {
            // Draw a square
        } else if (shape === 'triangle') {
            // Draw a triangle
        } else if (shape === 'circle') {
            // Draw a circle
        } else if (shape === 'rectangle') {
            // Draw a rectangle
        } else if (shape === 'octagon') {
            // Draw an octagon
        } else if (shape === 'star') {
            // Draw a star
        } else if (shape === 'oval') {
            // Draw an oval
        } else {
            // Draw a line
        }
    }

    function saveCanvas() {
        // Get the data URL of the canvas
        const dataUrl = canvas.toDataURL('image/png');

        // Create a new anchor element, set the href to the data URL and click it to download the image
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'canvas.png';
        a.click();
    }

});
