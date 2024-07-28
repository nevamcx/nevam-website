export const textWrap = (context, text, x, y, maxWidth, fontSize, lineHeight, fontColor) => {
    context.fillStyle = fontColor;
    context.font = `${fontSize} Arial`;
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        let testLine = `${line + words[n]} `;
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = `${words[n]} `;
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
};