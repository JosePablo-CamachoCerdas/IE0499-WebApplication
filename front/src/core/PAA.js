import React, {useState} from "react";
import PAACard from "./PAACard";
import Footer from "./Footer";
import NavBar from "../layout/NavBar";

const PAA = () => {
    return(
        <div>
            <NavBar />
            <PAACard />
            <Footer />
        </div>
    );
}

export default PAA;