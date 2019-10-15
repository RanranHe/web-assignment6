export function isBold() {
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement("div");
    el.append(range.cloneContents());

    const ancestorBold = function () {
        // console.log(el);
        // console.log(el.childElementCount);
        if (range.commonAncestorContainer.classList === undefined || range.commonAncestorContainer.classList.value === "") {
            if (el.childNodes.length === 1 && el.childElementCount === 0) return true;
            if (el.childElementCount < el.childNodes.length) {
                return false;
            } else {
                return true;
            }
        }
        else return !range.commonAncestorContainer.classList.contains('bold_false');
    };

    var bold = true;
    AllBold(el);
    function AllBold(ele) {
        // console.log(ele)
        if (ele.childElementCount !== 0) {
            for(let i = 0; i < ele.childNodes.length; i ++) {
                if (ele.childNodes[i].tagName !== undefined) {
                    // console.log(ele.childNodes[i].classList.contains('bold_false'))
                    // console.log(ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount)
                    // console.log(ele.childNodes[i].childElementCount)
                    if (ele.childNodes[i].classList.contains('bold_false') && ele.childNodes[i].childNodes.length > ele.childNodes[i].childElementCount) {
                        // console.log("false here")
                        bold = false;
                    }
                    if (ele.childNodes[i].parentElement.style.fontWeight === '400') {
                        // console.log("false herhhhhhh")
                        bold = false;
                    }
                    AllBold(ele.childNodes[i]);
                }
            }
            // ele.childNodes.every(node => {
            //     console.log(node)
            //     if (node.tagName !== undefined) {
            //         if (node.parentElement.style.fontWeight === '400') return false;
            //         if (node.classList.contains('bold_false') && node.childNodes.length > node.childElementCount) {
            //             console.log("false here")
            //             return false;
            //         }
            //         AllBold(node);
            //     }
            // });
        }
        // return bool;
    }

    // console.log(getComputedStyle(window.getSelection().anchorNode.parentElement).fontWeight !== '400');
    // console.log(getComputedStyle(window.getSelection().focusNode.parentElement).fontWeight !== '400');
    // console.log(bold);
    // console.log(ancestorBold() === true);

    return (getComputedStyle(window.getSelection().anchorNode.parentElement).fontWeight !== '400'
        && getComputedStyle(window.getSelection().focusNode.parentElement).fontWeight !== '400'
        && bold && ancestorBold())
}