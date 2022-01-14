const side_marg = () => {
  let wide = document.querySelector(".side-bar").offsetWidth;
  document.querySelector(".main").style.marginLeft = `${wide}px`;
};
const right_side_marg = () => {
  let wide = document.querySelector(".right-sidebar").offsetWidth;
  document.querySelector(".main").style.marginRight = `${wide + 20}px`;
};
const side_marg_icon = () => {
  let wide = document.querySelector(".bx").offsetWidth;
  document.querySelector(".side-bar").style.width = `${wide}px`;
  document.querySelector(".main").style.marginLeft = `${wide + 40}px`;
};
const open_side = () => {
  if (document.querySelector(".side-bar").style.width != `auto`) {
    document.querySelector(".side-bar").style.width = `auto`;
    side_marg();
  } else {
    side_marg_icon();
  }
};
function setProgress() {
  var circleT = document.getElementsByClassName("progress-ring__circle");
  for (let index = 0; index < circleT.length; index++) {
    const circle = circleT[index];
    var percent = parseInt(circle.dataset.percent);
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
}

//const input = document.querySelector("input");
//setProgress(input.value);
window.onload = () => {
  setTimeout(() => {
    setProgress();
    side_marg_icon();
    right_side_marg();
  }, 50);
};
