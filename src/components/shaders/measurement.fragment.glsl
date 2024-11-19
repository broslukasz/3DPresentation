uniform float uTime;

varying vec3 vPosition;

void main()
{
    // Stripes
    float stripes = mod((vPosition.y - uTime * 0.002) * 200.0, 1.0);
    stripes = pow(stripes, 3.0);

    // Final color
    gl_FragColor = vec4(1.0, 1.0, 1.0, stripes);
}