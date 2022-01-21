// const { default: jsPDF } = require("jspdf");

const tx = document.getElementsByTagName("textarea");
function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

//////////////////////////////
///input photo///
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

////////////
//img toggle//
const imgShow = document.getElementById("img-lable")
function showImg(){
  imgShow.style.display = "inline-block"
}
function hideImg(){
  imgShow.style.display = "none"
}
///////////////////////////
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
////
const overlay = document.getElementsByClassName("overlay")[0]
const Close =document.getElementsByClassName("check-feild")[0]
const addfeild = document.getElementById("add-more")
addfeild.addEventListener("click",function(){
  overlay.style.display = "inherit"
 Close.style.display ="grid"
})
document.getElementById("close").addEventListener("click",function(){
  overlay.style.display = "none"
  Close.style.display ="none"
})
///////////////

const addressp =document.getElementById("addressp")
const addressB =document.getElementById("addressB")
const emailCheckBox =document.getElementById("Email-check")
const emailp =document.getElementById("emailp")
const numberCheckBox =document.getElementById("number-check")
const numberp =document.getElementById("numberp")
const websiteCheckBox =document.getElementById("website-check")
const websitep =document.getElementById("websitep")
const linkedinCheckBox =document.getElementById("linkedin-check")
const linkedinp =document.getElementById("linkedinp")
const twitterCheckBox =document.getElementById("twitter-check")
const twitterp =document.getElementById("twitterp")
const githubCheckBox =document.getElementById("github-check")
const githubp =document.getElementById("githubp")
const facebookCheckBox =document.getElementById("facebook-check")
const facebookp =document.getElementById("facebookp")
const instagramCheckBox =document.getElementById("instagram-check")
const instagramp =document.getElementById("instagramp")
function checkedfeild(){
  if (addressB.checked == true) {
    addressp.style.display ="inherit"
  } else {
    addressp.style.display ="none"
  }
  if (emailCheckBox.checked == true) {
    emailp.style.display ="inherit"
  } else {
    emailp.style.display ="none"
  }
  if (numberCheckBox.checked == true) {
    numberp.style.display ="inherit"
  } else {
    numberp.style.display ="none"
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display ="inherit"
  } else {
    websitep.style.display ="none"
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display ="inherit"
  } else {
    websitep.style.display ="none"
  }
  if (twitterCheckBox.checked == true) {
    twitterp.style.display ="inherit"
  } else {
    twitterp.style.display ="none"
  }
  if (linkedinCheckBox.checked == true) {
    linkedinp.style.display ="inherit"
  } else {
    linkedinp.style.display ="none"
  }
  if (githubCheckBox.checked == true) {
    githubp.style.display ="inherit"
  } else {
    githubp.style.display ="none"
  }
  if (facebookCheckBox.checked == true) {
    facebookp.style.display ="inherit"
  } else {
    facebookp.style.display ="none"
  }
  if (instagramCheckBox.checked == true) {
    instagramp.style.display ="inherit"
  } else {
    instagramp.style.display ="none"
  }
}
///////////////////
const experinceContent = document.querySelector("#exp-cont").outerHTML
const page = document.getElementById("page")

function setFontFirst(){
  page.style.fontFamily = "'Cookie'"
  console.log(page);
}
function setDefaultFont(){
  page.style.fontFamily = `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol"`
  console.log(page);
}
function setFontSecond(){
  page.style.fontFamily = `'Josefin Sans'`
  console.log(page);
}
function clear(event){
  console.log("hi");
  console.log(event.target);
}





function addExperince(){
  document.getElementsByClassName('exp-container')[0].insertAdjacentHTML("beforeend",experinceContent)
}


///////////////
const btnPdf = document.getElementById("pdf-btn");
const presentc = document.getElementsByClassName("present")
const addmore = document.getElementById("add-more")
const presentb = document.getElementsByClassName("box")

btnPdf.addEventListener("click", function (e) {
  e.preventDefault();
  page.style.margin = 0

window.print()
page.style.margin = "30px auto"
});

//////////////////////////////////////////
const input = document.getElementsByTagName("input");
for (const ele of input) {
  ele.addEventListener(
    "input",
    (event) => (event.target.style.width = event.target.scrollWidth + "px")
  );
}

