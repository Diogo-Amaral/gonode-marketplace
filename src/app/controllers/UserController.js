const User = require('../models/User')

class UserController {
  async index (req, res) {
    const users = await User.find()

    return res.json(users)
  }

  async store (req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async destroy (req, res) {
    await User.findByIdAndDelete(req.params.id)

    return res.send()
  }
}
module.exports = new UserController()
