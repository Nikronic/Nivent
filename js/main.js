var loadFile = function (event, target_id) {
    var output = document.getElementById(target_id);
    output.src = URL.createObjectURL(event.target.files[0]);
};

