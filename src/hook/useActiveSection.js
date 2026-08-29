import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
 
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
 
      // প্রতিটা সেকশনের প্রকৃত top অবস্থান সংগ্রহ করা
      const positions = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter(Boolean);
 
      if (positions.length === 0) return;
 
      if (atBottom) {
        // পেজের একদম নিচে গেলে, যেই সেকশনের top সবচেয়ে বেশি (নিচের সেকশন) সেটাই active
        const last = positions.reduce((a, b) => (b.top > a.top ? b : a));
        setActiveSection(last.id);
        return;
      }
 
      // scrollPos-এর <= এর মধ্যে যেই সেকশনের top সবচেয়ে বেশি (অর্থাৎ সবচেয়ে কাছেরটা), সেটাই active
      const passed = positions.filter((p) => scrollPos >= p.top);
      const current =
        passed.length > 0
          ? passed.reduce((a, b) => (b.top > a.top ? b : a)).id
          : positions.reduce((a, b) => (b.top < a.top ? b : a)).id;
 
      setActiveSection((prev) => (prev !== current ? current : prev));
    };
 
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
 
  return activeSection;
}