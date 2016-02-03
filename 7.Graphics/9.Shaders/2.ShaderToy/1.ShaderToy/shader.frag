//simple plasma

//from https://www.shadertoy.com/view/ldBGRR

/////////////////////////start Pd Header
// 2015 Sofy Yuditskaya
// put all the shadertoy constants here for ease of use

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iGlobalTime;           // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform int       iFrame;                // shader playback frame
uniform float     iChannelTime[4];       // channel playback time (in seconds)
uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click

// changed samplerXX to sampler2D so it would be recognized, you can also change it to samplerCube as needed

uniform sampler2D iChannel0;          // input channel. XX = 2D/Cube
uniform sampler2D iChannel1;          // input channel. XX = 2D/Cube
uniform sampler2D iChannel2;          // input channel. XX = 2D/Cube
uniform sampler2D iChannel3;          // input channel. XX = 2D/Cube

uniform vec4      iDate;                 // (year, month, day, time in seconds)
uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

void mainImage(out vec4 fragColor, in vec2 fragCoord);

// changelog for Pd:
//running mainImage() from main()
// declared Shadertoy's usual variables above
// declared iChannel0...3 variables individually

void main()
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
//paste ShaderToy code below
/////////////////////////end Pd Header
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 p = -1.0 + 2.0 * fragCoord.xy / iResolution.xy;
	
    // main code, *original shader by: 'Plasma' by Viktor Korsun (2011)
    float x = p.x;
    float y = p.y;
    float mov0 = x+y+cos(sin(iGlobalTime)*2.0)*100.+sin(x/100.)*1000.;
    float mov1 = y / 0.9 +  iGlobalTime;
    float mov2 = x / 0.2;
    float c1 = abs(sin(mov1+iGlobalTime)/2.+mov2/2.-mov1-mov2+iGlobalTime);
    float c2 = abs(sin(c1+sin(mov0/1000.+iGlobalTime)+sin(y/40.+iGlobalTime)+sin((x+y)/100.)*3.));
    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));
    fragColor = vec4(c1,c2,c3,1);
	
}