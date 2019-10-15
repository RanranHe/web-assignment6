// document.onkeydown = function () {
//     console.log("here")
//     if (window.getSelection()) {
//         sel = window.getSelection();
//         if (sel.getRangeAt && sel.rangeCount) {
//             range = sel.getRangeAt(0);
//             const el = document.createElement("span");
//             console.log(event.keyCode/event.which)
//
//             // const span = document.createElement('div');
//             // console.log(span);
//
//             console.log(el);
//             addClass(el, 'bold');
//
//             range.deleteContents();
//             var frag = document.createDocumentFragment(), node, lastNode;
//             while ((node = el.firstChild)) {
//                 lastNode = frag.appendChild(node);
//             }
//             range.insertNode(frag);
//             if (lastNode) {
//                 range = range.cloneRange();
//                 range.setStartAfter(lastNode);
//                 range.collapse(true);
//                 // sel.removeAllRanges();
//                 // sel.addRange(range);
//             }
//             console.log(document.getElementById('text').innerHTML);
//         }
//     }
// }
function noNumbers(e) {
    var keynum;
    var keychar;

    keynum = window.event ? e.keyCode : e.which;
    keychar = String.fromCharCode(keynum);
    let selection, range;

    if (window.getSelection()) {
        selection = window.getSelection();
        if (selection) {
            const range = new Range();
            range.setStartAfter(selection.focusNode);
            range.setEndAfter(selection.focusNode);
            const el = document.createElement('span');
            el.innerHTML= keychar + '';
            // range.insertNode(el);
            // var s = selection.createRange();
            // s.insertNode(el);
            // range = sel.getRangeAt(0);
            // console.log(range)


            // range.deleteContents();

            // var frag = document.createDocumentFragment(), node, lastNode;
            // while ((node = el.firstChild)) {
            //     lastNode = frag.appendChild(node);
            // }
            range.insertNode(el);

            // if (lastNode) {
            //     range = range.cloneRange();
            //     range.setStartAfter(lastNode);
            //     range.collapse(true);
            //     // sel.removeAllRanges();
            //     // sel.addRange(range);
            // }
            console.log(document.getElementById('text').innerHTML);
        }
    }
}

document.onmouseup = function () {
    let sel, range;
    if (window.getSelection()) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            const el = document.createElement("div");

            // const span = document.createElement('div');
            el.append(range.cloneContents());
            // console.log(span);

            console.log(el);
            addClass(el, 'bold');

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
};

function addClass(element, style) {
    if (element.childElementCount === 0) {
        return;
    }
    element.childNodes.forEach(node => {
        if (!node.classList.contains(style)) {
            node.classList.add(style);
        }
    })
}