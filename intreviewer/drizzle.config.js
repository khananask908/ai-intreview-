/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:bov2rRnc8IEA@ep-black-base-a5clgmj1.us-east-2.aws.neon.tech/ai-interview?sslmode=require",
  },
};



/// GURU JI KA DB URL 
//  url: "postgresql://accounts:mv4Mx0OdHZQA@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",