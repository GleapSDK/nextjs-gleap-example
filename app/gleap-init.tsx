"use client";

import Gleap from "gleap";
import { useEffect } from "react";

const GLEAP_API_KEY = "kCV3JbBZaRd61vqLpjTUFLJBQzlUMjm7";

export default function GleapInit() {
  useEffect(() => {
    // An ?apiKey= query parameter overrides the default workspace key.
    const apiKey =
      new URLSearchParams(window.location.search).get("apiKey") ||
      GLEAP_API_KEY;
    Gleap.initialize(apiKey);
  }, []);

  return null;
}
