"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          code: "001aaaaa",
          name: "EZ-Lock",
          description:
            "EZ-Lock is one of the most advanced innovations from PT Impack Pratama Industri Tbk. The twinwall structure provides superior strength and the EZ-Lock profile provides leak-proof property combined with its aesthetic looks.",
          price: 11000000,
          unit: "sheet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "001aaaab",
          name: "Twinlite Gen 2.0",
          description:
            "Twinlite Gen 2.0 is re-formulated to resist harsh weather condition and redesigned to deliver unique benefits like superior impact, wind, and water resistance.",
          price: 12000000,
          unit: "sheet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "001aaaac",
          name: "OCI silicone sealant",
          description:
            "OCI silicone sealant is a high performance one part silicone sealant. It is inherently waterproof, and extensively used in broad range of domestic, commercial, and industrial purposes.",
          price: 13000000,
          unit: "pcs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
