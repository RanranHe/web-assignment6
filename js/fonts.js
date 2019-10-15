export function insertHtmlAtCaret(style) {
    let sel, range;
    if (window.getSelection()) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            const el = document.createElement("div");

            const span = document.createElement('div');
            span.append(range.cloneContents());
            // console.log(span);

            if (style === 'B') {
                removeClass(span, "bold_false");
                addClass(span, 'bold');
                el.innerHTML = '<span class="bold">' + span.innerHTML + '</span>';
            }
            if (style === 'NB') {
                removeClass(span, "bold");
                el.innerHTML = '<span class="bold_false">' + sel + '</span>';
            }
            if (style === 'I') {
                removeClass(span, "italic_false");
                addClass(span, 'italic');
                el.innerHTML = '<span class="italic">' + span.innerHTML + '</span>';
            }
            if (style === 'NI') {
                removeClass(span, "italic");
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
        } else {
            node.innerHTML = `<span class='${style}'` + node.nodeValue + '</span>';
        }
        removeClass(node);
    })
}

