const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const list = document.getElementById('guest-list');

let guests = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  if (guests.length >= 10) {
    alert("Guest list is full (max 10 guests).");
    return;
  }

  const li = document.createElement('li');
  li.textContent = name + " (Attending)";

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = "Toggle RSVP";
  toggleBtn.addEventListener('click', function () {
    if (li.textContent.includes("Attending")) {
      li.textContent = name + " (Not Attending)";
    } else {
      li.textContent = name + " (Attending)";
    }
    li.appendChild(toggleBtn);
    li.appendChild(removeBtn);
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener('click', function () {
    list.removeChild(li);
    guests = guests.filter(g => g !== name);
  });

  li.appendChild(toggleBtn);
  li.appendChild(removeBtn);
  list.appendChild(li);

  guests.push(name);
  input.value = "";
});
