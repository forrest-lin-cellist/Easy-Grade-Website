const axios = require('axios');
const accountList = [
  {
    accountEmail: 'teacher@gmail.com',
    accountPwd: 'test123456',
    role: 'teacher',
    accountName: 'Test|Teacher',
  },
  {
    accountEmail: 'student@gmail.com',
    accountPwd: 'test123456',
    role: 'student',
    accountName: 'Test|Student',
  },
  {
    accountEmail: 'rebbecca.didio@didio.com.au',
    accountPwd: 'Rebbecca|Didio',
    role: 'teacher',
    accountName: 'Rebbecca|Didio',
  },
  {
    accountEmail: 'stevie.hallo@hotmail.com',
    accountPwd: 'Stevie|Hallo',
    role: 'teacher',
    accountName: 'Stevie|Hallo',
  },
  {
    accountEmail: 'mariko_stayer@hotmail.com',
    accountPwd: 'Mariko|Stayer',
    role: 'teacher',
    accountName: 'Mariko|Stayer',
  },
  {
    accountEmail: 'gerardo_woodka@hotmail.com',
    accountPwd: 'Gerardo|Woodka',
    role: 'teacher',
    accountName: 'Gerardo|Woodka',
  },
  {
    accountEmail: 'mayra.bena@gmail.com',
    accountPwd: 'Mayra|Bena',
    role: 'teacher',
    accountName: 'Mayra|Bena',
  },
  {
    accountEmail: 'idella@hotmail.com',
    accountPwd: 'Idella|Scotland',
    role: 'teacher',
    accountName: 'Idella|Scotland',
  },
  {
    accountEmail: 'sklar@hotmail.com',
    accountPwd: 'Sherill|Klar',
    role: 'student',
    accountName: 'Sherill|Klar',
  },
  {
    accountEmail: 'ena_desjardiws@desjardiws.com.au',
    accountPwd: 'Ena|Desjardiws',
    role: 'student',
    accountName: 'Ena|Desjardiws',
  },
  {
    accountEmail: 'vince_siena@yahoo.com',
    accountPwd: 'Vince|Siena',
    role: 'student',
    accountName: 'Vince|Siena',
  },
  {
    accountEmail: 'tjarding@hotmail.com',
    accountPwd: 'Theron|Jarding',
    role: 'student',
    accountName: 'Theron|Jarding',
  },
  {
    accountEmail: 'amira.chudej@chudej.net.au',
    accountPwd: 'Amira|Chudej',
    role: 'student',
    accountName: 'Amira|Chudej',
  },
  {
    accountEmail: 'marica.tarbor@hotmail.com',
    accountPwd: 'Marica|Tarbor',
    role: 'student',
    accountName: 'Marica|Tarbor',
  },
  {
    accountEmail: 'shawna.albrough@albrough.com.au',
    accountPwd: 'Shawna|Albrough',
    role: 'student',
    accountName: 'Shawna|Albrough',
  },
  {
    accountEmail: 'paulina_maker@maker.net.au',
    accountPwd: 'Paulina|Maker',
    role: 'student',
    accountName: 'Paulina|Maker',
  },
  {
    accountEmail: 'rose@jebb.net.au',
    accountPwd: 'Rose|Jebb',
    role: 'student',
    accountName: 'Rose|Jebb',
  },
  {
    accountEmail: 'rtabar@hotmail.com',
    accountPwd: 'Reita|Tabar',
    role: 'student',
    accountName: 'Reita|Tabar',
  },
  {
    accountEmail: 'mbewley@yahoo.com',
    accountPwd: 'Maybelle|Bewley',
    role: 'student',
    accountName: 'Maybelle|Bewley',
  },
  {
    accountEmail: 'camellia_pylant@gmail.com',
    accountPwd: 'Camellia|Pylant',
    role: 'student',
    accountName: 'Camellia|Pylant',
  },
  {
    accountEmail: 'rnybo@nybo.net.au',
    accountPwd: 'Roy|Nybo',
    role: 'student',
    accountName: 'Roy|Nybo',
  },
  {
    accountEmail: 'albert.sonier@gmail.com',
    accountPwd: 'Albert|Sonier',
    role: 'student',
    accountName: 'Albert|Sonier',
  },
  {
    accountEmail: 'htaghon@taghon.net.au',
    accountPwd: 'Hayley|Taghon',
    role: 'student',
    accountName: 'Hayley|Taghon',
  },
  {
    accountEmail: 'ndaleo@daleo.net.au',
    accountPwd: 'Norah|Daleo',
    role: 'student',
    accountName: 'Norah|Daleo',
  },
  {
    accountEmail: 'rosina_sidhu@gmail.com',
    accountPwd: 'Rosina|Sidhu',
    role: 'student',
    accountName: 'Rosina|Sidhu',
  },
  {
    accountEmail: 'royal_costeira@costeira.com.au',
    accountPwd: 'Royal|Costeira',
    role: 'student',
    accountName: 'Royal|Costeira',
  },
  {
    accountEmail: 'bnicley@nicley.com.au',
    accountPwd: 'Barrie|Nicley',
    role: 'student',
    accountName: 'Barrie|Nicley',
  },
  {
    accountEmail: 'lgedman@gedman.net.au',
    accountPwd: 'Linsey|Gedman',
    role: 'student',
    accountName: 'Linsey|Gedman',
  },
  {
    accountEmail: 'laura.bourbonnais@yahoo.com',
    accountPwd: 'Laura|Bourbonnais',
    role: 'student',
    accountName: 'Laura|Bourbonnais',
  },
  {
    accountEmail: 'fstoneking@hotmail.com',
    accountPwd: 'Fanny|Stoneking',
    role: 'student',
    accountName: 'Fanny|Stoneking',
  },
  {
    accountEmail: 'kristian@yahoo.com',
    accountPwd: 'Kristian|Ellerbusch',
    role: 'student',
    accountName: 'Kristian|Ellerbusch',
  },
  {
    accountEmail: 'gjulye@hotmail.com',
    accountPwd: 'Gwen|Julye',
    role: 'student',
    accountName: 'Gwen|Julye',
  },
  {
    accountEmail: 'ben.majorga@hotmail.com',
    accountPwd: 'Ben|Majorga',
    role: 'student',
    accountName: 'Ben|Majorga',
  },
  {
    accountEmail: 'trina@oto.com.au',
    accountPwd: 'Trina|Oto',
    role: 'student',
    accountName: 'Trina|Oto',
  },
  {
    accountEmail: 'emelda.geffers@gmail.com',
    accountPwd: 'Emelda|Geffers',
    role: 'student',
    accountName: 'Emelda|Geffers',
  },
  {
    accountEmail: 'zana_ploszaj@ploszaj.net.au',
    accountPwd: 'Zana|Ploszaj',
    role: 'student',
    accountName: 'Zana|Ploszaj',
  },
  {
    accountEmail: 'shaun.rael@rael.com.au',
    accountPwd: 'Shaun|Rael',
    role: 'student',
    accountName: 'Shaun|Rael',
  },
  {
    accountEmail: 'olobosco@hotmail.com',
    accountPwd: 'Oren|Lobosco',
    role: 'student',
    accountName: 'Oren|Lobosco',
  },
  {
    accountEmail: 'caguele@gmail.com',
    accountPwd: 'Catherin|Aguele',
    role: 'student',
    accountName: 'Catherin|Aguele',
  },
  {
    accountEmail: 'pboudrie@boudrie.net.au',
    accountPwd: 'Pearlene|Boudrie',
    role: 'student',
    accountName: 'Pearlene|Boudrie',
  },
  {
    accountEmail: 'kathryn.bonalumi@yahoo.com',
    accountPwd: 'Kathryn|Bonalumi',
    role: 'student',
    accountName: 'Kathryn|Bonalumi',
  },
  {
    accountEmail: 'suzan.landa@gmail.com',
    accountPwd: 'Suzan|Landa',
    role: 'student',
    accountName: 'Suzan|Landa',
  },
  {
    accountEmail: 'sagar@agar.net.au',
    accountPwd: 'Sommer|Agar',
    role: 'student',
    accountName: 'Sommer|Agar',
  },
  {
    accountEmail: 'krebich@rebich.net.au',
    accountPwd: 'Keena|Rebich',
    role: 'student',
    accountName: 'Keena|Rebich',
  },
  {
    accountEmail: 'rupert_hinkson@hinkson.net.au',
    accountPwd: 'Rupert|Hinkson',
    role: 'student',
    accountName: 'Rupert|Hinkson',
  },
  {
    accountEmail: 'apoarch@gmail.com',
    accountPwd: 'Aleta|Poarch',
    role: 'student',
    accountName: 'Aleta|Poarch',
  },
  {
    accountEmail: 'jamal_korczynski@gmail.com',
    accountPwd: 'Jamal|Korczynski',
    role: 'student',
    accountName: 'Jamal|Korczynski',
  },
  {
    accountEmail: 'luz_broccoli@hotmail.com',
    accountPwd: 'Luz|Broccoli',
    role: 'student',
    accountName: 'Luz|Broccoli',
  },
  {
    accountEmail: 'janessa@yahoo.com',
    accountPwd: 'Janessa|Ruthers',
    role: 'student',
    accountName: 'Janessa|Ruthers',
  },
  {
    accountEmail: 'lavonne.esco@yahoo.com',
    accountPwd: 'Lavonne|Esco',
    role: 'student',
    accountName: 'Lavonne|Esco',
  },
  {
    accountEmail: 'honey_lymaster@lymaster.net.au',
    accountPwd: 'Honey|Lymaster',
    role: 'student',
    accountName: 'Honey|Lymaster',
  },
  {
    accountEmail: 'jean.cecchinato@gmail.com',
    accountPwd: 'Jean|Cecchinato',
    role: 'student',
    accountName: 'Jean|Cecchinato',
  },
  {
    accountEmail: 'kflitcroft@hotmail.com',
    accountPwd: 'Katlyn|Flitcroft',
    role: 'student',
    accountName: 'Katlyn|Flitcroft',
  },
  {
    accountEmail: 'csoros@gmail.com',
    accountPwd: 'Cassie|Soros',
    role: 'student',
    accountName: 'Cassie|Soros',
  },
  {
    accountEmail: 'rolf_gene@gene.com.au',
    accountPwd: 'Rolf|Gene',
    role: 'student',
    accountName: 'Rolf|Gene',
  },
  {
    accountEmail: 'darnell_moothart@yahoo.com',
    accountPwd: 'Darnell|Moothart',
    role: 'student',
    accountName: 'Darnell|Moothart',
  },
  {
    accountEmail: 'cherilyn_fraize@fraize.net.au',
    accountPwd: 'Cherilyn|Fraize',
    role: 'student',
    accountName: 'Cherilyn|Fraize',
  },
  {
    accountEmail: 'lynda.lazzaro@gmail.com',
    accountPwd: 'Lynda|Lazzaro',
    role: 'student',
    accountName: 'Lynda|Lazzaro',
  },
  {
    accountEmail: 'leigha.capelli@capelli.com.au',
    accountPwd: 'Leigha|Capelli',
    role: 'student',
    accountName: 'Leigha|Capelli',
  },
  {
    accountEmail: 'delfina_binnie@binnie.net.au',
    accountPwd: 'Delfina|Binnie',
    role: 'student',
    accountName: 'Delfina|Binnie',
  },
  {
    accountEmail: 'carlota.gephardt@gephardt.com.au',
    accountPwd: 'Carlota|Gephardt',
    role: 'student',
    accountName: 'Carlota|Gephardt',
  },
  {
    accountEmail: 'alida@helger.com.au',
    accountPwd: 'Alida|Helger',
    role: 'student',
    accountName: 'Alida|Helger',
  },
  {
    accountEmail: 'donte.resureccion@yahoo.com',
    accountPwd: 'Donte|Resureccion',
    role: 'student',
    accountName: 'Donte|Resureccion',
  },
  {
    accountEmail: 'lou.kriner@hotmail.com',
    accountPwd: 'Lou|Kriner',
    role: 'student',
    accountName: 'Lou|Kriner',
  },
  {
    accountEmail: 'dortha@vrieze.net.au',
    accountPwd: 'Dortha|Vrieze',
    role: 'student',
    accountName: 'Dortha|Vrieze',
  },
  {
    accountEmail: 'genevive@hotmail.com',
    accountPwd: 'Genevive|Sanborn',
    role: 'student',
    accountName: 'Genevive|Sanborn',
  },
  {
    accountEmail: 'alease_strawbridge@strawbridge.com.au',
    accountPwd: 'Alease|Strawbridge',
    role: 'student',
    accountName: 'Alease|Strawbridge',
  },
  {
    accountEmail: 'veda.mishkin@mishkin.com.au',
    accountPwd: 'Veda|Mishkin',
    role: 'student',
    accountName: 'Veda|Mishkin',
  },
  {
    accountEmail: 'craig_vandersloot@yahoo.com',
    accountPwd: 'Craig|Vandersloot',
    role: 'student',
    accountName: 'Craig|Vandersloot',
  },
  {
    accountEmail: 'ltovmasyan@tovmasyan.net.au',
    accountPwd: 'Lauran|Tovmasyan',
    role: 'student',
    accountName: 'Lauran|Tovmasyan',
  },
  {
    accountEmail: 'aaron_kloska@kloska.net.au',
    accountPwd: 'Aaron|Kloska',
    role: 'student',
    accountName: 'Aaron|Kloska',
  },
  {
    accountEmail: 'francene.skursky@skursky.net.au',
    accountPwd: 'Francene|Skursky',
    role: 'student',
    accountName: 'Francene|Skursky',
  },
  {
    accountEmail: 'zdaria@gmail.com',
    accountPwd: 'Zena|Daria',
    role: 'student',
    accountName: 'Zena|Daria',
  },
  {
    accountEmail: 'brigette@breckenstein.com.au',
    accountPwd: 'Brigette|Breckenstein',
    role: 'student',
    accountName: 'Brigette|Breckenstein',
  },
  {
    accountEmail: 'jeniffer@gmail.com',
    accountPwd: 'Jeniffer|Jezek',
    role: 'student',
    accountName: 'Jeniffer|Jezek',
  },
  {
    accountEmail: 'selm@elm.net.au',
    accountPwd: 'Selma|Elm',
    role: 'student',
    accountName: 'Selma|Elm',
  },
  {
    accountEmail: 'ehandler@yahoo.com',
    accountPwd: 'Elenora|Handler',
    role: 'student',
    accountName: 'Elenora|Handler',
  },
  {
    accountEmail: 'nadine.okojie@okojie.com.au',
    accountPwd: 'Nadine|Okojie',
    role: 'student',
    accountName: 'Nadine|Okojie',
  },
  {
    accountEmail: 'kristin@hotmail.com',
    accountPwd: 'Kristin|Shiflet',
    role: 'student',
    accountName: 'Kristin|Shiflet',
  },
  {
    accountEmail: 'melinda_fellhauer@fellhauer.com.au',
    accountPwd: 'Melinda|Fellhauer',
    role: 'student',
    accountName: 'Melinda|Fellhauer',
  },
  {
    accountEmail: 'kirby.litherland@hotmail.com',
    accountPwd: 'Kirby|Litherland',
    role: 'student',
    accountName: 'Kirby|Litherland',
  },
  {
    accountEmail: 'kent_ivans@yahoo.com',
    accountPwd: 'Kent|Ivans',
    role: 'student',
    accountName: 'Kent|Ivans',
  },
  {
    accountEmail: 'dan_platz@hotmail.com',
    accountPwd: 'Dan|Platz',
    role: 'student',
    accountName: 'Dan|Platz',
  },
  {
    accountEmail: 'millie_pirkl@gmail.com',
    accountPwd: 'Millie|Pirkl',
    role: 'student',
    accountName: 'Millie|Pirkl',
  },
  {
    accountEmail: 'moira.qadir@gmail.com',
    accountPwd: 'Moira|Qadir',
    role: 'student',
    accountName: 'Moira|Qadir',
  },
  {
    accountEmail: 'reta.qazi@yahoo.com',
    accountPwd: 'Reta|Qazi',
    role: 'student',
    accountName: 'Reta|Qazi',
  },
  {
    accountEmail: 'brittney@lolley.net.au',
    accountPwd: 'Brittney|Lolley',
    role: 'student',
    accountName: 'Brittney|Lolley',
  },
  {
    accountEmail: 'leandro_bolka@hotmail.com',
    accountPwd: 'Leandro|Bolka',
    role: 'student',
    accountName: 'Leandro|Bolka',
  },
  {
    accountEmail: 'edison.sumera@sumera.net.au',
    accountPwd: 'Edison|Sumera',
    role: 'student',
    accountName: 'Edison|Sumera',
  },
  {
    accountEmail: 'breana@yahoo.com',
    accountPwd: 'Breana|Cassi',
    role: 'student',
    accountName: 'Breana|Cassi',
  },
  {
    accountEmail: 'jarvis@gmail.com',
    accountPwd: 'Jarvis|Nicols',
    role: 'student',
    accountName: 'Jarvis|Nicols',
  },
  {
    accountEmail: 'felicitas_orlinski@orlinski.com.au',
    accountPwd: 'Felicitas|Orlinski',
    role: 'student',
    accountName: 'Felicitas|Orlinski',
  },
  {
    accountEmail: 'geraldine@gmail.com',
    accountPwd: 'Geraldine|Neisius',
    role: 'student',
    accountName: 'Geraldine|Neisius',
  },
  {
    accountEmail: 'alfred@pacleb.net.au',
    accountPwd: 'Alfred|Pacleb',
    role: 'student',
    accountName: 'Alfred|Pacleb',
  },
  {
    accountEmail: 'leatha_block@gmail.com',
    accountPwd: 'Leatha|Block',
    role: 'student',
    accountName: 'Leatha|Block',
  },
  {
    accountEmail: 'jacquelyne.rosso@yahoo.com',
    accountPwd: 'Jacquelyne|Rosso',
    role: 'student',
    accountName: 'Jacquelyne|Rosso',
  },
  {
    accountEmail: 'jepps@hotmail.com',
    accountPwd: 'Jonelle|Epps',
    role: 'student',
    accountName: 'Jonelle|Epps',
  },
  {
    accountEmail: 'rosamond.amlin@gmail.com',
    accountPwd: 'Rosamond|Amlin',
    role: 'student',
    accountName: 'Rosamond|Amlin',
  },
  {
    accountEmail: 'johnson@gmail.com',
    accountPwd: 'Johnson|Mcenery',
    role: 'student',
    accountName: 'Johnson|Mcenery',
  },
  {
    accountEmail: 'elliot.scatton@hotmail.com',
    accountPwd: 'Elliot|Scatton',
    role: 'student',
    accountName: 'Elliot|Scatton',
  },
  {
    accountEmail: 'gerri@yahoo.com',
    accountPwd: 'Gerri|Perra',
    role: 'student',
    accountName: 'Gerri|Perra',
  },
];

