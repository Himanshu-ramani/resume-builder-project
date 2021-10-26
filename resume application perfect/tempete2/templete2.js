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
const addBtnSkill = document.querySelector("#add-skill-btn");
const subBtnSkill = document.querySelector("#sub-skill-btn");
const skillConatiner = document.getElementById("skill-container");

addBtnSkill.addEventListener("click", function () {
  htmls = ` <li>
  <input type="text" name="" id="skillarray" class="skill"
  placeholder="Skills" />
</li>`;
  skillConatiner.insertAdjacentHTML("beforeend", htmls);
});
subBtnSkill.addEventListener("click", function () {
  let lastchild = skillConatiner.lastElementChild;
  skillConatiner.removeChild(lastchild);
});
/////add feilds btn//////////////////
const expBtn1 = document.getElementById("experince-btn");
const expconatiner = document.getElementById("experince-container");
const exprinceConatierTemp = document.getElementById("temp-exp");
expBtn1.addEventListener("click", function () {
  let exphtml1 = `<button class="btnedu" id="experince-btn1" onclick="exp1()">+</button>
 <span class="array"
   ><input
     type="text"
     name=""
     id="date-form1"
     placeholder="mm/yy/ - mm/yy "
   /> </span
 ><span class="comapny"
   ><input
     type="text"
     name=""
     class="form-company"
     id="form-Company1"
     placeholder="Company"
 /></span>
 <p class="experince-profession">
   <input
     type="text"
     name=""
     id="form-profession1"
     placeholder="Profession"
   />
 </p>
 <ul class="exp-ul" id="exp-ul">
   <li class="li">
    <textarea name="" id="work-exp-form1" cols="30" rows="2" placeholder="Work exprince"></textarea>
   </li>
 </ul>`;
  expconatiner.insertAdjacentHTML("beforeend", exphtml1);
  expBtn1.style.display = "none";
  //
  let temphtml1 = ` <span class="date" id="date-temp1"
  >2020-2021 </span
><span class="comapny" id="temp-company1"
  >Design Clock Inc</span>
<p class="experince-profession" id="experince-post1">
  full stack web devloper
</p>
<ul>
  <li class="li" id="work-exp-temp1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, placeat!
</ul>`;
  exprinceConatierTemp.insertAdjacentHTML("beforeend", temphtml1);
});
function exp1() {
  let exphtml2 = `<button class="btnedu" id="experince-btn2" onclick="exp2()">+</button>
  <span class="array"
    ><input
      type="text"
      name=""
      id="date-form2"
      placeholder="mm/yy/ - mm/yy "
    /> </span
  ><span class="comapny"
    ><input
      type="text"
      name=""
      class="form-company2"
      id="form-Company2"
      placeholder="Company"
  /></span>
  <p class="experince-profession">
    <input
      type="text"
      name=""
      id="form-profession2"
      placeholder="Profession"
    />
  </p>
  <ul class="exp-ul" id="exp-ul">
    <li class="li">
     <textarea name="" id="work-exp-form2" cols="30" rows="2" placeholder="Work exprince"></textarea>
    </li>
  </ul>`;
  expconatiner.insertAdjacentHTML("beforeend", exphtml2);
  document.getElementById("experince-btn1").style.display = "none";

  let temphtml2 = ` <span class="date" id="date-temp2"
  >2020-2021 </span
><span class="comapny" id="temp-company2"
  >Design Clock Inc</span>
<p class="experince-profession" id="experince-post2">
  full stack web devloper
</p>
<ul>
  <li class="li" id="work-exp-temp2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, placeat!
</ul>`;
  exprinceConatierTemp.insertAdjacentHTML("beforeend", temphtml2);
}
function exp2() {
  let exphtml3 = `
  <span class="array"
    ><input
      type="text"
      name=""
      id="date-form3"
      placeholder="mm/yy/ - mm/yy "
    /> </span
  ><span class="comapny"
    ><input
      type="text"
      name=""
      class="form-company3"
      id="form-Company3"
      placeholder="Company"
  /></span>
  <p class="experince-profession">
    <input
      type="text"
      name=""
      id="form-profession3"
      placeholder="Profession"
    />
  </p>
  <ul class="exp-ul" id="exp-ul">
    <li class="li">
     <textarea name="" id="work-exp-form3" cols="30" rows="2" placeholder="Work exprince"></textarea>
    </li>
  </ul>`;
  expconatiner.insertAdjacentHTML("beforeend", exphtml3);
  document.getElementById("experince-btn2").style.display = "none";
  let temphtml3 = ` <span class="date" id="date-temp3"
  >2020-2021 </span
><span class="comapny" id="temp-company3"
  >Design Clock Inc</span>
<p class="experince-profession" id="experince-post3">
  full stack web devloper
</p>
<ul>
  <li class="li" id="work-exp-temp3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, placeat!
</ul>`;
  exprinceConatierTemp.insertAdjacentHTML("beforeend", temphtml3);
}
///////////////
////////////////////
const studybtn = document.getElementById("study-btn");
const studycontainer = document.getElementById("eduction");
const studycontainertemp = document.getElementById("study-container-temp");
studybtn.addEventListener("click", function () {
  let studyHtml = ` <button class="btnedu" id="study-btn1" onclick ="study1()">+</button>  
    <span class="date-study date"
      ><input
        type="text"
        name=""
        id="study-date-form1"
        placeholder="mm/yy/-mm/yy" /></span
    ><span class="studyarray"
      ><input type="text" name="" id="university-form1" placeholder="University"
    /></span>
    <p class="">
      <input
        type="text"
        name=""
        id="course-form1"
        placeholder="Degree"
      />
    </p>
    <ul class="StudyUl">
      <li>
        <textarea name="" id="study-work-form1" cols="30" rows="2" placeholder="Study"></textarea>
      </li>
    </ul>`;
  studybtn.style.display = "none";
  studycontainer.insertAdjacentHTML("beforeend", studyHtml);
  let temphtml = ` <span class="date" id="study-date-temp1"
  >2014-2020</span
><span class="comapny" id="university-temp1"
  > University</span>
<p class="experince-profession" id="course-temp1">
  BCA
</p>
<ul class="exp-ul">
  <li id="study-work-temp1">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, expedita.
  </li>
</ul>`;
  studycontainertemp.insertAdjacentHTML("beforeend", temphtml);
});
function study1() {
  document.getElementById("study-btn1").style.display = "none";
  let html = ` <button class="btnedu" id="study-btn2" onclick ="study2()">+</button>  
  <span class="date-study date"
    ><input
      type="text"
      name=""
      id="study-date-form2"
      placeholder="mm/yy/-mm/yy" /></span
  ><span class="studyarray"
    ><input type="text" name="" id="university-form2" placeholder="University"
  /></span>
  <p class="">
    <input
      type="text"
      name=""
      id="course-form2"
      placeholder="Degree"
    />
  </p>
  <ul class="StudyUl">
    <li>
      <textarea name="" id="study-work-form2" cols="30" rows="2" placeholder="Study"></textarea>
    </li>
  </ul>`;
  studybtn.style.display = "none";
  studycontainer.insertAdjacentHTML("beforeend", html);
  let temphtml = ` <span class="date" id="study-date-temp2"
  >2014-2020</span
><span class="comapny" id="university-temp2"
  > University</span>
<p class="experince-profession" id="course-temp2">
  BCA
</p>
<ul class="exp-ul">
  <li id="study-work-temp2">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, expedita.
  </li>
</ul>`;
  studycontainertemp.insertAdjacentHTML("beforeend", temphtml);
}
function study2() {
  document.getElementById("study-btn2").style.display = "none";
  let html = `   
  <span class="date-study date3"
    ><input
      type="text"
      name=""
      id="study-date-form3"
      placeholder="mm/yy/-mm/yy" /></span
  ><span class="studyarray"
    ><input type="text" name="" id="university-form3" placeholder="University"
  /></span>
  <p class="">
    <input
      type="text"
      name=""
      id="course-form3"
      placeholder="Degree"
    />
  </p>
  <ul class="StudyUl">
    <li>
      <textarea name="" id="study-work-form3" cols="30" rows="2" placeholder="Study"></textarea>
    </li>
  </ul>`;
  studybtn.style.display = "none";
  studycontainer.insertAdjacentHTML("beforeend", html);
  let temphtml = ` <span class="date" id="study-date-temp3"
  >2014-2020</span
><span class="comapny" id="university-temp3"
  > University</span>
<p class="experince-profession" id="course-temp3">
  BCA
</p>
<ul class="exp-ul">
  <li id="study-work-temp3">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, expedita.
  </li>
</ul>`;
  studycontainertemp.insertAdjacentHTML("beforeend", temphtml);
}
////////////////////////
const arrayc = document.getElementsByClassName("array");
// console.log(arrayc);
const studyarr = document.getElementsByClassName("studyarray");
// console.log(studyarr);
/////////////////////////

