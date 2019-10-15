export function isItalics() {
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    const ancestorBold = function () {
        if (range.commonAncestorContainer.classList === undefined || range.commonAncestorContainer.classList.value === "") {
            if (el.childNodes.length === 1 && el.childElementCount === 0) return true;
            if (el.childElementCount < el.childNodes.length) {
                return false;
            } else {
                return true;
            }
        } else return !range.commonAncestorContainer.classList.contains('italic_false');
    };

    let italic = true;
    AllBold(el, ancestorBold());

    function AllBold(ele, bool) {
        if (!ancestorBold) {
            italic = false;
            return;
        }
        if (ele.childElementCount !== 0) {
            for (let i = 0; i < ele.childNodes.length; i++) {
                if (ele.childNodes[i].tagName !== undefined) {

                    if (ele.childNodes[i].classList.contains('italic')) {
                        AllBold(ele.childNodes[i], true);
                    }
                    if (ele.childNodes[i].classList.contains('italic_false')) {
                        if (ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                            italic = false;
                            return;
                        } else {
                            AllBold(ele.childNodes[i], false);
                        }
                    } else {
                        if (ele.childNodes[i].childElementCount === 0) {
                            if (ele.childNodes[i].childNodes.length !== 0 && !bool) {
                                italic = false;
                                return;
                            }
                        } else {
                            AllBold(ele.childNodes[i], true);
                        }
                    }
                }
            }
        }
    }
    return (getComputedStyle(window.getSelection().anchorNode.parentElement).fontStyle === 'italic'
        && getComputedStyle(window.getSelection().focusNode.parentElement).fontStyle === 'italic'
        && italic)
}