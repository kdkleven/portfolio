// when "About" is clicked, add class to main div to display about me header, image, and paragraph
// when "portfolio" is clicked, add class to main div to display portfolio cards
// when "Contact" is clicked, add class to main div to display contact form

const aboutEl = $('#about');
const portfolioEl = $('#portfolio');
const download = $('#download');

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

//Download PDF
// function onStartedDownload(id) {
//     console.log(`Started downloading: ${id}`);
//   }
  
//   function onFailed(error) {
//     console.log(`Download failed: ${error}`);
//   }
  
//   var downloadUrl = window.location.url;
  
//   var downloading = browser.downloads.download({
//     url : downloadUrl,
//     filename : './resume/kk_Resume.docx',
//     conflictAction : 'uniquify'
//   });
  
//   downloading.then(onStartedDownload, onFailed);