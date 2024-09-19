const sentence = "Saya sangat senang mengerjakan soal algoritma"

function reverse(txt) {
    const text = txt.split(" ").reverse().join(" ").toString()
    console.log(text)
}

reverse(sentence)