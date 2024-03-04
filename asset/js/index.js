$("#searcher").on("keyup click input", function () {
    var val = $(this).val();
    if (val.length) {
        $(".secondDiv .entryDiv").hide().filter(function () {
            return $('input',this).val().toLowerCase().indexOf(val.toLowerCase()) != -1;
        }).show();
    }
    else {
        $(".secondDiv .entryDiv").show();
    }
});