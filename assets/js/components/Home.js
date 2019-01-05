import { h, render, Component } from "preact";
import Header from "./Header";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="row">
          <article className="column">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="https://hexdocs.pm/phoenix/overview.html">
                  Guides &amp; Docs
                </a>
              </li>
              <li>
                <a href="https://github.com/phoenixframework/phoenix">Source</a>
              </li>
              <li>
                <a href="https://github.com/phoenixframework/phoenix/blob/v1.4/CHANGELOG.md">
                  v1.4 Changelog
                </a>
              </li>
            </ul>
          </article>
          <article className="column">
            <h2>Help</h2>
            <ul>
              <li>
                <a href="https://elixirforum.com/c/phoenix-forum">Forum</a>
              </li>
              <li>
                <a href="https://webchat.freenode.net/?channels=elixir-lang">
                  #elixir-lang on Freenode IRC
                </a>
              </li>
              <li>
                <a href="https://twitter.com/elixirphoenix">
                  Twitter @elixirphoenix
                </a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    );
  }
}
