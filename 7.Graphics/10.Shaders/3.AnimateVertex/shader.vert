#version 120

// animation time variable
// could be a time amount or, in this case, the number of rendered frames
// coming from the pd patch
uniform float u_time = 0.0;

// animation speed modifier
uniform float u_speed = 0.1;

void main(void) {

	// grab current vert
	vec4 v = vec4(gl_Vertex);

	// shift the z pos based on the x pos & frame count using sin
	v.z = v.z + sin(5.0*v.x + u_time*u_speed)*0.25;

	// update the pos
	gl_Position = gl_ModelViewProjectionMatrix * v;
} 