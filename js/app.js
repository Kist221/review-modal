const info = {
    bizName: 'Rose Academies',
    phone: 5207974884,
    email: 'contactus@rosemanagement.com'
}

const links = {
    CRA: {
        facebook: '',
        google: 'https://shorturl.at/stwIQ',
        yelp: ''
    },
    CRAE: {
        facebook: '',
        google: 'https://shorturl.at/BEMT5',
        yelp: ''
    },
    DRA: {
        facebook: '',
        google: 'https://shorturl.at/fJO03',
        yelp: ''
    },
    MRA: {
        facebook: '',
        google: 'https://shorturl.at/gmnHR',
        yelp: ''
    },
    PRA: {
        facebook: '',
        google: 'https://shorturl.at/buCIM',
        yelp: ''
    }
}

function initFeedback() {
    vex.defaultOptions.className = 'vex-theme-default';
    vex.open({
        unsafeContent: ['<div class="myModal">',
            '<h2>',
            'How has your experience been with ' + info.bizName + '?',
            '</h2>',
            '<br />',
            '<p style="font-size: 75px;">',
            '<span class="ratingBtn" id="yup" style="margin: 10%;">😀</span>',
            '<span class="ratingBtn" id="nope" style="margin: 10%;">😑</span>',
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
            '<p class="myOpt" id="CRA"><a href="' + links.CRA.google + '" target="_blank" rel="noopener">Canyon Rose</a></p>',
            '<p class="myOpt" id="CRAE"><a href="' + links.CRAE.google + '" target="_blank" rel="noopener">Canyon Rose East</a></p>',
            '<p class="myOpt" id="DRA"><a href="' + links.DRA.google + '" target="_blank" rel="noopener">Desert Rose</a></p>',
            '<p class="myOpt" id="MRA"><a href="' + links.MRA.google + '" target="_blank" rel="noopener">Mountain Rose </a></p>',
            '<p class="myOpt" id="PRA"><a href="' + links.PRA.google + '" target="_blank" rel="noopener">Pima Rose</a></p>',
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
            '<p class="myOpt"><a href="tel:' + info.phone + '">Call Now</a></p>',
            '<p class="myOpt"><a href="mailto:' + info.email + '">Message Us</a></p>',
            '</div>'
        ].join('')
    });
}

jQuery('body').on('click', '#clickMe', initFeedback);
jQuery('body').on('click', '#nope', badFeedback);
jQuery('body').on('click', '#yup', goodFeedback);
jQuery('body').on('click', '.myOpt', function(e){
    console.log(this.id);
});