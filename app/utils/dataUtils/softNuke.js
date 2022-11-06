import Company from "../../models/company.js";
import Database from "../../models/index.js";

import logger from "../logger.js";

try {
  await Database.sequelize.authenticate();
  await Database.sequelize.sync();
  logger.info("Database OK");
  await Company.destroy({ where: {} });
  logger.info("Database soft nuked, gg");
} catch (error) {
  logger.error(error);
}
