export function insertHtmlAtCaret(style) {
    let sel, range;
    if (window.getSelection()) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            const el = document.createElement("div");

            const span = document.createElement('div');
            span.append(range.cloneContents());

            if (style === 'bold') {
                removeClass(span, "bold_false");
                addClass(span, "bold");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'bold_false') {
                removeClass(span, "bold");
                addClass(span, "bold_false");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'italic') {
                removeClass(span, "italic_false");
                addClass(span, "italic");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'italic_false') {
                removeClass(span, "italic");
                addClass(span, "italic_false");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'underline') {
                removeClass(span, "underline_false");
                addClass(span, "underline");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'underline_false') {
                removeClass(span, "underline");
                addClass(span, "underline_false");
                el.innerHTML = span.innerHTML;
            }
            range.deleteContents();
            let frag = document.createDocumentFragment(), node, lastNode;
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.addRange(range);
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
            removeClass(node, style);
        })
    }

    function addClass(element, style) {
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].className !== undefined) {
                if (!element.childNodes[i].classList.contains(style)) {
                    element.childNodes[i].classList.add(style);
                }
                addClass(element.childNodes[i], style);
            } else {
                const temp = document.createElement('span');

                temp.classList.add("" + style);
                temp.innerHTML = element.childNodes[i].nodeValue;
                element.replaceChild(temp, element.childNodes[i]);
            }
        }
    }

}



