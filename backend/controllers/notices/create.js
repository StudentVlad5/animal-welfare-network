const { Notices } = require("../../models");
const sharp = require('sharp');

const createNotices = async (req, res, next) => {
    const {user, body, params, file} = req
    const createFile = sharp(file)
    .resize(320, 320)
    .toFile(`${file.split('.')[0]}.webp`, (err, info) => { console.log(err) });
    const {_id} = user
    const {category} = params
    const lower = category.toLowerCase()
    const fullData = !!createFile
    ? { ...body, category: lower, owner: _id, imageUrl: file.path }
    : { ...body, category: lower, owner: _id };
    
    const notices = await Notices.create(fullData);
    res.status(201).json(notices)

}

module.exports = createNotices;