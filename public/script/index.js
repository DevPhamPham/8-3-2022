window.onload = function () {
  setTimeout(function () {
    document.getElementById("universe").classList.add("opendis");
  }, 1000);
  setTimeout(function () {
    alert("Press F11 key to make it more vivid!");
    document.querySelector("#bodymodal div").classList.add("textfromright");
    document.querySelector("#headermodal>div").classList.add("textfromright");
    init();
  }, 2000);
};

function init() {
    document.getElementById("clickMe").onclick = function (e) {
        this.classList.add("closedis");
        document.getElementById("universe").classList.add("closedis");
        document.getElementById("firework").classList.add("opendis");
        document.getElementById("firework").classList.add("backgroundFireword")
        setTimeout(function () {
            RunFireWork();
        },450)
    }
    //endmodal
    document.querySelector("#endmodal").onclick = function () {
      document.getElementById("framemodal").classList.add("animationclose");
      setTimeout(function (){
        document.getElementById("modal").classList.add("closedis"); 
        setTimeout(function () {
          document.querySelector("#clickMe").classList.add("animationopen");
          document.querySelector("#clickMe").classList.remove("closedis");
        },250)
      },600)
    }
}