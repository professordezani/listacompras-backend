// yarn add pg

const Pool = require('pg').Pool;

// 1 - Abre conexão
// 2 - Executa comando SQL (select - índice, insert...) 4ms
// 3 - Fecha a conexão

const pool = new Pool({
    user: 'hdelzyqgvzdsqp',
    password: 'dc08a1f885ccabe215edfcb5d258afd186dd6c9d1e1b34136db96385792558d8', 
    host: 'ec2-52-6-143-153.compute-1.amazonaws.com',
    database: 'de4hg6rpacgnpp',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

const sqlCreate = `
    CREATE TABLE IF NOT EXISTS listacompras
    (
        ID serial primary key,
        nome varchar(50) not null,
        quantidade int not null default 0,
        comprado boolean not null default false
    )
`;

// pool.query(sqlCreate, function(error, result) {
//     if(error)
//         throw error

//     console.log('Tabela criada com sucesso!');
// });

module.exports = {

    async create(nome, quantidade) { 
        const sql = `INSERT INTO listacompras (nome, quantidade)
                        VALUES ($1, $2)`;

        const result = await pool.query(sql, [nome, quantidade]);
        return result.rowCount;
    },

    async read() {
        const sql = 'SELECT * FROM listacompras'
        const result = await pool.query(sql);
        return result.rows;
    },

    async update(id) { 
        const sql = `UPDATE listacompras SET comprado = $1 WHERE ID = $2`;

        const result = await pool.query(sql, [true, id]);
        return result.rowCount;
    },

    async delete(id) { 
        const sql = `DELETE * FROM listacompras WHERE ID = $1`;

        const result = await pool.query(sql, [id]);
        return result.rowCount;
    },
}