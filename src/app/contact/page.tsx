import { Mail, Phone, MapPin } from "lucide-react";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { BrandContactsGrid } from "../components/contact/BrandContactsGrid";
import { Reveal } from "../components/ui/Reveal";
import { COMPANY_CONTACT } from "../constants/site";
import { SITE_MEDIA } from "../constants/media";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        title="Contact"
        subtitle="Echo Futur · All ventures"
        image={SITE_MEDIA.contactHero}
        height="md"
      />
      <section className="section-padding">
        <div className="container-site space-y-14 md:space-y-16">
          {/* Header + form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <Reveal className="space-y-4">
                <h1 className="heading-display">
                  Get in <br /> <span className="text-yellow-400">Touch</span>
                </h1>
                <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-sm">
                  We are ready for the future
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {[
                  {
                    icon: Phone,
                    label: "Call",
                    val: COMPANY_CONTACT.phone,
                    href: COMPANY_CONTACT.phoneHref,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    val: COMPANY_CONTACT.primaryEmail,
                    href: `mailto:${COMPANY_CONTACT.primaryEmail}`,
                  },
                  {
                    icon: MapPin,
                    label: "Visit",
                    val: COMPANY_CONTACT.location,
                  },
                ].map((item, i) => (
                  <Reveal
                    key={item.label}
                    delay={i * 40}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                  >
                    <div className="p-2.5 bg-black text-white rounded-xl shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="text-black text-sm font-bold hover:text-yellow-600 transition-colors break-all"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-black text-sm font-bold">{item.val}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={80}>
              <form className="bg-black p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl form-stack lg:sticky lg:top-28">
                <div>
                  <label className="form-label text-white/40 ml-1 sm:ml-2">Your Name</label>
                  <input
                    className="form-field form-field-dark mt-2 rounded-full"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="form-label text-white/40 ml-1 sm:ml-2">Your Email</label>
                  <input
                    className="form-field form-field-dark mt-2 rounded-full"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="form-label text-white/40 ml-1 sm:ml-2">Message</label>
                  <textarea
                    rows={4}
                    className="form-field form-field-dark mt-2 resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-yellow-400 text-black py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-yellow-300 transition-colors min-h-[48px]"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>

          {/* Brand contacts — full width, no scroll */}
          <Reveal>
            <div className="pt-10 md:pt-12 border-t border-slate-100">
              <BrandContactsGrid />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
