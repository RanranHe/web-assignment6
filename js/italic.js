export function isItalics() {
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    var italic = true;
    console.log(el)
    if (range.commonAncestorContainer.classList === undefined || !range.commonAncestorContainer.classList.contains('italic')) {
        if (el.childElementCount === 0) {
            AllBold(el, true);
        } else {
            if (el.childElementCount < el.childNodes.length) {
                // italic = false;
                // AllBold(el, false);
            } else {
                console.log("here")
                AllBold(el, false);
            }
        }

    } else {

        AllBold(el, !range.commonAncestorContainer.classList.contains('italic_false'));
    }

    function AllBold(ele, bool) {
        if (!bool && ele.childElementCount === 0 && ele.childNodes.length !== 0) {
            console.log("here")
            italic = false;
            return;
        }
        if (ele.childElementCount !== 0) {
            for (let i = 0; i < ele.childNodes.length; i++) {
                console.log()
                if (ele.childNodes[i].tagName !== undefined) {
                    if (ele.childNodes[i].classList.contains('italic')) {
                        console.log(bool)
                        AllBold(ele.childNodes[i], true);
                    } else {
                        console.log(bool)
                        if (ele.childNodes[i].classList.contains('italic_false')) {
                            if (ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                                italic = false;
                                return;
                            } else {
                                AllBold(ele.childNodes[i], false);
                            }
                        } else {
                            console.log(ele)
                            console.log(ele.childNodes[i])
                            console.log(ele.childElementCount)
                            console.log(ele.childNodes)
                            console.log(bool)
                            if (!bool && ele.childNodes[i].childElementCount < ele.childNodes[i].childNodes.length) {
                                console.log("!!!!!!!")
                                italic = false;
                            } else {
                                AllBold(ele.childNodes[i], bool);
                            }
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