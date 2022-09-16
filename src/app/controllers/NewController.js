
class NewController {
    //GET /New
    index(req, res) {
        res.render('news');
    }
    //detail news/:slug
    show(req, res) {
        res.send('News Detail!!!');
    }
}

module.exports = new NewController;