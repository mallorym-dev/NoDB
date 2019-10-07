const shows = ['Walking Dead', 'Breaking Bad', 'Stranger Things', 'Parks and Rec', 'Sherlock'];
const showGoals = ['Lost', 'Game of Thrones', 'Rick and Morty', 'Doctor Who'];

module.exports = {
    //get
    allShows(req, res) {
        res.status(200).send(shows)
    },

    //need get
    showsIWant(req, res) {
        res.status(200).send(showGoals);
    },


    //post
    addShow(req, res) {
        //add a show to the shows to see list
        const {showTitle} = req.body;
        console.log(showTitle)
        showGoals.push(showTitle);
        console.log(showGoals)
        res.status(200).send(showGoals);
    },

    //delete
    deleteShow(req, res) {
        const {index} = req.params;
        showGoals.splice(index, 1);
        res.status(200).send(showGoals);
    },

    deleteTwo(req, res) {
        const {index} = req.params;
        shows.splice(index, 1);
        console.log(shows);
        res.status(200).send(shows);
    },
    //put
    moveShow(req, res) {
        //move show from shows to see to shows ive seen list
        const {movedShow} = req.body;
        showGoals.map((el, i, arr) => {
            if (el === movedShow) {
                arr.splice(i, 1)
            }
        })
        shows.push(movedShow);
        res.status(200).send({showGoals, shows}); 
    }


    //put


}