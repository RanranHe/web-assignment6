import {isStyle} from "./checkStyle.js";
import {insertHtmlAtCaret} from "./fonts.js";

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
    document.getElementById('btn_leftAlign').style.backgroundColor = "#2789b3";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_justify').style.backgroundColor = "#FAFAFA";

    document.getElementById('text').style.textJustify = 'none';
    document.getElementById('text').style.textAlignLast = 'unset';
    document.getElementById('text').style.textAlign = 'left';
    console.log(document)
};

document.getElementById('btn_rightAlign').onclick = function () {
    document.getElementById('btn_leftAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#2789b3";
    document.getElementById('btn_justify').style.backgroundColor = "#FAFAFA";

    document.getElementById('text').style.textJustify = 'none';
    document.getElementById('text').style.textAlignLast = 'unset';
    document.getElementById('text').style.textAlign = 'right';
    console.log(document)
};

document.getElementById('btn_justify').onclick = function () {
    document.getElementById('btn_leftAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_justify').style.backgroundColor = "#2789b3";

    document.getElementById('text').style.textAlign = 'justify';
    document.getElementById('text').style.textJustify = 'distribute-all-lines';
    document.getElementById('text').style.textAlignLast = 'justify';
};