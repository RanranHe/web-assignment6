export function isStyle(style) {

    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    console.log(el)
    var flag = true;
    if (range.commonAncestorContainer.classList === undefined || !range.commonAncestorContainer.classList.contains(style)) {
        if (el.childElementCount === 0) {
            AllBold(el, true);
        } else {
            if (el.childElementCount < el.childNodes.length) {
                el.childNodes.forEach(node => {
                    if (!((node.innerText === undefined && node.nodeValue === "") || node.innerText !== undefined)) {
                        flag = false;
                    }
                    console.log(flag);

                });
                if (flag) {
                    AllBold(el, true);
                }
            } else {
                console.log("here")
                AllBold(el, false);
            }
        }

    } else {

        AllBold(el, !range.commonAncestorContainer.classList.contains(style+'_false'));
    }

    function AllBold(ele, bool) {
        if (!bool && ele.childElementCount === 0 && ele.childNodes.length !== 0) {
            console.log("here")
            flag = false;
            return;
        }
        if (ele.childElementCount !== 0) {
            for (let i = 0; i < ele.childNodes.length; i++) {
                console.log()
                if (ele.childNodes[i].tagName !== undefined) {
                    if (ele.childNodes[i].classList.contains(style)) {
                        console.log(bool)
                        AllBold(ele.childNodes[i], true);
                    } else {
                        console.log(bool)
                        if (ele.childNodes[i].classList.contains(style+'_false')) {
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
                            console.log(ele)
                            console.log(ele.childNodes[i])
                            console.log(ele.childElementCount)
                            console.log(ele.childNodes)
                            console.log(bool)
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
    // console.log(getComputedStyle(window.getSelection().anchorNode.parentElement).textDecoration.toString().includes('underline'))
    // console.log(checkTwoSides())
    return (checkTwoSides() && flag);
}