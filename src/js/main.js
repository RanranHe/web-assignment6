import {isStyle} from "./checkStyle.js";

/**
 * When no text is selected, reset all button colors.
 * When text is selected, check the applied styles and set the button color
 * @type {document.onmouseup}
 */
document.onkeyup = document.onmouseup = function () {
    if (window.getSelection().isCollapsed) {
        resetAllButtons();
        return;
    }
    // Call helper functions and change button colors
    buttonBoldColor();
    buttonItalicsColor();
    buttonUnderlineColor();
};

/**
 * Helper function:
 * reset all font styles color.
 */
function resetAllButtons() {
    document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_underline').style.backgroundColor = "#FAFAFA";
}

/**
 * Helper function:
 * check whether bold is applied to the selected text
 * true => change button color
 */
function buttonBoldColor() {
    if (isStyle('bold'))
        document.getElementById('btn_bold').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
}

/**
 * Helper function:
 * check whether italic is applied to the selected text
 * true => change button color
 */
function buttonItalicsColor() {
    if (isStyle('italic'))
        document.getElementById('btn_italics').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
}

/**
 * Helper function:
 * check whether underline is applied to the selected text
 * true => change button color
 */
function buttonUnderlineColor() {
    if (isStyle('underline'))
        document.getElementById('btn_underline').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_underline').style.backgroundColor = "#FAFAFA";
}









