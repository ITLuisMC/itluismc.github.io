function saveLocalS(key,valor) {
    return localStorage.setItem(key, valor);
}
function getLocalS(key) {
    return localStorage.getItem(key);
}
function delLocalS(key) {
    return localStorage.removeItem(key);
}