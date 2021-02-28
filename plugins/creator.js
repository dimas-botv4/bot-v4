let handler = function (m) {
  // this.sendContact(m.chat, '6285809535507', 'Nurutomo', m)
  this.sendContact(m.chat, '6285809535507', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
