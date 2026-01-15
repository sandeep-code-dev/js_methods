const fileSystem = {
  name: "root",
  subfolders: [
    { name: "docs", files: ["report.pdf", "notes.txt"] },
    {
      name: "images",
      files: ["pic1.jpg", "pic2.png"],
      subfolders: [{ name: "thumbnails", files: ["thumb1.jpg"] }],
    },
  ],
};

function getFilePaths(folder) {
  let paths = [];
  if (folder.files) {
    const filePaths = folder.files.map((file) => `${folder.name}/${file}`);
    paths = paths.concat(filePaths);
  }
  if (folder.subfolders) {
    const subPaths = folder.subfolders.map((subpath) => getFilePaths(subpath));
    paths = paths.concat(subPaths);
  }
  return paths;
}

console.log(getFilePaths(fileSystem));
