const users = require('../../users.json')

//CODE WORK IN PROGRESS TO PRACTICE ERROR HANDLING
module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);

    },

    getUser: (req, res) => {
        const { user_id } = req.params;

        if(!+user_id) {
            res.status(404).send('No users found')
        }
        
        const user = users.filter(user => user.id === +user.id);

        if(!user) {
            return res.status(404).send('User Not Found')
        }

        res.status(200).send(user)
    }
}