import React from "react";
import ListingCard from "./ListingCard";
// import { useEffect } from "react";

function ListingsContainer(props) {
      return (
        <main>
          <ul className="cards">
            <ListingCard />
          </ul>
        </main>
      );
    }

export default ListingsContainer;
