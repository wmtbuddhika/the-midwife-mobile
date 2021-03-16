function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function calculateAge(dob) {
    if (dob !== "") {
        $.ajax({
            url : 'pages/common/calculate-age.php',
            type : 'post',
            dataType: 'json',
            data: { 'dob': dob },

            error : function(e){
                console.log(e);
            },
            success : function(r){
                $('#age').val(r.age);
                $('#age-summary').val(r.age);
            }
        });
    }
}

function calculateAgeInMonths(dob) {
    if (dob !== "") {
        $.ajax({
            url : 'pages/common/calculate-age-month.php',
            type : 'post',
            dataType: 'json',
            data: { 'dob': dob },

            error : function(e){
                console.log(e);
            },
            success : function(r){
                $('#month').val(r.age);
            }
        });
    }
}