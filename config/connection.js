const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://vgjpdetq:eYhzlQToArtFolKlnWtqFp3vh08mZi2x@silly.db.elephantsql.com/vgjpdetq",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {

      sequelize.authenticate();

    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};