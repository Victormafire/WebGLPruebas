precision mediump int;
precision mediump float;

uniform mat4 u_ModelMatrix;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ProjMatrix;
uniform mat4 u_NormalMatrix;

// All lights
#define MAX_LIGHTS 2

struct Light {
	// Type 1: Directional
	// Type 2: Point
	// Type 3: Focational
	int type;
	// Light enabled
	int enabled;

	// Main properties (use depends from type)
	vec3 direction;
	vec3 position;
	vec3 color;

	// Range (<0 means unlimited)
	float range; // TODO RANGE ATTENUATION

	float near;
	float far;

	// ShadowCast
	int casts;

	mat4 matrix;
};

uniform int u_NumLights;
uniform Light u_Lights[MAX_LIGHTS];

// Ambient
uniform vec3 u_AmbientLight;

attribute vec4 a_Position;
attribute vec4 a_Normal;
attribute vec4 a_Color;
attribute vec4 a_Uv;

varying vec3 ambient;
varying vec4 v_PositionFromLight[MAX_LIGHTS];

varying vec3 v_Normal;
varying vec4 v_Position;
varying vec4 v_Color;
varying vec4 v_Uv;
varying vec3 v_EyeDirection;



void main() {
	// Vertex position
	v_Position = u_ModelMatrix * a_Position;
	// Aux view vertex position
	vec3 EyePosition = (-u_ViewMatrix[3].xyz * mat3(u_ViewMatrix));
    v_EyeDirection = EyePosition - v_Position.xyz;
	// Final vertex rendering position (After view and projection transformations)
	gl_Position = u_ProjMatrix * u_ViewMatrix * v_Position;

	for(int i = 0; i<MAX_LIGHTS; i++){
		if(i < u_NumLights){
			v_PositionFromLight[i] = u_Lights[i].matrix * v_Position;
		}
	}

	// Normal inverse locator
	v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));

    // Ambient Light
    ambient = u_AmbientLight * a_Color.xyz;

	v_Color = a_Color;
	v_Uv = a_Uv;
	gl_PointSize = 1.0;
}
