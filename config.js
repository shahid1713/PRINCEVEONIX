global.owner = "SKYZO" // JANGAN DI UBAH
global.owner2 = "ZYREXX"
global.bot = "VEONIX" // JANGAN DI UBAH
global.versi = "1.0" // JANGAN DI UBAH
global.skyzo = "https://wa.me/923375987957" // MASUKIN NO LU
global.zyrex = "https://wa.me/923375987957" // MASUKIN NO LU
global.ch = "https://whatsapp.com/channel/0029VahUbrs90x2wGeaWAc14"
global.url = "https://www.youtube.com/@kontol" // JANGAN DI UBAH
global.namastore = "-" // UBAH NAMA STORE LU
global.simbol = "▨" // BEBAS UBAH SIMBOL SESUAI SELERA LU
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

global.mess = {
    success: 'DONE BUG',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
     bugrespon: `\`[ # ]\` OTW BANTAI RIPPER KROCO`,
     donebug: `\`[ # ]\` SUKSES SEND BUG DEVICE SUDAH CRASH`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
