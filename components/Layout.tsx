import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "TMDB | Home" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="navbar bg-base-100 mx-auto max-w-7xl mt-4 px-4 shadow-xl rounded-box justify-between">
        <div className="navbar-start">
          <Link href="/">
            <span className="btn btn-ghost normal-case text-xl">TMDB</span>
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="/explorer/movies">
            <span className="btn btn-ghost normal-case">Movies</span>
          </Link>
          <Link href="/explorer/tv">
            <span className="btn btn-ghost normal-case">TV Shows</span>
          </Link>
        </div>
      </nav>
    </header>
    <main className="max-w-[1200px] mx-auto my-10">{children}</main>
  </div>
);

export default Layout;
