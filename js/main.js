import {isStyle} from "./checkStyle.js";

document.onkeyup = document.onmouseup = function () {
    if (window.getSelection().isCollapsed) {
        resetAllButtons();
        return;
    }
    buttonBoldColor();
    buttonItalicsColor();
    buttonUnderlineColor();
};

function resetAllButtons() {
    document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_underline').style.backgroundColor = "#FAFAFA";
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









