$(document).ready(function () {
    $("#dob").datepicker();

    $('form').submit(function (event) {
        event.preventDefault();
        if (confirm('Are you sure you want to submit the form?')) {
            $(this).unbind('submit').submit();
        }
    });
    $('#dob').click(function (event) {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        console.log("hi")
        if (password != confirmPassword) {
            var submitbtn = $('#submitBtn')
            submitbtn.css('background-color', 'red');
            submitbtn.val('Passwords do not match.');

        }

    });
});
