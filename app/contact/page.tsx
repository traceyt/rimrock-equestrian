import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Rimrock Equestrian",
  description:
    "Get in touch with Rimrock Equestrian in Fall City, WA. Call, email, or visit us.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-warm-beige py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-dark mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            We&apos;d love to hear from you. Reach out by phone, email, or stop
            by the barn.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-dark mb-6">
                Rimrock Equestrian
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-foreground/70">
                    468 292nd Ave NE
                    <br />
                    Fall City, WA 98024
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+14255035368"
                    className="text-green-medium hover:text-green-dark transition-colors"
                  >
                    (425) 503-5368
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:rimrock1992@hotmail.com"
                    className="text-green-medium hover:text-green-dark transition-colors"
                  >
                    rimrock1992@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-sm h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.5!2d-121.88!3d47.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549073e3a0a0a0a1%3A0x0!2s468+292nd+Ave+NE%2C+Fall+City%2C+WA+98024!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rimrock Equestrian location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
