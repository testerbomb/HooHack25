class Entry {
  constructor(date, carbonEmission, description) {
    this.date = date;
    this.carbonEmission = carbonEmission;
    this.description = description;
  }

  // Display method to show the entry data
  display() {
    console.log(
      `${this.date.join("/")} - ${this.description}: ${
        this.carbonEmission
      } kg CO2`
    );
  }

  // Static method to map JSON data to Entry instances
  static mapFromJsonData(jsonData) {
    return jsonData.map(
      (entry) => new Entry(entry.date, entry.carbonEmission, entry.description)
    );
  }

  // Static method to convert Entry instances back to JSON data
  static toJsonData(entries) {
    if (!Array.isArray(entries)) {
      console.error("Expected an array, but got:", entries);
      return [];
    }
    return entries.map((entry) => ({
      date: entry.date,
      carbonEmission: entry.carbonEmission,
      description: entry.description,
    }));
  }
}

// Usage: Let's say you have your JSON data
const jsonData = [
  {
    date: [12, 10, 2023],
    carbonEmission: 15.5, // fixed typo here
    description: "Drove to work",
  },
  {
    date: [12, 23, 2024],
    carbonEmission: 167.8,
    description: "Drove to home",
  },
];

// Map the JSON data to instances of the Entry class using the static method
const entries = Entry.mapFromJsonData(jsonData);

console.log(entries);

for (var i = 0; i < entries.length; i++) {
  entries[i].display();
  console.log("here");
}

class User {
  constructor(email, userName) {
    this.email = email;
    this.userName = userName;
  }
  static parseUserFromJson(jsonData) {
    // Parse the JSON string into a JavaScript object
    const userData = JSON.parse(jsonData);

    // Create a new User instance from the parsed data
    const user = new User(userData.email, userData.userName);

    return user;
  }
  static toJson(user) {
    return JSON.stringify({
      email: user.email,
      userName: user.userName,
    });
  }
  // You can add any additional methods or behaviors to this class as needed
}

// Function to parse JSON and create an instance of the User class

const jsonString = '{"email": "test@example.com", "userName": "hoo"}';

const userInstance = User.parseUserFromJson(jsonString);

console.log(userInstance);