const authAxios = axios.create();

authAxios.interceptors.request.use((req) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjUwYzE0MmVmM2ZlNDQ5MGQ4M2EzNiIsImlhdCI6MTYxODczODQyNiwiZXhwIjoxNjE4NzQyMDI2fQ.r-r3-ors7UywwNDJASzwvTSh_tJrAZOG6yXgd3j2MNU';
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

accountList.map(async (item, key) => {
  await authAxios.put('http://easy-grade.com:8000/enroll', {
    accountEmail: item.accountEmail,
    courseEntryCode: 'KJFNWE',
  });
  console.log(`${key + 1}/${accountList.length} has been enrolled`);
});

// for(let i = 0; i< accountList.length; i++) {
//     let item = accountList[i]
//     let key = i
//     await axios.post("http://easy-grade.com:8000/account", item);
//     await axios.put("http://easy-grade.com:8000/enroll", {accountEmail: item.accountEmail, courseEntryCode: "KJFNWE"});
//     console.log(`${key+1}/${accountList.length} has been enrolled`)
// }

//register
// const user = new accountCollection({ ...ctx.request.body, status: 'verified' });
// const { accountEmail } = ctx.request.body;
// const mailCreator = (user, link) => ({
//   from: '"Easy Grade" <easy.grade.mailer@gmail.com>',
//   to: user.accountEmail,
//   subject: 'Verification',
//   html: `Hi,${user.accountName}
//    please click the link to activate your account.
//    Link:<a href=${link}>${link}<a/>`,
// });
// try {
//   const res = await user.save();
// const now = new Date();
// const expireDate = new Date(now.setMinutes(now.getMinutes()+15))
// const notification = new Notification({accountEmail: accountEmail, expired:expireDate})
// const notiRes = await notification.save()
//
// const verifyLink = `http://easy-grade.com:8000/verify/${notiRes._id}`
// const transporter = nodemailer.createTransport(transportConfig)
// const mailRes = await transporter.sendMail(mailCreator(ctx.request.body,verifyLink))
//   ctx.status = 201;
//   ctx.body = { msg: `Verficiation email has sent to ${accountEmail}` };
// } catch (err) {
//   if (err && err.message && err.message.startsWith('E11000 duplicate key error')) {
//     ctx.status = 403;
//     ctx.body = { msg: `This email has existed` };
//   } else {
//     throw err;
//   }
// }
