// const btnskill = document.querySelector(".btnskill");
// const btndiv = document.querySelector(".btndiv");
const btnli = document.querySelector(".btnli");
const skilli = document.querySelector(".skillli");
const exprincediv = document.querySelector(".experince");
const btnedu = document.querySelector(".btnedu");
const educontainer = document.querySelector(".eduction");
const ulc = document.querySelector(".ulc");
// console.log("hi");
//////////////////////////////////////////////
// setting Image
///////////////////////////////////////////////
const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
const imgtemp = document.getElementById("imgtemp");
imginput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  let tempUrl = URL.createObjectURL(e.target.files[0]);
  // console.log(tempUrl);
  imgf.setAttribute("src", tempUrl);
  imgtemp.setAttribute("src", tempUrl);
});

//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//
//
////////////////////////////////////////////////////
/////////add collage////////////////////////////////
////////////////////////////////////////////////////
const btnEducation = document.getElementById("education-btn");
let container = document.querySelector(".educontainer");
btnEducation.addEventListener("click", function () {
  let html = ` <input type="text" placeholder="your collage" class="collages" id="collage-form">
  <input type="text" placeholder="Your degree" class="collages" id="collage-form">`;

  container.insertAdjacentHTML("beforeend", html);
});

//////////////////////////////////
////// add and sub skill//////
const addBtnSkill = document.querySelector(".add-skill-btn");
const subBtnSkill = document.querySelector(".sub-skill-btn");
const skillConatiner = document.getElementById("skill-container");
addBtnSkill.addEventListener("click", function () {
  htmls = ` <li><input type="text" name="" id="skill-form" class="lp" placeholder="skill"></li>`;
  skillConatiner.insertAdjacentHTML("beforeend", htmls);
});
// subBtnSkill.addEventListener("click", function () {
//   skillConatiner.appendChild(-1).removeChild();
// });
//////////////////////////
// const subbtn = document.querySelector(".btnli");
// const expSubCont = document.querySelector(".ulc");
// subbtn.addEventListener("click", function () {
//   const lihtml = ` <li class=''><input type="text" name="" id="experince-form" placeholder="work expeince"></li>`;
//   expSubCont.insertAdjacentHTML("beforeend", lihtml);
// });
////////////////////////////////////////////
const experinceBtn = document.querySelector(".btndiv");
const experinceConatiner = document.querySelector(".expconatiner");
experinceBtn.addEventListener("click", function () {
  const experinceHtml = `  <button class="exp-btn2 experince-btn" onclick = "contentTwo()">+</button> <h2>
  <input type="text" placeholder="Company" id="company-form1" class="h2" >
  <span class="post ">
  <input type="text" name="" class="class-com post" id="company-post-form1" placeholder="your post">
</span>
</h2>
<p class=""><input type="text" id="date-form1" placeholder="duration" class="class-com"></p>
 <ul class="ulc">
  <li class=''>
    <textarea name="" id="work-exp-form1" cols="30" rows="2"  class='class-com' placeholder="xyz"></textarea>
  </li>
</ul>`;
  let temphtml1 = `
<h2 class='company' id="company-temp1" >Randelo&co.,</h2><span class="company" id="company-post-temp1">Marketing Assistant</span>
<p class="company" id="date-temp1">JUN.,2019-JAN.2020</p>
<ul>
  <li class='' id="work-exp-temp1">Monitored ongoing marketing campaigns.</li>

</ul>`;

  tempcontanier.insertAdjacentHTML("beforeend", temphtml1);
  experinceConatiner.insertAdjacentHTML("beforeend", experinceHtml);

  document.querySelector(".btndiv").style.display = "none";
});
const tempcontanier = document.getElementById("id");
function contentTwo() {
  let html2 = ` <button id="btn2" class="exp-btn2 experince-btn" onclick = "contentthree()">+</button> <h2>
  <input type="text" placeholder="Company" id="company-form2" class="h2">
  <span class="post ">
  <input type="text" name="" class="class-com post" id="company-post-form2" placeholder="your post">
</span>
</h2>
<p class=""><input type="text" id="date-form2" placeholder="duration" class="class-com"></p>
 <ul class="ulc">
  <li class=''>
    <textarea name="" id="work-exp-form2" cols="30" rows="2"  class='class-com' placeholder="xyz"></textarea>
  </li>
</ul>`;
  let temphtml2 = `
  <h2 class='company' id="company-temp2" >Randelo&co.,</h2><span class="company" id="company-post-temp2">Marketing Assistant</span>
  <p class="company" id="date-temp2">JUN.,2019-JAN.2020</p>
  <ul>
    <li class='' id="work-exp-temp2">Monitored ongoing marketing campaigns.</li>

  </ul>`;

  tempcontanier.insertAdjacentHTML("beforeend", temphtml2);
  experinceConatiner.insertAdjacentHTML("beforeend", html2);
  document.querySelector(".exp-btn2").style.display = "none";
}
function contentthree() {
  let html3 = `  <h2>
  <input type="text" placeholder="Company" id="company-form3" class="h2">
  <span class="post ">
  <input type="text" name="" class="class-com post" id="company-post-form3" placeholder="your post">
</span>
</h2>
<p class=""><input type="text" id="date-form3" placeholder="duration" class="class-com"></p>
 <ul class="ulc">
  <li class=''>
    <textarea name="" id="work-exp-form3" cols="30" rows="2"  class='class-com' placeholder="xyz"></textarea>
  </li>
</ul>`;
  let temphtml3 = `
  <h2 class='company' id="company-temp3" >Randelo&co.,</h2><span class="company" id="company-post-temp3">Marketing Assistant</span>
  <p class="company" id="date-temp3">JUN.,2019-JAN.2020</p>
  <ul>
    <li class='' id="work-exp-temp3">Monitored ongoing marketing campaigns.</li>

  </ul>`;

  tempcontanier.insertAdjacentHTML("beforeend", temphtml3);
  experinceConatiner.insertAdjacentHTML("beforeend", html3);
  document.querySelector("#btn2").style.display = "none";
}
////////////////////////////////////////

