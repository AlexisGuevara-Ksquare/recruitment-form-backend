"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "Muguiwara",
          firstName: "Luffy",
          lastName: "Monkey D.",
          email: "luffy@piratemail.com",
          phone: "6641234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "PirateHunter",
          firstName: "Zoro",
          lastName: "Roronoa",
          email: "zoro@piratemail.com",
          phone: "6631234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "BlackLeg",
          firstName: "Sanji",
          lastName: "VinceSmoke",
          email: "sanji@piratemail.com",
          phone: "6651234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          street: "One",
          in_between_street_a: "A",
          in_between_street_b: "B",
          city: "Tijuana",
          state: "B.C.",
          country: "Mexico",
          zip: "92117",
          proof_of_address: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Le baratie",
          in_between_street_a: "C",
          in_between_street_b: "D",
          city: "Tecate",
          state: "B.C.",
          country: "Mexico",
          zip: "92117",
          proof_of_address: "string",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "Mexicali",
          in_between_street_a: "E",
          in_between_street_b: "F",
          city: "Tijuana",
          state: "B.C.",
          country: "Mexico",
          zip: "92117",
          proof_of_address: "string",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "AddressExtraInfos",
      [
        {
          type_of_residency: "rented",
          other_residency: null,
          people: "alone",
          address_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type_of_residency: "owned",
          other_residency: null,
          people: "parents",
          address_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type_of_residency: "Rented",
          other_residency: null,
          people: "alone",
          address_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "GovernmentInfos",
      [
        {
          CURP: "AZCG560427MVZRRL04",
          identification_number: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CURP: "HE00552427MVZRRL04",
          identification_number: "string",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CURP: "GGAA560427MGGRRL09",
          identification_number: "string",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          phone: "6641234567",
          country_code: "52",
          email: "test1@test.org",
          alt_email: "user@example.com",
          reference: "google",
          other_reference: "TikTok",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "6651234567",
          country_code: "52",
          email: "test2@test.org",
          alt_email: "user@example.com",
          reference: "recommendation",
          other_reference: "facebook",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "6671234567",
          country_code: "52",
          email: "test3@test.org",
          alt_email: "user@example.com",
          reference: "facebook",
          other_reference: "instragram",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "AcademicInfos",
      [
        {
          software_devel_comments: "comment1",
          degree_level: "highschool",
          informal_education: "string",
          other_education: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "comment2",
          degree_level: "university",
          informal_education: "string",
          other_education: "string",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "comment3",
          degree_level: "masters",
          informal_education: "string",
          other_education: "string",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "FormalEducationInfos",
      [
        {
          university_name: "ITT",
          state: "B.C.",
          country: "Mexico",
          career_name: "II",
          classes_completed: true,
          proof_classes_completed: "string",
          degree_completed: true,
          proof_degree_completed: "string",
          license_completed: true,
          proof_license_completed: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "UABC",
          state: "B.C.",
          country: "Mexico",
          career_name: "ISC",
          classes_completed: true,
          proof_classes_completed: "string",
          degree_completed: true,
          proof_degree_completed: "string",
          license_completed: true,
          proof_license_completed: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "Xochicalco",
          state: "B.C.",
          country: "Mexico",
          career_name: "IEM",
          classes_completed: true,
          proof_classes_completed: "string",
          degree_completed: true,
          proof_degree_completed: "string",
          license_completed: true,
          proof_license_completed: "string",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "ScholarshipInfos",
      [
        {
          level: "highschool",
          kind: "academics",
          period: 5,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "university",
          kind: "sports",
          period: 5,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "masters",
          kind: "academics",
          period: 5,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "BankAccountInfos",
      [
        {
          acc_number: 1391281,
          clabe: 1291281,
          bank: "BBVA",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 1291281,
          clabe: 1291281,
          bank: "Banamex",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 1491281,
          clabe: 1291281,
          bank: "HSBC",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Skills",
      [
        {
          preferred_programming_language: "Javascript",
          experience: "less_than_three",
          disability: null,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          preferred_programming_language: "C#",
          experience: "three_to_six",
          disability: "motor",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          preferred_programming_language: "PHP",
          experience: "six_to_twelve",
          disability: "auditory",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Adresss", null, {});
    await queryInterface.bulkDelete("AdressExtraInfos", null, {});
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
    await queryInterface.bulkDelete("Profiles", null, {});
    await queryInterface.bulkDelete("AcademicInfos", null, {});
    await queryInterface.bulkDelete("FormalEducationInfos", null, {});
    await queryInterface.bulkDelete("ScholarshipInfos", null, {});
    await queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
