function fetchUserEntries(username) {
  const url = "http://localhost:8080/api/user-entries/read?request=" + username;

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
  return data;
}

// Example function to display user entries on the page
function displayUserEntries(entries) {
  for (var i = 0; i < entries.length; i++) {
    console.log(entries[i]);
  }
}
