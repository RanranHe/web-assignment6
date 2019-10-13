document.onkeyup = document.onmouseup = function(){
    if (isBold())
        document.getElementById('ddddd').style.backgroundColor = "#2789b3";
    else
        document.getElementById('ddddd').style.backgroundColor = "#FAFAFA";
};


function isBold() {
    var end = window.getSelection().focusNode.parentElement.tagName;
    var start = window.getSelection().anchorNode.parentElement.tagName;
    return !(start !== 'B' || end !== 'B');
}

function isItalics() {
    var end = window.getSelection().focusNode.parentElement.tagName;
    var start = window.getSelection().anchorNode.parentElement.tagName;
    return !(start !== 'I' || end !== 'I');
}

document.getElementById('ddddd').onclick = function(){
    document.getElementById('test').focus();
    if (isBold())
        insertHtmlAtCaret('N');
    else
        insertHtmlAtCaret('B');
};

function insertHtmlAtCaret(style) {
    var sel, range;
    if (window.getSelection()) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            var el = document.createElement("div");
            console.log(el.innerHTML)
            if(style === 'B')
                el.innerHTML = '<b>' + sel + '</b>';
            console.log(el.innerHTML)
            if (style === 'N') {
                el.innerHTML = '<span class="bold">' + sel + '</span><b>';
                el.style.color = "#2789b3";
            }
            range.deleteContents();
            console.log(document.getElementById('test').innerHTML)
            var frag = document.createDocumentFragment(), node, lastNode;
            console.log(frag)
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
            console.log(document.getElementById('test').innerHTML)
        }
    }
}


// if (window.getSelection().focusNode.parentElement.tagName === 'B')
// document.getElementById('ddddd').style.backgroundColor = "#2789b3";