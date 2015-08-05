var cubeVertices = new Float32Array([ // Vertex coordinates
	 1.0, 1.0, 1.0, 	-1.0, 1.0, 1.0, 	-1.0,-1.0, 1.0,	  1.0,-1.0, 1.0,
	 1.0, 1.0, 1.0, 	 1.0,-1.0, 1.0, 	 1.0,-1.0,-1.0,	  1.0, 1.0,-1.0,
	 1.0, 1.0, 1.0, 	 1.0, 1.0,-1.0, 	-1.0, 1.0,-1.0,	 -1.0, 1.0, 1.0,
	-1.0,-1.0,-1.0, 	-1.0,-1.0, 1.0, 	-1.0, 1.0, 1.0,	 -1.0, 1.0,-1.0,
	-1.0,-1.0,-1.0, 	 1.0,-1.0,-1.0, 	 1.0,-1.0, 1.0,	 -1.0,-1.0, 1.0,
	 1.0,-1.0,-1.0, 	-1.0,-1.0,-1.0,		-1.0, 1.0,-1.0,	  1.0, 1.0,-1.0
]);

var cubeColors = new Float32Array([ // Vertex coordinates
	 1.0, 0.0, 0.0, 1.0,	 1.0, 0.0, 0.0, 1.0,	1.0, 0.0, 0.0, 1.0, 	1.0, 0.0, 0.0, 1.0,	
	 0.0, 1.0, 0.0, 1.0,	 0.0, 1.0, 0.0, 1.0,	0.0, 1.0, 0.0, 1.0, 	0.0, 1.0, 0.0, 1.0,	
	 0.0, 0.0, 1.0, 1.0,	 0.0, 0.0, 1.0, 1.0,	0.0, 0.0, 1.0, 1.0, 	0.0, 0.0, 1.0, 1.0,	
	 1.0, 1.0, 0.0, 1.0,	 1.0, 1.0, 0.0, 1.0,	1.0, 1.0, 0.0, 1.0, 	1.0, 1.0, 0.0, 1.0,	
	 0.0, 1.0, 1.0, 1.0,	 0.0, 1.0, 1.0, 1.0,	0.0, 1.0, 1.0, 1.0, 	0.0, 1.0, 1.0, 1.0,	
	 1.0, 0.0, 1.0, 1.0,	 1.0, 0.0, 1.0, 1.0,	1.0, 0.0, 1.0, 1.0, 	1.0, 0.0, 1.0, 1.0
]);

var cubeUVs = new Float32Array([ // Vertex coordinates
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0,
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0,
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0,
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0,
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0,
	0.0, 0.0,	 1.0, 0.0,  1.0, 1.0,	0.0, 1.0
]);

var cubeIndexes = new Uint8Array([
	0, 1, 2, 0, 2, 3, // front
	4, 5, 6, 4, 6, 7, // right
	8, 9, 10, 8, 10, 11, // up
	12, 13, 14, 12, 14, 15, // left
	16, 17, 18, 16, 18, 19, // down
	20, 21, 22, 20, 22, 23 // back
]);

function createCube(gl, a_position, a_color, a_Uv, u_ModelMatrix){
	var cube = new DrawableObject(gl, a_position, a_color, a_Uv, u_ModelMatrix);
	
	cube.triangles = cubeIndexes;
	cube.vertices = cubeVertices;
	cube.colors = cubeColors;
	cube.uvs = cubeUVs;
	cube.onChangePoints();
	
	return cube;
};