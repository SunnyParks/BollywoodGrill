document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('RequestsTextfield');
    const containerHeight = document.getElementById('ContainerID').offsetHeight - textarea.offsetHeight;

    document.addEventListener('mouseup', function () {
        document.getElementById('ContainerID').style.height = textarea.offsetHeight + containerHeight + 'px';
    });
});
