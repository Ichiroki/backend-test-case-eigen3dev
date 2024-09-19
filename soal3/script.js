const input = ['xc', 'dz', 'bbb', 'dz']  
const query = ['bbb', 'ac', 'dz']

function findTheDuplicate(arr1, arr2) {
    const res = arr2.map((res) => arr1.filter(item => item === res).length)

    console.log(res)
}

findTheDuplicate(input, query)