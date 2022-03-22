let wide;
const side_marg_icon = () => {
  let wide = document.querySelector(".bx").offsetWidth;
  document.querySelector(".side-bar").style.width = `${wide}px`;
};
const open_side = () => {
  if (
    document.querySelector(".side-bar").style.width ==
    `${document.querySelector(".bx").offsetWidth}px`
  ) {
    //document.querySelector(".side-bar").style.width = ` auto `;
    //wide = document.querySelector(".side-bar").offsetWidth;
    document.querySelector(".side-bar").style.width = `${wide}px`;
  } else {
    side_marg_icon();
  }
};

const hi = () => {
  console.log("hii");
  document.querySelector(".side-bar").style.width = ` auto `;
  wide = document.querySelector(".side-bar").offsetWidth;
};

window.onload = () => {
  setTimeout(() => {
    hi();
    side_marg_icon();
  }, 50);
};
