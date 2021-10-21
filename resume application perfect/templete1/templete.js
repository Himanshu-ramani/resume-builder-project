const btnskill = document.querySelector(".btnskill");
const btndiv = document.querySelector(".btndiv");
const btnli = document.querySelector(".btnli");
const skilli = document.querySelector(".skillli");
const exprincediv = document.querySelector(".experince");
const btnedu = document.querySelector(".btnedu");
const educontainer = document.querySelector(".eduction");
const ulc = document.querySelector(".ulc");
// console.log("hi");

//add skill list
btnskill.addEventListener("click", function (e) {
  e.preventDefault();
  let newskill = `<li class=''><input type="text" name="" id="" placeholder="skill"></li>`;
  skilli.insertAdjacentHTML("beforeend", newskill);
  // console.log(, skilli);
  console.log("btnskill");
});

//add expdiv
btndiv.addEventListener("click", function (e) {
  e.preventDefault();
  const divhtml = `<div class="expconatiner">
  <h2 class=''><input type="text" placeholder="Company" class="h2"><span class="post "><input type="text" name="" class="post" id="" placeholder="your post"></span></h2>
  <p class="date "><input type="text" placeholder="duration"></p>
  <ul>
  <li class=''><input type="text" name="" id="" placeholder="work expeince"></li>

  </ul>
  </div>`;
  exprincediv.insertAdjacentHTML("beforeend", divhtml);

  console.log("btndiv");
});
//add btnli
btnli.addEventListener("click", function (e) {
  e.preventDefault();
  ulc.insertAdjacentHTML(
    "beforeend",
    ` <li class=''><input type="text" name="" id="" placeholder="work expeince"></li>`
  );
  console.log("btnli");
});
///
btnedu.addEventListener("click", function (e) {
  e.preventDefault();
  educontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="educontainer">
  <p class=''>
  
    &nbsp;&nbsp;<input type="text" placeholder="your collage" id="collage-form">

  </p>
  <p>
    &nbsp;&nbsp;<input type="text" placeholder="Your degree" id="degree-form">
  </p>
</div>`
  );
});

///////////////////////////////////////
///////////////////////////////////////
///equalling value

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
  //
  document.getElementById("collage-temp").innerHTML =
    document.getElementById("collage-form").value;
  //
  document.getElementById("degree-temp").innerHTML =
    document.getElementById("degree-form").value;
  //
  document.getElementById("skill-temp").innerHTML =
    document.getElementById("skill-form").value;
  //
  document.getElementById("date-temp").innerHTML =
    document.getElementById("date-form").value;
  //
  document.getElementById("company-temp").innerHTML =
    document.getElementById("company-form").value;
  //
  document.getElementById("company-post-temp").innerHTML =
    document.getElementById("company-post-form").value;
  //
  document.getElementById("post-temp").innerHTML =
    document.getElementById("post-form").value;
  //
  document.getElementById("experince-temp").innerHTML =
    document.getElementById("experince-form").value;
  //
  document.getElementById("form").style.display = "none";
});
