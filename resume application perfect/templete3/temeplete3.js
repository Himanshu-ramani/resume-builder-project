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
function addExp(){
  html=`<div class="container">
  <button onclick="deletec()">delete</button> 
  <input type="text" class="Company" placeholder="COMPANY" > <br>
  <input type="text" name="" id="" class="post" placeholder="Post">
  <br>
  <textarea name="" id="" cols="60" rows="2" placeholder="Experince"></textarea>
</div>`
document.getElementById("exp-container-form").insertAdjacentHTML("beforeend",html)
}
function deletec(){
  event.target.parentElement.style.display ="none"
}
////
function addedu(){
  html =` <div class="eduContainer">
  <button onclick="deletec()">delete</button>
  <input
    type="text"
    name=""
    class="university"
    id=""
    placeholder="UNIVERSITY"
  /><br />
  <input type="text" placeholder="DEGREE" class="university" />
  <br />
  <br/>
</div>`
document.getElementsByClassName("education")[0].insertAdjacentHTML("beforeend",html)
}
const page = document.getElementById("form")
const div = document.getElementsByClassName("btncont")[0]
function pdf(){
 let btnarry = document.getElementsByTagName("button")
 page.style.margin=" 0 auto"
 for (const btn of btnarry) {
   btn.style.display = "none"
 }
 div.style.display ="none"
 window.print()
 page.style.margin=" 10px auto"
 for (const btn of btnarry) {
  btn.style.display = "inline-block"
 }
 div.style.display ="flex"
}