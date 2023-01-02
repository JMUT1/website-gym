import {Link} from "react-router-dom"

import "./notfound.css";

function NotFound() {
  return <section>
    <div className="container notfound__container">
      <h2>Page not Found</h2>
      <Link to="/" className="btn">Go back Home</Link>
    </div>
  </section>;
}

export default NotFound;
