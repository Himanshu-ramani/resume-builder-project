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
///////////////////////////////////
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
  function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }
//////////////////////
const input = document.getElementsByTagName("input");
for (const ele of input) {
  ele.addEventListener(
    "input",
    (event) => {
      (event.target.style.width = event.target.scrollWidth + "px")}
  );
}
/////////
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
}
///////////
 const btnAddExp = document.getElementById("full-exp")
 const expContainer = document.getElementById("exp-container")
 btnAddExp.addEventListener("click",function(){
   let html =` <div class="container" id="cont"> <input type="number" class="duration" placeholder="Duration"  min="1900" max="2099">,<input type="text" class="company" placeholder="Company" ><button class="btn" id="sub" onclick="subCompany()">-</button>
   <br>
   <input type="text" placeholder="Post" class="pot-company">
   <ul>
     <button class="btn" onclick="addli()">+</button>
     <li><textarea  name="" id="" class="work-experince" cols="40" rows="1" placeholder="Work Experince" oninput="auto_grow(this)"></textarea><button class="btn" id="subli" onclick="subli()">-</button></li>
   </ul>
   </div>
   <br>`
   expContainer.insertAdjacentHTML("beforeend",html)
 })

 function subCompany(){
   btn = event.target.parentElement.style.display ="none"
 }
 function addli(){
   let html = ` <li><textarea name="" id="" class="work-experince" cols="40" rows="1" placeholder="Work Experince" oninput="auto_grow(this)"></textarea><button class="btn" id="subli" onclick="subli()">-</button></li>`
   event.target.parentElement.insertAdjacentHTML("beforeend",html)
 }
 function subli(){
  event.target.parentElement.style.display="none"
 }
////////skill///
function addskill(){
  html=` <li><textarea name="" id="" cols="40" placeholder="skills" rows="1" oninput="auto_grow(this)"></textarea><button class="btn" onclick="subli()">-</button></li>`
 document.getElementById("skill-container").insertAdjacentHTML("beforeend",html)
}
//////////add sub collage
function addcollage(){
  html =`<div class="container">
  <input type="number" class="duration" min="1900" max="2099" placeholder="Duration">,<input type="text" class="company" placeholder="University" ><button class="btn" onclick="subcollage()">-</button>
  <br>
  <input type="text" placeholder="Degree" class="pot-company">
  <ul>
    <button class="btn" onclick="addstudy()">+</button>
    <li><textarea onchange="OnInput()" name="" id="" class="work-experince" cols="40" rows="1" placeholder="Work Experince" oninput="auto_grow(this)"></textarea><button class="btn" onclick="subli()">-</button></li>
  </ul>
</div>
<br>`
document.getElementsByClassName("eduction")[0].insertAdjacentHTML("beforeend",html)
}
function addstudy(){
  html =`<li><textarea onchange="OnInput()" name="" id="" class="work-experince" cols="40" rows="1" placeholder="Study" oninput="auto_grow(this)"></textarea><button class="btn" onclick="subli()">-</button></li>`
  event.target.parentElement.insertAdjacentHTML("beforeend",html)
}
function subcollage(){
  event.target.parentElement.style.display = "none"
}

////
//pdf
document.getElementById("btn-save").addEventListener("click",function(){
  
const btnArry =  document.getElementsByTagName("button")
for (const ele of btnArry) {
  ele.style.display="none"
}
  window.print()
  for (const ele of btnArry) {
    ele.style.display="inline-block"
  }
})