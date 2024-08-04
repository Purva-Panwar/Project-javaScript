document.querySelector(".button").onclick = function () {
  if (document.querySelector("#input").value.length&&document.querySelector("#input2").value.length == 0) {
    alert("please fill  task");
  } else {
    document.querySelector(".box").innerHTML +=
     `<div class="task">
            <span id="name">Time:-
            ${document.querySelector("#input").value}
            </br>Task:-
            ${document.querySelector("#input2").value}
            </span>
            <button class="delete">
            <img src="del.jpg">
            </button>
            
            </div>`;
            var del=document.querySelectorAll(".delete");
            for(var i=0;i<del.length;i++){
              del[i].onclick=function(){
                this.parentNode.remove();
              }
            }

            var com=document.querySelectorAll(".task")
            for(var i=0;i<com.length;i++){
              com[i].onclick=function(){
                this.classList.toggle('completed');
              }
            }
            document.querySelector("#input").value=""
            document.querySelector("#input2").value=""
  }
}
