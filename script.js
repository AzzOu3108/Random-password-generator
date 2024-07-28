//random password generator

function generatepassword(length, includelowercase, includeuppercase, includesymbols){

    const lowercasechars = "abcdefghjklmnopqstuvwxyz";
    const upperchars = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#&=+|-^*()";

    let allowedchars = "";
    let password ="";

    allowedchars += includelowercase ? lowercasechars: "";
    allowedchars += includeuppercase ? upperchars: "";
    allowedchars += includenumbercase ? numberchars: "";
    allowedchars += includesymbols ? symbolchars: "";
    
    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowedchars.length === 0) {
        return `(At least 1 set character needs to be selected)`;
    }

    for(let i= 0; i<length; i++){
        const randomindex =Math.floor(Math.random()* allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;
}


const passwordlenghet = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbercase = true;
const includesymbols = true;

const password = generatepassword(passwordlenghet, includelowercase, includeuppercase, includesymbols);

console.log(`Generated password: ${password}`);
