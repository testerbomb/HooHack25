function saveEntries(entries, user) {
  // Prevent the default behavior (e.g., form submission)

  userTest = User.parseUserFromJson(
    '{"email": "test@example.com", "userName": "hoo"}'
  );
  test = new User("NOTHING", "hoo");
  fetch("http://localhost:8080/api/user-entries/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: User.toJson(user),
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
