let inputBx= document.querySelector("#inputBx");
let list= document.querySelector("#list");

inputBx.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        addItem(this.value);
        this.value="";
    }
  });

  let addItem=(inputBx) => {
    // limiting 29 characters from string
    var str = inputBx;
if(str.length > 29) str = str.substring(0,29);
    let listItem= document.createElement("li");
    listItem.innerHTML = `${str}<i></i>`;

    listItem.addEventListener("click",function (param) {
    this.classList.toggle("done");
      });

listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove();
});

     list.appendChild(listItem);
  }