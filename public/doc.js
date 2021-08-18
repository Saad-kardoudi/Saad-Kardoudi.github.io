document.onload = () => {
  let folders = document.getElementsByClassName("folder-holder");
  let left = folders[0].offsetLeft + folders[0].offsetWidth;
  for (let index = 1; index < folders.length; index++) {
    folders[index].style.left = `${left}px`;
    left = left + folders[0].offsetWidth;
  }
};
