import { isBold } from './bold.js';
import { isItalics } from "./italic.js";

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
    if (isBold())
        document.getElementById('btn_bold').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_bold').style.backgroundColor = "#FAFAFA";
}

function buttonItalicsColor() {
    if (isItalics())
        document.getElementById('btn_italics').style.backgroundColor = "#2789b3";
    else
        document.getElementById('btn_italics').style.backgroundColor = "#FAFAFA";
}


document.getElementById('btn_bold').onclick = function () {
    document.getElementById('text').focus();
    if (isBold())
        insertHtmlAtCaret('NB');
    else
        insertHtmlAtCaret('B');
};

document.getElementById('btn_italics').onclick = function () {
    document.getElementById('text').focus();
    if (isItalics())
        insertHtmlAtCaret('NI');
    else
        insertHtmlAtCaret('I');
};

function removeClass(element, style) {
    if (element.childElementCount === 0) {
        return;
    }
    element.childNodes.forEach(node => {
        if (node.className !== undefined) {
            if (node.classList.contains(style)) {
                node.classList.remove(style);
            }
        }
        removeClass(node);
    })
}

function addClass(element, style) {
    if (element.childElementCount === 0) {
        return;
    }
    element.childNodes.forEach(node => {
        if (node.className !== undefined) {
            if (!node.classList.contains(style)) {
                node.classList.add(style);
            }
        }
        removeClass(node);
    })
}

function insertHtmlAtCaret(style) {
    var sel, range;
    if (window.getSelection()) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            var el = document.createElement("div");

            var span = document.createElement('div');
            span.append(range.cloneContents());
            // console.log(span);

            if (style === 'B') {
                removeClass(span, "bold_false");
                addClass(span, 'bold');
                el.innerHTML = '<span class="bold">' + span.innerHTML + '</span>';
            }
            if (style === 'NB') {
                el.innerHTML = '<span class="bold_false">' + sel + '</span>';
            }
            if (style === 'I') {
                removeClass(span, "italic_false");
                addClass(span, 'italic');
                // el.innerHTML = '<span>' + span.innerHTML + '</span>';
                // el.style.fontStyle = 'italic';
                el.innerHTML = '<span class="italic">' + span.innerHTML + '</span>';
            }
            if (style === 'NI') {
                el.innerHTML = '<span class="italic_false">' + sel + '</span>';
            }
            range.deleteContents();
            var frag = document.createDocumentFragment(), node, lastNode;
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                // sel.removeAllRanges();
                // sel.addRange(range);
            }
            console.log(document.getElementById('text').innerHTML);
        }
    }
}


