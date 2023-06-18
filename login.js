$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        if (confirm('Are you sure you want to submit the form?')) {
            $(this).unbind('submit').submit();
        }
    });
});
