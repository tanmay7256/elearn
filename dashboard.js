$(document).ready(function () {
    $(".toggle-line").click(function () {
        var courseOptions = $(this).parent().siblings(".course-options");
        var progressBars = courseOptions.find(".progress-bar");

        courseOptions.slideToggle(function () {
            if (courseOptions.is(":visible")) {
                progressBars.each(function () {
                    var progressWidth = $(this).find(".progress-color").data("progress");
                    $(this).find(".progress-color").animate({ width: progressWidth }, 300);
                });
            } else {
                progressBars.find(".progress-color").animate({ width: 0 }, 300);
            }
        });
    });
});
