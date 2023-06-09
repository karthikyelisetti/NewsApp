import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container">
        <header className="blog-header lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-primary" href="#">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-body-emphasis" href="#">
                The News Blog
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-primary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-primary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-center">
            <a className="p-2 link-primary nav-link" href="#">
              World
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Technology
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Business
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Politics
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Science
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Health
            </a>
            <a className="p-2 link-primary nav-link" href="#">
              Travel
            </a>
          </nav>
        </div>

      </div>
    </div>
  );
}
