
function index(req, res) {
    res.render('index', {
        title: 'Page Title',
        testArray: [
            "1", 
            "2", 
            "3", 
            "4"
        ]
    });
}
exports.index = index;
