const uuid = require('uuid')
const path = require('path')
const { Devise } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req,res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const device = await Devise.create({name, price, brandId, typeId, img: fileName })
            
        
            return res.json(device)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req,res) {
        let {brandId, typeId} = req.query
        let devices
        if (!brandId && !typeId) {
            devices = await Devise.findAll()
        }
        if (brandId && !typeId) {
            devices = await Devise.findAll({where:{brandId}})
        }
        if (!brandId && typeId) {
            devices = await Devise.findAll({where: {typeId}})
        }
        if (brandId && typeId) {
            devices = await Devise.findAll({where: {brandId, typeId}})
        }

        return res.json(devices)
    }

    async getOne(req,res) {
        
    }
}

module.exports = new DeviceController()