const FolderHandler = () => {
  if (document.getElementsByClassName("folder-holder")) {
    let folders = document.getElementsByClassName("folder-holder");
    let left = folders[0].offsetLeft + folders[0].offsetWidth;
    folders[0].style.top = "50px";
    for (let index = 1; index < folders.length; index++) {
      folders[index].style.left = `${left}px`;
      folders[index].style.top = "50px";
      left = left + folders[index].offsetWidth;
    }
  }
};
export default FolderHandler;