///////////////////////////////////////
///////////////////////////////////////
///equalling value
const arry1 = document.getElementsByClassName("h2");
const previewBtn = document.getElementById("btn-form");

previewBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("bigname-temp").innerHTML =
    document.getElementById("bigname-form").value;
  //post
  document.getElementById("post-temp").innerHTML =
    document.getElementById("post-form").value;

  //about
  document.getElementById("about-temp").innerHTML =
    document.getElementById("about-form").value;
  //contact
  document.getElementById("address-temp").innerHTML =
    document.getElementById("address-form").value;
  //
  document.getElementById("email-temp").innerHTML =
    document.getElementById("email-form").value;
  //
  document.getElementById("number-temp").innerHTML =
    document.getElementById("number-form").value;

  ///add collage
  // let degree = document.getElementsByClassName("degree");
  let collage = document.getElementsByClassName("collages");
  // console.log(collage);
  let str = ``;
  for (let e of collage) {
    // console.log(e.value);
    str = str + `<p>${e.value}</p>`;
    document.getElementById("collage-temp").innerHTML = str;
  }
  //
  const skillForm = document.getElementsByClassName("lp");
  let skillt = ``;
  for (let s of skillForm) {
    skillt = skillt + ` <li>${s.value}</li>`;
    document.getElementById("skill-temp").innerHTML = skillt;
  }
  // company
  document.getElementById("company-temp").innerHTML =
    document.getElementById("company-form").value;
  //
  document.getElementById("company-post-temp").innerHTML =
    document.getElementById("company-post-form").value;
  //
  document.getElementById("date-temp").innerHTML =
    document.getElementById("date-form").value;
  //
  document.getElementById("work-exp-temp").innerHTML =
    document.getElementById("work-exp-form").value;
  //
  //company2
  if (arry1.length == 2) {
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //
    document.getElementById("company-post-temp1").innerHTML =
      document.getElementById("company-post-form1").value;
    //
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
  }
  if (arry1.length == 3) {
    //
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //
    document.getElementById("company-post-temp1").innerHTML =
      document.getElementById("company-post-form1").value;
    //
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
    ///////
    document.getElementById("company-temp2").innerHTML =
      document.getElementById("company-form2").value;
    //
    document.getElementById("company-post-temp2").innerHTML =
      document.getElementById("company-post-form2").value;
    //
    document.getElementById("date-temp2").innerHTML =
      document.getElementById("date-form2").value;
    //
    document.getElementById("work-exp-temp2").innerHTML =
      document.getElementById("work-exp-form2").value;
  }
  //
  if (arry1.length == 4) {
    //
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //
    document.getElementById("company-post-temp1").innerHTML =
      document.getElementById("company-post-form1").value;
    //
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
    ///////
    document.getElementById("company-temp2").innerHTML =
      document.getElementById("company-form2").value;
    //
    document.getElementById("company-post-temp2").innerHTML =
      document.getElementById("company-post-form2").value;
    //
    document.getElementById("date-temp2").innerHTML =
      document.getElementById("date-form2").value;
    //
    document.getElementById("work-exp-temp2").innerHTML =
      document.getElementById("work-exp-form2").value;
    //////////////////
    document.getElementById("company-temp3").innerHTML =
      document.getElementById("company-form3").value;
    //
    document.getElementById("company-post-temp3").innerHTML =
      document.getElementById("company-post-form3").value;
    //
    document.getElementById("date-temp3").innerHTML =
      document.getElementById("date-form3").value;
    //
    document.getElementById("work-exp-temp3").innerHTML =
      document.getElementById("work-exp-form3").value;
  }
  ///////////
  document.getElementById("form").style.display = "none";
  document.getElementById("page").style.display = "block";
  document.querySelector(".pdf").style.display = "block";
  document.getElementById("btn-back").style.display = "block";
});
//btn back
const backbtn = document.getElementById("btn-back");
backbtn.addEventListener("click", function () {
  document.getElementById("form").style.display = "block";
  document.getElementById("page").style.display = "none";
  backbtn.style.display = "none";
  document.getElementById("pdf-btn").style.display = "none";
});
//pdf-btn
document.getElementById("pdf-btn").addEventListener("click", function () {
  document.getElementById("pdf-btn").style.display = "none";
  backbtn.style.display = "none";
  window.print();
});
