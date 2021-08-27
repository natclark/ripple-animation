`use strict`;
const r = (e) => {
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;

    width >= height ? (height = width) : (width = height);

    const ripple = document.createElement(`span`);
    e.target.appendChild(ripple);

    console.log(e.target.pageY, e.target.offsetLeft);

    ripple.style = `
        height: ${height}px !important;
        left: ${e.pageX - e.target.offsetLeft - width / 2}px !important;
        top: ${e.pageY - e.target.offsetTop - height / 2}px !important;
        width: ${width}px !important;
    `.trim();

    ripple.classList.add(`ripple`);
    setTimeout(() => e.target.removeChild(ripple), 500);
};
document.querySelectorAll(`button`).forEach((button) => {
    button.addEventListener(`click`, r);
});