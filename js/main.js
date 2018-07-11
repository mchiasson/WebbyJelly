
/**
 * Main entry point
 */
function main() {

    // first, let's fine our element called 'glcanvas'
    const canvas = document.querySelector("#glcanvas");
  
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (!gl) {
        alert("This browser doesn't support WebGL!");
        return;
    }

    // Set clear color to 'medium spring green', fully opaque
    gl.clearColor(0.0, 0.98, 0.6, 1.0);

    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

main();
