const articles = [
  { title: "JS Features", tags: ["javascript", "es6", "webdev"] },
  { title: "CSS Tips", tags: ["css", "frontend"] },
  { title: "Node.js Guide", tags: ["javascript", "backend", "node"] },
];

const allTags = articles.flatMap((article) => article.tags);
console.log(allTags);
