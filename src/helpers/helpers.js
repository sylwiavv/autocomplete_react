export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function moveCursorToEnd(e, inputAutoComplete) {
    setTimeout(function(){
        inputAutoComplete.selectionStart = inputAutoComplete.selectionEnd = inputAutoComplete.value.length;
        inputAutoComplete.focus();
    }, 0)
}
