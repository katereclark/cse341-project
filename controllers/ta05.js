exports.postCreateCookie = (req, res, next) => {
    console.log('Cookie has been created');
};

exports.postStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    console.log('Style posted');
    res.redirect('/ta05'); 
};

exports.postCounter = (req, res, next) => {
    req.session.counter += Number(req.body.constant);
    console.log('Counter posted');
    res.redirect('/ta05');
};

exports.resetSession = (req, res, next) => {
    if (req.body.reset === 'true') {
        req.session.destroy(() => {
        res.redirect('/ta05');
        });
    } else {
        res.redirect('/ta05');
    }
};

exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined || !req.session.style === undefined) {
        req.session.counter = 0;
    }
    res.render('pages/ta05', {
        title: 'Team Activity 05',
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
};