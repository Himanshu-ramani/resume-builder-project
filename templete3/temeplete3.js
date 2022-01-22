

const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
const imgtemp = document.getElementById("form-profile");
imginput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  let tempUrl = URL.createObjectURL(e.target.files[0]);
  // console.log(tempUrl);
  imgf.setAttribute("src", tempUrl);
  imgtemp.setAttribute("src", tempUrl);
});
////////////////////////////////
//////////////////
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
////////////
///input
const input = document.getElementsByTagName("input");
for (const ele of input) {
  ele.addEventListener(
    "input",
    (event) => {
      (event.target.style.width = event.target.scrollWidth + "px")}
  );
}

const edcutionContainer = document.getElementsByClassName("education")[0]
const eduction = document.getElementsByClassName("eduContainer")[0].outerHTML
function addEduction() {

  edcutionContainer.insertAdjacentHTML("beforeend", eduction);
}
const experinceContent = document.getElementsByClassName("container")[0].outerHTML
function addExperince() {
  document
    .getElementsByClassName("experince")[0]
    .insertAdjacentHTML("beforeend", experinceContent);
}

// const page = document.getElementById("form")

  const btnPdf = document.getElementById("pdf-btn");
  btnPdf.addEventListener("click", function (e) {
    e.preventDefault();
  
  page.style.margin = 0
  
  window.print()
  page.style.margin = "30px auto"
  
  });
  const imgShow = document.getElementById("img-label")
function showImg(){

  imgShow.style.display = "inline-block"
}
function hideImg(){
  imgShow.style.display = "none"
}