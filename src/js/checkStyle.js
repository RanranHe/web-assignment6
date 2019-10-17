/**
 * Check if the style is applied to the selected text
 * Check three parts:
 * 1. element which the first index is in;
 * 2. element which the last index is in;
 * 3. element between them
 * @param style
 * @returns {*|boolean}
 */
export function isStyle(style) {
    // get range of selection
    const range = window.getSelection().getRangeAt(0);
    // create a new div element to store contents in range
    const el = document.createElement("div");
    el.append(range.cloneContents());

    // indicate whether the middle part is in this style
    let flag = true;
    // check the common ancestor container of the range
    // if the the container is not an element or doesn't have this style
    if (range.commonAncestorContainer.classList === undefined || !range.commonAncestorContainer.classList.contains(style)) {
        if (el.childElementCount === 0) {
            // check whether the style is applied to all of the children
            AllBold(el, true);
        } else {
            // if there exists node (which is not element)
            if (el.childElementCount < el.childNodes.length) {
                el.childNodes.forEach(node => {
                    // check whether the node is empty
                    // if not empty indicator => false
                    if (!((node.innerText === undefined && node.nodeValue === "") || node.innerText !== undefined)) {
                        flag = false;
                    }
                });
                if (flag) { // if indicator is true, then go ahead with true indicator
                    AllBold(el, true);
                }
            } else {
                // go ahead with false indicator
                AllBold(el, false);
            }
        }
    } else {
        // if style is applied to the container, then return true; else return false
        AllBold(el, !range.commonAncestorContainer.classList.contains(style + '_false'));
    }

    /**
     * Helper function:
     * check the middle part
     * @param ele
     * @param bool
     * @constructor
     */
    function AllBold(ele, bool) {
        if (!bool && ele.childElementCount === 0 && ele.childNodes.length !== 0) {
            flag = false;
            return;
        }
        if (ele.childElementCount !== 0) {
            for (let i = 0; i < ele.childNodes.length; i++) {
                if (ele.childNodes[i].tagName !== undefined) {
                    if (ele.childNodes[i].classList.contains(style)) {
                        AllBold(ele.childNodes[i], true);
                    } else {
                        if (ele.childNodes[i].classList.contains(style + '_false')) {
                            if (ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                                ele.childNodes.forEach(node => {
                                    if (!(node.innerText === undefined && node.nodeValue === "" && node.innerText !== undefined)) {
                                        flag = false;
                                        return;
                                    }
                                });
                                if (flag) {
                                    AllBold(ele, false);
                                }
                            } else {
                                AllBold(ele.childNodes[i], false);
                            }
                        } else {
                            if (!bool && ele.childNodes[i].childElementCount < ele.childNodes[i].childNodes.length) {
                                if (ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                                    ele.childNodes.forEach(node => {
                                        if (!(node.innerText === undefined && node.nodeValue === "" && node.innerText !== undefined)) {
                                            flag = false;
                                            return;
                                        }
                                    });
                                    if (flag) {
                                        AllBold(ele, false);
                                    }
                                }
                            } else {
                                AllBold(ele.childNodes[i], bool);
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Check the first index and the last index place
     * @returns {boolean}
     */
    const checkTwoSides = function () {
        if (style === 'italic')
            return getComputedStyle(window.getSelection().anchorNode.parentElement).fontStyle === 'italic'
                && getComputedStyle(window.getSelection().focusNode.parentElement).fontStyle === 'italic';
        if (style === 'bold')
            return getComputedStyle(window.getSelection().anchorNode.parentElement).fontWeight === '700'
                && getComputedStyle(window.getSelection().focusNode.parentElement).fontWeight === '700';
        if (style === 'underline')
            return getComputedStyle(window.getSelection().anchorNode.parentElement).textDecoration.toString().includes('underline')
                && getComputedStyle(window.getSelection().focusNode.parentElement).textDecoration.toString().includes('underline');
    };
    // determine whether the whole slected text is applied with this style
    return (checkTwoSides() && flag);
}