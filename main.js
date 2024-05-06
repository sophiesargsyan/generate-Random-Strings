function* generateRandomStrings() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const stringLength = 8;
    for (let i = 0; i < 5; i++) {
        let randomString = '';
        for (let j = 0; j < stringLength; j++) {
            randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
        yield randomString;
    }
}

const randomStringGenerator = generateRandomStrings();


for (let i = 0; i < 5; i++) {
    const randomString = randomStringGenerator.next().value;
    console.log(randomString);
}
