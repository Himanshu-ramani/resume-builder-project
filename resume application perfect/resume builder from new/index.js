let dataArray =[]
let postValue ='';
let compnayValue ='';
let startDate ='';
let tillDate ='';
let experinceValue =''
const post =() =>{
  postValue= event.target.value
}
const company=()=>{
  compnayValue = event.target.value
}
const dateFirst=() =>{
  startDate = event.target.value
}
const dateTill = () =>{
  tillDate = event.target.value
}
const experince =() =>{
  experinceValue = event.target.value
}
// console.log(post);
let experinceContainer = document.getElementsByClassName("experince-container")[0]

function experinceSubmit(){
  event.preventDefault()
  dataobj = {
    postExperinnce : postValue,
    companyExperince :compnayValue,
    startDateExperince :startDate,
    tillDateExperince : tillDate,
    experinceExperince : experinceValue,
  }

  html = ` 
  <div class="experince">
  <p class="experince-post">
    ${dataobj.postExperinnce}
  </p>
  <p>${dataobj.companyExperince}</p><span>${dataobj.startDateExperince} - ${dataobj. tillDateExperince}</span>
  <ul>
      <li>${dataobj.experinceExperince}</li>
    
  </ul>
</div>`
console.log(dataobj);
experinceContainer.insertAdjacentHTML("beforeend",html)
}

function addExperince(){

 document.getElementById("experinceForm").insertAdjacentHTML("beforeend",document.getElementById("experinceForm").outerHTML) 
}
let bigname=''
function setName(){
  let bigname = event.target.value
   document.getElementById("bigname").innerText = event.target.value
}


function pdfDownload(){
    // console.log(hi);
    var element = document.getElementById('templete');
    // element.style.margin = 0
var opt = {
  margin:   0, //top, left, buttom, right,
  filename:     `${bigname}Resume.pdf`,
  pagebreak:{mode: ['css', 'legacy']},
  image:        { type: 'jpg', quality: 1 },
  enableLinks:true,
  html2canvas: {
    // margin: 1,
    dpi: 600,
    letterRendering: true,
    useCORS: true,
   scale: 4 
    },
  jsPDF:        {  format: 'a4', orientation: 'portrait',pagesplit: true, }
};

html2pdf().set(opt).from(element).save();
// element.style.margin = 'auto'
}

