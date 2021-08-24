import config from './Config';
import DbUtils from './utils/DbUtils';
import Init from './Init';



class InitDb {

    constructor() {

    }

    async init() {
        console.log('init db ...', config.db);
        await DbUtils.getInstance().setDb(config.db);


        let sqls: string[] =
            [`
CREATE TABLE IF NOT EXISTS user
(
  username varchar(50)  NOT NULL,
  password varchar(200) NOT NULL,
  enabled  tinyint(1)   NOT NULL DEFAULT 0,
  version  int          NOT NULL DEFAULT 0,
  'create' TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  'update' TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (username)
);
`, `
CREATE TABLE IF NOT EXISTS user_role
(
  username varchar(50)  NOT NULL,
  role     varchar(200) NOT NULL,
  enabled  tinyint(1)   NOT NULL DEFAULT 0,
  version  int          NOT NULL DEFAULT 0,
  'create' TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  'update' TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (username, role)
); 
`, `
DELETE FROM user;
`];

        await this.run(sqls);

        let sql: string = `
INSERT INTO user (username, password, enabled) VALUES (?, ?, ?)
`;


        // await DbUtils.getInstance().run(
        //     sql,
        //     ["forsrc", "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e", 1]
        // ).then((one) => {
        //     //console.log("user -->", one);
        // }).catch((err) => {
        //     console.error(err);
        // });

        // await DbUtils.getInstance().run(
        //     sql,
        //     ["user", "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e", 1]
        // ).then((one) => {
        //     //console.log("user -->", one);
        // }).catch((err) => {
        //     console.error(err);
        // });

        let user: any = {
            username: "forsrc", 
            password: "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e",
            enabled: 0,
            version: 0,
            //create: null,
            //update: null
        };
        await Init.userService.save(user);
        user = {username: "user",
            password: "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e",
            enabled: 0,
            version: 0,
            //create: null,
            //update: null
        };
        await Init.userService.save(user);

        sql = "SELECT * from user;";
        await DbUtils.getInstance().all(sql, []).then((rows) => {
            console.log("rows -->", rows);
        }).catch((err) => {
            console.error(err);
        });

        await DbUtils.getInstance().get('user', { username: "forsrc", enabled: 1 }).then((one) => {
            console.log("user -->", one);
        }).catch((err) => {
            console.error(err);
        });
        await DbUtils.getInstance().get('user', {}).then((one) => {
            console.log("user -->", one);
        }).catch((err) => {
            console.error(err);
        });


        sql = `SELECT * from user`;
        let list = await DbUtils.getInstance().run(sql, []);
        console.error("list", "-->", list);

        let userRole: any = {
            username: "forsrc",
            role: "ROLE_ADMIN"
        };
        await Init.userRoleService.save(userRole);
    }

    run(sqls: string[]) {

        return new Promise<void>((resolve, reject) => {
            let promises = [];
            let promise = Promise.resolve();
            sqls.forEach(sql => {
    
                promise = promise.then(() => {
                    return new Promise<any>((_resolve, _reject) => {
                        DbUtils.getInstance().run(sql, []).then((res) => {
                            _resolve(res);
                        }).catch((err) => {
                            _reject(err)
                        });
                    });
                });
                promises.push(promise);
            });
            Promise.all(promises).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });


 
    }

}


export default InitDb;
