import {FORM, cfpData} from "./main.js";

const TBL = document.getElementById("tbl-data");

function renderTblHeading(data) {
  if (data.length === 0) {
    TBL.innerHTML = "";
  } else {
  TBL.innerHTML = "";
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
}

function popForm(cfpData) {
  console.log(cfpData.firName);
  FORM[3].textContent = cfpData.houseM;
}

function renderBtns(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  btnEdit.textContent = "Edit";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function(e){
    data.splice(index, 1);
    renderTbl(data);
  });
  btnEdit.addEventListener("click", function(e) {
    popForm(data);
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
    const td = renderBtns(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
    
  });
  return tbody;
}

function renderTbl(data) {
  const table = renderTblHeading(data);
  const tbody = renderBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl };
