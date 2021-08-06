import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import img1 from "../../images/p1-min.jpg";
import img2 from "../../images/p2-min.jpg";
import img3 from "../../images/p3-min.jpg";
import img4 from "../../images/p4-min.jpg";

const App = () => (
  <div className="wrapper">
    <SearchBar />

    <div className="cards">
      <Cards
        img={img1}
        alt="estate"
        title="Park City Penthouse"
        price={1000000}
        description="No Fee Spectacular Penthouse Three Bedroom with Huge Wrap Terrace off Lincoln Center Upper West Side"
      />
      <Cards
        img={img2}
        alt="estate"
        title="Pristine Luxury Penthouse"
        price={120000}
        description="9696 Antelope Road Beverly Hills Post Office | B.H.P.O"
      />
      <Cards
        img={img3}
        alt="estate"
        title="Blackstone Parc"
        price={330000}
        description="535 Chalette DR Beverly Hills Post Office | B.H.P.O."
      />
      <Cards
        img={img4}
        alt="estate"
        title="Apartments in Lower Manhattan"
        price={470000}
        description="Apartment for rent in prime location"
      />
    </div>
  </div>
);

export default App;
