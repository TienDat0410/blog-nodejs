
class SiteController {
    //GET /
    home(req, res) {
        res.render('home');
    }
    //detail /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController;