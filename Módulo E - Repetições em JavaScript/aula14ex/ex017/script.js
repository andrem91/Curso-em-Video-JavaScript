function calcular() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if(num.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let n = Number(num.value)
            let f = n*c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${f}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}