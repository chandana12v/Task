var userDetails = [
    [
        'TILKOLTCL7560075',
        'CSTASK0011109',
        '-',
        '26-05-2021 <br> 11:49:39',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='new-btn'>NEW</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011108',
        '123456789',
        '25-05-2021 <br> 16:31:14',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='resolve-btn'>Resolved</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011109',
        '-',
        '26-05-2021 <br> 11:49:39',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='new-btn'>NEW</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011109',
        '-',
        '26-05-2021 <br> 11:49:39',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='new-btn'>NEW</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011108',
        '123456789',
        '25-05-2021 <br> 16:31:14',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='resolve-btn'>Resolved</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011108',
        '123456789',
        '25-05-2021 <br> 16:31:14',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='resolve-btn'>Resolved</button>"
    ],
    [
        'TILKOLTCL7560075',
        'CSTASK0011108',
        '123456789',
        '05-05-2021 <br> 16:31:14',
        'GVPN',
        '091KOLK623031442758/GVPN/Total Loss of Serv..',
        "<button type='button' class='resolve-btn'>Resolved</button>"
    ]

    
    
];


$(document).ready(function () {
    /**for initializing the datepicker */
    $('.input-group').datepicker(
        {
            autoclose: true,
            todayHighlight: true
        });

    var table = $('#respondTable').DataTable({
        'data': userDetails,
        'dom': 'rtlip',
        'pageLength':2,
        "pagingType": "simple_numbers",

        'columnDefs': [{
            'className': 'dt-body-center'
        }
        ],
        'columns': [
            { 'title': 'Link ID' },
            { 'title': 'Ticket ID' },
            { 'title': 'Vendor Reference #' },
            { 'title': 'Created Date' },
            { 'title': 'Product' },
            { 'title': 'Description' },
            { 'title': 'Status' }
        ],

    });

    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = $('#frmdate').datepicker("getDate");
            console.log(min);
            var max = $('#todate').datepicker("getDate");
            console.log(max);
            var startDate = new Date(data[3]); //col num of date...
            console.log(startDate);
            if (min == null && max == null) { return true; }
            if (min == null && startDate <= max) { return true; }
            if (max == null && startDate >= min) { return true; }
            if (startDate <= max && startDate >= min) { return true; }
            return false;
        }
    );

    
    $("#frmdate").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });
    $("#todate").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });

    // Event listener to the two range filtering inputs to redraw on input
    $('#frmdate, #todate').change(function () {
        table.draw();
    });
   
    /**below function used to search on datatable */
    $('.search-bar').keyup(function () {
        table.search($(this).val()).draw();
    });


});








