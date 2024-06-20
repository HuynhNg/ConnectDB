import fs from 'fs';

const url ='./src/data/data.json';

class UserService {
    getAll() {
        let data = fs.readFileSync(url, 'utf8');
        let users = JSON.parse(data);
        users.shift();
        return users;
    }

    getByID(id) {
        let data = this.getAll();
        console.log("id: " + id);
        const user = data.filter(user => user.id === id);
        return user;
    }

    PostUser(data){
        let Users = this.getAll();
        let id= Users[0].dem;
        id++;
        const NewUser= {
            id:id,
            name: data.name,
            Age: data.Age
        }
        Users.push(NewUser);
        Users[0].dem = id;
        fs.writeFile(url, JSON.stringify(Users, null, 2), (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.send({ message: 'Internal Server Error' });
            }
        });
        return Users;
    }

    PutUser(id,data){
        let Users = this.getAll();
        Users.forEach(User => {
            if(User.id == id){
                User.name= data.name,
                User.Age= data.Age
            }
        });
        fs.writeFile(url, JSON.stringify(Users, null, 2), (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.send({ message: 'Internal Server Error' });
            }
        });
        return Users;
    }
    

    DeleteUser(id){
        let Users = this.getAll();
        const DeUser = Users.filter(user => user.id !== id);
        fs.writeFile(url, JSON.stringify(DeUser, null, 2), (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.send({ message: 'Internal Server Error' });
            }
        });
        return DeUser;
    }
}

export default new UserService();