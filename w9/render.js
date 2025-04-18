
import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

function renderTblHeading(data) {
  // if (data.length === 0) {
  //   TBL.innerHTML = "";
  // } else {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = ["Name", "Members", "Size", "CFP", "Action"];
  headingTxtArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;

}

function onUpdate(index, data) {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

function renderBtns(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  btnEdit.textContent = "Edit";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function(e){
  onUpdate(index, data)
    // localStorage.setItem("cfp", JSON.stringify(data));
    // saveLS(data);
    // renderTbl(data);
  });
  btnEdit.addEventListener("click", function(e){
    FORM[1].value = obj.firName;
    FORM[2].value = obj.lasName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseSiz;
    // data.splice(index, 1);
    // saveLS(data);
    // renderTbl(data);
    onUpdate(index, data);
  });
  return td;
}

 

function renderBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    // console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      
      if (key === "firName" || key === "houseM" || key === "houseSiz" || key === "cfptotal") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }    
    const td = renderBtns(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
    
  });
  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
  const table = renderTblHeading(data);
  const tbody = renderBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  } 
}

export { renderTbl };
