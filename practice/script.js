const allUsers = [
  { id: 101, username: "user_a" },
  { id: 102, username: "user_b" },
  { id: 103, username: "user_c" },
];

function getUserById(userId, userList) {
  return userList.find((user) => user.id === userId);
}

const specificUser = getUserById(102, allUsers);
console.log(specificUser);
const nonExistentUser = getUserById(999, allUsers);
console.log(nonExistentUser);
