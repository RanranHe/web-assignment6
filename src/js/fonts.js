/**
 * Take a one of the styles (bold, italic, underline, bold_false, italic_false, underline_false)
 * And apply it to the selected text
 * @param style
 */
export function insertHtmlAtCaret(style) {
    let sel, range;
    if (window.getSelection()) {
        // get the selection
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0); // get the range

            // create new elements
            const el = document.createElement("div");
            const span = document.createElement('div');
            // clone selected contents and add it to the new element
            span.append(range.cloneContents());

            // ======= Bold Style ======= //
            if (style === 'bold') {
                removeClass(span, "bold_false");
                addClass(span, "bold");
                el.innerHTML = span.innerHTML;
            }
            // ======= !Bold Style ======= //
            if (style === 'bold_false') {
                removeClass(span, "bold");
                addClass(span, "bold_false");
                el.innerHTML = span.innerHTML;
            }
            // ======= Italic Style ======= //
            if (style === 'italic') {
                removeClass(span, "italic_false");
                addClass(span, "italic");
                el.innerHTML = span.innerHTML;
            }
            // ======= !Italic Style ======= //
            if (style === 'italic_false') {
                removeClass(span, "italic");
                addClass(span, "italic_false");
                el.innerHTML = span.innerHTML;
            }
            // ======= Underline Style ======= //
            if (style === 'underline') {
                removeClass(span, "underline_false");
                addClass(span, "underline");
                el.innerHTML = span.innerHTML;
            }
            // ======= !Underline Style ======= //
            if (style === 'underline_false') {
                removeClass(span, "underline");
                addClass(span, "underline_false");
                el.innerHTML = span.innerHTML;
            }

            // delete the contents in range, in order to add new content.
            range.deleteContents();

            // append the updated elements to unselected part
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

    /**
     * Helper Function:
     * Remove certain class from all elements in selected area
     * @param element
     * @param style
     */
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
            // recursion for child nodes
            removeClass(node, style);
        })
    }

    /**
     * Helper Function:
     * Add certain class to exist elements in selected area
     * and create an element for node (which is not an element)
     * @param element
     * @param style
     */
    function addClass(element, style) {
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].className !== undefined) {
                if (!element.childNodes[i].classList.contains(style)) {
                    element.childNodes[i].classList.add(style);
                }
                // recursion for child nodes
                addClass(element.childNodes[i], style);
            } else {
                // create an new element, in order to put node value in
                const temp = document.createElement('span');

                // add certain class to the new element
                temp.classList.add("" + style);
                // update the content of the element.
                temp.innerHTML = element.childNodes[i].nodeValue;
                // use the new element to replace the child node
                element.replaceChild(temp, element.childNodes[i]);
            }
        }
    }

}



