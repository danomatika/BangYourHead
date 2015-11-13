uniform float u_time;

void main(void) {
	vec4 v = vec4(gl_Vertex);	
	v.z = v.z + sin(5.0*v.x + u_time*0.1)*0.25;
	gl_Position = gl_ModelViewProjectionMatrix * v;
} 