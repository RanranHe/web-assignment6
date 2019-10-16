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
    buttonleftAlignColor();
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

function buttonleftAlignColor() {
    if (isStyle('leftAlign'))
        document.getElementById('btn_leftAlign').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_leftAlign').style.backgroundColor = "#FAFAFA";
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

document.getElementById('btn_leftAlign').onclick = function () {
    document.getElementById('text').style.cssFloat = 'left';
    console.log(document)
};

document.getElementById('btn_rightAlign').onclick = function () {
    document.getElementById('text').style.cssFloat = 'right';
    console.log(document)
};

document.getElementById('btn_justify').onclick = function () {
    console.log("herefdsafdsf")
    document.getElementById('text').style.width = '100%';
    document.getElementById('text').style.textAlign = 'justify';
    document.getElementById('text').style.textJustify = 'distribute-all-lines';
    document.getElementById('text').style.textAlignLast = 'justify';
    // document.getElementById('text').style

    console.log(document)
};





