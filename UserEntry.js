function fetchUserEntries(username) {
  const url = `http://localhost:8080/api/user-entries/read?username=${encodeURIComponent(
    username
  )}`;

  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log("User Entries:", data); // Log the user entries
      displayUserEntries(data); // Call a function to display the entries
    })
    .catch((error) => {
      console.error("Error fetching user entries:", error);
    });
}

// Example function to display user entries on the page
function displayUserEntries(entries) {
  const entriesContainer = document.getElementById("entriesContainer");
  entriesContainer.innerHTML = ""; // Clear any existing entries

  entries.forEach((entry) => {
    const entryElement = document.createElement("div");
    entryElement.textContent = `Date: ${entry.date}, Value: ${entry.value}`;
    entriesContainer.appendChild(entryElement);
  });
}
