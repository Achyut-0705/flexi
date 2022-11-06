// !! WARNING !! - IF YOU USE THIS FILE TO HARD DELETE EVERYTHING BE VERY SURE ABOUT WHAT YOU ARE DOING
import Company from "../../models/company.js";
import Database from "../../models/index.js";

import logger from "../logger.js";

try {
  await Database.sequelize.authenticate();
  await Database.sequelize.sync();
  logger.info("Database OK");
  await Company.destroy({ where: {}, force: true });
  logger.info("Database nuked, gg");
} catch (error) {
  logger.error(error);
}
