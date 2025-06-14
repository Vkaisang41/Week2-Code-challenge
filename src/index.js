// src/guestManager.js

let guests = [];

function addGuest(name, listElement) {
  name = name.trim();

  if (name === "") {
    return { success: false, error: "empty" };
  }

  if (guests.length >= 10) {
    return { success: false, error: "full" };
  }

  if (guests.includes(name)) {
    return { success: false, error: "duplicate" };
  }

  guests.push(name);

  const li = document.createElement('li');
  li.textContent = name + " (Attending)";

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = "Toggle RSVP";
  toggleBtn.addEventListener('click', () => {
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
  removeBtn.addEventListener('click', () => {
    listElement.removeChild(li);
    guests = guests.filter(g => g !== name);
  });

  li.appendChild(toggleBtn);
  li.appendChild(removeBtn);
  listElement.appendChild(li);

  return { success: true };
}

function resetGuests() {
  guests = [];
}

function getGuests() {
  return [...guests];
}

module.exports = { addGuest, resetGuests, getGuests };
