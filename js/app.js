const contact = {
    phone: 5207974884,
    email: 'contactus@rosemanagement.com'
}

const locations = {
    CRA: 'https://shorturl.at/stwIQ',
    CRAE: 'https://shorturl.at/BEMT5',
    DRA: 'https://shorturl.at/fJO03',
    MRA: 'https://shorturl.at/gmnHR',
    PRA: 'https://shorturl.at/buCIM'
}

function initFeedback() {
    vex.defaultOptions.className = 'vex-theme-default'
    vex.open({
        unsafeContent: ['<div class="myModal">',
            '<h2>',
            'How has your experience been with Rose Academies?',
            '</h2>',
            '<br />',
            '<p>',
            '<span class="ratingBtn" id="yup">😀</span>',
            '<span class="ratingBtn" id="nope">😑</span>',
            '</p>',
            '</div>'
        ].join('')
    });
};

function goodFeedback() {
    vex.closeAll();
    vex.open({
        unsafeContent: ['<div class="myModal">',
            '<h2>',
            "We'd love to hear your experience!",
            '</h2>',
            '<h4>',
            'Which Rose location did you attend most recently?',
            '</h4>',
            '<p class="myOpt" id="CRA"><a href="' + locations.CRA + '" target="_blank" rel="noopener">Canyon Rose</a></p>',
            '<p class="myOpt" id="CRAE"><a href="' + locations.CRAE + '" target="_blank" rel="noopener">Canyon Rose East</a></p>',
            '<p class="myOpt" id="DRA"><a href="' + locations.DRA + '" target="_blank" rel="noopener">Desert Rose</a></p>',
            '<p class="myOpt" id="MRA"><a href="' + locations.MRA + '" target="_blank" rel="noopener">Mountain Rose </a></p>',
            '<p class="myOpt" id="PRA"><a href="' + locations.PRA + '" target="_blank" rel="noopener">Pima Rose</a></p>',
            '</div>'
        ].join('')
    });
}

function badFeedback() {
    vex.closeAll();
    vex.open({
        unsafeContent: ['<div class="myModal">',
            '<h2>',
            "OH NO! 😢",
            '</h2>',
            '<h4>',
            'Would you be willing to share your thoughts on how we can improve?',
            '</h4>',
            '<p class="myOpt"><a href="tel:' + contact.phone + '">Call Now</a></p>',
            '<p class="myOpt"><a href="mailto:' + contact.email + '">Message Us</a></p>',
            '</div>'
        ].join('')
    });
}

$('body').on('click', '#clickMe', initFeedback);
$('body').on('click', '#nope', badFeedback);
$('body').on('click', '#yup', goodFeedback);