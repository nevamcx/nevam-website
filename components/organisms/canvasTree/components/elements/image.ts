export const image = (context, path, x, y, width, height) => {
    const img = new Image();
    img.src = path;
    context.drawImage(img, x, y, width, height);
};