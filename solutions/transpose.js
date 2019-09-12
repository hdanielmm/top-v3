/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let result = [];
    for(let i = 0; i < A.length; i++) {

        for(let j = 0; j < A[0].length; j++) {
            console.log(j)
            if(result[j] == null) {
                result[j] = [];
            }
            console.log(result)
            result[j][i] = A[i][j];
        }
    }
    return result;
};
