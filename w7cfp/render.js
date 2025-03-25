const TBL = document.getElementById("tbl-data");

function renderTblHeading(){
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = ["Name", "Household", "HouseSize", "Footprint", "Action"];
  headingTxtArr.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
    // console.log(tr);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;

}


function renderTbl(data) {
  let table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const bodyTxtArr = ["George", 3, "small", 20];
  bodyTxtArr.forEach(function(text){
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  btnEdit.textContent = "Edit";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl }