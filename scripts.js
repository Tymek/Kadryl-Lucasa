$(function() {
    var i, j, row, id, color;
    for (i = 0; i < 7; i++) {
        $("#game").append('<div class="row"></div>');
        for (j = 0; j < 7; j++) {
            id = i + '-' + j;
            if (i < 3 || (i === 3 && j < 3)) {
                color = 'blue';
            } else if (i > 3 || (i === 3 && j > 3)) {
                color = 'green';
            } else {
                color = 'white';
            }
            $("#game").find('.row').last()
                .append('<div id="' + id + '" class="' + color + '">' + id + '</div>');
        }
    }
});
