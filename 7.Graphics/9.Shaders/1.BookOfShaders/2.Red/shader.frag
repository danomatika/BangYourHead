// color as function

// from http://patriciogonzalezvivo.com/2015/thebookofshaders/03/


uniform vec4 u_color;

vec4 red();

void main() {
    
    gl_FragColor = red();
    
    // or
    // set color directly
	//gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}

vec4 red(){
    return vec4(1.0,0.0,0.0,1.0);
}