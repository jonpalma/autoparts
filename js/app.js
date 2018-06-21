$(document).ready(function () {
    if(!window.getComputedStyle(document.body).mixBlendMode) {
        $('body').addClass('no-mix-blend-mode');
    }

    $('#add-table-row').click(function () {
        addTableRow();
    });
});

var quotArr = [];

function addTableRow() {
    var brand = $('#brand'),
        model = $('#model'),
        year = $('#year'),
        piece = $('#piece'),
        object = $('#object'),
        table = $('#quot-table');

    if(
        brand.val() === '' || model.val() === '' || year.val() === '' ||
        piece.val() === '' || object.val() === ''
    ) {
        return;
    }

    var uuid = Math.random().toString(36).substring(7);

    table.append(
        '<div class="t-body row" id="'+uuid+'">' +
        '<div class="col"><span class="text">'+brand.val()+'</span></div>' +
        '<div class="col"><span class="text">'+model.val()+'</span></div>' +
        '<div class="col"><span class="text">'+year.val()+'</span></div>' +
        '<div class="col"><span class="text">'+piece.val()+'</span></div>' +
        '<div class="col"><span class="text">'+object.val()+'</span><i class="fas fa-times delete-row" onclick="deleteRow(this)"></i></div>' +
        '</div>'
    );


    var item = {
        id: uuid,
        brand: brand,
        model: model,
        year: year,
        piece: piece,
        object: object
    };

    quotArr.push(item)

    brand.val('');
    model.val('');
    year.val('');
    piece.val('');
    object.val('');
}

function deleteRow(btn) {
    var row = $(btn).closest('.t-body'),
        id = row.attr('id'),
        index = $.map(quotArr, function(obj, index) {
            if(obj.id === id) {
                return index;
            }
        });
    quotArr.splice(index[0],1);
    row.remove();
}

//Ajax contact form
$(function() {
    // Set up an event listener for the contact form.
    $('.contact-form').submit(function(e) {
        var form = $(this),
            formMessages = form.find('.form-output'),// Get the messages div.
            name = form.find('input[name=name]'),
            phone = form.find('input[name=phone]'),
            email = form.find('input[name=email]'),
            msg = form.find('textarea[name=msg]'),
            company = form.find('input[name=company]'),
            form_type = form.find('input[name=form_type]'),
            submitBtn = form.find('input[type=submit]');

        // Stop the browser from submitting the form.
        e.preventDefault();
        submitBtn.val("Enviando...");

        var form_data = {
            name: name.val(),
            phone: phone.val(),
            email: email.val(),
            company: company.val(),
            msg: msg.val(),
            form_type: form_type.val()
        };

        if(form_type.val() === 'cot') {
            var city = form.find('input[name=city]');
            form_data.city = city.val();
            form_data.quotArr = quotArr;
        }

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: form_data
        })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                formMessages.removeClass('alert alert-danger');
                formMessages.addClass('alert alert-success');

                // Set the message text.
                formMessages.text(response);

                // Clear the form.
                name.val('');
                phone.val('');
                email.val('');
                company.val('');
                msg.val('');
                submitBtn.val("Enviar");

                if(form_type.val() === 'cot') {
                    city.val('');
                    quotArr = [];
                }
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                formMessages.removeClass('alert alert-success');
                formMessages.addClass('alert alert-danger');

                // Set the message text.
                if (data.responseText !== '') {
                    formMessages.text(data.responseText);
                    submitBtn.val("Enviar");
                } else {
                    formMessages.text('Oops! Ocurrido un error no se pudo enviar la forma.');
                    submitBtn.val("Enviar");
                }
            })
            .always(function () {
                //$('.has-contetn').removeClass('has-content');
            });

    });

});