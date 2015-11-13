#version 120

// color as a variable
uniform vec4 u_color = vec4(1.0, 0.0, 1.0, 1.0); // magenta

void main() {

	// set color of this pixel with a uniform
	gl_FragColor = u_color;
}
