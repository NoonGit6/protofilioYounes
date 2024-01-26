
const attachmentFile = document.getElementById('file');
const fileChosen = document.getElementById('file-chosen');

attachmentFile.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
})