//Make the DIV element draggagle:
function initializeDrag() {
    dragElement(document.getElementById("mydiv"));
    dragElement(document.getElementById("mydiv2"));
    dragElement(document.getElementById("mydiv3"));
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    elmnt.style.position = "absolute";
    
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	
    /*mis calculos*/
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    const container1Offset = container1.offsetLeft + container1.offsetWidth;
    const container2Offset = container2.offsetLeft + container2.offsetWidth;
    const container3Offset = container3.offsetLeft + container3.offsetWidth;

    switch(true) {
        case elmnt.offsetLeft > container2Offset:
            container3.appendChild(elmnt);
            break;
        case elmnt.offsetLeft > container1Offset:
            container2.appendChild(elmnt);
            break;
        default:
            container1.appendChild(elmnt);
            break;
    }

  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    const myDiv = document.getElementById("mydiv");
    const myDiv2 = document.getElementById("mydiv2");
    const myDiv3 = document.getElementById("mydiv3");
    myDiv.style.position = "initial";
    myDiv2.style.position = "initial";
    myDiv3.style.position = "initial";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
