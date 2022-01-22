const btnPdf = document.getElementById("pdf-btn");
const presentc = document.getElementsByClassName("present");
const addmore = document.getElementById("add-more");
const presentb = document.getElementsByClassName("box");
const tx = document.getElementsByTagName("textarea");
const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
const overlay = document.getElementsByClassName("overlay")[0];
const Close = document.getElementsByClassName("check-feild")[0];
const addfeild = document.getElementById("add-more");
const addressp = document.getElementById("addressp");
const addressB = document.getElementById("addressB");
const emailCheckBox = document.getElementById("Email-check");
const emailp = document.getElementById("emailp");
const numberCheckBox = document.getElementById("number-check");
const numberp = document.getElementById("numberp");
const websiteCheckBox = document.getElementById("website-check");
const websitep = document.getElementById("websitep");
const linkedinCheckBox = document.getElementById("linkedin-check");
const linkedinp = document.getElementById("linkedinp");
const twitterCheckBox = document.getElementById("twitter-check");
const twitterp = document.getElementById("twitterp");
const githubCheckBox = document.getElementById("github-check");
const githubp = document.getElementById("githubp");
const facebookCheckBox = document.getElementById("facebook-check");
const facebookp = document.getElementById("facebookp");
const instagramCheckBox = document.getElementById("instagram-check");
const instagramp = document.getElementById("instagramp");
const experinceContent = document.querySelector("#exp-cont").outerHTML;
const page = document.getElementById("page");
const heading = document.getElementsByClassName("heading");
const edcutionContainer = document.getElementsByClassName("eduction")[0];
const edcution =
  document.getElementsByClassName("edcution-content")[0].outerHTML;
const input = document.getElementsByTagName("input");
///////////
function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

//////////////////////////////
///input photo///

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
const imgShow = document.getElementById("img-lable");
function showImg() {
  imgShow.style.display = "inline-block";
}
function hideImg() {
  imgShow.style.display = "none";
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
  element.style.height = element.scrollHeight + "px";
}
////

addfeild.addEventListener("click", function () {
  overlay.style.display = "inherit";
  Close.style.display = "grid";
});
document.getElementById("close").addEventListener("click", function () {
  overlay.style.display = "none";
  Close.style.display = "none";
});
///////////////

function checkedfeild() {
  if (addressB.checked == true) {
    addressp.style.display = "inherit";
  } else {
    addressp.style.display = "none";
  }
  if (emailCheckBox.checked == true) {
    emailp.style.display = "inherit";
  } else {
    emailp.style.display = "none";
  }
  if (numberCheckBox.checked == true) {
    numberp.style.display = "inherit";
  } else {
    numberp.style.display = "none";
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display = "inherit";
  } else {
    websitep.style.display = "none";
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display = "inherit";
  } else {
    websitep.style.display = "none";
  }
  if (twitterCheckBox.checked == true) {
    twitterp.style.display = "inherit";
  } else {
    twitterp.style.display = "none";
  }
  if (linkedinCheckBox.checked == true) {
    linkedinp.style.display = "inherit";
  } else {
    linkedinp.style.display = "none";
  }
  if (githubCheckBox.checked == true) {
    githubp.style.display = "inherit";
  } else {
    githubp.style.display = "none";
  }
  if (facebookCheckBox.checked == true) {
    facebookp.style.display = "inherit";
  } else {
    facebookp.style.display = "none";
  }
  if (instagramCheckBox.checked == true) {
    instagramp.style.display = "inherit";
  } else {
    instagramp.style.display = "none";
  }
}
///////////////////

function setFontFirst() {
  page.style.fontFamily = "'Cookie'";

}
function setDefaultFont() {
  page.style.fontFamily = `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol"`;

}
function setFontSecond() {
  page.style.fontFamily = `'Josefin Sans'`;

}


function addExperince() {
  document
    .getElementsByClassName("exp-container")[0]
    .insertAdjacentHTML("beforeend", experinceContent);
}

///

function setTitleDefault() {
  heading.forEach((element) => {
    element.style.textTransform = "capitalize";
  });
}

function setTitleUpperCase() {
  heading.forEach((element) => {
    element.style.textTransform = "uppercase";
  });
}
function addEduction() {
  console.log();
  edcutionContainer.insertAdjacentHTML("beforeend", edcution);
}

const projectConatiner = document.getElementsByClassName("project")[0];
const project = document.getElementById("project-content").outerHTML;
function addProject() {
  projectConatiner.style.display = "inherit";
  projectConatiner.insertAdjacentHTML("beforeend", project);
}

//////////////////////////////////
function present() {
  // event.preventDefault()
  if (event.target.checked) {
    span = event.target.previousElementSibling;
    console.log(span);
    span.innerHTML = "Present";
  } else {
    html = document.getElementById("month");
    span = event.target.previousElementSibling.previousElementSibling;
    console.log(span);
    // span.innerHTML=html
  }
}
////////

///////////////

btnPdf.addEventListener("click", function (e) {
  e.preventDefault();

  // page.style.margin = 0;

  // window.print();
  // page.style.margin = "30px auto";
  var element = document.getElementById('page');
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
});

//////////////////////////////////////////

for (const ele of input) {
  ele.addEventListener(
    "input",
    (event) => (event.target.style.width = event.target.scrollWidth + "px")
  );
}
