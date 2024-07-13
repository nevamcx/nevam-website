export const isHorizontal = false

export const getColorStringFromCanvas = (context, xIndex, yIndex) => {
    const appendFront0 = numStr => numStr.padStart(2, '0');
    const pixelData = context.getImageData(xIndex, yIndex, 1, 1).data;
    const [r, g, b] = pixelData;
    return `#${appendFront0(r.toString(16))}${appendFront0(g.toString(16))}${appendFront0(b.toString(16))}`;
};

export const randomColor = (): string => {
    const letters = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f'
    ]
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
