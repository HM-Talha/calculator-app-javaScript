

function input(num) {
    var inp = document.getElementById("myInput")
    // console.log(inp)
    inp.value += num;

}
function results() {
    var inp = document.getElementById("myInput")
    var res = eval(inp.value)
    inp.value = res;
}
function allClear() {
    var inp = document.getElementById("myInput")
    inp.value = " ";

}
function clear1() {
    var inp = document.getElementById("myInput")
    inp.value = inp.value.slice(0, -1)
}

