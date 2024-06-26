import pool from '../database/config'

class UserModel{
    constructor(id, name, email, password, gender, age){
        this.ID = id,
        this.Name = name,
        this.Email = email,
        this.Password= password,
        this.Gender = gender,
        this.Age = age
    }
    async getAllUsers() {
        try {
            const connection = await pool.getConnection();
            const [rows, fields] = await connection.query('SELECT * FROM user');
            // console.log(rows);
            connection.release();
            return rows;
        }
        catch(err){
            console.error('ERR UserModel: ',err);
            throw err;
        }
    }

    async getUserByID(id){
        try{
            const connection = await pool.getConnection();
            const [rows,fields] = await connection.query('Select * From user where ID = ?',[id]);
            connection.release();
            return rows;
        }
        catch(err){
            console.error('ERR UserModel: ',err);
            throw err;
        }
    }

    async addUser(user){
        try{
            const connection = await pool.getConnection();
            const query = `
                INSERT INTO user (ID, Name, Email, Password, Gender, Age)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const values = [user.ID, user.Name, user.Email, user.Password, user.Gender, user.Age];
            await connection.query(query, values);
            connection.release();
            return this.getAllUsers();
        }   
        catch(err){
            console.error('ERR UserModel: ',err);
            throw err;
        }
    }

    async UpdateUser(id,user){
        try{
            const connection = await pool.getConnection();
            const query = `
                UPDATE user
                SET Name = ?, Email = ?, Password = ?, Gender = ?, Age = ?
                WHERE ID = ?
            `;
            const values = [user.Name, user.Email, user.Password, user.Gender, user.Age, id];
            await connection.query(query, values);
            connection.release();
            return this.getAllUsers();
        }
        catch(err){
            console.error('ERR UserModel: ',err);
            throw err;
        }
    }

    async DeleteUser(id){
        try{
            const connection = await pool.getConnection();
            connection.query('Delete From user where ID = ?',[id]);
            connection.release();
            return this.getAllUsers();
        }
        catch(err){
            console.error('ERR UserModel: ',err);
            throw err;
        }
    }
}
export default UserModel;