function displayPets() {
  const pets = [
    {
      name: "Pikachu",
      fur: "tabby",
      behavior: "aggressive",
      mischief: "sitting on the keyboard",
    },
    {
      name: "Sunshine",
      fur: "yellow",
      behavior: "sleepy",
      mischief: "barking at ghosts",
    },
    {
      name: "George",
      fur: "orange",
      behavior: "insane",
      mischief: "knocking water off the counter",
    },
    {
      name: "Jasper",
      fur: "black",
      behavior: "purring",
      mischief: "eating his owner's hair",
    },
  ];
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const output = document.getElementById("output");

  pets.forEach((obj) => {
    if (obj.behavior === "insane" && obj.fur === "orange") {
      for (let key in obj) {
        const cell = document.createElement("td");
        cell.textContent = obj[key];
        tr.appendChild(cell);
      // td.textContent = `${obj.name} is always ${obj.behavior} and recently this little stinker was caught ${obj.mischief}`;
       
      }
    }
    // if (obj.behavior === "sleepy" && obj.name === "Sunshine") {
    //   const newP = document.createElement("p");
    //   newP.textContent = `${obj.name} is always ${obj.behavior} and recently this little stinker was caught ${obj.mischief}`;
    //   output.appendChild(newP);
    // }
  });

 table.appendChild(tr);
 output.appendChild(table);
}

displayPets();
