export function isItalics() {
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