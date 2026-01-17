const userProfiles = [
  { id: 1, name: "Alice", tags: ["frontend", "react", "js"] },
  { id: 2, name: "Bob", tags: ["backend", "node", "db"] },
  { id: 3, name: "Charlie", tags: ["devops", "aws"] },
  { id: 4, name: "Diana", tags: ["js", "css"] },
];

const uniqueTags = userProfiles.flatMap((tag) => tag.tags);
console.log(uniqueTags);
