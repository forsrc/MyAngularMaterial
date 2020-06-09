import config from './Config';
import DbUtils from './utils/DbUtils';


class InitDb {

    constructor() {

    }

    init(): void {
        console.log('init db ...', config.db);
        DbUtils.getInstance().setDb(config.db);

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
        DbUtils.getInstance().getDb().run(sql);

        sql = `
INSERT INTO user (username, password, enabled) VALUES (?, ?, ?)
`;
        try {
            DbUtils.getInstance().getDb().run(
                sql,
                ["forsrc", "$2a$10$Wzme7qZtAsJZspQpNx3ee.qTu/IqRHiTb0jORWUOXCxptAkG3kf8e", 1]
                , (error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error("[ERROR]", sql, error);
        }

        sql = "SELECT * from user;";
        DbUtils.getInstance().getDb()
            .all(sql, (err, rows) => {
                if (err) {
                    console.error(err);
                }
                if (!rows) {
                    return;
                }
                rows.forEach(row => {
                    console.log(sql, " -> ", row);
                });
            });

    }
}

export default InitDb;
