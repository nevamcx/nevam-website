export const text = (context, text, x, y, fontSize, fontColor) => {
    context.font = `${fontSize} Arial`;
    context.fillStyle = fontColor;
    context.fillText(text, x, y);
};