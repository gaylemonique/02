document.getElementById('openLetterBtn').onclick = function () {
  document.getElementById('letterModal').style.display = 'block';
};

document.getElementById('closeLetterBtn').onclick = function () {
  document.getElementById('letterModal').style.display = 'none';
};

window.onclick = function (event) {
  const modal = document.getElementById('letterModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
