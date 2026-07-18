import { Quote } from "lucide-react";
import { MediaSlot } from "./ui/MediaSlot";
import { TESTIMONIALS } from "../constants/data";
import { COMPANY_CONTACT, whatsappUrl } from "../constants/site";
import { Reveal } from "./ui/Reveal";
import { WhatsAppLeadForm } from "./ui/WhatsAppLeadForm";

export function Testimonials() {
  return (
    <section className="section-padding-tight bg-white border-t border-black/5">
      <div className="container-site">
        <Reveal className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="heading-section">
            Trusted by{" "}
            <span className="highlight-bar">
              <span>partners</span>
            </span>
          </h2>
          <p className="text-black/45 max-w-xl mx-auto font-medium">
            Stories from customers across our ventures.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 60}
              className="p-6 md:p-8 rounded-3xl border border-yellow-400/40 bg-surface hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="font-black text-black/35 uppercase text-[10px] tracking-widest">
                    {t.role}
                  </p>
                  <h5 className="text-black font-black uppercase text-sm italic">{t.name}</h5>
                </div>
                <div className="relative w-12 h-12 rounded-full border-2 border-yellow-400 overflow-hidden shrink-0 bg-slate-100">
                  <MediaSlot
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    placeholderLabel=" "
                  />
                </div>
              </div>
              <p className="text-black/70 font-medium leading-relaxed italic border-l-2 border-yellow-400 pl-4 mb-4 line-clamp-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <Quote className="w-6 h-6 text-yellow-400/80" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section className="section-padding bg-black">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="space-y-6">
            <p className="eyebrow text-white/35">Get in touch</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-[0.95] tracking-tighter">
              Start a <span className="italic text-yellow-400">project</span>
            </h2>
            <p className="text-white/45 text-lg font-medium max-w-md">
              Ready to build across any Ekho Future venture.
            </p>
            <a
              href={whatsappUrl("Hi Ekho Future — I'd like to start a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/60 font-black tracking-widest uppercase text-xs hover:text-white transition-colors"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              WhatsApp · {COMPANY_CONTACT.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={80}>
            <WhatsAppLeadForm
              topic="project inquiry"
              className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 form-stack"
              submitLabel="Send on WhatsApp"
              submitClassName="btn-accent w-full justify-center py-4 min-h-[48px]"
              fields={[
                {
                  name: "name",
                  placeholder: "Full name",
                  autoComplete: "name",
                  className:
                    "form-field form-field-dark bg-transparent border-x-0 border-t-0 rounded-none border-b border-white/15 px-0",
                  wrapperClassName: "",
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  autoComplete: "email",
                  className:
                    "form-field form-field-dark bg-transparent border-x-0 border-t-0 rounded-none border-b border-white/15 px-0",
                  wrapperClassName: "",
                },
                {
                  name: "message",
                  type: "textarea",
                  placeholder: "How can we help?",
                  rows: 3,
                  className:
                    "form-field form-field-dark bg-transparent border-x-0 border-t-0 rounded-none border-b border-white/15 px-0 resize-none",
                  wrapperClassName: "",
                },
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
