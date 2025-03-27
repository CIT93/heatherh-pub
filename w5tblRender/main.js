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

  const output = document.getElementById("output");

  pets.forEach((obj) => {
    if (obj.fur === "tabby" || obj.fur === "orange") {
      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdBehavior = document.createElement("td");
      const tdMischief = document.createElement("td");
      tdMischief.textContent = `${obj.mischief}`;
      tdName.textContent = `${obj.name}`;
      tdBehavior.textContent = `${obj.behavior}`;
      // td.textContent = `${obj.name} is always ${obj.behavior} and recently this little stinker was caught ${obj.mischief}`;
      table.appendChild(tr);
      tr.appendChild(tdName);
      tr.appendChild(tdBehavior);
      tr.appendChild(tdMischief);
      output.appendChild(table);
    }
    // if (obj.behavior === "sleepy" && obj.name === "Sunshine") {
    //   const newP = document.createElement("p");
    //   newP.textContent = `${obj.name} is always ${obj.behavior} and recently this little stinker was caught ${obj.mischief}`;
    //   output.appendChild(newP);
    // }
  });
}

displayPets();
