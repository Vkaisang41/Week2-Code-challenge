const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const list = document.getElementById("guest-list");

let guests = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  if (guests.length >= 10) {
    alert("Guest list is full (max 10).");
    return;
  }

  if (guests.includes(name)) {
    alert("Guest already added.");
    return;
  }

  guests.push(name);

  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name + " (Attending)";
  li.appendChild(nameSpan);

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle RSVP";
  toggleBtn.addEventListener("click", function () {
    if (nameSpan.textContent.includes("Attending")) {
      nameSpan.textContent = name + " (Not Attending)";
    } else {
      nameSpan.textContent = name + " (Attending)";
    }
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    list.removeChild(li);
    guests = guests.filter(g => g !== name);
  });

  li.appendChild(toggleBtn);
  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = "";
});
