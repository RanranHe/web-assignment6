import { insertHtmlAtCaret } from "./fonts.js";
import {isStyle} from "./checkStyle.js";

document.onkeyup = document.onmouseup = function () {
    // console.log(window.getSelection().anchorNode.parentElement.tagName)
    // if (window.getSelection().anchorNode.parentElement.tagName === 'BUTTON') {
    //         resetAllButtons();
    //         return;
    // }
    buttonBoldColor();
    buttonItalicsColor();
};

function resetAllButtons() {
    document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
}

function buttonBoldColor() {
    if (isStyle('bold'))
        document.getElementById('btn_bold').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
}

function buttonItalicsColor() {
    if (isStyle('italic'))
        document.getElementById('btn_italics').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
}







document.getElementById('btn_bold').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('bold'))
        insertHtmlAtCaret('NB');
    else
        insertHtmlAtCaret('B');
};

document.getElementById('btn_italics').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('italic'))
        insertHtmlAtCaret('NI');
    else
        insertHtmlAtCaret('I');
};




