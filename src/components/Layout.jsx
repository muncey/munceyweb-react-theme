import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from './Header';
import { Navbar } from './Navbar';
import RightBar from './RightBar';

export default function Layout() {
  return (      
    <div class="page">
      <Header title="Muncey Blog" subtitle="Philip Munce" />
      <main>
          <section className="container">
            <div className="row">
              <div className="col-2">
                <Navbar />
              </div>
              <div className="col-7">
                <Outlet />
              </div>
              <div className="col-3">
                <RightBar />
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
