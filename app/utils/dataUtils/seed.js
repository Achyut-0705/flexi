import Company from "../../models/company.js";
import Product from "../../models/products.js";
import Database from "../../models/index.js";

import logger from "../logger.js";

try {
  await Database.sequelize.authenticate();
  await Database.sequelize.sync();
  logger.info("Database OK");
  await Company.bulkCreate(
    [
      {
        name: "Amazon",
        email: "amz@amazon.com",
        password:
          "$2b$10$6h/kUYPbS9wA9yCK7y.B0OS3SZFNxr0.MJquuXP6huDTt9JJ18RaS",
        address: "Test dummy address",
        bannerURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        logoURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        bannerID: "jgagoeife0uiga53i9ff",
        logoID: "jgagoeife0uiga53i9ff",
        products: [
          {
            name: "Amazon Echo",
            description: "SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "100",
          },
          {
            name: "Amazon Alexa",
            description:
              "awgn aognepon pnepoaengopigng aopgnag iangoangaoginwgpoawng oang aogn",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "2300",
          },
          {
            name: "Amazon Not Alexa",
            description:
              "The most intelligent E-Class family of all time welcomes a powerful new member to the dynasty.",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "3500",
          },
        ],
      },
      {
        name: "Flipkart",
        email: "f@flipkar.com",
        password:
          "$2b$10$6h/kUYPbS9wA9yCK7y.B0OS3SZFNxr0.MJquuXP6huDTt9JJ18RaS",
        address: "Test dummy address",
        bannerURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        logoURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        bannerID: "jgagoeife0uiga53i9ff",
        logoID: "jgagoeife0uiga53i9ff",
        products: [
          {
            name: "Flipkart Alexa",
            description: "The biggest oversight with dark willow is ...",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "2300",
          },
        ],
      },
      {
        name: "Karen Johar",
        email: "nepochacha@karen.com",
        password:
          "$2b$10$6h/kUYPbS9wA9yCK7y.B0OS3SZFNxr0.MJquuXP6huDTt9JJ18RaS",
        address: "Test dummy address",
        bannerURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        logoURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        bannerID: "jgagoeife0uiga53i9ff",
        logoID: "jgagoeife0uiga53i9ff",
        products: [
          {
            name: "Aloe Bhatt",
            description:
              "I somehow managed to act decently now am Karen's biggest success",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "100000000",
          },
          {
            name: "Outsider Malhotra",
            description: "Body banaunga paise kamaunga acting bhuljaunga",
            imageURL:
              "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586699/iultab9xisvkmcfdvp6j.svg",
            imageID: "iultab9xisvkmcfdvp6j",
            price: "666",
          },
        ],
      },
      {
        name: "Company X",
        email: "cx@google.com",
        password:
          "$2b$10$6h/kUYPbS9wA9yCK7y.B0OS3SZFNxr0.MJquuXP6huDTt9JJ18RaS",
        address: "Test dummy address",
        bannerURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        logoURL:
          "https://res.cloudinary.com/dyerbbwpu/image/upload/v1667586704/jgagoeife0uiga53i9ff.svg",
        bannerID: "jgagoeife0uiga53i9ff",
        logoID: "jgagoeife0uiga53i9ff",
        products: [],
      },
    ],
    {
      include: [Product],
    }
  );
  logger.info("Bulk inserted records");
} catch (error) {
  logger.error(error);
}
