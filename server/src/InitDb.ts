import config from './Config';
import DbUtils from './utils/DbUtils';


class InitDb {

    constructor() {

    }

    async init() {
        console.log('init db ...', config.db);
        await DbUtils.getInstance().setDb(config.db);

        let sql: string = `
CREATE TABLE IF NOT EXISTS user
(
  username varchar(50)  NOT NULL,
  password varchar(200) NOT NULL,
  enabled  tinyint(1)   NOT NULL DEFAULT 0,
  version  int          NOT NULL DEFAULT 0,
  'create'   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  'update'   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (username))
`;

        console.log(sql);
        await DbUtils.getInstance().run(sql, []).then((one) => {
            //console.log("user -->", one);
        }).catch((err) => {
            console.error(err);
        });


        sql = `
DELETE FROM user
`;

        await DbUtils.getInstance().run(
            sql,
            []).then((one) => {
                //console.log("user -->", one);
            }).catch((err) => {
                console.error(err);
            });

        sql = `
INSERT INTO user (username, password, enabled) VALUES (?, ?, ?)
`;

        await DbUtils.getInstance().run(
            sql,
            ["forsrc", "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e", 1]
        ).then((one) => {
            //console.log("user -->", one);
        }).catch((err) => {
            console.error(err);
        });

        await DbUtils.getInstance().run(
            sql,
            ["user", "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e", 1]
        ).then((one) => {
            //console.log("user -->", one);
        }).catch((err) => {
            console.error(err);
        });
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
    }
}

export default InitDb;
