"use strict";

/**
 * project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

console.log("project", strapi.service("api::project.project"));

module.exports = createCoreController("api::project.project");
