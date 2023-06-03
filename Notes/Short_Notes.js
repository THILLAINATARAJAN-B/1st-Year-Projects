
let original_list=[];
List();
inputing();

document.querySelector('.Create_btn').addEventListener("click",()=>{
  window.location.href="/Editor.html";
  
})


function inputing()
{
  for (let i=0;i<localStorage.length;i++)
  {
    let title_all=localStorage.key(i);
    original_list.push(title_all);
    
  }
  
  List()
}

function List()
{
  console.log(original_list)
  let todo_list=''; 
  let list_item=document.querySelector('.List_1');
  
  original_list.forEach(
    (title_all,index)=>
    {   
  const text=title_all;
  const li1=`
  <div>
  <button class="text_viewer View_btn">${text}</button>
  </div>

  <div class="access_btn">
  <button class="delete_button_2 Delete_btn"; ><img src="/SVG/trash-2.svg" alt="trash_button"></button>
  </div>
  `;
    todo_list+=li1;
    }
    )

  list_item.innerHTML=todo_list;

  document.querySelectorAll('.Delete_btn').forEach(
    (delete_button_2,index)=>
    {
      delete_button_2.addEventListener('click',
      ()=>
        {
          original_list.splice(index,1);
          let title_all=localStorage.key(index,1);
          localStorage.removeItem(title_all);
          List();
        }
      )
    }
  );
  
  document.querySelectorAll('.View_btn').forEach(
    (element,index)=>
    {
      element.addEventListener('click',
      ()=>
        {
          let title_all=localStorage.key(index,1);
          var title_1=localStorage.key(index,1);
          var text_1=localStorage.getItem(title_all);
          let display=document.querySelector('.Displays');
          
          display.innerHTML=
          `
          <div class="title_cont">
            <div class="title_box">
              <p>${title_1}</p>
            </div>

            <div class="dis_access_btn">

              <button onclick="close_1()" class="close"><img src="/SVG/x-square.svg" alt="close button"></button>
            </div>
          </div>
          
          
          <div class="text_1">${text_1}</div>
          `;
          List();
          console.log(title_1);
          console.log(text_1); 
        }
      )
    }
  );
  
}


function Show()
{
  console.log(localStorage);
}

function close_1()
{
  let display=document.querySelector('.Displays').innerHTML='';
}




  



