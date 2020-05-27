const bruteForceFindEmail = emails => {
    let maxCount = 0;
    let hackerEmail = '';

    for(let i = 0; i < emails.length; i++){
        const currentEmail = emails[i];
        let currentCount = 0;

        for(let j = 0; j < emails.length; j++){
            if(emails[j] === currentEmail){
                currentCount++;
            }
        }

        const isNewMax = currentCount > maxCount;
        maxCount = isNewMax ? currentCount : maxCount;
        hackerEmail = isNewMax ? currentEmail : hackerEmail;
    }

    return hackerEmail;

};