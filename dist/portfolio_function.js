var header = document.querySelector('#header');
var headerName = document.querySelector('#header .name');
var headerDiv = document.querySelector("#headerLinks");


window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  if (document.documentElement.scrollTop > 45 || document.body.scrollTop > 45) {
    header.style.height = "10vh";
    header.style.flexDirection = "row";
    header.style.opacity = "0.5";

    headerName.style.fontSize = '100%';
    headerName.style.alignSelf = 'flex-start';
    headerName.style.width = '50%';

    headerDiv.style.fontSize = '80%';
    headerDiv.style.width = '50%';


  } else {
    header.style.height = "100vh";
    header.style.flexDirection = "column";
    header.style.opacity = "1";


    headerName.style.fontSize = '5vh';
    headerName.style.alignSelf = 'center';
    headerName.style.width = '100%';

    headerDiv.style.alignSelf = 'center';
    headerDiv.style.fontSize = '100%';
    headerDiv.style.width = '100%';

  }
}

headerName.addEventListener('click', (function(){window.scroll({top: 0, left:0, behavior:'smooth'})}));
