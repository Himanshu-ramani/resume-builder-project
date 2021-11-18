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
// function addcompany()
const expContainer = document.getElementById("exp-container")
function addcompnay(){
  let html =` <div class="container" id="cont"> 
  <button class="btn add" id="full-exp" onclick="addcompnay()">+</button>
  <button class="btn sub" id="sub" onclick="subCompany()">-</button>
  <select id="year" name="year" style="-webkit-appearance: none; width: 28px !important; color:black; font-weight: 600; ">
    <option>yyyy</option>
    <option value="1957">1957</option>
    <option value="1958">1958</option>
    <option value="1959">1959</option>
    <option value="1960">1960</option>
    <option value="1961">1961</option>
    <option value="1962">1962</option>
    <option value="1963">1963</option>
    <option value="1964">1964</option>
    <option value="1965">1965</option>
    <option value="1966">1966</option>
    <option value="1967">1967</option>
    <option value="1968">1968</option>
    <option value="1969">1969</option>
    <option value="1970">1970</option>
    <option value="1971">1971</option>
    <option value="1972">1972</option>
    <option value="1973">1973</option>
    <option value="1974">1974</option>
    <option value="1975">1975</option>
    <option value="1976">1976</option>
    <option value="1977">1977</option>
    <option value="1978">1978</option>
    <option value="1979">1979</option>
    <option value="1980">1980</option>
    <option value="1981">1981</option>
    <option value="1982">1982</option>
    <option value="1983">1983</option>
    <option value="1984">1984</option>
    <option value="1985">1985</option>
    <option value="1986">1986</option>
    <option value="1987">1987</option>
    <option value="1988">1988</option>
    <option value="1989">1989</option>
    <option value="1990">1990</option>
    <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
</select>-<select id="year" name="year" style="-webkit-appearance: none; width: 28px !important; color:black; font-weight: 600; ">
  <option><span style="color: grey;">yyyy</span></option>
  <option value="1957">1957</option>
  <option value="1958">1958</option>
  <option value="1959">1959</option>
  <option value="1960">1960</option>
  <option value="1961">1961</option>
  <option value="1962">1962</option>
  <option value="1963">1963</option>
  <option value="1964">1964</option>
  <option value="1965">1965</option>
  <option value="1966">1966</option>
  <option value="1967">1967</option>
  <option value="1968">1968</option>
  <option value="1969">1969</option>
  <option value="1970">1970</option>
  <option value="1971">1971</option>
  <option value="1972">1972</option>
  <option value="1973">1973</option>
  <option value="1974">1974</option>
  <option value="1975">1975</option>
  <option value="1976">1976</option>
  <option value="1977">1977</option>
  <option value="1978">1978</option>
  <option value="1979">1979</option>
  <option value="1980">1980</option>
  <option value="1981">1981</option>
  <option value="1982">1982</option>
  <option value="1983">1983</option>
  <option value="1984">1984</option>
  <option value="1985">1985</option>
  <option value="1986">1986</option>
  <option value="1987">1987</option>
  <option value="1988">1988</option>
  <option value="1989">1989</option>
  <option value="1990">1990</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1993">1993</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1996">1996</option>
  <option value="1997">1997</option>
  <option value="1998">1998</option>
  <option value="1999">1999</option>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>,<input type="text" class="company" placeholder="Company" >
  <br>
  <input type="text" placeholder="Post" class="pot-company">
  <ul>
    <li class="li">
      <textarea name="" oninput="auto_grow(this)" id="" class="work-experince" cols="40" rows="1" placeholder="Work Experince"></textarea>
      <!-- <button class="btn sub-li" id="subli" onclick="subli()">-</button> -->
       <button class="btn add-li" onclick="addli()">+</button></li>
  </ul>
  </div>
  <br>`
  expContainer.insertAdjacentHTML("beforeend",html)
}
 const btnAddExp = document.getElementById("full-exp")

 function subCompany(){
   btn = event.target.parentElement.style.display ="none"
 }
 function addli(){
   let html = `<li class="li">
   <textarea oninput=" auto_grow(this)" name="" id="" class="work-experince" cols="40" rows="1" placeholder="Work Experince"></textarea>
   <button class="btn sub-li" id="subli" onclick="subli()">-</button>
    <button class="btn add-li" onclick="addli()">+</button></li>`
   event.target.parentElement.parentElement.insertAdjacentHTML("beforeend",html)
 }
 function subli(){
  event.target.parentElement.style.display="none"
 }
