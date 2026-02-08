import { useState, useEffect } from "react";
import { getRandonFact } from "../services/fact";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandonFact().then((newFact) => setFact(newFact));
  };
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
