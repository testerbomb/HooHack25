function fetchUserEntries(username) {
  const url = "http://localhost:8080/api/user-entries/read?request=" + username;

  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      const entries = Entry.mapFromJsonData(jsonData);
      console.log("User Entries:", entries);
      return entries;
    })
    .catch((error) => {
      console.error("Error fetching user entries:", error);
    });
}

function displayUserEntries(entries) {
  for (var i = 0; i < entries.length; i++) {
    console.log(entries[i]);
  }
}
