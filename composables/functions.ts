export const generateUniqueAlphaNumericString = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomString = Math.random().toString(36).substring(2).toUpperCase();
    const randomStringWithDashes = randomString.replace(/(.{3})/g, '$1-');
    const formattedRandomString = randomStringWithDashes.replace(/-$/, '');
    return timestamp + '-' + formattedRandomString;
}