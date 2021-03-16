function logout() {
    location.href = 'index.html';
}

function loadAllDetails() {
    location.href = 'all-registrations.html';
}

function getAllMothers() {
    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/all/mothers',
        method: 'post',
        dataType: 'json',

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                loadMothersTable(r);
            }
        }
    });
}

function loadMothersTable(results) {
    console.log("Record Count = " + results.data.length);
    var content = "";

    if (results.data.length === 0) {
        content += "<tr><td colspan='4'>No Data Available</td></tr>";
    }

    for(i=0; i<results.data.length; i++){
        content += "<tr><td>" + results.data[i].first_name + "</td>";
        content += "<td>" + results.data[i].last_name + "</td>";
        content += "<td>" + results.data[i].nic_no + "</td>";
        content += "<td><a href='#' onclick='viewMotherDetails(" + results.data[i].user_id + ")' class='btn btn-info btn-circle'><i class='fa fa-eye'></i></a></td></tr>";
    }

    $('#all-mothers').append(content);
}

function getAllChildren() {
    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/all/children',
        method: 'post',
        dataType: 'json',

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                loadChildrenTable(r);
            }
        }
    });
}

function loadChildrenTable(results) {
    console.log("Record Count = " + results.data.length);
    var content = "";

    if (results.data.length === 0) {
        content += "<tr><td colspan='4'>No Data Available</td></tr>";
    }

    for(i=0; i<results.data.length; i++){
        content += "<tr><td>" + results.data[i].first_name + "</td>";
        content += "<td>" + results.data[i].last_name + "</td>";
        content += "<td>" + results.data[i].mother_nic_no + "</td>";
        content += "<td><a href='#' onclick='viewChildDetails(" + results.data[i].user_id + ")' class='btn btn-info btn-circle'><i class='fa fa-eye'></i></a></td></tr>";
    }

    $('#all-children').append(content);
}

function viewMotherDetails(userId) {
    localStorage.setItem("userId", userId);
    location.href='view-mother.html';
}

function loadMyDetails() {
    var userId = localStorage.getItem("userId");
    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/mother',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify({'user_id': userId}),

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                for(key in r.data){
                    $('#' + key).val(r.data[key]);
                }
                location.href='view-mother.html';
            }
        }
    });
}

function loadMotherDetails() {
    var userId = localStorage.getItem("userId");
    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/mother',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify({'user_id': userId}),

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                for(key in r.data){
                    $('#' + key).val(r.data[key]);
                }
            }
        }
    });
}

function viewChildDetails(userId) {
    localStorage.setItem("userId", userId);
    location.href='view-child.html';
}

function loadChildDetails() {
    var userId = localStorage.getItem("userId");
    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/child',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify({'user_id': userId}),

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                if (r.status) {
                    for(key in r.data){
                        $('#' + key).val(r.data[key]);
                    }
                }
            }
        }
    });
}

var errorMsg = document.getElementById("error-msg");

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMsg.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMsg.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMsg.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMsg.innerHTML = "An unknown error occurred.";
            break;
    }
}

function saveLocation(e) {
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
}

function showPosition(position) {
    var userId = localStorage.getItem("userId");

    $.ajax({
        url: 'http://54.166.227.166:3000/api/save/location',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify({'user_id': userId, 'latitude': position.coords.latitude, 'longitude': position.coords.longitude}),

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                swal ('Success', 'Location Saved', 'success');
            }
        }
    });
}

function viewLocation(e) {
    e.preventDefault();
    var userId = $('#mother_id').val();

    $.ajax({
        url: 'http://54.166.227.166:3000/api/get/location',
        method: 'post',
        dataType: 'json',
        data: JSON.stringify({'user_id': userId}),

        error: function (e) {
            console.log(e);
        },
        success: function (r) {
            if (r.status) {
                if (r.data.latitude > 0 && r.data.longitude > 0) {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(openLocation, showError);
                    }
                    localStorage.setItem("latitude", r.data.latitude);
                    localStorage.setItem("longitude", r.data.longitude);
                } else {
                    swal ('Warning', 'No Saved Location', 'warning');
                }
            } else {
                swal ('Warning', 'No Saved Location', 'warning');
            }
        }
    });
}

function openLocation(position) {
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");

    window.open("https://www.google.com/maps/dir/'" + position.coords.latitude + ',' + position.coords.longitude + "'/'" + latitude + ',' + longitude + "'", '_system');
}
