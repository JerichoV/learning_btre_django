const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// norint kad pranesimas dingtu pats
setTimeout(function() {
    $('#message').fadeOut('slow');
}, 3000);
// pakeitus static failus reikia paleisti:
// python manage.py collectstatic
