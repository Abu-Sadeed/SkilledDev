const hashFindEmail = emails => {
    const emailCountTable = {};
    let maxCount = 0;
    let hackerEmail = '';

    for (const email of emails){
        if(!emailCountTable[email]){
            emailCountTable[email] = 0;
        }

        emailCountTable[email]++;

        const count = emailCountTable[email];

        const isNewMax = count > maxCount;
        maxCount = isNewMax ? count : maxCount;
        hackerEmail = isNewMax ? email : hackerEmail;
    }

    return hackerEmail;
};
