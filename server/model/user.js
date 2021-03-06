const initTable = require('../config/db')
const Sequelize = require('sequelize')
const moment = require('moment')
const shortid = require('shortid')
const user = initTable.define('db_user', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  user_id:  {
    type: Sequelize.STRING(20),
    defaultValue: shortid.generate
  },
  role_id:Sequelize.STRING(20),
  role_name:Sequelize.STRING(24),
  account: Sequelize.STRING(100),
  name: Sequelize.STRING(100),
  password: Sequelize.STRING(32),
  type: {
    type: Sequelize.INTEGER(4),
    defaultValue:1,
    comment:'用户类型: 0: 系统注册 1: 管理平台添加 2:导入'
  },
  sex: Sequelize.INTEGER(4),
  avatar: {
    type: Sequelize.STRING(128),
    comment:'头像'
  }, 
  phone: Sequelize.STRING(12),
  status: {
    type: Sequelize.INTEGER(4),
    defaultValue:1,
    comment:'状态: 0：停用，1：启用(默认为1)'
  }, 
  create_user: Sequelize.STRING(20),
  update_user: Sequelize.STRING(128),
  delete_user: Sequelize.STRING(128),
  delete_time: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('delete_time')).format('YYYY-MM-DD HH:mm')
    }
  },
  flag: {
    type: Sequelize.INTEGER(4),
    defaultValue:1,
    comment:'状态: 0：删除，1：可用(默认为1)'
  }
}, {freezeTableName: true})

module.exports = user