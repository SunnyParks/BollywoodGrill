document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('RequestsTextfield');

    document.addEventListener('mouseup', function () {
        document.getElementById('ContainerID').style.height = textarea.offsetHeight + 512 + 'px';
    });
});
