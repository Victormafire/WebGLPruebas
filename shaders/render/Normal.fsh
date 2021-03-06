precision mediump float;

varying vec4 v_Normal;

void main() {
    vec4 auxNormal = (v_Normal / 2.0) + 0.5;
    gl_FragColor = vec4(auxNormal.x * gl_FragCoord.z, auxNormal.y * gl_FragCoord.z, auxNormal.z * gl_FragCoord.z, 1.0);
}