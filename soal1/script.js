const sentence = "NEGIE1"

function reverse(txt) {

    const number = []
    const letter = []
    // const text = txt.split('').reverse().join('')

    for(let i = 0; i < txt.length; i++) {
        isNaN(txt[i]) ? letter.push(txt[i]) : number.push({char: txt[i], index: i})
    }

    letter.reverse()

    let res = ''
    let letterIndex = 0

    for(let i = 0; i < txt.length; i++) {
        number.length > 0 && number[0].index === i ? res += number.shift().char : res += letter[letterIndex++]
    }

    console.log(res)
}

reverse(sentence)
