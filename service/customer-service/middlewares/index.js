const jwt = require("jsonwebtoken");
const Guest = require('../models/guest');
const Problems = require('../models/problems');

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    } else {
        return res.status(400).json({ message: 'Authorization Required' });
    }
    next();
}

exports.changePassword = (req, res) => {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user.role == "individualTrainee") {
        Guest.findOneAndUpdate({ userName: req.body.userName }, { password: req.body.password })
            .exec((error, result) => {
                if (error) return res.status(400).json({ error });
                if (result) return res.status(200).json({ message: "Password changed successfully" });
            });
    }
}

exports.addVideoNote = (req, res) => {
    const note = req.body.note;
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user.role == "individualTrainee") {
        Guest.findOne({ userName: user.userName })
            .exec((error, guest) => {
                if (error) return res.status(400).json({ error });
                if (guest) {
                    const key = guest.watching.videoId;
                    Guest.findOneAndUpdate({ userName: user.userName }, { $set: { notes: { key, note } } })
                        .exec((error, result) => {
                            if (error) return res.status(400).json({ error });
                            if (result) return res.status(201).json({ message: "Note added" });
                        });
                }
            });
    }
}

exports.editInfo = (req, res) => {
    const oldToken = req.headers.authorization;
    const user = jwt.verify(oldToken, process.env.JWT_SECRET);
    const _userName = req.body.userName;
    const _country = req.body.country;
    const _email = req.body.email;
    const _firstName = req.body.firstName;
    const _lastName = req.body.lastName;
    const _password = req.body.password;

    if (user.role === "individualTrainee") {
        Guest.findOneAndUpdate({ userName: user.userName }, {
            userName: _userName,
            email: _email,
            password: _password,
            firstName: _firstName,
            lastName: _lastName,
            country: _country
        })
            .exec((error, guest) => {
                if (error) return res.status(400).json({ message: "Error occurred!!!" });
                if (guest) {
                    const token = jwt.sign({ _id: guest._id, role: guest.role, userName: guest.userName }, process.env.JWT_SECRET, { expiresIn: '1d' });
                    return res.status(200).json({ token });
                }
            });
    }
}

exports.issueProblem = (req, res) => {
    const _problem = new Problems({
        problem: req.body.problem,
        issuer: req.user.userName,
        role: req.user.role,
    });
    _problem.save((error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'Something went wrong'
            });
        }
        if (data) {
            return res.status(201).json({ data })
        }
    });
}