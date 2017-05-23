# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :semantic_webpack_ex,
  ecto_repos: [SemanticWebpackEx.Repo]

# Configures the endpoint
config :semantic_webpack_ex, SemanticWebpackEx.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "l91Y2HSI+kDeRqxsI5Ldd2ZWC2LD7m/XKKKPUdPv6YOD2gxHEtDDitpDqUOcf1Pi",
  render_errors: [view: SemanticWebpackEx.ErrorView, accepts: ~w(html json)],
  pubsub: [name: SemanticWebpackEx.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
