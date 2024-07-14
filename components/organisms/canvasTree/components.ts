export const square = (type, context, x, y, width, height, radius = 5, color, fill = false, stroke = true) => {
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } 
    else {
        let defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (let side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    context.beginPath();
    context.moveTo(x + radius.tl, y);
    context.lineTo(x + width - radius.tr, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    context.lineTo(x + width, y + height - radius.br);
    context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    context.lineTo(x + radius.bl, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    context.lineTo(x, y + radius.tl);
    context.quadraticCurveTo(x, y, x + radius.tl, y);
    context.closePath();
    if (type !== 'hidden') {
        context.fillStyle = color
    }
    if (fill) {
        context.fill();
    }
    if (stroke) {
        context.stroke();
    }
};

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

export const text = (context, text, x, y, fontSize, fontColor) => {
    context.font = `${fontSize} Arial`;
    context.fillStyle = fontColor;
    context.fillText(text, x, y);
    console.log('text...')
};

export const image = (context, path, x, y, width, height) => {
    const img = new Image();
    img.src = path;
    context.drawImage(img, x, y, width, height);
};
