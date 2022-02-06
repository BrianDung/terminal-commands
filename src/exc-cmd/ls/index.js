import fs from "fs";

const showListFileAndFolder = async (path) => {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (dirent.isFile()) {
      console.log(dirent.name);
    } else {
      console.log("\x1b[34m%s\x1b[0m", dirent.name); //blue
    }
  }
};

await showListFileAndFolder(process.cwd()).catch(console.error);
