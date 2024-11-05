
const eventTitle = document.getElementById('event-title');

eventTitle.addEventListener('mouseover', function() {
    eventTitle.style.backgroundColor = 'tomato'; 
});


eventTitle.addEventListener('mouseout', function() {
    eventTitle.style.backgroundColor = ''; 
});
