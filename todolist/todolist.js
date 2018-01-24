// text-decoration: line-through;

function add() {
  let textInput = document.querySelector("#text")
  let value = document.querySelector("#text").value;  // <input type="" value="" />
  
  textInput.value = "";
  
  if (value==""){
    return;
  }
  
  let table = document.querySelector(".list");
  
  let tr = document.createElement("tr");
  
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  td1.appendChild(checkbox);
  checkbox.addEventListener('click', function() {
    check(checkbox, td2);
  })
  
  td2.innerText = value;
  
  let archiveBtn= document.createElement("button");
  archiveBtn.innerText = "DELETE"
  td3.appendChild(archiveBtn)
  archiveBtn.addEventListener('click',function() {
    archive(tr)
  })
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  
  table.appendChild(tr);
}


function check(checkbox, td2) {
  if (checkbox.checked) {
    td2.classList.add("strike");
    //checkbox.checked = false;
  } else {
    td2.classList.remove("strike");
  }

}

function archive(tr) {
  tr.parentElement.removeChild(tr);
  
}