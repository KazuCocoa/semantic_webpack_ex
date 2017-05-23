defmodule SemanticWebpackEx.PageController do
  use SemanticWebpackEx.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
