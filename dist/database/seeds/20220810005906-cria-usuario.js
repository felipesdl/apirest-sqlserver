"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "luiz@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Paulo",
          email: "paulo@gmail.com",
          password_hash: await bcryptjs.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Matheus",
          email: "matheus@gmail.com",
          password_hash: await bcryptjs.hash("456789", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
