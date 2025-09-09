import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../index.css";
import Icon from "@mdi/react";
import { mdiCursorPointer } from "@mdi/js";
export default function HomePage() {
  return (
    <>
      <div className=" flex flex-col h-screen min-h-screen justify-center text-3xl items-center">
        <span className="text-green-400 mb-10">
          BoilerPlate With Node.js Server and Shadcn
        </span>
        <Link to={"Help"} className="mb-20">
          <Button size={"lg"} variant={"secondary"}>
            Click Me
            <Icon path={mdiCursorPointer} color="black" size={1} />
          </Button>
        </Link>
      </div>
    </>
  );
}