////////skill///
function addskill(){
  html=` <li class="li"><textarea name="" id="" cols="40" oninput="auto_grow(this)" placeholder="skills" rows="1"></textarea><button class="btn sub-li" onclick="subli()">-</button>
  <button class="btn add-li" onclick="addskill()">+</button></li>`
 document.getElementById("skill-container").insertAdjacentHTML("beforeend",html)
}
//////////add sub collage
function addcollage(){
  html =` <div class="container">
  <button class="btn add" onclick="addcollage()">+</button>
  <button class="btn sub" onclick="subcollage()">-</button>
  <select id="year" name="year" style="-webkit-appearance: none; width: 28px !important; color:black; font-weight: 600; ">
    <option>yyyy</option>
    <option value="1957">1957</option>
    <option value="1958">1958</option>
    <option value="1959">1959</option>
    <option value="1960">1960</option>
    <option value="1961">1961</option>
    <option value="1962">1962</option>
    <option value="1963">1963</option>
    <option value="1964">1964</option>
    <option value="1965">1965</option>
    <option value="1966">1966</option>
    <option value="1967">1967</option>
    <option value="1968">1968</option>
    <option value="1969">1969</option>
    <option value="1970">1970</option>
    <option value="1971">1971</option>
    <option value="1972">1972</option>
    <option value="1973">1973</option>
    <option value="1974">1974</option>
    <option value="1975">1975</option>
    <option value="1976">1976</option>
    <option value="1977">1977</option>
    <option value="1978">1978</option>
    <option value="1979">1979</option>
    <option value="1980">1980</option>
    <option value="1981">1981</option>
    <option value="1982">1982</option>
    <option value="1983">1983</option>
    <option value="1984">1984</option>
    <option value="1985">1985</option>
    <option value="1986">1986</option>
    <option value="1987">1987</option>
    <option value="1988">1988</option>
    <option value="1989">1989</option>
    <option value="1990">1990</option>
    <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
</select>-<select id="year" name="year" style="-webkit-appearance: none; width: 28px !important; color:black; font-weight: 600; ">
  <option><span style="color: grey;">yyyy</span></option>
  <option value="1957">1957</option>
  <option value="1958">1958</option>
  <option value="1959">1959</option>
  <option value="1960">1960</option>
  <option value="1961">1961</option>
  <option value="1962">1962</option>
  <option value="1963">1963</option>
  <option value="1964">1964</option>
  <option value="1965">1965</option>
  <option value="1966">1966</option>
  <option value="1967">1967</option>
  <option value="1968">1968</option>
  <option value="1969">1969</option>
  <option value="1970">1970</option>
  <option value="1971">1971</option>
  <option value="1972">1972</option>
  <option value="1973">1973</option>
  <option value="1974">1974</option>
  <option value="1975">1975</option>
  <option value="1976">1976</option>
  <option value="1977">1977</option>
  <option value="1978">1978</option>
  <option value="1979">1979</option>
  <option value="1980">1980</option>
  <option value="1981">1981</option>
  <option value="1982">1982</option>
  <option value="1983">1983</option>
  <option value="1984">1984</option>
  <option value="1985">1985</option>
  <option value="1986">1986</option>
  <option value="1987">1987</option>
  <option value="1988">1988</option>
  <option value="1989">1989</option>
  <option value="1990">1990</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1993">1993</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1996">1996</option>
  <option value="1997">1997</option>
  <option value="1998">1998</option>
  <option value="1999">1999</option>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>,<input type="text" class="company" placeholder="University" style="width: 80px;" >
<br>
<input type="text" placeholder="Degree" class="pot-company">
<ul>
  
  <li class="li"><textarea oninput="auto_grow(this)" name="" id="" class="work-experince" cols="40" rows="1" placeholder="Study"></textarea>
    
    <button class="btn add-li" onclick="addstudy()">+</button></li>
</ul>
</div>
<br>`
document.getElementsByClassName("eduction")[0].insertAdjacentHTML("beforeend",html)
}
function addstudy(){
  html =` <li class="li"><textarea oninput="auto_grow(this)" name="" id="" class="work-experince" cols="40" rows="1" placeholder="Study"></textarea>
  <button class="btn sub-li"onclick="subli()">-</button>
  <button class="btn add-li" onclick="addstudy()">+</button></li>`
  event.target.parentElement.parentElement.insertAdjacentHTML("beforeend",html)
}
function subcollage(){
  event.target.parentElement.style.display = "none"
}

////

////////////
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

///
//pdf
const printDiv = document.getElementsByClassName("preview")[0]
const addMore = document.getElementById("add-more")
const page = document.getElementById("form")
document.getElementById("btn-save").addEventListener("click",function(){
  printDiv.style.display="none"
  addMore.style.display="none"
  page.style.margin =" 0 auto"
    window.print()
    printDiv.style.display="flex"
    addMore.style.display="inherit"
    page.style.margin =" 10px auto"
  })