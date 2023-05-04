const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
var request = require("request");
var requestPromise = require("request-promise");
var cheerio = require("cheerio");
const SpamWatch = require("spamwatch");
var axios = require("axios").default;
//const reverseImageSearch = require("node-reverse-image-search");
const raejs = require("@jodacame/raejs");
var toUnicode = require("to-unicode");
var telefile = require("telefile");
const AnimeScraper = require("exa-anime-scraper");
const anime = new AnimeScraper.Animefenix();
const randomanime = require("random-anime");
const { Character } = require("mailist");
const translate = require("@vitalets/google-translate-api");
const googleTTS = require("google-tts-api");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
const { MongoClient } = require("mongodb");
var express = require("express");
const aniquote = require("aniquotes-npm");
const { randomQuote, getQuotesByAnime } = require("aniquotes-npm");
const quotes = require("aniquotes-npm/quotes");
const imgur = require("imgur");
var gis = require("g-i-s");
//const pokemoninfo = require("pokemoninfo"); uu
var convertapi = require("convertapi")("RGaQlTBWCjkfw889");
var tcpp = require('tcp-ping');


const google = require("googlethis");

var app = express();

const port =  process.env.PORT || 4000;
app.listen(port);
app
  .get("/", (request, response) => {
    var result = "Bot listo!";
    response.send(result);
  })

//mongodb+srv://noheAdmin:nohepass21@cluster0.ujzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require("mongoose");
const path = require("path");
//const uri = `mongodb+srv://noheAdmin:nohepass21@cluster0.ujzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
/*const uri =
  "mongodb://noheAdmin:nohepass21@localhost/nohebot?retryWrites=true&w=majority";*/
//let clientMongo = new MongoClient(uri);

const bot = new TelegramBot("5946973944:AAFznPo5dYL5W_OVud7G2958d9AEchKOKBY", {
  polling: true,
});

const client = new SpamWatch.Client(
  "BfIfgL9JHEcMouxYYDrvkeA8lIQo5zwjjICiObGqn1fx_8hTKdDXGhGMftQgYwXJ"
);

/**************************************************COMANDO START**************************************************/
bot.onText(/^\/start/, (msg) => {
  if (msg.chat.type == "supergroup") {
    bot.sendAnimation(
      msg.chat.id,
      "https://i.gifer.com/DyyF.gif",
      {
        caption:
          "⚔ _¡Un gusto saludarte!, ¡Considera hacerme administrador para acceder a todos mis comandos!_",
        parse_mode: "Markdown",
      }
    );
  }
  if (msg.chat.type == "private") console.log(msg);
  {
    bot.sendPhoto(
      msg.from.id,
      "https://telegra.ph/file/b7d913c3b336338281ecb.jpg",
      {
        caption: `*¡Bienvenido!* 👑[${msg.from.first_name}](tg://user?id=${msg.from.id})... \n\n_ ⚔Comencemos con esta nueva enseñanza, soy 🗡Odin Allfather y seré el encargado de ayudarte en esta travesía.🌬 \n\n 🔮Usa /help (para mostrar mis funciones y como puedo ayudarte). \n\n✅Visitanos para más talleres y tips en nuestra página._`,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "¡Vamos allá! ➡",
                url: "http://www.mundopaganodehierbamaga.com",
              },
            ],
          ],
        },
      }
    );
  }
});

/**************************************************ID USUARIOS**************************************************/
bot.onText(/^\/myid/, (msg) => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  bot.sendMessage(chatId, `<b>🔐Tú ID es:</b> <code>${myId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/id/, (msg) => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  bot.sendMessage(chatId, `<b>🔐Tú ID es:</b> <code>${myId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/usuariosgban/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendDocument(chatId, "UsuariosGban.txt")

});



bot.onText(/^\/chatid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<b>🔏ID del chat:</b> <code>${chatId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/userid/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.reply_to_message.from.id;

  bot.sendMessage(chatId, `<b>🔓ID del usuario:</b> <code>${userId}</code>`, {
    parse_mode: "HTML",
  }),
    { parse_mode: "Markdown" };
});

/**************************************************REACCIONES**************************************************/


/**************************************************REACCIONES PERSONALIZADAS**************************************************/

bot.onText(/\/rbesar (.+)/, (msg, match) => {
  var chatid = msg.chat.id;
  const razon = match[1];
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://pa1.narvii.com/6098/65c9515218349a760663e31056fb030d9bd75015_hq.gif",
    "https://i.gifer.com/Jr4.gif",
    "https://i.pinimg.com/originals/63/25/8f/63258f26e4500bab94c5f15665daa48b.gif",
    "https://pa1.narvii.com/6120/2d5a229df8e3efa93096ce438cd8477e163c475f_hq.gif",
    "https://acegif.com/wp-content/uploads/anime-kiss-29.gif",
    "https://i.pinimg.com/originals/97/2c/2e/972c2eb564b9936ab05ffa960c1c632e.gif",
    "https://media1.tenor.com/images/ea51c3a083c73bf81a3c5ee6d4165115/tenor.gif",
    "https://i.pinimg.com/originals/9a/a8/7e/9aa87eb823b8c571fa14c75fc2576241.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  bot.sendAnimation(chatid, admins[margarita], {
    caption: `[${usuario}](tg://user?id=${msg.from.id}) _le ha dado un beso a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) ❤️ \n\n*💋Motivo del beso:* ${razon}`,
    parse_mode: "Markdown",
  });
});

bot.onText(/\/rabrazar (.+)/, (msg, match) => {
  var chatid = msg.chat.id;
  const razon = match[1];
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://thumbs.gfycat.com/ImmaterialHappygoluckyHoneybadger-max-1mb.gif",
    "https://acegif.com/wp-content/gif/anime-hug-1.gif",
    "https://i.pinimg.com/originals/c6/3a/48/c63a48856edab67f2e5c9b9c8a10d21e.gif",
    "https://i.pinimg.com/originals/c8/76/3e/c8763ecc23bca88447a90c1313b847de.gif",
    "https://acegif.com/wp-content/gif/anime-hug-35.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  bot.sendAnimation(chatid, admins[margarita], {
    caption: `Aw [${usuario}](tg://user?id=${msg.from.id}) _le ha dado un abrazo a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) 💌 \n\n*🙈Motivo del abrazo:* ${razon}`,
    parse_mode: "Markdown",
  });
});

/**************************************************INFORMACION COMPLETA USUARIO**************************************************/

