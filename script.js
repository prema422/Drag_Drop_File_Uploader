const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

dropArea.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
});

function handleFiles(files){
    fileList.innerHTML = "";
    [...files].forEach(file => {
        const li = document.createElement("li");
        li.textContent = `${file.name} (${(file.size/1024).toFixed(2)} KB)`;
        fileList.appendChild(li);
    });
}
