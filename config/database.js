module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-50.railway.app"),
      port: env.int("DATABASE_PORT", 6953),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "oFBjJO1NXjmAmIAYorXY"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
