import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { BrandContactsGrid } from "../components/contact/BrandContactsGrid";
import { Reveal } from "../components/ui/Reveal";
import { WhatsAppLeadForm } from "../components/ui/WhatsAppLeadForm";
import { COMPANY_CONTACT, whatsappUrl } from "../constants/site";
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    val: "Chat on WhatsApp",
                    href: whatsappUrl("Hi Ekho Future — I'd like to get in touch."),
                    external: true,
                  },
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
                          {...("external" in item && item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
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
              <WhatsAppLeadForm
                topic="website contact inquiry"
                className="bg-black p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl form-stack lg:sticky lg:top-28"
                submitLabel="Send on WhatsApp"
                submitClassName="w-full bg-yellow-400 text-black py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-yellow-300 transition-colors min-h-[48px]"
                fields={[
                  {
                    name: "name",
                    label: "Your Name",
                    labelClassName: "form-label text-white/40 ml-1 sm:ml-2",
                    placeholder: "Your name",
                    autoComplete: "name",
                    className: "form-field form-field-dark mt-2 rounded-full",
                    wrapperClassName: "space-y-0",
                  },
                  {
                    name: "email",
                    label: "Your Email",
                    labelClassName: "form-label text-white/40 ml-1 sm:ml-2",
                    type: "email",
                    placeholder: "you@email.com",
                    autoComplete: "email",
                    className: "form-field form-field-dark mt-2 rounded-full",
                    wrapperClassName: "space-y-0",
                  },
                  {
                    name: "message",
                    label: "Message",
                    labelClassName: "form-label text-white/40 ml-1 sm:ml-2",
                    type: "textarea",
                    placeholder: "How can we help?",
                    rows: 4,
                    className: "form-field form-field-dark mt-2 resize-none",
                    wrapperClassName: "space-y-0",
                  },
                ]}
              />
            </Reveal>
          </div>

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
