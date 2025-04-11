"use client";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "150 million people speak punjabi",
    " venus spins backwards",
    "Women's hearts beat faster than men's",
    "A cucumber is 96 percent water",
    "Newborn babies are colorblind",
    "The Pope can't be an organ donor.",
    "It is physically impossible for pigs to look up into the sky.",
    "There are more stars in the universe than grains of sand on Earth",
    "Your brain is constantly eating itself.",
    "Your brain is constantly eating itself.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <div className="links flex-wrap" />
      <h1 className={title()}>About Me</h1>
      <div className="flex flex-wrap">
        <p className="p-2 border-solid border-1 border-red-800">
          Hi, I&aposm Avreen! Welcome to my page! I was born in 2009 in Los
          Angeles, and this is a little corner of the internet I made for
          myself. I&aposm into video games, watching TV, hanging out with
          friends, and of course—eating (who isn&apost, right?). I&aposve tried
          coding before—still learning, not a pro yet, but I think it&aposs
          pretty cool. Thanks for stopping by!{" "}
        </p>
        <div className="links flex-wrap">
          <Button
            as={link}
            href="https://issaquah.instructure.com/courses/36871"
          >
            Canvas
          </Button>
          <Button
            as={link}
            href="https://en.wikipedia.org/wiki/PartyNextDoor?scrlybrkr=9776cfbf"
          >
            PartyNextDoor wiki
          </Button>
          <Button
            onPress={() => {
              setFact(facts[Math.floor(Math.random() * facts.length)]);
            }}
          >
            Press 4 Facts
          </Button>
          <p>{fact}</p>
        </div>
      </div>
      <p className="p-2 border-solid border-red-500">
        My favorite artist: PartyNextDoor
      </p>
      <img alt="failed" src="/PND.png" />
      <p> Other artists I like:</p>
      <p className="p-2 border-solid border-pink-500">
        Jhene Aiko in the flesh!
      </p>
      <img alt="fail" height="162" src="/JheneAiko.jpg" width="310" />
      <p className="p-2 border-solid border-pink-500">The Weeknd!</p>
      <img alt="fail" height="162" src="/Weeknd.jpg" width="310" />
      <p className="p-2 border-solid border-pink-500">Rihanna?!</p>
      <img alt="fail" height="162" src="/Rihanna.jpg" width="310" />
    </div>
  );
}
