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
const expbtn = document.getElementById("exp-btn");
const expContainer = document.getElementById("exp-container-form");
const expContainerTemp = document.getElementById("exp-container-temp");
expbtn.addEventListener("click", function () {
  let html = ` <button class="btn-desgin" id="exp-btn1" onclick="exp2()">+</button>
  <p class="exp-array">
    <input
      type="text"
      name=""
      id="company-form1"
      placeholder="company"
    />
  </p>
  <p class="post">
    <input type="text" name="" id="post-form1" placeholder="post" />
  </p>
  <ul>
    <li>
     <textarea name="" id="expreince-work-form1" cols="30" rows="3" placeholder="Work Experience"></textarea>
    </li>
  </ul>`;
  expContainer.insertAdjacentHTML("beforeend", html);
  expbtn.style.display = "none";
  let temphtml = `<p class="company" id="company-temp1">RAMANI INDUSTRIES</p>
  <p class="post" id="post-temp1">full stack Developer</p>
  <ul>
    <li id="expreince-work-temp1">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  expContainerTemp.insertAdjacentHTML("beforeend", temphtml);
});
function exp2() {
  document.getElementById("exp-btn1").style.display = "none";
  let html = ` <button class="btn-desgin" id="exp-btn2" onclick="exp3()">+</button>
  <p class="exp-array">
    <input
      type="text"
      name=""
      id="company-form2"
      placeholder="company"
    />
  </p>
  <p class="post">
    <input type="text" name="" id="post-form2" placeholder="post" />
  </p>
  <ul>
    <li>
     <textarea name="" id="expreince-work-form2" cols="30" rows="3" placeholder="Work Experience"></textarea>
    </li>
  </ul>`;
  expContainer.insertAdjacentHTML("beforeend", html);

  let temphtml = `<p class="company" id="company-temp2">RAMANI INDUSTRIES</p>
  <p class="post" id="post-temp2">full stack Developer</p>
  <ul>
    <li id="expreince-work-temp2">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  expContainerTemp.insertAdjacentHTML("beforeend", temphtml);
}
function exp3() {
  document.getElementById("exp-btn2").style.display = "none";
  let html = ` 
  <p class="exp-array">
    <input
      type="text"
      name=""
      id="company-form3"
      placeholder="company"
    />
  </p>
  <p class="post">
    <input type="text" name="" id="post-form3" placeholder="post" />
  </p>
  <ul>
    <li>
     <textarea name="" id="expreince-work-form3" cols="30" rows="3" placeholder="Work Experience"></textarea>
    </li>
  </ul>`;
  expContainer.insertAdjacentHTML("beforeend", html);

  let temphtml = `<p class="company" id="company-temp3">RAMANI INDUSTRIES</p>
  <p class="post" id="post-temp3">full stack Developer</p>
  <ul>
    <li id="expreince-work-temp3">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  expContainerTemp.insertAdjacentHTML("beforeend", temphtml);
}

//////////////////
///////study///
const studybtn = document.getElementById("study-btn");
const studyContainer = document.getElementById("study-container");
const studyContainerTemp = document.getElementById("study-container-temp");
studybtn.addEventListener("click", function () {
  studybtn.style.display = "none";
  let html = `<button class="btn-desgin" onclick="study1()" id="study-btn1">+</button>
  <p class="edu">
    <input
      type="text"
      name=""
      id="university-form1"
      placeholder="university"
    />
  </p>
  <p class="post">
    <input
      type="text"
      name=""
      id="course-form1"
      placeholder="course" />
  </p>
  <ul>
    <li>
     <textarea name="" id="course-info-form1" cols="30" rows="3" placeholder="study"></textarea>
    </li>
  </ul>`;
  studyContainer.insertAdjacentHTML("beforeend", html);
  let temphtml = `    <p class="company" id="university-temp1">RAMANI INDUSTRIES</p>
  <p class="post" id="course-temp1">full stack Developer</p>
  <ul>
    <li id="course-info-temp1">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  studyContainerTemp.insertAdjacentHTML("beforeend", temphtml);
});
function study1() {
  document.getElementById("study-btn1").style.display = "none";
  let html1 = `<button class="btn-desgin" onclick="study2()" id="study-btn2">+</button>
  <p class="edu">
    <input
      type="text"
      name=""
      id="university-form2"
      placeholder="university"
    />
  </p>
  <p class="post">
    <input
      type="text"
      name=""
      id="course-form2"
      placeholder="course" />
  </p>
  <ul>
    <li>
     <textarea name="" id="course-info-form2" cols="30" rows="3" placeholder="study"></textarea>
    </li>
  </ul>`;
  studyContainer.insertAdjacentHTML("beforeend", html1);
  let temphtml = `    <p class="company" id="university-temp2">RAMANI INDUSTRIES</p>
  <p class="post" id="course-temp2">full stack Developer</p>
  <ul>
    <li id="course-info-temp2">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  studyContainerTemp.insertAdjacentHTML("beforeend", temphtml);
}
function study2() {
  document.getElementById("study-btn2").style.display = "none";
  let html1 = `
  <p class="edu">
    <input
      type="text"
      name=""
      id="university-form3"
      placeholder="university"
    />
  </p>
  <p class="post">
    <input
      type="text"
      name=""
      id="course-form3"
      placeholder="course" />
  </p>
  <ul>
    <li>
     <textarea name="" id="course-info-form3" cols="30" rows="3" placeholder="study"></textarea>
    </li>
  </ul>`;
  studyContainer.insertAdjacentHTML("beforeend", html1);
  let temphtml = `    <p class="company" id="university-temp3">RAMANI INDUSTRIES</p>
  <p class="post" id="course-temp3">full stack Developer</p>
  <ul>
    <li id="course-info-temp3">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </li>
  </ul>`;
  studyContainerTemp.insertAdjacentHTML("beforeend", temphtml);
}

////////////////////////
const expArr = document.getElementsByClassName("exp-array");

const educArray = document.getElementsByClassName("edu");

/////////////
const btn = document.querySelector(".btn-preview");

//
btn.addEventListener("click", function (e) {
  e.preventDefault();
  //name
  document.getElementById("name-temp").innerHTML =
    document.getElementById("name-form").value;
  //about
  document.getElementById("summary-temp").innerHTML =
    document.getElementById("summary-form").value;
  //contact
  document.getElementById("address-temp").innerHTML =
    document.getElementById("address-form").value;
  //
  document.getElementById("email-temp").innerHTML =
    document.getElementById("email-form").value;
  //
  document.getElementById("phone-temp").innerHTML =
    document.getElementById("phone-form").value;
  //exprince
  //compnay
  document.getElementById("company-temp").innerHTML =
    document.getElementById("company-form").value;
  //post
  document.getElementById("post-temp").innerHTML =
    document.getElementById("post-form").value;
  //experince
  document.getElementById("expreince-work-temp").innerHTML =
    document.getElementById("expreince-work-form").value;
  //education
  document.getElementById("university-temp").innerHTML =
    document.getElementById("university-form").value;
  //course
  document.getElementById("course-temp").innerHTML =
    document.getElementById("course-form").value;
  //course info
  document.getElementById("course-info-temp").innerHTML =
    document.getElementById("course-info-form").value;
  //hide form
  const form = (document.getElementById("form").style.display = "none");
  //////////////////////////////////////
  if (expArr.length == 2) {
    document.getElementById("company-temp").innerHTML =
      document.getElementById("company-form").value;
    //post
    document.getElementById("post-temp").innerHTML =
      document.getElementById("post-form").value;
    //experince
    document.getElementById("expreince-work-temp").innerHTML =
      document.getElementById("expreince-work-form").value;
    ////////////
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //post
    document.getElementById("post-temp1").innerHTML =
      document.getElementById("post-form1").value;
    //experince
    document.getElementById("expreince-work-temp1").innerHTML =
      document.getElementById("expreince-work-form1").value;
  }
  if (expArr.length == 3) {
    document.getElementById("company-temp").innerHTML =
      document.getElementById("company-form").value;
    //post
    document.getElementById("post-temp").innerHTML =
      document.getElementById("post-form").value;
    //experince
    document.getElementById("expreince-work-temp").innerHTML =
      document.getElementById("expreince-work-form").value;
    ////////////
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //post
    document.getElementById("post-temp1").innerHTML =
      document.getElementById("post-form1").value;
    //experince
    document.getElementById("expreince-work-temp1").innerHTML =
      document.getElementById("expreince-work-form1").value;
    //
    document.getElementById("company-temp2").innerHTML =
      document.getElementById("company-form2").value;
    //post
    document.getElementById("post-temp2").innerHTML =
      document.getElementById("post-form2").value;
    //experince
    document.getElementById("expreince-work-temp2").innerHTML =
      document.getElementById("expreince-work-form2").value;
  }
  ///////////
  if (expArr.length == 4) {
    document.getElementById("company-temp").innerHTML =
      document.getElementById("company-form").value;
    //post
    document.getElementById("post-temp").innerHTML =
      document.getElementById("post-form").value;
    //experince
    document.getElementById("expreince-work-temp").innerHTML =
      document.getElementById("expreince-work-form").value;
    ////////////
    document.getElementById("company-temp1").innerHTML =
      document.getElementById("company-form1").value;
    //post
    document.getElementById("post-temp1").innerHTML =
      document.getElementById("post-form1").value;
    //experince
    document.getElementById("expreince-work-temp1").innerHTML =
      document.getElementById("expreince-work-form1").value;
    ////////
    document.getElementById("company-temp2").innerHTML =
      document.getElementById("company-form2").value;
    //post
    document.getElementById("post-temp2").innerHTML =
      document.getElementById("post-form2").value;
    //experince
    document.getElementById("expreince-work-temp2").innerHTML =
      document.getElementById("expreince-work-form2").value;
    //////////////////
    document.getElementById("company-temp3").innerHTML =
      document.getElementById("company-form3").value;
    //post
    document.getElementById("post-temp3").innerHTML =
      document.getElementById("post-form3").value;
    //experince
    document.getElementById("expreince-work-temp3").innerHTML =
      document.getElementById("expreince-work-form3").value;
  }
  if (educArray.length == 2) {
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //post
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //experince
    document.getElementById("course-info-temp").innerHTML =
      document.getElementById("course-info-form").value;
    ////////////
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //post
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //experince
    document.getElementById("course-info-temp1").innerHTML =
      document.getElementById("course-info-form1").value;
  }
  if (educArray.length == 3) {
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //post
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //experince
    document.getElementById("expreince-work-temp").innerHTML =
      document.getElementById("expreince-work-form").value;
    ////////////
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //post
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //experince
    document.getElementById("course-info-temp1").innerHTML =
      document.getElementById("course-info-form1").value;
    //////
    document.getElementById("university-temp2").innerHTML =
      document.getElementById("university-form2").value;
    //post
    document.getElementById("course-temp2").innerHTML =
      document.getElementById("course-form2").value;
    //experince
    document.getElementById("course-info-temp2").innerHTML =
      document.getElementById("course-info-form2").value;
  }
  ///////////
  if (educArray.length == 4) {
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //post
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //experince
    document.getElementById("course-info-temp").innerHTML =
      document.getElementById("course-info-form").value;
    ////////////
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //post
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //experince
    document.getElementById("course-info-temp1").innerHTML =
      document.getElementById("course-info-form1").value;
    ////////
    document.getElementById("university-temp2").innerHTML =
      document.getElementById("university-form2").value;
    //post
    document.getElementById("course-temp2").innerHTML =
      document.getElementById("course-form2").value;
    //experince
    document.getElementById("course-info-temp2").innerHTML =
      document.getElementById("course-info-form2").value;
    //////////////////
    document.getElementById("university-temp3").innerHTML =
      document.getElementById("university-form3").value;
    //post
    document.getElementById("course-temp3").innerHTML =
      document.getElementById("course-form3").value;
    //experince
    document.getElementById("course-info-temp3").innerHTML =
      document.getElementById("course-info-form3").value;
  }

  //////////////////////////////
  document.getElementById("page").style.display = "block";
  document.getElementById("pdf").style.display = "Block";
  document.getElementById("back-btn").style.display = "Block";
});
document.getElementById("back-btn").addEventListener("click", function () {
  document.getElementById("page").style.display = "none";
  document.getElementById("pdf").style.display = "none";
  document.getElementById("back-btn").style.display = "none";
  document.getElementById("form").style.display = "block";
});
document.getElementById("pdf").addEventListener("click", function (e) {
  document.getElementById("pdf").style.display = "none";
  document.getElementById("back-btn").style.display = "none";
  window.print();
});
