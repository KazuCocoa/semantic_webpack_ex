use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :semantic_webpack_ex, SemanticWebpackEx.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :semantic_webpack_ex, SemanticWebpackEx.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "semantic_webpack_ex_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
