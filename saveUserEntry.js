function saveEntries() {
  // Prevent the default behavior (e.g., form submission)

  const entries = [
    {
      date: [12, 10, 2023],
      carbonEmmision: 15.5,
      description: "Drove to work",
    },
    {
      date: [13, 10, 2023],
      carbonEmmision: 8.2,
      description: "Used public transport",
    },
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
      entries: entries,
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
