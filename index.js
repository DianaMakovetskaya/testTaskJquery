

$(document).ready(function() {
    var table = $('#table_id').DataTable( {
        "ajax": "data/objects.txt",
        "columns": [
            { data : "FirstName" },
            { data : "LastName" },
            { data : "Phone" },
            { data : "DateBirth" },
            { defaultContent: "<div><button id='delete'>Delete!</button><button id='callback-button' class=\"header__button\" >View!</button></div>",}],
        "pageLength": 3,
    } );

    $('#table_id tbody').on( 'click', '#delete', function () {
        table
            .row( $(this).parents('tr') )
            .remove()
            .draw();
    } );

    $('#table_id tbody').on( 'click', '#callback-button', function () {
        $('.modal').addClass('modal_active');
        const {Country, City,Street} = table.row( $(this).parents('tr') ).data();
        $("#country").val(Country)
        $("#city").val(City)
        $("#street").val(Street)
        // let array = [];
        // array.push(table.row( $(this).parents('tr') ).data());
        //  $('#table_id2').DataTable( {
        //      retrieve: true,
        //      paging: false,
        //      searching: false,
        //      data: array,
        //      columns: [
        //         { data : "Country" },
        //         { data : "City" },
        //         { data : "Street" },]
        // } );
        $('.modal__close-button').click(function () {
            $('.modal').removeClass('modal_active');
        });
        $('.modal').mouseup(function (e) {
            let modalContent = $(".modal__content");
            if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
                $(this).removeClass('modal_active');
            }
        });
    } );

        // $('#callback-button').click(function () {
        //     $('.modal').addClass('modal_active');
        // });

} );
