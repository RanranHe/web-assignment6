export function isStyle(style) {

    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    let flag = true;
    if (range.commonAncestorContainer.classList === undefined || !range.commonAncestorContainer.classList.contains(style)) {
        if (el.childElementCount === 0) {
            AllBold(el, true);
        } else {
            if (el.childElementCount < el.childNodes.length) {
                el.childNodes.forEach(node => {
                    if (!((node.innerText === undefined && node.nodeValue === "") || node.innerText !== undefined)) {
                        flag = false;
                    }
                });
                if (flag) {
                    AllBold(el, true);
                }
            } else {
                AllBold(el, false);
            }
        }
    } else {
        AllBold(el, !range.commonAncestorContainer.classList.contains(style + '_false'));
    }

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
    return (checkTwoSides() && flag);
}