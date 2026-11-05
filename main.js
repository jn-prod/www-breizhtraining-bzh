// Breizh Training : carrousel avec pause, et liste des stages lue dans Google Sheets.
const SHEET =
  "https://sheets.googleapis.com/v4/spreadsheets/1AWIDHqtH7m6715XM7yhVqrOUumjJZzzPCBLwpvlSKAw/values/stages!2:1000?key=AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0";

function carousel(root) {
  const slides = [...root.querySelectorAll(".carousel__slide")];
  const toggle = root.querySelector("[data-carousel-toggle]");
  let current = 0;
  let timer = null;
  const play = () => {
    timer = setInterval(() => {
      slides[current].classList.remove("carousel__slide--active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("carousel__slide--active");
    }, 5000);
    toggle.textContent = "Pause";
  };
  const stop = () => {
    clearInterval(timer);
    timer = null;
    toggle.textContent = "Lecture";
  };
  toggle.hidden = false;
  toggle.addEventListener("click", () => (timer ? stop() : play()));
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) stop();
  else play();
}

async function stages(root) {
  const res = await fetch(SHEET);
  if (!res.ok) return;
  const { values = [] } = await res.json();
  // Une ligne sans nom ni date est un gabarit vide de la feuille.
  const rows = values.filter(([name, start]) => name || start);
  if (!rows.length) return;
  root.replaceChildren(
    ...rows.map(([name, start, end, location, link]) => {
      const p = document.createElement("p");
      p.className = "stage";
      p.textContent = `Du ${start} au ${end} à ${location} → ${name}`;
      if (/^https?:\/\//.test(link ?? "")) {
        const a = document.createElement("a");
        a.className = "button button--secondary";
        a.href = link;
        a.target = "_blank";
        a.rel = "nofollow noopener";
        a.textContent = "En savoir +";
        p.append(a);
      }
      return p;
    }),
  );
}

carousel(document.querySelector("[data-carousel]"));
stages(document.querySelector("[data-stages]")).catch(() => {});
