
// color as a variable
uniform vec4 u_color;

void main() {
	
	// set color directly
	//gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);

	// set color of this pixel with a uniform
	gl_FragColor = u_color;
}
