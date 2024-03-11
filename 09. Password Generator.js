function passwordGenerator(input) {
    let wordToChange = input.pop();
    let concateString = input[0].concat(input[1]);
    let vowels = ["a", "e", "i", "o", "u"];

    let wordChars = wordToChange.split('');
    let charIndex = 0;

    for (let i = 0; i < concateString.length; i++) {
        let letter = concateString[i];

        if (vowels.includes(letter.toLowerCase())) {
            concateString = concateString.replace(letter, wordChars[charIndex].toUpperCase());
            charIndex = (charIndex + 1) % wordChars.length;
        }
    }

    let reversedPassword = concateString.split('').reverse().join('');
    console.log(`Your generated password is ${reversedPassword}`);
}

//passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
 passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);