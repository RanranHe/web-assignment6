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
    buttonUnderlineColor();
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

function buttonUnderlineColor() {
    if (isStyle('underline'))
        document.getElementById('btn_underline').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_underline').style.backgroundColor = "#FAFAFA";
}







document.getElementById('btn_bold').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('bold'))
        insertHtmlAtCaret('bold_false');
    else
        insertHtmlAtCaret('bold');
};

document.getElementById('btn_italics').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('italic'))
        insertHtmlAtCaret('italic_false');
    else
        insertHtmlAtCaret('italic');
};

document.getElementById('btn_underline').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('underline'))
        insertHtmlAtCaret('underline_false');
    else
        insertHtmlAtCaret('underline');
};




