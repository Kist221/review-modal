const info = {
    name: 'Compass High School',
    phone: 5202964070,
    email: 'Info@compasshighschool.com'
}

const links = {
    facebook: '',
    google: 'g.page/compasshigh/review',
    yelp: ''
}

function initFeedback() {
    vex.defaultOptions.className = 'vex-theme-default';
    vex.open({
        unsafeContent: ['<div class="myModal">',
            '<h2>',
            'How has your experience been with ' + info.name + '?',
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
            'Would you mind sharing your experience?',
            '</h4>',
            '<p class="myOpt" id="fbOpt"><a href="' + links.facebook + '" target="_blank" rel="noopener">Facebook</a></p>',
            '<p class="myOpt" id="gooOpt"><a href="' + links.google + '" target="_blank" rel="noopener">Google</a></p>',
            '<p class="myOpt" id="yelpOpt"><a href="' + links.yelp + '" target="_blank" rel="noopener">Yelp</a></p>',
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
jQuery('body').on('click', '.myOpt', function (e) {
    console.log(this.id);
});