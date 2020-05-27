const sortFIndEmail = emails => {
    emails.sort();
    let currentCount = 0;
    let maxCount = 0;
    let hackerEmail = '';
    let prev = '';

    for(let i = 0; i  < emails.length; i++){
        if(emails[i] === prev){
            currentCount++;
        }else{
            if(currentCount > maxCount){
                maxCount = currentCount;
                hackerEmail = emails[i]
            }
        }
        prev = emails[i];
    }

    return hackerEmail;
};
