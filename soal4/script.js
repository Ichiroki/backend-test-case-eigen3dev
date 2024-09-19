const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

function penguranganAngkaMatriks(arr) {
    let n = arr.length
    let firstDiagRes = 0
    let secDiagRes = 0

    for(let i = 0; i < n; i++) {
        firstDiagRes += arr[i][i]
        secDiagRes += arr[i][n - i - 1]
    }

    console.log(firstDiagRes - secDiagRes)
}

penguranganAngkaMatriks(matrix)