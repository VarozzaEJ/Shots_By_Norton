import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../index.css";
import Icon from "@mdi/react";
import { mdiCursorPointer } from "@mdi/js";
import ContactForm from "../components/ContactForm.jsx";
export default function HomePage() {
  return (
    <>
      <div className=" flex flex-col h-screen min-h-screen justify-center text-3xl items-center">
        <ContactForm />
      </div>
    </>
  );
}
