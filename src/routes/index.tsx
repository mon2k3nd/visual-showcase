import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import photo01 from "@/assets/TVT00593.JPG.asset.json";
import photo02 from "@/assets/TVT00610.JPG.asset.json";
import photo03 from "@/assets/TVT00661.JPG.asset.json";
import photo04 from "@/assets/TVT00690.JPG.asset.json";
import photo05 from "@/assets/TVT00701.JPG.asset.json";
import photo06 from "@/assets/TVT00726.JPG.asset.json";
import photo07 from "@/assets/TVT00744.JPG.asset.json";
import photo08 from "@/assets/TVT00792.JPG.asset.json";
import photo09 from "@/assets/TVT00743.JPG.asset.json";
import photo10 from "@/assets/TVT00576.JPG.asset.json";

const photos = [
  { src: photo01.url, alt: "Thảo My và Xuân Tú nắm tay bên vòm hoa", ratio: "portrait" },
  { src: photo02.url, alt: "Xuân Tú hôn tay Thảo My", ratio: "portrait" },
  { src: photo03.url, alt: "Thảo My và Xuân Tú tạo hình trái tim", ratio: "portrait" },
  { src: photo04.url, alt: "Chân dung cô dâu Thảo My", ratio: "portrait" },
  { src: photo05.url, alt: "Thảo My mỉm cười bên bó hoa cưới", ratio: "portrait" },
  { src: photo06.url, alt: "Ảnh cưới toàn cảnh của Thảo My và Xuân Tú", ratio: "portrait" },
  { src: photo07.url, alt: "Thảo My và Xuân Tú vui đùa giữa vườn hoa", ratio: "landscape" },
  { src: photo08.url, alt: "Thảo My và Xuân Tú trong phông nền xanh", ratio: "portrait" },
  { src: photo09.url, alt: "Khoảnh khắc vui vẻ của Thảo My và Xuân Tú", ratio: "portrait" },
  { src: photo10.url, alt: "Thảo My và Xuân Tú dịu dàng bên nhau", ratio: "portrait" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thảo My & Xuân Tú | 03.10.2026" },
      { name: "description", content: "Cùng lưu giữ những khoảnh khắc yêu thương trong hành trình của Thảo My và Xuân Tú." },
      { property: "og:title", content: "Thảo My & Xuân Tú | 03.10.2026" },
      { property: "og:description", content: "Một ngày để nhớ, một hành trình để yêu — Thảo My & Xuân Tú." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingPage,
});

type Countdown = { days: string; hours: string; minutes: string; seconds: string };
const emptyCountdown: Countdown = { days: "—", hours: "—", minutes: "—", seconds: "—" };

function WeddingPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<Countdown>(emptyCountdown);

  useEffect(() => {
    const wedding = new Date("2026-10-03T00:00:00+07:00").getTime();
    const update = () => {
      const remaining = Math.max(0, wedding - Date.now());
      setCountdown({
        days: String(Math.floor(remaining / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((remaining / 3600000) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((remaining / 60000) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((remaining / 1000) % 60)).padStart(2, "0"),
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") setSelected((selected + photos.length - 1) % photos.length);
      if (event.key === "ArrowRight") setSelected((selected + 1) % photos.length);
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-6 text-hero-foreground md:px-12 md:py-8">
        <a href="#top" className="font-display text-2xl italic" aria-label="Về đầu trang">T & M</a>
        <nav className="flex items-center gap-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] md:gap-9">
          <a className="nav-link" href="#story">Chuyện mình</a>
          <a className="nav-link" href="#album">Album</a>
          <a className="nav-link hidden sm:block" href="#date">Ngày vui</a>
        </nav>
      </header>

      <section id="top" className="hero relative flex min-h-[92svh] items-end overflow-hidden">
        <img src={photo01.url} alt="Thảo My và Xuân Tú" className="absolute inset-0 h-full w-full object-cover object-[52%_38%]" fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative z-10 w-full px-5 pb-16 text-hero-foreground md:px-12 md:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] md:text-sm">Save the date · 03.10.2026</p>
          <h1 className="max-w-5xl font-display text-[clamp(4.3rem,11vw,10rem)] leading-[0.78]">
            Thảo My <span className="font-normal italic">&</span><br />Xuân Tú
          </h1>
        </div>
        <a href="#story" className="absolute bottom-5 right-5 z-20 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-hero-foreground md:right-12">
          Cuộn để xem <ChevronDown className="size-4 animate-bounce" />
        </a>
      </section>

      <section id="story" className="section-shell grid gap-14 py-24 md:grid-cols-12 md:items-center md:py-36">
        <div data-reveal className="reveal md:col-span-4 md:col-start-2">
          <p className="eyebrow">Hai con người · Một đích đến</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl">Cùng nhau,<br /><span className="italic text-accent-strong">mãi về sau.</span></h2>
          <p className="mt-8 max-w-sm leading-7 text-muted-foreground">Có những hạnh phúc thật giản dị: là tìm thấy một người để cùng cười, cùng lớn lên và cùng viết tiếp mọi ngày về sau.</p>
        </div>
        <figure data-reveal className="reveal reveal-delay relative md:col-span-6 md:col-start-7">
          <div className="image-frame aspect-[4/5] md:aspect-[5/6]">
            <img src={photo10.url} alt={photos[9].alt} className="image-cover" loading="lazy" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>Chương đầu tiên</span><span>01 / 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="bg-secondary py-24 md:py-36">
        <div className="section-shell">
          <div data-reveal className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">Những điều dịu dàng</p><h2 className="mt-4 font-display text-5xl md:text-7xl">Một ánh nhìn,<br />một lời hứa.</h2></div>
            <p className="max-w-xs leading-7 text-muted-foreground">Tình yêu hiện diện trong những khoảnh khắc nhỏ nhất, tự nhiên nhất.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-6">
            {[1, 2, 3].map((photoIndex, index) => (
              <button key={photoIndex} type="button" onClick={() => setSelected(photoIndex)} data-reveal className={`reveal gallery-button ${index === 0 ? "col-span-2 md:col-span-5" : index === 1 ? "md:col-span-3 md:mt-24" : "md:col-span-4 md:mt-10"}`} aria-label={`Mở ảnh ${photoIndex + 1}`}>
                <img src={photos[photoIndex].src} alt={photos[photoIndex].alt} className="image-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band relative min-h-[72svh] overflow-hidden">
        <img src={photo08.url} alt={photos[7].alt} className="absolute inset-0 h-full w-full object-cover object-[50%_38%]" loading="lazy" />
        <div className="quote-shade absolute inset-0" />
        <div data-reveal className="reveal relative z-10 flex min-h-[72svh] items-end justify-end p-6 text-hero-foreground md:p-16">
          <blockquote className="max-w-xl text-right font-display text-4xl italic leading-tight md:text-6xl">“Giữa muôn vàn lựa chọn,<br />chúng mình chọn nhau.”</blockquote>
        </div>
      </section>

      <section id="album" className="section-shell py-24 md:py-36">
        <div data-reveal className="reveal mb-14 flex items-end justify-between gap-4">
          <div><p className="eyebrow">Kỷ niệm của chúng mình</p><h2 className="mt-4 font-display text-5xl md:text-7xl">Album</h2></div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground md:block">Chạm vào từng bức ảnh để xem trọn vẹn khoảnh khắc.</p>
        </div>
        <div className="gallery-grid">
          {[4, 5, 6, 8, 0].map((photoIndex, index) => (
            <button key={photoIndex} type="button" onClick={() => setSelected(photoIndex)} data-reveal className={`reveal gallery-button gallery-item-${index + 1}`} aria-label={`Mở ảnh ${photoIndex + 1}`}>
              <img src={photos[photoIndex].src} alt={photos[photoIndex].alt} className="image-cover" loading="lazy" />
              <span className="gallery-number">0{index + 1}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="date" className="bg-accent text-accent-foreground">
        <div className="section-shell grid gap-16 py-24 md:grid-cols-2 md:py-32">
          <div data-reveal className="reveal">
            <Heart className="mb-8 size-6 stroke-1" />
            <p className="eyebrow text-accent-foreground/70">Đếm ngược đến ngày</p>
            <h2 className="mt-5 font-display text-6xl leading-none md:text-8xl">03 · 10<br /><span className="italic">2026</span></h2>
          </div>
          <div data-reveal className="reveal reveal-delay flex items-end">
            <div className="grid w-full grid-cols-4 border-y border-accent-foreground/20 py-7">
              {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
                <div key={unit} className="text-center">
                  <span className="block font-display text-3xl md:text-5xl">{countdown[unit]}</span>
                  <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.14em] text-accent-foreground/65">{{ days: "Ngày", hours: "Giờ", minutes: "Phút", seconds: "Giây" }[unit]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell py-20 text-center md:py-28">
        <p className="eyebrow">Cảm ơn bạn đã ghé thăm</p>
        <p className="mx-auto mt-8 max-w-3xl font-display text-4xl italic leading-tight md:text-6xl">Hẹn gặp nhau trong ngày vui của chúng mình.</p>
        <div className="mx-auto my-10 h-px w-16 bg-border" />
        <p className="font-display text-2xl">Thảo My & Xuân Tú</p>
      </footer>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh cưới">
          <Button variant="ghost" size="icon" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Đóng ảnh"><X /></Button>
          <Button variant="ghost" size="icon" className="lightbox-prev" onClick={() => setSelected((selected + photos.length - 1) % photos.length)} aria-label="Ảnh trước"><ChevronLeft /></Button>
          <img src={photos[selected].src} alt={photos[selected].alt} className="max-h-[88svh] max-w-[88vw] object-contain" />
          <Button variant="ghost" size="icon" className="lightbox-next" onClick={() => setSelected((selected + 1) % photos.length)} aria-label="Ảnh sau"><ChevronRight /></Button>
          <p className="absolute bottom-5 text-xs tracking-[0.2em] text-lightbox-foreground/70">{String(selected + 1).padStart(2, "0")} / {photos.length}</p>
        </div>
      )}
    </main>
  );
}