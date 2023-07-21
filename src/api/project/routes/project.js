"use strict";

/**
 * project router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
module.exports = createCoreRouter("api::project.project");

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/project",
//       handler: "project.project",
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };
