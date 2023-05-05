let kq = document.querySelector(".container input[type='text']")
function add(value) {
    kq.value += value
}
function erase() {
    kq.value = ""
}
function calc() {
    kq.value = eval(kq.value).toFixed(2);
    if (kq.value == 3000) {
        return kq.value = "I love u <3"
    }
    if (kq.value == 23) {
        return kq.value = "2 3 con mực anh yêu em cực <3"
    }
}

function remove1() {
    kq.value = kq.value.slice(0, -1)
}



