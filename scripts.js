function check() {
    var block;
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            id = i + '-' + j;
            block = $('[data-id=' + id + ']');
            if (i < 3 || (i === 3 && j < 3)) {
                if (!block.hasClass('green')) return false;
            } else if (i > 3 || (i === 3 && j > 3)) {
                if (!block.hasClass('blue')) return false;
            } else {
                if (!block.hasClass('white')) return false;
            }
        }
    }
    return true;
}

$(function() {
    var i, j, row, id, color;
    var done = false;
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
                .append('<div data-id="' + id + '" class="' + color + '"></div>');
        }
    }
    var white = [3, 3];
    $('.row div').on('click', function(e) {
        if (done) return;
        var t = $(this);
        if (t.hasClass('white')) return;
        var color;
        if (t.hasClass('blue')) {
            color = 'blue'
        } else if (t.hasClass('green')) {
            color = 'green';
        }
        var block = t.attr('data-id').split('-');
        var x = Math.sqrt(Math.pow(white[0]-block[0], 2) + Math.pow(white[1]-block[1], 2));
        if (x == 1 || x == 2) {
            $('[data-id=' + white.join('-') + ']').removeClass('white').addClass(color);
            white = block;
            $('[data-id=' + block.join('-') + ']').removeClass(color).addClass('white');
            $('#counter').text(parseInt($("#counter").text(), 10) + 1);
            if (check()) {
                done = true;
                $("#done").show();
            }
        }
    });
});
