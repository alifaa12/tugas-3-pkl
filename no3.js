//  function biodata (nama, kelas){
//      console.log(nama);
//      console.log(kelas);
//  }

//  console.log(["hallo", "nama", "saya"], "Alifa", "RPL1");

function array (value){
    const result = value.map(el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
     console.log(split);
    // console.log(result);
    // result.pop
    console.log(result ,split.join(' '));
}
array(['hallo', 'nama', 'saya',  ['alifa', 'nurfadilla', ['kelas', ['11', ['rpl', '2']]]]])