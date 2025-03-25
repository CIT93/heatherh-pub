const TBL = document.getElementById("tbl-data");
const TBLHEAD = document.getElementById("tbl-head");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTxtArr = [
    "Name",
    "Footprint"
  ];
  headingTxtArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
    // console.log(tr);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  TBLHEAD.appendChild(table);
  // return table;
}

function renderTbl(firName, cTotal) {
  // let table = renderTblHeading();
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  // const thead = document.createElement("thead");
  let tr = document.createElement("tr");
  // const headingTxtArr = [
  //   "Name",
  //   "Footprint"
  // ];
  // headingTxtArr.forEach(function (text) {
  //   const th = document.createElement("th");
  //   th.textContent = text;
  //   tr.appendChild(th);
    // console.log(tr);
  // });
  // thead.appendChild(tr);
  // table.appendChild(thead);
  
  // const tr = document.createElement("tr");
  // const bodyTxtArr = ["George", 20];
  // data.forEach(function () {
    const tdName = document.createElement("td");
    const tdTotal = document.createElement("td");
    tdName.textContent = firName;
    tdTotal.textContent = cTotal;
    tr.appendChild(tdName);
    tr.appendChild(tdTotal);
  // });
  // const td = document.createElement("td");
  // const btnEdit = document.createElement("button");
  // const btnDel = document.createElement("button");
  // btnDel.textContent = "Del";
  // btnEdit.textContent = "Edit";
  // td.appendChild(btnEdit);
  // td.appendChild(btnDel);
  // tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl, renderTblHeading };
