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

function isBold() {
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    const ancestorBold = function () {
        console.log(el);
        console.log(el.childElementCount);
        if (range.commonAncestorContainer.classList === undefined || range.commonAncestorContainer.classList.value === "") {
            if (el.childNodes.length === 1 && el.childElementCount === 0) return true;
            if (el.childElementCount < el.childNodes.length) {
                return false;
            } else {
                return true;
            }
        }
        else return !range.commonAncestorContainer.classList.contains('bold_false');
    };

    var bold = true;
    AllBold(el);
    function AllBold(ele) {
        console.log(ele)
        if (ele.childElementCount !== 0) {
            for(let i = 0; i < ele.childNodes.length; i ++) {
                if (ele.childNodes[i].tagName !== undefined) {
                    console.log(ele.childNodes[i].classList.contains('bold_false'))
                    console.log(ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount)
                    console.log(ele.childNodes[i].childElementCount)
                    if (ele.childNodes[i].classList.contains('bold_false') && ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                        console.log("false here")
                        bold = false;
                    }
                    if (ele.childNodes[i].parentElement.style.fontWeight === '400') {
                        console.log("false herhhhhhh")
                        bold = false;
                    }
                    AllBold(ele.childNodes[i]);
                }
            }
            // ele.childNodes.every(node => {
            //     console.log(node)
            //     if (node.tagName !== undefined) {
            //         if (node.parentElement.style.fontWeight === '400') return false;
            //         if (node.classList.contains('bold_false') && node.childNodes.length > node.childElementCount) {
            //             console.log("false here")
            //             return false;
            //         }
            //         AllBold(node);
            //     }
            // });
        }
        // return bool;
    }

    console.log(getComputedStyle(window.getSelection().anchorNode.parentElement).fontWeight !== '400');
    console.log(getComputedStyle(window.getSelection().focusNode.parentElement).fontWeight !== '400');
    console.log(bold);
    console.log(ancestorBold() === true);

    return (getComputedStyle(window.getSelection().anchorNode.parentElement).fontWeight !== '400'
        && getComputedStyle(window.getSelection().focusNode.parentElement).fontWeight !== '400'
        && bold && ancestorBold())
}

function isItalics() {
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    const ancestorBold = function () {
        // console.log(range.commonAncestorContainer.classList);
        // console.log(el.childNodes);
        // console.log(el.childElementCount);
        if (range.commonAncestorContainer.classList === undefined || range.commonAncestorContainer.classList.value === "") {
            // console.log("here!!!!");
            if (el.childNodes.length === 1 && el.childElementCount === 0) return true;
            if (el.childElementCount < el.childNodes.length) {
                return false;
            } else {
                return true;
            }
        }
        else return !range.commonAncestorContainer.classList.contains('italic_false');
    };

    // const AllBold = function (ele, bool) {
    //     // console.log(ele)
    //     if (ele.childElementCount !== 0) {
    //         ele.childNodes.forEach(node => {
    //             // console.log(node)
    //             if (node.tagName !== undefined) {
    //                 bool = bool && (node.parentElement.style.fontStyle === 'italic' || node.parentElement.style.fontStyle === '');
    //                 if (node.classList.contains('italic_false') && node.childNodes.length > node.childElementCount) {
    //                     bool = false;
    //                 }
    //                 AllBold(node, bool);
    //             }
    //         });
    //     }
    //     return bool;
    // };

    var italic = true;
    AllBold(el);
    function AllBold(ele) {
        if (ele.childElementCount !== 0) {
            for(let i = 0; i < ele.childNodes.length; i ++) {
                if (ele.childNodes[i].tagName !== undefined) {
                    if (ele.childNodes[i].classList.contains('italic_false') && ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                        italic = false;
                    }
                    if (ele.childNodes[i].parentElement.style.fontStyle === 'italic') {
                        italic = false;
                    }
                    AllBold(ele.childNodes[i]);
                }
            }
        }
    }

    return (getComputedStyle(window.getSelection().anchorNode.parentElement).fontStyle === 'italic'
        && getComputedStyle(window.getSelection().focusNode.parentElement).fontStyle === 'italic'
        && italic && ancestorBold())
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

