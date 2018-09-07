function openModal() {
    vex.defaultOptions.className = 'vex-theme-default'

    vex.open({
        unsafeContent: ['<div class="roseModal">',
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

function chooseSchool() {
    vex.closeAll();
    vex.open({
        unsafeContent: ['<div class="roseModal">',
            '<h2>',
            "We'd love to hear your experience!",
            '</h2>',
            '<h4>',
            'Which Rose location did you attend most recently?',
            '</h4>',
            '<p class="schoolOpt" id="CRA"><a href="https://shorturl.at/stwIQ" target="_blank" rel="noopener">Canyon Rose</a></p>',
            '<p class="schoolOpt" id="CRAE"><a href="https://shorturl.at/BEMT5" target="_blank" rel="noopener">Canyon Rose East</a></p>',
            '<p class="schoolOpt" id="DRA"><a href="https://shorturl.at/fJO03" target="_blank" rel="noopener">Desert Rose</a></p>',
            '<p class="schoolOpt" id="MRA"><a href="https://shorturl.at/gmnHR" target="_blank" rel="noopener">Mountain Rose </a></p>',
            '<p class="schoolOpt" id="PRA"><a href="https://shorturl.at/buCIM" target="_blank" rel="noopener">Pima Rose</a></p>',
            '</div>'
        ].join('')
    });
}

$('body').on('click', '#clickMe', openModal);

function bad() {
    vex.closeAll();
    vex.open({
        unsafeContent: ['<div class="roseModal">',
            '<h2>',
            "OH NO! 😢",
            '</h2>',
            '<h4>',
            'Would you be willing to share your thoughts on how we can improve?',
            '</h4>',
            '<p class="schoolOpt"><a href="tel:520.797.4884">Call Now</a></p>',
            '<p class="schoolOpt"><a href="mailto:contactus@rosemanagement.com">Message Us</a></p>',
            '</div>'
        ].join('')
    });
}

$('body').on('click', '#nope', bad);
$('body').on('click', '#yup', chooseSchool);