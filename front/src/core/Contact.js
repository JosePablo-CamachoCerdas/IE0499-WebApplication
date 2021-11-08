import React, {useState} from "react";
import ContactCard from "./ContactCard";
import Footer from "./Footer";
import NavBar from "../layout/NavBar";

const Contact = () => {
    return(
        <div>
            <NavBar />
            <ContactCard />
            <Footer />
        </div>
    );
}

export default Contact;