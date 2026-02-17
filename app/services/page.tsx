import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — Rimrock Equestrian",
  description:
    "Boarding, training, lessons, and clinics at Rimrock Equestrian in Fall City, WA.",
};

const services = [
  {
    name: "Board (monthly)",
    description: "Includes 3 feedings a day, bedding, grain, and quality hay",
    price: "Contact for pricing",
  },
  {
    name: "Full Training (monthly)",
    description: "Includes 5 lessons and/or rides per week",
    price: "Contact for pricing",
  },
  {
    name: "Partial Training (monthly)",
    description: "Includes 2 lessons and/or rides per week",
    price: "Contact for pricing",
  },
  {
    name: "Private Lesson",
    description: "50 minutes of instruction",
    price: "Contact for pricing",
  },
  {
    name: "Semi-private Lesson",
    description: "50 minutes of instruction for 2 people",
    price: "Contact for pricing",
  },
  {
    name: "Clinics",
    description: "Please call for daily rates",
    price: "Contact for pricing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-warm-beige py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-green-dark mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            We offer a range of services to meet the needs of horses and riders
            at every level. Contact us for current pricing.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-green-dark text-white">
                <th className="text-left px-6 py-4 font-semibold">Service</th>
                <th className="text-left px-6 py-4 font-semibold hidden sm:table-cell">
                  Description
                </th>
                <th className="text-left px-6 py-4 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr
                  key={service.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-warm-beige/50"}
                >
                  <td className="px-6 py-4">
                    <span className="font-medium text-foreground">
                      {service.name}
                    </span>
                    <span className="block sm:hidden text-sm text-foreground/60 mt-1">
                      {service.description}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground/70 hidden sm:table-cell">
                    {service.description}
                  </td>
                  <td className="px-6 py-4 text-foreground/70 whitespace-nowrap">
                    {service.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-warm-beige rounded-xl p-8 text-center">
          <p className="text-foreground/70 mb-4">
            Interested in our services? We&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-dark text-white font-semibold rounded-lg hover:bg-green-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