//equalling value
const btnPreview = document.getElementById("btn-form");
btnPreview.addEventListener("click", function () {
  document.getElementById("temp-big-name").innerHTML =
    document.getElementById("input-bigname").value;
  //post
  document.getElementById("post-temp").innerHTML =
    document.getElementById("input-profession").value;
  //exp
  //time
  document.getElementById("date-temp").innerHTML =
    document.getElementById("date-form").value;
  //company
  document.getElementById("temp-company").innerHTML =
    document.getElementById("form-Company").value;
  //profession
  document.getElementById("experince-post").innerHTML =
    document.getElementById("form-profession").value;
  //exp
  document.getElementById("work-exp-temp").innerHTML =
    document.getElementById("work-exp-form").value;
  //
  document.getElementById("address-temp").innerHTML =
    document.getElementById("address-form").value;
  //
  document.getElementById("phone-temp").innerHTML =
    document.getElementById("phone-form").value;
  //
  document.getElementById("email-temp").innerHTML =
    document.getElementById("email-form").value;
  //
  //study
  //time
  document.getElementById("study-date-temp").innerHTML =
    document.getElementById("study-date-form").value;
  //university
  document.getElementById("university-temp").innerHTML =
    document.getElementById("university-form").value;
  //course
  document.getElementById("course-temp").innerHTML =
    document.getElementById("course-form").value;
  //studywork
  document.getElementById("study-work-temp").innerHTML =
    document.getElementById("study-work-form").value;
  //
  if (arrayc.length == 2) {
    document.getElementById("date-temp").innerHTML =
      document.getElementById("date-form").value;
    //
    document.getElementById("temp-company").innerHTML =
      document.getElementById("form-Company").value;
    //
    document.getElementById("experince-post").innerHTML =
      document.getElementById("form-profession").value;
    //
    document.getElementById("work-exp-temp").innerHTML =
      document.getElementById("work-exp-form").value;
    ///////
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("temp-company1").innerHTML =
      document.getElementById("form-Company1").value;
    //
    document.getElementById("experince-post1").innerHTML =
      document.getElementById("form-profession1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
  }
  if (arrayc.length == 3) {
    document.getElementById("date-temp").innerHTML =
      document.getElementById("date-form").value;
    //
    document.getElementById("temp-company").innerHTML =
      document.getElementById("form-Company").value;
    //
    document.getElementById("experince-post").innerHTML =
      document.getElementById("form-profession").value;
    //
    document.getElementById("work-exp-temp").innerHTML =
      document.getElementById("work-exp-form").value;
    ///////
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("temp-company1").innerHTML =
      document.getElementById("form-Company1").value;
    //
    document.getElementById("experince-post1").innerHTML =
      document.getElementById("form-profession1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
    ///////////
    document.getElementById("date-temp2").innerHTML =
      document.getElementById("date-form2").value;
    //
    document.getElementById("temp-company2").innerHTML =
      document.getElementById("form-Company2").value;
    //
    document.getElementById("experince-post2").innerHTML =
      document.getElementById("form-profession2").value;
    //
    document.getElementById("work-exp-temp2").innerHTML =
      document.getElementById("work-exp-form2").value;
  }
  /////////
  if (arrayc.length == 4) {
    document.getElementById("date-temp").innerHTML =
      document.getElementById("date-form").value;
    //
    document.getElementById("temp-company").innerHTML =
      document.getElementById("form-Company").value;
    //
    document.getElementById("experince-post").innerHTML =
      document.getElementById("form-profession").value;
    //
    document.getElementById("work-exp-temp").innerHTML =
      document.getElementById("work-exp-form").value;
    ///////
    document.getElementById("date-temp1").innerHTML =
      document.getElementById("date-form1").value;
    //
    document.getElementById("temp-company1").innerHTML =
      document.getElementById("form-Company1").value;
    //
    document.getElementById("experince-post1").innerHTML =
      document.getElementById("form-profession1").value;
    //
    document.getElementById("work-exp-temp1").innerHTML =
      document.getElementById("work-exp-form1").value;
    ///////////
    document.getElementById("date-temp2").innerHTML =
      document.getElementById("date-form2").value;
    //
    document.getElementById("temp-company2").innerHTML =
      document.getElementById("form-Company2").value;
    //
    document.getElementById("experince-post2").innerHTML =
      document.getElementById("form-profession2").value;
    //
    document.getElementById("work-exp-temp2").innerHTML =
      document.getElementById("work-exp-form2").value;
    //////////////////
    document.getElementById("date-temp3").innerHTML =
      document.getElementById("date-form3").value;
    //
    document.getElementById("temp-company3").innerHTML =
      document.getElementById("form-Company3").value;
    //
    document.getElementById("experince-post3").innerHTML =
      document.getElementById("form-profession3").value;
    //
    document.getElementById("work-exp-temp3").innerHTML =
      document.getElementById("work-exp-form3").value;
  }
  ///
  if (studyarr.length == 2) {
    //study
    //time
    document.getElementById("study-date-temp").innerHTML =
      document.getElementById("study-date-form").value;
    //university
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //course
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //studywork
    document.getElementById("study-work-temp").innerHTML =
      document.getElementById("study-work-form").value;
    //study
    //time
    document.getElementById("study-date-temp1").innerHTML =
      document.getElementById("study-date-form1").value;
    //university
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //course
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //studywork
    document.getElementById("study-work-temp1").innerHTML =
      document.getElementById("study-work-form1").value;
  }
  if (studyarr.length == 3) {
    //study
    //time
    document.getElementById("study-date-temp").innerHTML =
      document.getElementById("study-date-form").value;
    //university
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //course
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //studywork
    document.getElementById("study-work-temp").innerHTML =
      document.getElementById("study-work-form").value;
    //study
    //time
    document.getElementById("study-date-temp1").innerHTML =
      document.getElementById("study-date-form1").value;
    //university
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //course
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //studywork
    document.getElementById("study-work-temp1").innerHTML =
      document.getElementById("study-work-form1").value;
    //study
    //time
    document.getElementById("study-date-temp2").innerHTML =
      document.getElementById("study-date-form2").value;
    //university
    document.getElementById("university-temp2").innerHTML =
      document.getElementById("university-form2").value;
    //course
    document.getElementById("course-temp2").innerHTML =
      document.getElementById("course-form2").value;
    //studywork
    document.getElementById("study-work-temp2").innerHTML =
      document.getElementById("study-work-form2").value;
  }
  if (studyarr.length == 4) {
    //study
    //time
    document.getElementById("study-date-temp").innerHTML =
      document.getElementById("study-date-form").value;
    //university
    document.getElementById("university-temp").innerHTML =
      document.getElementById("university-form").value;
    //course
    document.getElementById("course-temp").innerHTML =
      document.getElementById("course-form").value;
    //studywork
    document.getElementById("study-work-temp").innerHTML =
      document.getElementById("study-work-form").value;
    //study
    //time
    document.getElementById("study-date-temp1").innerHTML =
      document.getElementById("study-date-form1").value;
    //university
    document.getElementById("university-temp1").innerHTML =
      document.getElementById("university-form1").value;
    //course
    document.getElementById("course-temp1").innerHTML =
      document.getElementById("course-form1").value;
    //studywork
    document.getElementById("study-work-temp1").innerHTML =
      document.getElementById("study-work-form1").value;
    //study
    //time
    document.getElementById("study-date-temp2").innerHTML =
      document.getElementById("study-date-form2").value;
    //university
    document.getElementById("university-temp2").innerHTML =
      document.getElementById("university-form2").value;
    //course
    document.getElementById("course-temp2").innerHTML =
      document.getElementById("course-form2").value;
    //studywork
    document.getElementById("study-work-temp2").innerHTML =
      document.getElementById("study-work-form2").value;
    //study
    //time
    document.getElementById("study-date-temp3").innerHTML =
      document.getElementById("study-date-form3").value;
    //university
    document.getElementById("university-temp3").innerHTML =
      document.getElementById("university-form3").value;
    //course
    document.getElementById("course-temp3").innerHTML =
      document.getElementById("course-form3").value;
    //studywork
    document.getElementById("study-work-temp3").innerHTML =
      document.getElementById("study-work-form3").value;
  }
  //skill
  const skill = document.getElementsByClassName("skill");
  console.log(skill);
  let skillstr = ``;
  for (const s of skill) {
    skillstr = skillstr + `<li>${s.value}</li>`;
    console.log(`<li>${s.value}</li>`);
    document.getElementById("skill-li").innerHTML = skillstr;
  }
  /////////////////
  document.getElementById("refrence-name-temp").innerHTML =
    document.getElementById("refrence-name-form").value;
  document.getElementById("refrence-detail-temp").innerHTML =
    document.getElementById("refrence-detail-form").value;

  //
  document.getElementById("form").style.display = "none";
  btnPreview.style.display = "none";
  document.getElementById("page").style.display = "block";
  document.getElementById("btn-back").style.display = "block";
  document.getElementById("btn-save").style.display = "block";
});

const backbtn = document.getElementById("btn-back");
backbtn.addEventListener("click", function () {
  document.getElementById("form").style.display = "block";
  btnPreview.style.display = "block";
  document.getElementById("page").style.display = "none";
  document.getElementById("btn-back").style.display = "none";
  document.getElementById("btn-save").style.display = "none";
});

document.getElementById("btn-save").addEventListener("click", function () {
  document.getElementById("btn-back").style.display = "none";
  document.getElementById("btn-save").style.display = "none";
  window.print();
});
//////////
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
