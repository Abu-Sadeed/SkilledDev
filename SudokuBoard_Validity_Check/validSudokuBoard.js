const boardValidity = board => {
    if(board.length === 0 || board[0].length === 0){
        return false
    }

    const rowCount = board.length;
    const columnCount = board[0].length;
    const isSquare = rowCount === columnCount;

    if(!isSquare){
        return false;
    }

    const squareRoot = Math.sqrt(rowCount) % 1 === 0;

    if(!squareRoot){
        return false;
    }

    if(!cellValidity(board)){
        return false;
    }

    return true;
};

const arrayObject = size =>
    Array(size)
        .fill(null)
        .map(() => ({}));


const nestedArrayObject = size =>
    Array(size)
        .fill(null)
        .map(() => arrayObject(size));


const cellValidity = board => {
    const boardSize = board.length;
    const subSquaresSize =  Math.sqrt(boardSize);
    const subSquares = nestedArrayObject(subSquaresSize);
    const rows = arrayObject(boardSize);
    const columns = arrayObject(boardSize);

    for(let row = 0; row < boardSize; row++){
        for(let col = 0; col < boardSize; col++){
            const cellValue = board[row][col];

            if(cellValue > 0){
                const subSquareRow = Math.floor(row / subSquaresSize);
                const subSquareCol = Math.floor(col / subSquaresSize);

                rows[row][cellValue] = (rows[row][cellValue] || 0) + 1;
                columns[col][cellValue] = (columns[col][cellValue] || 0) + 1;

                subSquares[subSquareRow][subSquareCol][cellValue] = (subSquares[subSquareRow][subSquareCol][cellValue] || 0) + 1;

                const duplicateRow = rows[row][cellValue] > 1;
                const duplicateCol = columns[col][cellValue] > 1;
                const duplicateSubSquareCell = subSquares[subSquareRow][subSquareCol][cellValue] > 1;

                if(duplicateCol || duplicateRow || duplicateSubSquareCell){
                    return false;
                }
            }
            
        }
    }

    return true;
};   

const board = [
    [0, 0, 6, 0, 0, 4, 0, 0, 0],
    [5, 0, 0, 1, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [4, 1, 0, 8, 0, 0, 9, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 1],
  ];

console.log(boardValidity(board));