bot.onText(/^\.info|^\/info/, function onMessage(msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  const myId = msg.from.id;
  const myname = msg.from.first_name;
  var last_name = msg.from.last_name;
  const userName = msg.from.username;
  const ae = msg.from.is_bot;
  var lang = msg.from.language_code;
  const nose = msg.chat.title;
  var calificacion = [
    `1⭐️`,
    `2⭐️`,
    `3⭐️`,
    `4⭐️⭐️`,
    `5⭐️⭐️`,
    `6⭐️⭐️⭐️`,
    `7⭐️⭐️⭐️`,
    `8⭐️⭐️⭐️`,
    `9⭐️⭐️⭐️⭐️`,
    `10⭐️⭐️⭐️⭐️⭐️`,
    `-1`,
    `-2`,
    `-3`,
    `-4`,
    `-5`,
  ];
  var ma = Math.random();
  var puntaje = Math.floor(ma * calificacion.length);

  if (msg.from.last_name == undefined) {
    (last_name = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.from.username == undefined) {
    (userName = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.from.language_code == undefined) {
    lang = "No establecido:(";
  }
  if (msg.from.language_code == "es") {
    lang = "Español.";
  }
  if (msg.from.language_code == "en") {
    lang = "Inglés.";
  }
  if (msg.from.is_bot == "false") {
    is_bot = "Falso, Tenemos un humano.";
  }

  bot.getUserProfilePhotos(userId, 0, 1).then(function (data) {
    bot.sendPhoto(chatId, data.photos[0][0].file_id, {
      caption: `╒═══「 <code>Información:</code> 」\n\n➜<b><i>Nombre:</i></b> ${myname}\n\n➜<b><i>Apellido:</i></b> ${last_name}\n\n➜<b><i>Alias:</i></b> @${userName}\n\n➜<b><i>ID:</i></b> <code>${myId}</code>\n\n➜<b><i>Perfil:</i></b> <a href="tg://user?id=${myId}">Link del Usuario</a>\n\n➜<b><i>Lenguaje:</i></b> ${lang}\n\n➜<b><i>Calificación de Gura:</i></b> <code>${calificacion[puntaje]}</code>`,
      parse_mode: "HTML",
    });
  });
});
bot.onText(/^\.uinfo|^\/uinfo/, function onMessage(msg) {
  const chatId = msg.chat.id;
  const usuario = msg.reply_to_message.from.username;
  const userId = msg.reply_to_message.from.id;
  const name = msg.reply_to_message.from.first_name;
  const apellido = msg.reply_to_message.from.last_name;
  const bots = msg.reply_to_message.from.is_bot;
  const lenguaje = msg.reply_to_message.from.language_code;
  var calificacion = [
    `1⭐️`,
    `2⭐️`,
    `3⭐️`,
    `4⭐️⭐️`,
    `5⭐️⭐️`,
    `6⭐️⭐️⭐️`,
    `7⭐️⭐️⭐️`,
    `8⭐️⭐️⭐️`,
    `9⭐️⭐️⭐️⭐️`,
    `10⭐️⭐️⭐️⭐️⭐️`,
    `-1`,
    `-2`,
    `-3`,
    `-4`,
    `-5`,
  ];
  var ma = Math.random();
  var puntaje = Math.floor(ma * calificacion.length);

  if (msg.reply_to_message.from.last_name == undefined) {
    (msg.reply_to_message.from.last_name = "No establecido:("),
      { parse_mode: "Markdown" };
  }
  if (msg.reply_to_message.from.username == undefined) {
    (userName = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.reply_to_message.from.language_code == undefined) {
    lang = "No establecido:(";
  }
  if (msg.reply_to_message.from.language_code == "es") {
    lang = "Español.";
  }
  if (msg.reply_to_message.from.language_code == "en") {
    lang = "Inglés.";
  }

  bot.getUserProfilePhotos(userId, 0, 1).then(function (data) {
    bot.sendPhoto(chatId, data.photos[0][0].file_id, {
      caption: `╒═══「 <code>Información:</code> 」\n\n➜<b><i>Nombre:</i></b> ${name}\n\n➜<b><i>Apellido:</i></b> ${apellido}\n\n➜<b><i>Alias:</i></b> @${usuario}\n\n➜<b><i>ID:</i></b> <code>${userId}</code>\n\n➜<b><i>Perfil:</i></b> <a href="tg://user?id=${userId}">Link del Usuario</a>\n\n➜<b><i>Lenguaje:</i></b> ${lenguaje}\n\n➜<b><i>Calificación de Gura:</i></b> <code>${calificacion[puntaje]}</code>`,
      parse_mode: "HTML",
    });
  });
});

/**************************************************LINK DE UN GRUPO**************************************************/
bot.onText(/^\/chatlink/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.exportChatInviteLink(chatId).then(function (enlace) {
        bot.sendMessage(
          chatId,
          "🛡 _Enlace del grupo:_ " + chatTitle + "\n" + enlace,
          { parse_mode: "Markdown" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});
/**************************************************BORRADO DE UN GRUPO**************************************************/
bot.onText(/^\/delchatfoto/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.deleteChatPhoto(chatId).then(function (foto) {
        bot.sendMessage(chatId, `🛡 Foto del grupo: ${chatTitle} eliminada.`);
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/delchatsticker/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.deleteChatStickerSet(chatId).then(function (foto) {
        bot.sendMessage(
          chatId,
          "🛡 Pack de stickers del grupo " +
            chatTitle +
            "eliminado." +
            "\n" +
            foto
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
/**************************************************LINK DE UN GRUPO**************************************************/

bot.onText(/^\/salirbot/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.leaveChat(chatId).then(function (foto) {
        bot.sendMessage(chatId, "🛡 Mi momento  de evolucionar ha llegado..." + "\n" + foto);
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\.staff|^\/staff/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var grupo = msg.chat.title;
  var chatype = msg.chat.type;

  bot.getChatAdministrators(chatId).then(function (users) {
    console.log(users);
    if (chatype == "supergroup") {
      string = "";
      idadmin = "";
      var creador = "";
      var titlecr = "";
      var idcreador = "";
      users.forEach((data) => {
        if (data.status == "creator") {
          creador += data.user.first_name;
          titlecr += data.custom_title;
          idcreador += data.user.id;
          if (titlecr == "undefined") {
            titlecr = "No establecido:(";
          }
        } else {
          idadmin = data.user.id;
          string +=
            `<a href="tg://user?id=${idadmin}">🤴🏻${data.user.first_name}</a>` +
            "\n";
        }
      });
      bot.sendMessage(
        chatId,
        `🛡 <i>Staff del grupo :</i>\n\n👑<i>Creador:</i> \n └<a href="tg://user?id=${idcreador}">${creador}</a> \n\n🛡<i>Administradores:</i> \n${string}`,
        { parse_mode: "HTML" }
      );
    }
  });
});

/**************************************************BORRADO DE MENSAJES**************************************************/

bot.onText(/^\/del/, (msg) => {
  var chatId = msg.chat.id;
  var messageId = msg.message_id;
  var replyMessage = msg.reply_to_message.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.deleteMessage(chatId, messageId);
  bot.deleteMessage(chatId, replyMessage);
});
/**************************************************OCIO EMOJIS JUEGO**************************************************/

bot.onText(/^\.dardo|^\/dardo/, (msg) => {
  const opts = {
    emoji: "🎯",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/dado/, (msg) => {
  bot.sendDice(msg.chat.id);
});

bot.onText(/^\/boliche/, (msg) => {
  const opts = {
    emoji: "🎳",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/tragaperra/, (msg) => {
  const opts = {
    emoji: "🎰",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/basket/, (msg) => {
  const opts = {
    emoji: "🏀",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/futbolito/, (msg) => {
  const opts = {
    emoji: "⚽",
  };
  bot.sendDice(msg.chat.id, opts);
});

/**************************************************CODIGOS QR**************************************************/

bot.onText(/^\/qr/, function (msg) {
  console.log(msg);
  var userId = msg.from.first_name;
  var data = msg.text.substring(3).trim();
  var imageqr =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + data;
  bot.sendMessage(
    msg.chat.id,
    "[🛡](" + imageqr + `)${userId} aqui tienes tu codigo QR de la URL:` + data,
    { parse_mode: "Markdown" }
  );
});

/**************************************************PIN Y UNPIN**************************************************/

bot.onText(/^\/pin/, function (msg) {
  if (msg.reply_to_message == undefined) {
    return;
  }

  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var chatype = msg.chat.type;
  var replyFrom = msg.reply_to_message.message_id;
  var fromName = msg.from.first_name;

  const opts = {};
  opts.disable_notification = false;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      if (chatype == "supergroup") {
        bot.pinChatMessage(chatId, replyFrom);
        bot.deleteMessage(chatId, messageId);
      } else if (chatype == "private") {
        bot.sendMessage(chatId, "Comando solo disponible en supergrupos");
      } else if (chatype == "group") {
        bot.sendMessage(chatId, "Comando solo disponible en supergrupos.");
      }
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/unpin/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var fromName = msg.from.first_name;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.unpinChatMessage(chatId);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/unallpin/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var fromName = msg.from.first_name;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.unpinAllChatMessages(chatId);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************COMANDO BAN Y UNBAN**************************************************/
bot.onText(/^\/kick/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.unbanChatMember(chatId, replyId);
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🗡 <i>Odin ha expulsado a el usuario</i> ${replyName} <i>ID</i> (<code>${replyId}</code>).`,
          {
            parse_mode: "HTML",
          }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/ban/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        var frases = [
            `⚔ <i>Este no era tu sitio</i> <a href="tg://user?id=${replyId}">${replyName}</a> ... \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>El respeto es primordial que te vaya bien</i> <a href="tg://user?id=${replyId}">${replyName}</a> ... \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>Los hombres generosos y valientes viven mejor y rara vez sufren; pero el cobarde lo teme todo...</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>hasta la proxima...<i> \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>Como huésped debes ser precavido al llegar al banquete, calla y escucha; oídos atentos, ojos alerta: así se protege un hombre sabio...</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>expulsado.</i> \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>Este no era tu sitio</i> <a href="tg://user?id=${replyId}">${replyName}</a> ... \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>Cerca del rey, cerca del cadalso...</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i> eliminado.</i> \n\n <b>ID:</b> (<code>${replyId}</code>)`,
            `⚔ <i>Lleva tu espada y tu lanza cuando vayas por un camino, pues algún día puede aparecer tu enemigo.</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i> eliminado.</i> \n\n <b>ID:</b> (<code>${replyId}</code>)`,


          ];
          var ma = Math.random();
          var flor = Math.floor(ma * frases.length);
        bot.sendMessage(
          chatId, frases[flor],
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/\/rban (.+)/, (msg, match) => {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  let tipValue = match[1];
  bot.getChatMember(chatId, replyId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🗡 El usuario " + replyName + " ha sido baneado por: " + tipValue
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});
bot.onText(/^\/tban (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  var text = match[1];
  const ms = require("ms");

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .kickChatMember(chatId, replyId, {
          until_date: Math.round((Date.now() + ms(text + " days")) / 1000),
        })
        .then(function (result) {
          bot.deleteMessage(chatId, messageId);
          bot.sendMessage(
            chatId,
            ` <i> 🗡Odin a eliminado a el usuario</i> ${replyName} ID: (<code>${replyId}</code>), <i>nos vemos en</i> <b>${text}</b> <i>días.</i>`,
            { parse_mode: "HTML" }
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/unban/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.unbanChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `<i>🗡 Odin a otorgado el poder de regresar a el usuario</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>¡Magia a tope!</i> \n\n🗡 <b>ID:</b> (<code>${replyId}</code>)`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************COMANDO MUTE Y UNMUTE**************************************************/

bot.onText(/^\/tmute (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  var tiempo = match[1];

  var ms = require("ms");

  const perms = {};
  perms.can_send_message = false;
  perms.can_send_media_messages = false;
  perms.can_send_other_messages = false;
  perms.can_can_add_web_page_previews = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .restrictChatMember(
          chatId,
          replyId,
          { until_date: Math.round(Date.now() + ms(tiempo + "days") / 1000) },
          perms
        )
        .then(function (result) {
          bot.deleteMessage(chatId, messageId);
          bot.sendMessage(
            chatId,
            `<i> 🗡Odin a silenciado a el usuario</i> ${replyName} (<code>${replyId}</code>) <i>nos vemos en</i> <b>${tiempo}</b> <i>días.</i>`,
            { parse_mode: "HTML" }
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/unmute/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var fromName = msg.from.first_name;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var messageId = msg.message_id;
  const perms = {};

  perms.can_send_message = true;
  perms.can_send_media_messages = true;
  perms.can_send_other_messages = true;
  perms.can_can_add_web_page_previews = true;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.restrictChatMember(chatId, replyId, perms).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `<i>¡🗡Odin concede el poder de escribir de nuevo en el chat!</i> ${replyName} (<code>${replyId}</code>), <i>entra y habla.</i>`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/mute/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var fromName = msg.from.first_name;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var messageId = msg.message_id;
  const perms = {};

  perms.can_send_message = false;
  perms.can_send_media_messages = false;
  perms.can_send_other_messages = false;
  perms.can_can_add_web_page_previews = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.restrictChatMember(chatId, replyId, perms).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `<i> 🗡 Odin ha silenciado a el usuario</i> ${replyName} (<code>${replyId}</code>) <i>que tu silencio sirva de ejemplo para los demás...</i>`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER ADMIN**************************************************/

bot.onText(/^\/promoteadm/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = true;
  prop.can_change_info = false;
  prop.can_invite_users = true;
  prop.can_pin_messages = true;
  prop.can_restrict_members = true;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🗡 El poder de " +
            replyName +
            " ha aumentado. Ahora este usuario es un administador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/demoteadm/, function (msg) {
  var chatId = msg.chat.id;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_change_info = false;
  prop.can_delete_message = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          replyName +
            " ha perdido sus privilegios como administrador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER MOD**************************************************/

bot.onText(/^\/promotemod/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = true;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "!" +
            replyName +
            " ha adquirido un nuevo poder 🗡!. Ahora este usuario es un moderador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/^\/demotemod/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;
  prop.can_manage_voice_chats = true;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🗡Odin ha ejecutado una nueva tarea... Realizado. " + replyName + ", ya no será más moderador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER GERENTE**************************************************/
bot.onText(/^\/promoteger/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = true;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🗡Odin ha otorgado un nuevo conocimiento, ahora " + replyName + "será parte del equipo, es un gerente."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});
bot.onText(/^\/demoteger/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🗡 Odin ha desterrado a " +
            replyName +
            "a las profundidades de la tierra, ya no es gerente."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************MODOS SPAM**************************************************/
bot.onText(/\/spam (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "kick") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          `Bien, Odin allfather, <b>expulsará</b> a los usuarios que envien spam a partir de ahora.`,
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what, link)) {
              bot.kickChatMember(msg.chat.id, msg.from.id);
              bot.unbanChatMember(msg.chat.id, msg.from.id);
              bot.sendMessage(
                msg.chat.id,
                `🗡Odin Allfather ha detectado un enlace <b>sospechoso</b> del integrante: <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b> 🗡ID:</b> <code>${msg.from.id}</code>.`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "Alto, Solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }

  if (modo === "mute") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          "⚔ Odin Allfather, <b>muteará</b> a los usuarios que envien spam.",
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          const permis = {};
          permis.can_send_message = false;
          permis.can_send_media_messages = false;
          permis.can_send_other_messages = false;
          permis.can_can_add_web_page_previews = false;
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what)) {
              bot.restrictChatMember(msg.chat.id, msg.from.id, permis).then;
              bot.sendMessage(
                chatid,
                `⚔ He detectado un enlace <b>spam</b> del usuario <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b>⚔ ID:</b> <code>${msg.from.id}</code>`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "Alto, solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }
  if (modo === "ban") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          `⚔Odin Allfather apartir de ahora, <b>baneará</b> a los usuarios que envien spam.`,
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what)) {
              bot.kickChatMember(msg.chat.id, msg.from.id);
              bot.sendMessage(
                msg.chat.id,
                `⚔ He detectado un enlace <b>spam</b> del usuario <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b>⚔ ID:</b> <code>${msg.from.id}</code>`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "⚔ Solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }
});
/**************************************************COMANDO PING**************************************************/

let inicio = new Date();
setTimeout(function () {
  realizartarea(inicio);
}, 1000);

function realizartarea(fechainicial) {
  let fin = new Date();
  let diferencia = fin.getTime() - inicio.getTime();
  console.log(diferencia);
  diferencia / (10 * 60);
  return diferencia;
}
/**************************************************COMANDO REPITE MENSAJES**************************************************/

bot.onText(/\/msg (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const usuario = msg.from.id;
  const resp = match[1];
  var messageId = msg.message_id;
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.sendMessage(chatId, resp);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************BOT SALUDA A MSG HOLA**************************************************/

/*bot.on("message", msg => {
  if (msg.text) {
    const chatId = msg.chat.id;
    if (msg.text == "Hola") {
      bot.sendAnimation(
        chatId,
        "https://thumbs.gfycat.com/CapitalGreenFlea-size_restricted.gif",
        {
          caption: `-Hola, Hola ${msg.from.first_name}❤`,
        }
      );
    }
  }
});*/
/**************************************************COMANDO COPIAR A UN MSG**************************************************/

bot.onText(/^\!copiar/, (msg) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  bot.copyMessage(chat_id, from_chat_id, message_id);
});

/**************************************************COMANDO REENVIAR UN MSG**************************************************/

bot.onText(/^\!reenviar/, (msg) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  bot.forwardMessage(chat_id, from_chat_id, message_id);
});

/**************************************************ID MEDIANTE REENVIADO**************************************************/
/*bot.on("message", function (msg) {
    var text = msg.text;
    var chatId = msg.chat.id;
    var forwardid = msg.forward_from.id;
    var forwarduser = msg.forward_from.username;
    var forward = msg.forward_from;
    
    if(forward){
        bot.sendMessage(chatId, "ID del usuarioo: " + forwardid + "\nAlias: @" + forwarduser);
    }
    });*/

/*bot.on ("message", function(msg) {
    var chatid = msg.chat.id;
    var text = msg.text;

    if (text) {
        bot.sendMessage (chatid, text,{
            'parse_mode' : 'markdown'
        });

    }
});*/

/*******************************************************************************/



//LISTA NEGRA
//const black_list = [-1001476318529];
/*const black_list = [-1001476318529];

bot.on("message", async (msg) => {
  const chatID = msg.chat.id;
  const userID = msg.from.id;
  const username = msg.from.first_name;
  for (let i = 0; i < black_list.length; i++) {
    if (black_list[parseInt(i)] === chatID)
      await bot.leaveChat(chatID);
  }

});*/

/*******************************PERMISOS DE USUARIOS******************************************/

bot.onText(/\/setpoll (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: false,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🗡 <i> Odin es un ser tan poderoso que en este grupo ha bloqueado la entrada de <b>encuestas</b> para los usuarios.</i> \n\n❌<b>Encuestas</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🗡 A partir de este momento los usuarios pueden enviar <b>encuestas</b> nuevamente.</i>\n\n✅<b>Encuestas</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

bot.onText(/\/setmedia (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: false,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: false,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🗡 <i> Odin es un ser tan poderoso que en este grupo ha bloqueado la entrada de contenido <b>multimedia</b> para los usuarios.</i>\n\n❌<b>Stickers</b> \n❌<b>Gif</b> \n❌<b>Juegos</b> \n❌<b>Bots inline</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>A partir de este momento los usuarios pueden enviar contenido <b>multimedia</b> nuevamente.</i>\n\n✅<b>Stickers</b> \n✅<b>Gif</b> \n✅<b>Juegos</b> \n✅<b>Bots inline</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }
});

bot.onText(/\/setmsg (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: false,
          can_send_media_messages: false,
          can_send_polls: false,
          can_send_other_messages: false,
          can_add_web_page_previews: false,
          can_change_info: false,
          can_invite_users: false,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🗡 <i> Odin es un ser tan poderoso que en este grupo ha bloqueado la entrada de <b>mensajes</b> para los usuarios.</i>\n\n❌<b>Enviar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🗡 A partir de este momento los usuarios pueden enviar <b>mensajes</b> nuevamente al grupito.</i>\n\n✅<b>Enviar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }
});

bot.onText(/\/setinviteuser (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: false,
          can_pin_messages: false,
        };
        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🗡 <i> Odin es un ser tan poderoso que en este grupo ha bloqueado la entrada de <b>agregar miembros</b> para los usuarios.</i>\n\n❌<b>Añadir usuarios</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>A partir de este momento los usuarios pueden <b>agregar miembros</b> nuevamente al grupito.</i>\n\n✅<b>Añadir usuarios</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando."
        );
      }
    });
  }
});

bot.onText(/\/setpin (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🗡 <i> Odin es un ser tan poderoso que en este grupo ha bloqueado la entrada de <b>fijar mensajes</b> para los usuarios.</i>\n\n❌<b>Fijar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: true,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🗡 Odin ha otorgado un gran poder en este grupo!, a partir de este momento los usuarios pueden <b>fijar mensajes</b> en el grupo.</i>\n\n✅<b>Fijar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

/*******************************ENCUESTAS************************************************/


/*******************************CAMBIOS************************************************/

bot.onText(/\/settitledef/, (msg) => {
  let chatId = msg.chat.id;
  var userId = msg.reply_to_message.from.id;
  let usuario = msg.from.id;
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatAdministratorCustomTitle(chatId, userId, "OdinAdmin");
      bot.sendMessage(chatId, "<i>Titulo establecido del administrador.</i>");
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});
bot.onText(/\/settitle (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatAdministratorCustomTitle(chatId, userId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🗡 Titulo establecido del administrador:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

bot.onText(/\/setgtitle (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatTitle(chatId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🗡 Titulo establecido del grupo:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/\/setdescrip (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatDescription(chatId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🗡 Descripcion establecida del grupo:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando."
      );
    }
  });
});

/**************************************************BUSQUEDA VTUBERS*******************************************************/



/*******************************************************************************/
const menuOpts = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛡 ¡Conoceme!",
          callback_data: "1",
        },
        {
            text: "🐶 ¡Quiero donar!",
            callback_data: "2",
          },
      ],
      [
        {
          text: "🗡Admin",
          callback_data: "3",
        },
        {
          text: "🗡Spam",
          callback_data: "4",
        },
        {
            text: "🗡Ban",
            callback_data: "6",
          }
      ],
      [
       
        {
          text: "🗡Mute",
          callback_data: "7",
        },
        {
          text: "🗡Pin",
          callback_data: "8",
        },
        {
            text: "🗡Config",
            callback_data: "9",
          },
      ],
      [
       
        {
          text: "🗡Cambio",
          callback_data: "10",
        },
        {
          text: "🗡Del",
          callback_data: "11",
        },
        {
            text: "🗡ID",
            callback_data: "14",
          },
      ],
      [
    
        {
          text: "🗡Perfil",
          callback_data: "15",
        },
        {
          text: "🗡+ Chat",
          callback_data: "12",
        },
        {
            text: "➕Extras",
            callback_data: "23",
          },
      ],
      [
        {
          text: "🗡Traductor",
          callback_data: "29",
        },
        {
            text: "🗡Magia textual",
            callback_data: "36",
          },
      ],
      [

        {
          text: "🗡Telegraph",
          callback_data: "37",
        },
        {
          text: "🗡Herramientas",
          callback_data: "38",
        },
        {
            text: "🗡Stickers",
            callback_data: "42",
          },
      ]
    ],
  },
};

function menu(msg) {
  if (msg.chat.type == "supergroup") {
    bot.sendAnimation(
      msg.chat.id,
      "https://thumbs.gfycat.com/ElasticMeaslyHoatzin-max-1mb.gif",
      {
        caption: `*¡Vamos, te enseñaré de que estoy hecho!*, _🌍Visitanos para más talleres y tips en nuestra página._`,

        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Vamos→",
                url: "http://t.me/odinallfatherBot?start",
              },
              {
                text: "🌍 Sitio Web",
                url: "http://www.mundopaganodehierbamaga.com",
              },
            ],
          ],
        },
        parse_mode: "Markdown",
      }
    );
  }

  const opts = menuOpts;
  if (msg.chat.type == "private") {
    bot.sendMessage(
      msg.from.id,
      `🔍 ¡Ahora es tiempo de mostrarte y enseñarte en que soy bueno!, ¡navega en el menú para encontrar mis habilidades! \n\n🐶¡Apoya a la causa! tenemos una labor importante y es ayudar al mejor amigo del hombre, los perros... ayudanos a darles una felicidad alimentandolos cualquier apoyo sera recibido, contactame en el botón de donar. ¡Gracias! \n\n 🤖¿Te interesa un Bot o trabajo personal(APP, Sitio web, etc.)?, Contactame: @GNoheGremory`,
      opts
    );
  }
}

bot.onText(/\/help/, function onEditableText(msg) {
  menu(msg);
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  let opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "←Volver",
            callback_data: "menu",
          },
        ],
      ],
    },
  };
  let text;

  if (action === "1") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "¡Soy Odin Allfather y me han creado para estar a tu servicio!",
      show_alert: true,
    });
  }
  if (action === "2") {
text = "¡Contactame!, te apoyo con toda la información para que dones libremente a una vida canina. (@Runtyr)"
  }
  if (action === "3") {
    text =
      "⚔ En la administración del grupo encontará niveles de poder: \n\n/promoteadm: Promueve a un usuario con permisos de administrador del grupo. \n/demoteadm: Quita a un usuario los permisos de administrador del grupo.\n\n/promotemod: Promueve a un usuario como moderador. \n/demotemod: Quita de moderador a un usuario. \n\n/promoteger: Promueve a un usuario como gerente del grupo. \n/demoteger: Quita permisos de gerente a un usuario.";
  }

  if (action === "4") {
    text =
        "⚔¡Odin Allfather tambien protege tus grupos del spam! \n\n/spam <ban/kick/mute>: El administrador del grupo puede elegir el tipo de castigo para el usuario teniendo entre 3 opciones(ban, kick, mute) para su eleccion, Ejemplo: /spam ban, /spam kick, /spam mute. \n\n/spamwcheck <ID de usuario>: Verifica con la ID de un usuario si se encuentra baneado o no por la federación de @SpamWatch. \n\n¡¡¡IMPORTANTE!!!: Estamos protegidos por la federación de Spam Watch (@SpamWatch) y no permitirá el paso a  usuarios spammers, árabes, trolls, globalmente, si ingresan al grupo. (El bot debe ser administrador del grupo). Asi que cuidado...";
  }

  if (action === "6") {
    text =
      "⚔Comandos de eliminación de usuarios:  \n\n/kick: Elimina a un usuario con posibilidad de regreso. \n/ban: Elimina a un usuario haciendo respuesta a su mensaje. \n\n/rban <razón>: Elimina a un usuario añadiendo la razon de su eliminacion. \n\n/tban <días>: Establece el tiempo de baneo del usuario (El tiempo se determina en días, Ejemplo: /tban 1, /tban 2, etc.).";
  }
  if (action === "7") {
    text =
      "⚔ En ocasiones es nesesario silenciar a un usuario por razones que desafien al poderoso ODIN: \n\n/mute: Bloquea la entrada de mensajes para un usuario haciendo reply a un mensaje o con alias/ID. \n\n/tmute <días>: Bloquea la entrada de mensajes de un usuario con tiempo establecido (El tiempo se determina en días, Ejemplo: /tmute 1, /tmute 2, etc.). \n\n/unmute: Retira la entrada de mensajes para un usuario haciendo respuesta a su mensaje.";
  }
  if (action === "8") {
    text =
      "⚔ ¡¡¡FIJEMOS NOTICIAS IMPORTNTES!!!: \n\n/pin: Fija un mensaje en el grupo respondiendo un mensaje (texto, img, video, etc.). \n\n/unpin: Desfija un mensaje en el grupo. \n\n/unallpin: Desfija todos los mensajes pineados actuales.";
  }

  if (action === "9") {
    text =
      "⚔ Odin allfather, puede establecer diferentes permisos para los usuarios, los podemos ver a continuacion: \n\n/setpoll <on/off>: Cierra el reenvío y envío de encuestas para usuarios, dependiendo del modo activar o desactivar esta función. \n\n/setmedia <on/off>: Desactiva en el grupito el envío y reenvío de contenido multimedia, el modo se activa o desactiva dependiendo de la elección. \n\n/setmsg <on/off>: El staff del grupo bloquea la entrada de mensajes en el grupo, el grupito queda silenciado hasta revertir la acción. \n\n/setpin <on/off>: El creador o administrador del grupo puede permitir a los usuarios del grupito fijar mensajes, USAR BAJO SU RESPONSABILIDAD, por defecto este permiso viene desactivado. ";
  }

  if (action === "10") {
    text =
      "⚔ Odin Allfather actualiza tu grupo mas facil: \n\n/settitledef: Establece el titulo del administrador por defecto: OdinADMON. \n\n/settitle + Titulo de admin.: Establece el titulo personalizado del administrador haciendo reply a su mensaje. \n\n/setgtitle <Nuevo nombre>: Establece el nombre del grupo. \n\n/setdescrip <Nueva descripción>: Establece la descripcion personalizada del grupo.";
  }

  if (action === "11") {
    text =
      "⚔Eliminaciones: \n\n/del: Elimina un mensaje de un usuario respondiendo a uno de sus mensajes. \n\n/delchatfoto: Elimina la foto actual del grupo. \n\n/delchatsticker: Borra el pack de stickers establecido en el grupo. \n\n/salirbot: El bot sale del grupo.";
  }

  if (action === "12") {
    text =
      "⚔ Otras herramientas en el chat: \n\n/chatlink: Devuelve el enlace del grupo. \n\n/staff: El bot muestra la lista del creador con administradores en el grupo. \n\n@admin: Haces un llamado a los administradores del grupo. \n\n/msg <mensaje>: El bot envia el mensaje añadido al comando en el grupo. \n\n!copiar: El bot copiará cualquier tipo de mensaje en el grupo sin la etiqueta de reenviado. \n\n!reenviar: El bot reenvia cualquier tipo de mensaje en el chat con la etiqueta del nombre del usuario. \n\nNota: El bot por defecto da la bienvenida a los nuevos usuarios con mensajes random pero se eliminan automáticamente despues de 1 min.";
  }
  if (action === "14") {
    text =
      "⚔ ID: \n\n/myid o /id: Devuelve un mensaje con tu identificador de usuario. \n\n/userid: Devuelve un mensaje con el ID del usuario haciendo reply a su mensaje.\n\n/chatid: Devuelve un mensaje con el ID del grupo.";
  }
  if (action === "15") {
    text =
      "⚔ Información para los usuarios: \n/info: Responde con tu informacion de usuario dentro de Telegram .\n\n/uinfo: Devuelve la informacion de otro usuario haciendo respuesta a uno de sus mensajes.";
  }



  if (action === "23") {
    text =
      "⚔ Odin te hechizará con su forma de hacerte divertir: \n\n/dardo: Lanza un emoji de dardo probando tu suerte. \n\n/dado: Lanza un dado donde saldra un numero aleatorio del 1 al 6. \n\n/boliche: Lanza una bola de boliche a ver cuantos pinos tiras. \n\n/tragaperra: Vamos, mete una moneda a la maquina y prueba tu suerte. \n\n/basket: Toma una pelota e intenta canastar, Suerte. \n\n/futbolito: ¿Seras capaz de meter un gol?, Intentalo.";
  }



  if (action === "29") {
    text =
      "⚔ Los siguientes comandos te ayudaran a traducir texto fácilmente: \n\n/tr <codígo ISO>: Responde a un texto para traducirlo al lenguaje especificado en el comando, el bot detecta el idioma de origen.\nEjemplos: /tr es, /tr en, /tr pt \n\n/lenguajes: El bot muestra los lenguajes disponibles para ser utilizados en el traductor.";
  }

  if (action === "36") {
    text =
      "⚔ Odin Allfather da un poco de magia a tus textos: , vino a traer un estilo diferente a tus textos con los siguientes comandos: \n\n/uf <texto>: El texto añadido al comando se transformara así: ｏｄｉｎ ａｌｌｆａｔｈｅｒ \n\n/ui <texto>: El texto añadido se invierte al comando: opıu ɐןןɟɐʇɥǝɹ. \n\n/uc <texto>: El texto agregado al comando tendrá como resultado: ⓞⓓⓘⓝ ⓐⓛⓛⓕⓐⓣⓗⓔⓡ. \n\n/up <texto>: El texto agregado al comando cambiará el formato al siguiente ejemplo: ⒪⒟⒤⒩ ⒜⒧⒧⒡⒜⒯⒣⒠⒭ \n\n/urd <texto>: El texto insertado al comando tendrá el siguiente estilo: öḋïṅ äḷḷḟäẗḧëṛ \n\n/usp <texto>: El texto insertado tornará como resultado: ᴏᴅɪɴ ᴀʟʟꜰᴀᴛʜᴇʀ \n\n/ust <texto>: El texto agregado tendrá el siguiente estilo: øđɨn ȺłłfȺŧħɇɍ  \n\n/ur <texto>: El texto agregado al comando se pinta al réves: obiᴎ AllꟻATHɘᴙ";
  }
  if (action === "37") {
    text =
      "⚔ Odin te ofrece un almacenamiento en la nube con ¡¡¡TELEGRAPH ILIMITADA!!!: \n\n/tf: Responde a una imagen para subirla y el bot devuelve el enlace.\n\n/tg: Responde a una animación/gif para subirla y el bot responde con el enlace hecho. \n\n/tv: Responde a un video/mp4 para subirlo y el bot responde con el enlace hecho.";
  }
  if (action === "38") {
    text =
      "⚔ ¡¡¡ODIN VIENE EXPLOSIVO Y DISPUESTO A SER CREATIVO EN SUS PODERES ANCETRALES!!!: \n\n/nasaphoto: el bot responde con la fotogtafía del día tomada por la NASA. \n\n/swiki <búsqueda>: Devuelve el recurso informativo completo de la busqueda usando Wikipedia. \n\n/tts <texto>: ¡¡¡TEXTO A VOZ!!!. \n\n/searchduck <búsqueda>: Devuelve el primer resultado de Duck Duck Go (Navegador privado) para esta consulta. \n\n/paste: Comparte mensajes respondiendo con este comando a mensajes con el texto que deceas compartir, el bot responderá con una URL cargada con el texto. \n\n/diccionario <búsqueda>: ¡¡¡Busquedas en el diccionario de la real academia española!!! \n\n/clima <búsqueda>: Devuelve el estado meteorológico más actual sobre el lugar buscado. \n\nEjemplo: /clima mexico. \n\n/pais <búsqueda>: Contiene datos de un pais que se ingrese en la busqueda, tales como el código alfa, código de llamada, capital, etc.. \n\nNota: La búsqueda es exclusiva para un país en especifico, como Colombia, México, Perù, etc. \n\n/qr <URL>: El bot mandará en respuesta el QR creado apartir de la URL proporcionada listo para ser compartido. \n\n/upimgur: Responde a una imagen para cargarla a imgur y el bot responde con la url ya cargada. \n\n/gif <búsqueda>: El bot responde con un gif apartir de la consulta. \n\n/img <búsqueda>: El bot responde con una imagen a apartir de la consulta.\n\n/movie <nombre de pelicula>: Encuentra tús peliculas favoritas, con una descripción detallada. \n\n/serie <nombre de serie>: Haz la búsqueda de tus serie favoritas de plataformas famosas como Netflix, TV shows, ¡¡¡Y MAS!!!. ";
  }



  if (action === "42") {
    text =
      "¡¡¡LOS STICKERS VIENEN CON LA MAGIA DE ODIN ALLFATHER!!!, no te pierdas sus comandos a continuación: \n\n/stickers <búsqueda>: Encuentra packs de stickers a partir de la búsqueda. \n\n/idsticker: Respondes a un sticker para obtener su ID y sticker pack de origen. \n\n/getsticker: Respondes a un sticker para convertirlo en un archivo documento PNG.";
  }

  if (action === "menu") {
    if (msg.chat.type == "private") {
      text =  `🔍 ¡Ahora es tiempo de mostrarte y enseñarte en que soy bueno!, ¡navega en el menú para encontrar mis habilidades! \n\n🐶¡Apoya a la causa! tenemos una labor importante y es ayudar al mejor amigo del hombre, los perros... ayudanos a darles una felicidad alimentandolos cualquier apoyo sera recibido, contactame en el botón de donar. ¡Gracias! \n\n 🤖¿Te interesa un Bot o trabajo personal(APP, Sitio web, etc.)?, Contactame: @GNoheGremory`;
      opts.reply_markup = menuOpts.reply_markup;
    }
  }
  bot.editMessageText(text, opts);
});
/***************************************************************************************************************************+ */
/*bot.onText(/\/editable/, function onEditableText(msg) {
  var chatId = msg.chat.id;
  bot
    .sendMessage(chatId, "ᕙ༼*◕_◕*༽ᕤ", {
      parse_mode: "HTML",
    })
    .then(result => {
      bot.editMessageText("(-_-)", {
        chat_id: chatId,
        message_id: result.message_id,
      });
    });
});*/

/**************************************************************************************************************************************** */

/*bot.on("message", (msg) => {
  if (msg.text) {
    const chatId = msg.chat.id;
    const usersId = msg.reply_to_message.from.first_name;
    var contador = 0;
    contador1 = contador + 1;
    contador = contador1 + contador;

    if (msg.text == "+") {
      bot.sendMessage(chatId, contador + " ");
    }
  }
});*/

/*bot.onText(/\/setme (.+)/, (msg, match) => {
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  let chatId = msg.chat.id;
  var userId = msg.reply_to_message.from.id;
  let mebio = match[1];
  bot.sendMessage(chatId, "Informacion lista: " + mebio);
});*/

bot.onText(/\/clima (.+)/, function (msg, match) {
  var weather = match[1];
  var chatId = msg.chat.id;
  var Weather_key = "3d05aba1dfd2483686a64433212006";
  request(
    `https://api.weatherapi.com/v1/current.json?key=${Weather_key}&q=${weather}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        bot
          .sendMessage(chatId, "🐟_Estado actual de: _" + weather + "", {
            parse_mode: "Markdown",
          })
          .then(function (msg) {
            var res = JSON.parse(body);
            const city_name = res.location.name;
            const state_name = res.location.region;
            const country_name = res.location.country;
            const local_time = res.location.localtime;
            const temp_c = parseInt(res.current.temp_c);
            const temp_f = parseInt(res.current.temp_f);
            const condition_text = res.current.condition.text;
            const humidity = res.current.humidity;
            const wind_kph = parseFloat(res.current.wind_kph);
            const cloud = parseInt(res.current.cloud);
            const icon = res.current.condition.icon.replace("//", "");
            bot.sendDocument(chatId, icon, {
              caption: `Lugar encontrado: ${city_name} \nRegión: ${state_name} \nPais: ${country_name} \nFecha y Hora actual: ${local_time} \nTemperatura: ${temp_c}°C | ${temp_f}°F \nCondicion: ${condition_text} | Humedad: ${humidity} \nVelocidad del viento: ${wind_kph} | Nubes: ${cloud}`,
            });
          });
      }
    }
  );
});

bot.onText(/\/tempanimenext/, function (msg) {
  var chatid = msg.chat.id;
  request(
    `https://api.jikan.moe/v3/season/later`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var res = JSON.parse(body);
        var nombres = res.anime;

        const animestemp = nombres.map(function (nombre) {
          return nombre.title;
        });

        bot.sendMessage(
          chatid,
          "Animes de la proxima temporada: " + animestemp
        );
      }
    }
  );
});

bot.onText(/\/searchduck (.+)/, function (msg, match) {
  var duck = match[1];
  var chatid = msg.chat.id;
  request(
    `https://api.duckduckgo.com/?q=${duck}&format=json&pretty=1&no_html=1&skip_disambig=1`,
    {
      headers: {
        "Accept-Language": "es_LA",
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var res = JSON.parse(body);
        bot
          .sendPhoto(
            chatid,
            "https://blogthinkbig.com/wp-content/uploads/sites/4/2020/03/duckduckgo.jpg",
            {
              caption: `<i>🔎Resultado para:</i> <b>${res.Heading}</b> \n\n<code>${res.Abstract}</code>`,
              parse_mode: "HTML",
            }
          )
          .catch((err) => {
            bot.sendMessage(
              msg.chat.id,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      }
    }
  );
});
/*///////////////////////////////////////////////////////////////////////////////////////FUNCIONES YOUTUBE////////////////////////////////////////////////////////////////////////////////*/








bot.onText(/\/swiki (.+)/, function (msg, match) {
  var duck = match[1];
  var chatid = msg.chat.id;
  request(
    `https://api.duckduckgo.com/?q=${duck}&format=json&pretty=1&no_html=1&skip_disambig=1`,
    {
      headers: {
        "Accept-Language": "es_LA",
      },
    },
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `Muy bien ${msg.from.first_name}, he dado con la busqueda. \n\n🔎Resultados encontrados: ${res.Heading} \n\n✉️Informacion completa a continuacion: ${res.AbstractURL}`
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );
});

bot.onText(/\/gif (.+)/, function (msg, match) {
  var gif = match[1];
  var chatid = msg.chat.id;
  request(
    `https://g.tenor.com/v1/search?q=${gif}&key=C4EHLN61H00H&limit=1`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendAnimation(chatid, res.results[0].media[0].mediumgif.url);
        }
      } catch (err) {
        console.log(err);
      }
    }
  );
});

bot.onText(/\/pais (.+)/, function (msg, match) {
  var pais = match[1];
  var chatid = msg.chat.id;
  request(
    `https://restcountries.eu/rest/v2/name/${pais}`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `╭┈┈┈⋆┈┈⊰ 🇲🇽 ⊱┈┈⋆┈┈┈╮\n👑<b>País:</b> <code>${res[0].name}</code>
          \n<i>Codigo alfa-2:</i> <code>${res[0].alpha2Code}</code>\n<i>Codigo alfa-3:</i> <code>${res[0].alpha3Code}</code>
          \n📱<i>Codigo de llamada:</i> <code>+${res[0].callingCodes}</code>
          \n<i>Capital:</i> <code>${res[0].capital}</code>
          \n🌐<i>Latitud y longitud:</i> <code>${res[0].latlng}</code>
          \n📊<i>GINI:</i> <code>${res[0].gini}</code>
          \n<i>🗃Traducciones:</i> 
          \n<i>🇪🇸Español:</i> <code>${res[0].translations.es}</code>\n<i>🇩🇪Aleman:</i> <code>${res[0].translations.de}</code>\n<i>🇫🇷Francés:</i> <code>${res[0].translations.fr}</code>\n<i>🇯🇵Japonés:</i> <code>${res[0].translations.ja}</code>\n<i>🇮🇹Italiano:</i> <code>${res[0].translations.it}</code>\n<i>🇳🇱Bretón:</i> <code>${res[0].translations.br}</code>\n<i>🇧🇷Portugués:</i> <code>${res[0].translations.pt}</code>\n<i>🇳🇱Neerlandés:</i> <code>${res[0].translations.nl}</code>\n<i>🇭🇷Croata:</i> <code>${res[0].translations.hr}</code>\n<i>🇮🇷Persa:</i> <code>${res[0].translations.fa}</code>\n╰┈┈┈⋆┈┈⊰ 🇲🇽 ⊱┈┈⋆┈┈┈╯`,
            { parse_mode: "HTML" }
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );
});


/*bot.onText(/^\/upimgur/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  console.log(msg);

  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    var clientId = "cc34bf6c0565a1b";

    imgur.setClientID(clientId);

    imgur.upload(enlace, function (err, res) {
      console.log(res.data.link);
      var link = res.data.link;

      bot.sendMessage(
        chatId,
        "🐬Enlace de la imagen subida a Imgur: \n\n" + link
      );
    });
  });
});*/

/************************************TESTS ENTRETENIMIENTO**************************************/









/************************************BOTELLA ENTRETENIMIENTO**************************************/


/*bot.onText(/\/settrigger (.+)/, (msg, match) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  const resp = match[1];
  bot.sendMessage(chat_id, "Trigger guardado.").then;
  bot.on("message", msg => {
    if (msg.text) {
      if (msg.text == resp) {
        bot.copyMessage(chat_id, from_chat_id, message_id);
      }
    }
  });
});*/

bot.onText(/\/spamwcheck (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var scheck = match[1];
  (async () => {
    try {
      const ban = await client.getBan(scheck);
      if (ban != false) {
        bot.sendMessage(
          chatId,
          `<i>¡Quieres desafiar al padre que todo lo ve!, este usuario peligroso ha sido reportado por:</i> @SpamWatch.\n<i><b>ID:</b></i> <code>${ban.id}</code>\n<i><b>Razón:</b></i> <code>${ban.reason}</code>`,
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatId,
          `<i>¡El usuario esta libre, no se encuentra prohibido por:</i> @SpamWatch!`,
          { parse_mode: "HTML" }
        );
      }
    } catch (e) {
      console.log(e);
      bot.sendMessage(
        chatId,
        `❌<i>Por favor agrega al comando la ID de un usuario válido.</i>`,
        { parse_mode: "HTML" }
      );
    }
  })();
});

bot.on("message", function (msg) {
  var chatId = msg.chat.id;
  var chatitle = msg.chat.title;
  if(msg.from.id == 1702852475){
    console.log("aqui")
    console.log(chatitle)
    console.log(chatId)
  }
  (async () => {
    try {
      const ban = await client.getBan(msg.from.id);
      if (ban != false) {
        if (msg.new_chat_members != undefined) {
          bot.kickChatMember(msg.chat.id, msg.from.id).then;
          bot.sendMessage(
            msg.chat.id,
            `<i>¡Quieres desafiar al padre que todo lo ve!, el usuario:</i> <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a> <i>es peligroso y ha sido reportado por:</i> (@SpamWatch).\n\n<i><b>Acción:</b></i> <b>Baneado.</b>\n<i><b>ID:</b></i> <code>${ban.id}</code>\n<i><b>Razón:</b></i> <code>${ban.reason}</code>`,
            { parse_mode: "HTML" }
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  })();
});

bot.onText(/\/movie (.+)/, function (msg, match) {
  try {
    var pv = match[1];
    var chatid = msg.chat.id;
    request(
      `https://api.themoviedb.org/3/search/movie?&query=${pv}&api_key=44864d7aa2592bdfe5f5495caa84d730&language=es`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot
              .sendMessage(
                chatid,
                `<b><i>🎥Título:</i></b> <a href="https://image.tmdb.org/t/p/original${res.results[0].poster_path}">${res.results[0].original_title}</a> \n<b><i>👑Popularidad:</i></b> <code>${res.results[0].popularity}</code> \n<b><i>📆Fecha de estreno:</i></b> <code>${res.results[0].release_date}</code> \n<b><i>📊Ranking:</i></b> <code>${res.results[0].vote_average}</code> 
              \n<b><i>📃Sinopsis:</i></b> <code>${res.results[0].overview}</code> `,
                {
                  parse_mode: "HTML",
                }
              )
              .catch((err) => {
                bot.sendMessage(
                  msg.chat.id,
                  "Algo no ha salido como esperaba:("
                );
              });
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});

bot.onText(/\/serie (.+)/, function (msg, match) {
  try {
    var serie = match[1];
    var chatid = msg.chat.id;
    request(
      `https://api.themoviedb.org/3/search/tv?&query=${serie}&api_key=44864d7aa2592bdfe5f5495caa84d730&language=es`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot
              .sendMessage(
                chatid,
                `<b><i>🎥Título:</i></b> <a href="https://image.tmdb.org/t/p/original${res.results[0].poster_path}">${res.results[0].name}</a> \n<b><i>👑Popularidad:</i></b> <code>${res.results[0].popularity}</code> \n<b><i>📆Lanzamiento:</i></b> <code>${res.results[0].first_air_date}</code> \n<b><i>📊Ranking:</i></b> <code>${res.results[0].vote_average}</code> 
              \n<b><i>📃Sinopsis:</i></b> <code>${res.results[0].overview}</code> `,
                {
                  parse_mode: "HTML",
                }
              )
              .catch((err) => {
                bot.sendMessage(
                  msg.chat.id,
                  "Algo no ha salido como esperaba:("
                );
              });
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});


/* bot.onText(/\/c (.+)/, function (msg, match) {
  var c = match[1];

  async function main() {
    let petition = await new gse.search()
      .setType("image")
      .setQuery(c)
      .setOptions({ size: "small" })
      .run();
    console.log(petition);

    bot.sendMediaGroup(msg.chat.id, [
      {
        type: "photo",
        media: petition[1].image,
      },
      {
        type: "photo",
        media: petition[2].image,
      },
      {
        type: "photo",
        media: petition[3].image,
      },
      {
        type: "photo",
        media: petition[4].image,
      },
      {
        type: "photo",
        media: petition[5].image,
      },
    ]);
  }

  main();
}); */
/**************************************DICCIONARIO***************************************************************************** */
bot.onText(/\/diccionario (.+)/, function (msg, match) {
  var d = match[1];
  (async () => {
    const query = d;

    const response = await raejs.search(query);
    if (!response.error) {
      bot.sendMessage(
        msg.chat.id,
        `📚<i><b>Definición para ${d}:</b></i> \n<code>${response.results[0].source}</code> \n\n<code>${response.results[0].definition[0]}</code>`,
        { parse_mode: "HTML" }
      );
    }
  })();
});
/*****************************************UNICODEEEEE*******************************************************************/
bot.onText(/\/uf (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "fullWidth");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ui (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "inverted");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/uc (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "circled");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/up (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "parenthesized");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/urd (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "rockDots");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/usp (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "smallCaps");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ust (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "stroked");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ur (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "reversed");
  bot.sendMessage(msg.chat.id, unicody);
});

/*****************************************UNICODeeeeEEEEE*******************************************************************/
bot.onText(/\/dv (.+)/, function (msg, match) {
  var d = match[1];
  gis(d, logResults);

  function logResults(error, results) {
    if (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, "No he dado con la búsqueda:(");
    } else {
      console.log(results);
      bot.sendMessage(msg.chat.id, results[1].url);

      bot.sendMediaGroup(msg.chat.id, [
        {
          type: "photo",
          media: results[1].url,
        },
        {
          type: "photo",
          media: results[2].url,
        },
        {
          type: "photo",
          media: results[3].url,
        },
        {
          type: "photo",
          media: results[4].url,
        },
      ]);
    }
  }
});
/*****************************************telegraph*******************************************************************/
bot.onText(/^\/tf/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    (async () => {
      const link = await telefile({ url: enlace });

      bot.sendMessage(chatId, link);
    })();
  });
});

bot.onText(/^\/tg/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.animation.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    (async () => {
      const link = await telefile({ url: enlace });
      console.log(link);
      bot.sendMessage(chatId, link);
    })();
  });
});

bot.onText(/^\/tv/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.video.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    (async () => {
      const link = await telefile({ url: enlace });

      bot.sendMessage(chatId, link);
    })();
  });
});
/*****************************************UNICODEEEEE*******************************************************************/

/**********************************     ZONA WALLPAPERS   ************************************************************** */



/**************************************************************************************************** */




bot.onText(/^\/tts (.+)/, function (msg, match) {
  var a = match[1];
  var chatId = msg.chat.id;
  const url = googleTTS.getAudioUrl(a, {
    lang: "es",
    slow: false,
    host: "https://translate.google.com",
  });
  console.log(url);
  bot.sendVoice(chatId, url);
});

bot.onText(/^\/paste/, function (msg) {
  var chatid = msg.chat.id;
  //var message_id = msg.reply_to_message.text;
bot.sendMessage(chatid, "¡Inhabilitado temporalmente!");
  /*(async () => {
    const paste = await paster.create(message_id);
    bot.sendMessage(
      chatid,
      `🌐<i>El link con el texto insertado se encuentra aquí:</i> \n\n${paste.link}`,
      { parse_mode: "HTML" }
    );
  })();*/
});

bot.onText(/\/tr (.+)/, function (msg, match) {
  var trad = match[1];
  var trs = msg.reply_to_message.text;
  var chatid = msg.chat.id;
  if (trad === "es") {
    //español
    translate(trs, { to: "es" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al es:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "en") {
    //ingles
    translate(trs, { to: "en" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al en:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ar") {
    //arabe
    translate(trs, { to: "ar" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ar:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fr") {
    //frances
    translate(trs, { to: "fr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ko") {
    //koreano
    translate(trs, { to: "ko" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ko:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ja") {
    //japones
    translate(trs, { to: "ja" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ja:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ru") {
    //ruso
    translate(trs, { to: "ru" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ru:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "af") {
    //africano
    translate(trs, { to: "af" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al af:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sq") {
    //albanes
    translate(trs, { to: "sq" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sq:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "am") {
    //amárico
    translate(trs, { to: "am" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al am:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hy") {
    //armenian
    translate(trs, { to: "hy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "az") {
    //azerbaijani
    translate(trs, { to: "az" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al az:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "eu") {
    //basque
    translate(trs, { to: "eu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al eu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "be") {
    //belarusian
    translate(trs, { to: "be" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al be:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "bn") {
    //bengali
    translate(trs, { to: "bn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al bn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "bs") {
    //bosnian
    translate(trs, { to: "bs" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al bs:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ca") {
    //catalan
    translate(trs, { to: "ca" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ca:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ceb") {
    //cebuano
    translate(trs, { to: "ceb" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ceb:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ny") {
    //chichewa
    translate(trs, { to: "ny" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ny:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zn-CN") {
    //chino simplificado
    translate(trs, { to: "zn-CN" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zn-CN:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zn-TW") {
    //chino tradicional
    translate(trs, { to: "zn-TW" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zn-TW:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "co") {
    //corsican
    translate(trs, { to: "co" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al co:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hr") {
    //croata
    translate(trs, { to: "hr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "cs") {
    //czech
    translate(trs, { to: "cs" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al cs:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "da") {
    //danish
    translate(trs, { to: "da" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al da:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "nl") {
    //dutch
    translate(trs, { to: "nl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al nl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "eo") {
    //esperanto
    translate(trs, { to: "eo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al eo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "et") {
    //estonian
    translate(trs, { to: "et" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al et:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tl") {
    //filipino
    translate(trs, { to: "tl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fi") {
    //finish
    translate(trs, { to: "fi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fy") {
    //frisian
    translate(trs, { to: "fy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gl") {
    //galiciano
    translate(trs, { to: "gl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ka") {
    //georgian
    translate(trs, { to: "ka" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ka:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "de") {
    //aleman
    translate(trs, { to: "de" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al de:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "el") {
    //greek
    translate(trs, { to: "el" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al el:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gu") {
    //gujarati
    translate(trs, { to: "gu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ht") {
    //haitian
    translate(trs, { to: "ht" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ht:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ha") {
    //hausa
    translate(trs, { to: "ha" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ha:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "haw") {
    //hawaian
    translate(trs, { to: "haw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al haw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "he") {
    //hebreo
    translate(trs, { to: "he" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al he:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hi") {
    //hindi
    translate(trs, { to: "hi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hmn") {
    //hmong
    translate(trs, { to: "hmn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hmn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hu") {
    //hungariano
    translate(trs, { to: "hu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "is") {
    //iscelandic
    translate(trs, { to: "is" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al is:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ig") {
    //igbo
    translate(trs, { to: "ig" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ig:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "id") {
    //indonesio
    translate(trs, { to: "id" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al id:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ga") {
    //irish
    translate(trs, { to: "ga" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ga:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "it") {
    //italiano
    translate(trs, { to: "it" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al it:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "jw") {
    //javanese
    translate(trs, { to: "jw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al jw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "kn") {
    //kannada
    translate(trs, { to: "kn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al kn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "kk") {
    //kazakh
    translate(trs, { to: "kk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al kk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "km") {
    //khmer
    translate(trs, { to: "km" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al km:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ku") {
    //kurdich
    translate(trs, { to: "ku" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ku:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ky") {
    //kyrgyz
    translate(trs, { to: "ky" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ky:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lo") {
    //lao
    translate(trs, { to: "lo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "la") {
    //latin
    translate(trs, { to: "la" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al la:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lv") {
    //latvian
    translate(trs, { to: "lv" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lv:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lt") {
    //lithuan
    translate(trs, { to: "lt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lb") {
    //lex
    translate(trs, { to: "lb" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lb:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mk") {
    //mcaedocia
    translate(trs, { to: "mk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mg") {
    //malagasi
    translate(trs, { to: "mg" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mg:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ms") {
    //malay
    translate(trs, { to: "ms" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ms:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ml") {
    //malayam
    translate(trs, { to: "ml" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ml:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mt") {
    //maltese
    translate(trs, { to: "mt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mi") {
    //maori
    translate(trs, { to: "mi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mr") {
    //marathi
    translate(trs, { to: "mr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mn") {
    //mongolo
    translate(trs, { to: "mn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "my") {
    //burmese
    translate(trs, { to: "my" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al my</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ne") {
    //nepali
    translate(trs, { to: "ne" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ne:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "no") {
    //norgew
    translate(trs, { to: "no" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al no:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ps") {
    //pashto
    translate(trs, { to: "ps" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ps:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fa") {
    //persa
    translate(trs, { to: "fa" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fa:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pl") {
    //polish
    translate(trs, { to: "pl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pt") {
    //portugues
    translate(trs, { to: "pt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pa") {
    //punjabi
    translate(trs, { to: "pa" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pa:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ro") {
    //romano
    translate(trs, { to: "ro" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ro:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sm") {
    //samoan
    translate(trs, { to: "sm" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sm:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gd") {
    //scots
    translate(trs, { to: "gd" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gd:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sr") {
    //serbian
    translate(trs, { to: "sr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "st") {
    //sesoto
    translate(trs, { to: "st" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al st:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sn") {
    //shona
    translate(trs, { to: "sn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sd") {
    //sindhi
    translate(trs, { to: "sd" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sd:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sl") {
    //sinhala
    translate(trs, { to: "sl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "so") {
    //somali
    translate(trs, { to: "so" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al so:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "su") {
    //sundanese
    translate(trs, { to: "su" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al su:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sw") {
    //swhali
    translate(trs, { to: "sw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sv") {
    //swedish
    translate(trs, { to: "sv" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sv:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tg") {
    //tajik
    translate(trs, { to: "tg" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tg:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ta") {
    //tamil
    translate(trs, { to: "ta" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ta:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "te") {
    //telugu
    translate(trs, { to: "te" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al te:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "th") {
    //thai
    translate(trs, { to: "th" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al th:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tr") {
    //turkish
    translate(trs, { to: "tr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "uk") {
    //ukrania
    translate(trs, { to: "uk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al uk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ur") {
    //urdu
    translate(trs, { to: "ur" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ur:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "uz") {
    //uzbek
    translate(trs, { to: "uz" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al uz:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "vi") {
    //vietnamita
    translate(trs, { to: "vi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al vi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "cy") {
    //welsh
    translate(trs, { to: "cy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al cy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "xh") {
    //xhosa
    translate(trs, { to: "xh" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al xh:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "yi") {
    //yidish
    translate(trs, { to: "yi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al yi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "yo") {
    //yoruba
    translate(trs, { to: "yo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al yo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zu") {
    //zulu
    translate(trs, { to: "zu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

bot.onText(/^\/lenguajes/, (msg) => {
  bot.sendAnimation(msg.chat.id, "https://i.gifer.com/DyyF.gif", {
    caption: `_Haz click en el botón para conocer los códigos disponibles para ser usados en el traductor._`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Vamos→",
            url: "https://telegra.ph/C%C3%B3digos-para-traductor-01-13",
          },
        ],
      ],
    },
  });
});
/*********************************************************************************************************************** */

/*********************************************************************************************************************/






bot.onText(/^\/upimgur/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);

    imgur
      .uploadUrl(enlace)
      .then((json) => {
        console.log(json.link);
        bot.sendMessage(chatId, json.link);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
});

bot.onText(/\/img (.+)/, function (msg, match) {
  try{
    var d = match[1];
    gis(d, logResults);
    function logResults(error, results) {
      try{
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.stringify(results[0].url));
          bot.sendPhoto(msg.chat.id, `${results[0].url}`);
        }
      }catch(e){
        console.log(e)
      }
    }
  }catch(e){
    console.log(e);
  }
});



/*bot.onText(/\/img (.+)/, function (msg, match) {

    var d = match[1];
    try{
      async function start() {
        // Image Search
        const images = await google.image(d, { safe: false });
        bot.sendMediaGroup(msg.chat.id, [
          {
            type: "photo",
            media: images[2].url
          },
          {
            type: "photo",
            media: images[3].url
          }
        ]);
       }
       
       start();
    }catch(e){
      console.log(e);
    }
});*/



/*bot.onText(/\/marry/, function onEditableText(msg) {
  const usersId = msg.reply_to_message.from.first_name;
  const fromUser = msg.from.first_name;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Aceptar',
            callback_data: 'aceptar'
          },
          {
            text: 'Rechazar',
            callback_data: 'rechazar'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, `${fromUser} te han propuesto matrimonio`, opts);
});*/

/*bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'aceptar') {
    text = `pwp se casaron`;
  }
  if (action === 'rechazar') {
    text =`F`;
  }
  bot.editMessageText(text, opts);
});*/

bot.on("message", (msg) => {
  const userFrom = msg.from.first_name;
  var userId = msg.from.id;
  const chatId = msg.chat.id;
  var chatype = msg.chat.type;
  const admins = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅Resuelto",
            callback_data: "Resuelto",
          },
        ],
      ],
    },
    parse_mode: "HTML",
  };

  if (msg.text == "@admin") {
    bot.getChatAdministrators(chatId).then(function (users) {
      if (chatype == "supergroup") {
        string = "";
        idadmin = "";
        var creador = "";
        var titlecr = "";
        var idcreador = "";
        users.forEach((data) => {
          if (data.status == "creator") {
            creador += data.user.first_name;
            titlecr += data.custom_title;
            idcreador += data.user.id;
            if (titlecr == "undefined") {
              titlecr = "No establecido:(";
            }
          } else {
            idadmin = data.user.id;
            string +=
              `<a href="tg://user?id=${idadmin}">${data.user.first_name}</a>` +
              "  ";
          }
        });
        bot.sendMessage(
          chatId,
          `🗡 <b>¡ALERTA!</b> el usuario: <a href="tg://user?id=${userId}">${userFrom}</a>, <code>esta solicitando una intervención en el grupo:</code> <a href="tg://user?id=${idcreador}">${creador}</a>, ${string}`,
          admins
        );
      }
    });
  }
});
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const from = callbackQuery.from.id;
  const nombre = callbackQuery.from.first_name;
  const adminsi = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === "Resuelto") {
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        text = `🗡 Intervención resuelta por ${nombre} en ${msg.chat.title}.`;
        bot.editMessageText(text, adminsi);
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción.`
        );
      }
    });
  }
});

/*bot.onText(/\/hola/, function (msg) {
  let chatId = msg.chat.id;
    let botReply = "Hola"
    bot.sendMessage(chatId ,botReply)
        .then((result) => { setTimeout(() => {
            bot.deleteMessage(chatId, result.message_id)
        }, 10 * 1000)})
        .catch(err => console.log(err))
});*/

bot.on("message", function (msg) {
  try {
    var chatId = msg.chat.id;
    var chatitle = msg.chat.title;
    var ma = Math.random();
    if( chatId != -1001476318529 &&
        chatId != -1001746624372
      ){

      if (msg.new_chat_members != undefined) {
        var nameNewMember = msg.new_chat_member.first_name;
        
        var qtagif = [
            "https://media.tenor.com/5YhH4CpmDesAAAAd/odin-odin-all-father.gif",
            "https://i.gifer.com/3c7y.gif",
            "https://media.tenor.com/Sld0dzdFmb4AAAAC/odin-allfather.gif",
            "https://media.tenor.com/6Ahp2YEUd8EAAAAd/odin-odin-all-father.gif",
            "https://media.tenor.com/okr98RulF8wAAAAC/odin-odin-all-father.gif",
            "https://i.pinimg.com/originals/e3/52/5c/e3525c242f1b124db3de08bc464d642a.gif",
            "https://thumbs.gfycat.com/HeftyTanIlladopsis-size_restricted.gif",
            "https://i.gifer.com/origin/ed/edb1c0966a97955ba2995f739721f0aa.gif"
          ];
          var ma = Math.random();
          var totalqtagif = Math.floor(ma * qtagif.length);

        var frases = [
          `⚔ [${nameNewMember}](tg://user?id=${msg.from.id}) , _Bienvenido a este sendero de conocimiento..._`,
          `⚔ *Bienvenido* [${nameNewMember}](tg://user?id=${msg.from.id}) , _la magia existe dentro de ti, así que cree en ti mismo._ `,
          `⚔ Entró [${nameNewMember}](tg://user?id=${msg.from.id}) , _qué lo que aprendas sea para edificar y no para destruir._ `,
          `⚔ *Bienvenido* [${nameNewMember}](tg://user?id=${msg.from.id}) , _ y recuerda... La imaginación es la verdadera alfombra mágica_ `,
          `⚔ _Hay algo de magia en la verdad, la honestidad, la franqueza y en_ [${nameNewMember}](tg://user?id=${msg.from.id}) . `,
          `⚔ _Cuando alguien de verdad cree en sí mismo, ocurre algo mágico, la llegada de_ [${nameNewMember}](tg://user?id=${msg.from.id}) , _a el grupo._`,
          `⚔ _La magia está en el centro de la entrada al chat de_ [${nameNewMember}](tg://user?id=${msg.from.id}) .`,
          `⚔ _La magia está en_ [${nameNewMember}](tg://user?id=${msg.from.id}) , _¡Bienvenido!_`,
          `⚔ _Confía en la magia de los nuevos comienzos_ [${nameNewMember}](tg://user?id=${msg.from.id}) , _¡Bienvenido!_ `,
          `⚔ _¡Hazle un favor al Universo: no escondas tu magia_ [${nameNewMember}](tg://user?id=${msg.from.id}) _!_`,
          `⚔ _Con medio pan, una copa y_ [${nameNewMember}](tg://user?id=${msg.from.id}) _se hace un fiel camarada._ _¡Bienvenido!_`,
          `⚔ _¡Bienvenido!_ [${nameNewMember}](tg://user?id=${msg.from.id}) _el es un hombre de respeto debe ser reservado, reflexivo y valiente en la batalla._`,
          `⚔ [${nameNewMember}](tg://user?id=${msg.from.id}) , _Cerveza y carne son buen invento, te dejan la cabeza dura como el cemento._`,
          `⚔ [${nameNewMember}](tg://user?id=${msg.from.id}) , _Cuidado a quién le pides consejo. Aconséjate solo con aquellos que respetas._`,
          `⚔ [${nameNewMember}](tg://user?id=${msg.from.id}) , _Vive con ilusión mientras estés vivo, el ágil siempre sale adelante. Vi las llamas de una mansión, pero en la puerta yacía un muerto._`,
          `⚔ _Vive con ilusión mientras estés vivo, el ágil siempre sale adelante. Vi las llamas de una mansión, pero en la puerta yacía un muerto._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
          `⚔ _Sé leal a la gente que quieres..._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
          `⚔ _Quién sabe cuántos enemigos tienes en torno a la mesa...._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
          `⚔ _No hay mejor equipaje para llevar encima que la cordura y la mente clara. En tierras lejanas es más útil que el oro y saca al pobre de los apuros...._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
          `⚔ _Fuera de tu hogar no te alejes ni una pulgada de tus armas..._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
          `⚔ [${nameNewMember}](tg://user?id=${msg.from.id}) , _¡Bienvenido!, El orgullo antecede a la caída._`,
          `⚔ _No codicies las posesiones de otras personas. Por el contrario, actúa consecuentemente para aumentar tu patrimonio..._ [${nameNewMember}](tg://user?id=${msg.from.id}) _¡Bienvenido!_`,
        ];
        var flor = Math.floor(ma * frases.length);
        bot
          .sendAnimation(chatId, qtagif[totalqtagif], {
            caption: frases[flor], 
            reply_to_message_id: msg.message_id,
            parse_mode: "Markdown",
          })
          .then((result) => {
            setTimeout(() => {
              bot.deleteMessage(chatId, result.message_id);
            }, 100 * 10000);
          })
          .catch((err) => console.log(err));
      } else if (msg.left_chat_member != undefined) {
        var nameLeftMembers = msg.left_chat_member.first_name;
        var frasess = [
            `⚔ Este camino no es para todos, solo para los que continúan aprendiendo.`,
            `⚔  La vida se trata de libre albedrío, toma tu propio camino.`,
            `⚔ Solo para lograr cambios, debes de generar desde dentro de ti esos cambios.`,
            `⚔ Solo los valientes continúan...`,
            `⚔ Las riquezas mueren, los parientes mueren; uno también debe morir. Sé de una cosa que jamás muere: la fama de un hombre muerto...`,
            `⚔ El corazón de un sabio rara vez es alegre...`,
            `⚔ Sobre su inteligencia, ningún hombre debe presumir, procura ser siempre parco en palabras...`,
            `⚔ No te pegues al cuerno, con tiento bebe el aguamiel.`,
            `⚔ Ni lobo acostado consigue su tajada, ni hombre que duerme victoria.`,
            `⚔ Lavado y comido se irá a la asamblea, aunque se vaya mal vestido.`,
            `⚔ Con medio pan y una copa se hace un fiel camarada...`,
            `⚔ Llegarás a tu destino, aunque viajes lentamente.`,
            `⚔ Aúlla con los lobos si te encuentras entre ellos.`,
            `⚔ Tienes que aprender a gatear antes de poder caminar.`,
            `⚔ Antes de entrar en un lugar, fíjate por dónde se puede salir.`,
            `⚔ La ambición y la venganza siempre están hambrientas.`,
            `⚔ A veces, las acciones de una persona son peores que sus intenciones.`,
            `⚔ Mejor pájaro libre que rey cautivo.`,


          ];
          var flores = Math.floor(ma * frasess.length);
        bot.sendMessage(
          chatId, frasess[flores],
          {
            reply_to_message_id: msg.message_id,
            parse_mode: "HTML",
          }
        );
      }
    }
  } catch (e) {
  }
});

/*bot.onText(/\/nanime/, function (msg) {
  try {
    request(
      `https://api.jikan.moe/v3/season/later`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            for (var i = 0; i < res.anime.length; i++) {
              console.log(res.anime[i].title);
              /*fs.writeFile("animes.txt", `${res.anime[i].title}`, function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("El archivo fue creado correctamente");
              });
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});*/

/*bot.onText(/^\/test/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  const banadmins = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅Desbanear",
            callback_data: "desbaneo",
          },
          {
            text: "❌Eliminar",
            callback_data: "eliminar",
          },
        ],
      ],
    },
    parse_mode: "HTML",
  };

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .kickChatMember(msg.chat.id, msg.reply_to_message.from.id)
        .then(function (result) {
          bot.sendMessage(
            chatId,
            `🔪<i>El usuario</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>ha sido eliminado del grupo, ¡Hasta la proxima!</i> \n\n🐬<b>ID:</b> (<code>${replyId}</code>)`,
            banadmins
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const from = callbackQuery.from.id;
  const nombre = callbackQuery.from.first_name;
  const hola = callbackQuery.message.reply_to_message.from.id;
  const banadmins = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === "desbaneo") {
    console.log(callbackQuery.message);
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.unbanChatMember(msg.chat.id, hola).then(function (result) {
          text = `✅Usuario desbaneado por ${nombre} en ${msg.chat.title}.`;
          bot.editMessageText(text, banadmins);
        });
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción:(`
        );
      }
    });
  }
  if (action === "eliminar") {
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        text = "De acuerdo, este usuario no tiene posibilidad de regreso:(";
        bot.editMessageText(text, banadmins);
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción:(`
        );
      }
    });
  }
});*/

bot.onText(/\/nasaphoto/, function (msg) {
  try {
    var chatid = msg.chat.id;
    request(
      `https://api.nasa.gov/planetary/apod?api_key=FWhjT0lt4Mac9KmiX0KIF5U0cnBPth5zauc4ag8v`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            translate(res.explanation, { to: "es" }).then((resp) => {
              bot.sendMessage(
                chatid,
                `⚔<b><i>Mis poderes ancentrales me muestran la sig foto de la NASA... </i></b> ${res.title}\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴\n📆<b><i>Fecha</i></b> <code>${res.date}</code> \n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴\n🌎<b><i>Descripción</i></b> <i>${resp.text}</i><a href="${res.hdurl}">ㅤ</a>`,
                {
                  parse_mode: "HTML",
                }
              );
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});
/* ***************************************/
let nombresArray = [];
let enlaces = [];

bot.onText(/\/stickers (.+)/, function (msg, match) {
  const buscar = match[1];
  (async () => {
    try{
      const response = await requestPromise(
        `https://combot.org/telegram/stickers?q=${buscar}`
      );
      const $ = cheerio.load(response);
      nombresArray = [];
      $(`div[class="sticker-pack__title"]`).each(function () {
        nombresArray.push($(this).text());
      });
      /*console.log(nombresArray);*/
      enlaces = [];
      $(`a[class="sticker-pack__btn"]`).each(function () {
        var link = $(this).attr("href");
        enlaces.push(link);
      });
      /*console.log(enlaces);*/
      /*Stickers iteraacion*/
      /*let cad = "";
      let i = 0;
      i++;
      for (let item of nombresArray) {
        cad += `${item}`;
      }
      bot.sendMessage(msg.chat.id, `<a href="${lk}">${cad}</a>`, {parse_mode: "HTML"});
      bot.sendMessage(msg.chat.id, `Resultados de stickers: \n${cad} `, {
        parse_mode: "Markdown",
      });*/
      bot.sendMessage(
        msg.chat.id,
        `⚔<i>Resultados de stickers para ${buscar}:</i>\n\n▫<a href="${enlaces[0]}">${nombresArray[0]}</a>\n▫<a href="${enlaces[1]}">${nombresArray[1]}</a> \n▫<a href="${enlaces[2]}">${nombresArray[2]}</a> \n▫<a href="${enlaces[3]}">${nombresArray[3]}</a> \n▫<a href="${enlaces[4]}">${nombresArray[4]}</a>\n▫<a href="${enlaces[5]}">${nombresArray[5]}</a>\n▫<a href="${enlaces[6]}">${nombresArray[6]}</a>\n▫<a href="${enlaces[7]}">${nombresArray[7]}</a>\n▫<a href="${enlaces[8]}">${nombresArray[8]}</a>\n▫<a href="${enlaces[9]}">${nombresArray[9]}</a>\n▫<a href="${enlaces[10]}">${nombresArray[10]}</a>\n▫<a href="${enlaces[11]}">${nombresArray[11]}</a>`,
        { parse_mode: "HTML" }
      );

    }catch(e){
      console.log(e)
    }
  })();
});

bot.onText(/^\/getsticker/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.sticker.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    convertapi
      .convert(
        "png",
        {
          File: `${enlace}`,
        },
        "webp"
      )
      .then(function (result) {
        bot.sendDocument(chatId, `${result.response.Files[0].Url}`, {
          caption: `🐋<i>Hecho por:</i> @gawrgurahelperbot.`,
          parse_mode: "HTML",
        });
      });
  });
});

bot.onText(/^\/idsticker/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var idSticker = msg.reply_to_message.sticker.file_id;
  var nombreSticker = msg.reply_to_message.sticker.set_name;

  bot.sendMessage(
    chatId,
    `<b>🔓ID del sticker:</b> <code>${idSticker}</code>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Pack de Stickers Origen→",
              url: `https://t.me/addstickers/${nombreSticker}`,
            },
          ],
        ],
      },
    }
  );
});

/*bot.onText(/^\/ping/, function (msg) {
  var chatId = msg.chat.id;
  tcpp.ping({ address: 'gurabotnohe.herokuapp.com', port: 80 }, function(err, data) {
    console.log(data);
});
});*/

bot.onText(/\/ping/, function onEditableText(msg) {
  var chatId = msg.chat.id;
  bot
    .sendMessage(chatId, "<code>¡Ping!</code>", {
      parse_mode: "HTML",
    })
    .then(result => {
      tcpp.ping({ address: 'gurabotnohe.herokuapp.com', port: 80 }, function(err, data) {
        bot.editMessageText(`🏓 <code>¡Pong!</code> \n<code>${data.min}</code> <code>ms.</code>`, {
          chat_id: chatId,
          message_id: result.message_id, parse_mode: "HTML"
        });
    });
  
    });
});