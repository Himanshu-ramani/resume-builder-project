const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
// const imgtemp = document.getElementById("imgtemp");
imginput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  let tempUrl = URL.createObjectURL(e.target.files[0]);
  // console.log(tempUrl);
  imgf.setAttribute("src", tempUrl);

});


////////
const tx = document.getElementsByTagName("textarea");
function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}


for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }
  function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }



const downLoadPdf =  function (e) {
    // e.preventDefault();
  
    let node = document.getElementById("page");
    // node.style.display ="block"
    node.style.margin = 0 
  
    html2pdf(node,{
      margin:       0,
      filename:     'myresume.pdf',
      image:        { type: 'jpeg', quality: 4 },
      html2canvas:  {PPI :96, letterRendering:true, scale: 3},
      jsPDF:        {  format: 'a4', orientation:"portrait"}
    })
    node.style.margin ="auto"
}