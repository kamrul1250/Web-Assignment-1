function previewImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function clearPreview() {
  document.getElementById("preview").src = "2.jpg";
  document.getElementById("Image").value = "";
}
function formUploaded() {
  alert("The form has been uploaded");
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('matrimonialForm');
  function onSubmit(event) {
    event.preventDefault();
    alert('The form has been uploaded');
    form.removeEventListener('submit', onSubmit);
    form.submit();
  }
  form.addEventListener('submit', onSubmit);
});
