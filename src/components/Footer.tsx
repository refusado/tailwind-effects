'use client';

import { Button } from "@nextui-org/react";

export function Footer() {
  
  function goToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="relative bg-cyan-black py-20 w-full">
      <div className="*:absolute *:size-12 *:bg-[length:6rem_6rem] *:bg-[radial-gradient(circle,transparent_3rem,currentColor_3.1rem)] text-cyan-black">
        <div className="bottom-full left-0 bg-left-bottom"></div>
        <div className="right-0 bottom-full bg-right-bottom"></div>
      </div>

      <div className="flex flex-col items-center container">
        <Button onPress={goToTop} variant="light" color="primary">
          Back to top 
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </Button>
      </div>
    </section>
  );
}