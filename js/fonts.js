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
                addClass(span, "bold");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'NB') {
                removeClass(span, "bold");
                addClass(span, "bold_false");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'I') {
                removeClass(span, "italic_false");
                addClass(span, "italic");
                el.innerHTML = span.innerHTML;
            }
            if (style === 'NI') {
                removeClass(span, "italic");
                addClass(span, "italic_false");
                el.innerHTML = span.innerHTML;
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

    function removeClass(element, style) {
        console.log(style)
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
        console.log(style)
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].className !== undefined) {
                if (!element.childNodes[i].classList.contains(style)) {
                    element.childNodes[i].classList.add(style);
                }
                addClass(element.childNodes[i], style);
            } else {
                var temp = document.createElement('span');

                temp.classList.add("" + style);
                // console.log(style)
                // if (style === 'bold') {
                //     temp.classList.add("bold");
                // }
                // if (style === 'italic') {
                //     temp.classList.add("italic");
                // }

                temp.innerHTML = element.childNodes[i].nodeValue

                console.log(temp.innerHTML)
                element.replaceChild(temp, element.childNodes[i])
                console.log(element.childNodes[i])
                // node.innerHTML = `<span class='${style}'` + node.nodeValue + '</span>';
            }
        }
        // element.childNodes.forEach(node => {
        //     if (node.className !== undefined) {
        //         if (!node.classList.contains(style)) {
        //             node.classList.add(style);
        //         }
        //     } else {
        //         var temp = document.createElement('span');
        //         temp.classList.add('' + style);
        //         temp.innerHTML = node.nodeValue;
        //         element.replaceChild(temp, )
        //         // node.innerHTML = `<span class='${style}'` + node.nodeValue + '</span>';
        //     }
        //     removeClass(node);
        // })
    }

}



