AOS.init();

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
});

var musik = ''; // Pastikan isi musik jika ingin ada suara
var audio = document.querySelector('.audio');
if (musik && audio) {
    audio.src = musik;
}

function mulai() {
    if (audio) {
        audio.play();
    }
    window.scrollTo(0, 0);
    var mail_section = $('#mail-section');
    $('#mail').attr('src', 'assets/img/mail.gif'); // Animasi buka amplop
    setTimeout(function() {
        mail_section.css('opacity', 0);
        $('body').removeClass('overflow-hidden');
    }, 2000);
    setTimeout(function() {
        mail_section.removeClass('d-flex');
        mail_section.addClass('d-none');
    }, 4000);
}

function wa(isi) {
    if (audio) {
        audio.pause(); // Pause musik
        audio.currentTime = 0; // Reset ke awal
    }
    open("https://wa.me/6282228386077?text=" + encodeURIComponent("Hai ka Rayyan, aku mau " + isi));
}

async function makeawish() {
    var { value: kado } = await swal.fire({
        imageUrl: 'assets/img/wuih.png',
        title: 'Di hari ulang tahun ini, kamu mau apa???',
        imageWidth: 400,
        imageHeight: 400,
        confirmButtonColor: '#707372',
        confirmButtonText: 'Kirim ✈',
        input: 'text',
        showCancelButton: false
    });

    if (kado) {
        await swal.fire({
            imageUrl: 'assets/img/ayaya.png',
            title: 'Kirim jawabannya ke wa aku yaaa?',
            confirmButtonColor: '#707372',
            confirmButtonText: 'Kirim ✈'
        });
        wa(kado);
    } else {
        await swal.fire({
            icon: 'error',
            title: 'Jangan dikosongin dong!!!'
        });
        makeawish();
    }
}
