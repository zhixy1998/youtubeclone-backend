const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    this.ctx.body = '你好, egg小智'
  }
}

module.exports = HomeController
