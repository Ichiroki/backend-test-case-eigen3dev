const sentence = "Saya sangat senang mengerjakan soal algoritma"

function findTheLongestWord(txt) {
    let arr = txt.split(' ')
    let word = ""

    for(let i = 0; i < arr.length; i++) {
        if(word.length < arr[i].length) {
            word = arr[i]
        }
    }

    console.log(`the longest word is \'${word}\' having ${word.length} character`)
}

findTheLongestWord(sentence)