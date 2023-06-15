const alphabets= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ+×÷_=/").split("");
export default function strToNum(string: string) {
    let argList = string.toUpperCase().split("");
    let ans;
    for (var i in argList) {
        if (alphabets.includes(i)) {
            ans = false;
            return Window.prototype.alert((new TypeError("Cannot change String " + string + " to Number, it returns NaN"));
            break;
        } else {
            ans = true;
        }
    }
    if (ans) {
        return Number(string);
    }
};