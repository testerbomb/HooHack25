function saveEntries() {
  // Prevent the default behavior (e.g., form submission)

  const entries = [
    new Entry([12, 10, 2023], 15.5, "Drove to work"),
    new Entry([13, 10, 2023], 8.2, "Used public transport"),
  ];

  userTest = User.parseUserFromJson(
    '{"email": "test@example.com", "userName": "hoo"}'
  );

  fetch("http://localhost:8080/api/user-entries/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: "NOTHING YET",
        userName: "hoo",
      },
      entries: Entry.toJsonData(entries),
    }),
  })
    .then((response) => response.text())
    .then((message) => {
      console.log("Fetch result:", message);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
