import {isStyle} from "./checkStyle.js";
import {insertHtmlAtCaret} from "./fonts.js";

/**
 * Click Event:
 * bold button
 * bold => detach bold style by removing bold class and inserting bold_false class
 * !bold => attach bold style by removing bold_false class and inserting bold class
 */
document.getElementById('btn_bold').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('bold'))
        insertHtmlAtCaret('bold_false');
    else
        insertHtmlAtCaret('bold');
};

/**
 * Click Event:
 * italic button
 * italic => detach italic style by removing italic class and inserting italic_false class
 * !italic => attach italic style by removing italic_false class and inserting italic class
 */
document.getElementById('btn_italics').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('italic'))
        insertHtmlAtCaret('italic_false');
    else
        insertHtmlAtCaret('italic');
};

/**
 * Click Event:
 * underline button
 * underline => detach underline style by removing underline class and inserting underline_false class
 * !underline => attach underline style by removing underline_false class and inserting underline class
 */
document.getElementById('btn_underline').onclick = function () {
    document.getElementById('text').focus();
    if (isStyle('underline'))
        insertHtmlAtCaret('underline_false');
    else
        insertHtmlAtCaret('underline');
};

/**
 * Click Event:
 * left align
 * left align button => blue
 * other align buttons => white
 * Apply left align style to the editable div element
 */
document.getElementById('btn_leftAlign').onclick = function () {
    document.getElementById('btn_leftAlign').style.backgroundColor = "#2789b3";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_justify').style.backgroundColor = "#FAFAFA";

    document.getElementById('text').style.textJustify = 'none';
    document.getElementById('text').style.textAlignLast = 'unset';
    document.getElementById('text').style.textAlign = 'left';
    console.log(document)
};

/**
 * Click Event:
 * right align
 * right align button => blue
 * other align buttons => white
 * Apply right align style to the editable div element
 */
document.getElementById('btn_rightAlign').onclick = function () {
    document.getElementById('btn_leftAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#2789b3";
    document.getElementById('btn_justify').style.backgroundColor = "#FAFAFA";

    document.getElementById('text').style.textJustify = 'none';
    document.getElementById('text').style.textAlignLast = 'unset';
    document.getElementById('text').style.textAlign = 'right';
    console.log(document)
};

/**
 * Click Event:
 * justify
 * justify button => blue
 * other align buttons => white
 * Apply justify style to the editable div element
 */
document.getElementById('btn_justify').onclick = function () {
    document.getElementById('btn_leftAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_rightAlign').style.backgroundColor = "#FAFAFA";
    document.getElementById('btn_justify').style.backgroundColor = "#2789b3";

    document.getElementById('text').style.textAlign = 'justify';
    document.getElementById('text').style.textJustify = 'distribute-all-lines';
    document.getElementById('text').style.textAlignLast = 'justify';
};