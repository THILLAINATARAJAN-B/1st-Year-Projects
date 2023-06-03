let Title_1=''
let TText_1=''
function Save()
{
  Title_1=document.querySelector('.title_box').value;
  console.log(Title_1);
  TText_1=document.querySelector('.text_box').value;
  console.log(TText_1);
  localStorage.setItem(Title_1,TText_1);
  console.log(localStorage);
  document.querySelector('.title_box').value='';
  document.querySelector('.text_box').value='';
  window.history.go(-1);
  window.history.back(10);
  window.onload="Short_Notes.html";
};
function Cancel()
{
  window.history.go(-1);
  window.history.back(10);
  window.onload="Short_Notes.html";
}
