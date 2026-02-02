/* Data validation for Daily Dog subscribe form */

function textfield(field) {
    let txt = document.getElementById(field).value;

    if (txt.length < 1)
        return field + " cannot be blank\n";
    else
        return "";
}

function dropdown(field) {
    let ndx = document.getElementById(field).selectedIndex;

    if (ndx == -1)
        return "No " + field + " option selected\n";
    else
        return "";
}

function checkbox(field) {
    let cbox = document.getElementById(field).checked;
    
    if (cbox != null && cbox == true)
        return "";
    else
        return field + " must be checked\n";
}

function radioset(field) {
    let rad = document.getElementsByName(field);
    let numChecked = 0;

    for (i=0; i<rad.length; i++) {
        if (rad[i].checked == true)
            numChecked++;
    }
    
    if (numChecked == 0)
        return "No " + field + " radio button selected\n";
    else
        return "";
}

function validate() {
    let msg = textfield('petname');
    msg += dropdown('gender');
    msg += dropdown('food');
    msg += radioset('age');
    msg += checkbox('subscribe');
    
    if (msg.length > 0) {
        alert(msg);
        return false;
    } else
        return true;
}




