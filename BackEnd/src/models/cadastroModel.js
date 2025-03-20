import db from "../conexao.js";
import mysql from "mysql2/promise";

const conecxao = mysql.createPool(db);

export const criandoUsuario = async (nome, email, senha, CPF) => {
  console.log("cadastroModel :: criandoUsuario");
  const sql = `INSERT INTO pessoa_fisica (nome, email, senha, CPF) VALUES (?, ?, ?, ?)`;
  const params = [nome, email, senha, CPF];
   if(params != null){try {
        const [resposta] = await conecxao.query(sql, params);
        return [201, { mensagem: "Usuario criado com sucesso" }];
    } catch (error) {
        console.error(error);
        return [500, { mensagem: "Erro ao criar o usuario" }];
    }
} else {
    return [400, { mensagem: "Dados invalidos" }];
}
};

export const mostrarUsuarios = async () => {
  console.log("usuarioModel :: mostrarUsuarios");
  const sql = "SELECT * FROM pessoa_fisica";
  try {
    const [resposta] = ({} = await conecxao.query(sql));
    return [200, resposta];
  } catch (error) {
    console.error(error);
  }
};
export const atualizandoUsuario = async (idpessoa_fisica, senha) => { 
  console.log('cadastroModel :: atualizandoUsuario');

  //SQL Update produto
  const sql = `UPDATE produtos SET senha = ? WHERE idpessoa_fisica = ?`;

  const params = [senha,idpessoa_fisica];

  try {
      const [resposta] = await conexao.query(sql,params);
      //console.log(resposta);
      if (resposta.affectedRows<1){
          return [404,{mensagem:'Produto não encontrado'}]
      }else{
          return [200,{mensagem:'Produto atualizado com sucesso'}]
      }
  } catch (error) {
      //console.error(error);
      return[500,{
          mensagem:'Erro Servidor',
          code:error.code,
          sql:error.sqlMessage
      }]
  }
}

