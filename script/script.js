// when "About" is clicked, add class to main div to display about me header, image, and paragraph
// when "portfolio" is clicked, add class to main div to display portfolio cards
// when "Contact" is clicked, add class to main div to display contact form

const aboutEl = $('#about');
const portfolioEl = $('#portfolio');

aboutEl.on('click', function() {
    $('#aboutDiv').removeClass('hidden');
    $('#portfolioDiv').addClass('hidden');
    $('#contactDiv').addClass('hidden');
});

portfolioEl.click(function() {
    $('#aboutDiv').addClass('hidden');
    $('#portfolioDiv').removeClass('hidden');
    $('#contactDiv').addClass('hidden');
});

var link = document.createElement('a');
link.href = url;
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));