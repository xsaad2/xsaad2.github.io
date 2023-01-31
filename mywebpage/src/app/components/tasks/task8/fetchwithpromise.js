const fileContent = document.querySelector("#file-content");

function readFiles() {
  Promise.all([
    fetch("file1.txt").then((res) => res.text()),
    fetch("file2.txt").then((res) => res.text()),
  ]).then(([file1, file2]) => {
    const lines1 = file1.split("\n");
    const lines2 = file2.split("\n");
    for (let i = 0; i < lines1.length; i++) {
      fileContent.innerHTML += `<span>${lines1[i]}</span><br>`;
      fileContent.innerHTML += `<span style="color: red;">${lines2[i]}</span><br>`;
    }
  });
}

readFiles();
