import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// Creates a database-js connection to Planetscale.
const connection = connect({
  host: process.env["DATABASE_HOST"],
  password: process.env["DATABASE_PASSWORD"],
  username: process.env["DATABASE_USERNAME"],
});

/** Drizzlified connection to the database. */
export const db = drizzle(connection);
