function encodeBase64(str) {
    return btoa(str);
}
function decodeBase64(str) {
    return atob(str);
}
function generateShifts(key) {
    const shifts = [];
    for (let i = 0; i < key.length; i++) {
        shifts.push((key.charCodeAt(i) % 256) + i);
    }
    return shifts;
}
function applyShift(charCode, shift, reverse = false) {
    const range = 256;
    if (reverse) {
        return (charCode - shift + range) % range;
    }
    return (charCode + shift) % range;
}
function swapChars(text, swaps) {
    const arr = Array.from(text);
    for (let [i, j] of swaps) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}
function advancedEncrypt(text, key) {
    const shifts = generateShifts(key);
    let result = '';
    let swaps = [];
    for (let i = 0; i < text.length; i += 2) {
        if (i + 1 < text.length) {
            swaps.push([i, i + 1]);
        }
    }
    text = swapChars(text, swaps);
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let charCode = char.charCodeAt(0);
        let shift = shifts[i % shifts.length];
        let newCharCode = applyShift(charCode, shift);
        result += String.fromCharCode(newCharCode);
    }
    return encodeBase64(result);
}
function advancedDecrypt(text, key) {
    const decodedText = decodeBase64(text);
    const shifts = generateShifts(key);
    let result = '';
    for (let i = 0; i < decodedText.length; i++) {
        let char = decodedText[i];
        let charCode = char.charCodeAt(0);
        let shift = shifts[i % shifts.length];
        let newCharCode = applyShift(charCode, shift, true);
        result += String.fromCharCode(newCharCode);
    }
    let swaps = [];
    for (let i = 0; i < result.length; i += 2) {
        if (i + 1 < result.length) {
            swaps.push([i, i + 1]);
        }
    }
    return swapChars(result, swaps);
}
