import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Our Trainers — Rimrock Equestrian",
  description:
    "Meet the trainers at Rimrock Equestrian: Todd Trewin, Rachel Brickman, and Debbie DeWitt.",
};

function TrainerCard({
  name,
  specialty,
  bio,
  image,
}: {
  name: string;
  specialty: string;
  bio: string;
  image?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:flex">
        {image && (
          <div className="md:w-64 md:flex-shrink-0">
            <Image
              src={image}
              alt={name}
              width={256}
              height={384}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        )}
        <div className="p-8">
          <p className="text-sm font-semibold text-green-medium uppercase tracking-wide mb-1">
            {specialty}
          </p>
          <h2 className="text-2xl font-bold text-green-dark mb-4">{name}</h2>
          <p className="text-foreground/70 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-warm-beige overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/119902257_125647692608787_6387714453986712871_n.jpg"
            alt="Horse grazing in pasture at Rimrock Equestrian"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-dark/80 via-green-dark/60 to-green-dark/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Meet Our Trainers
          </h1>
          <p className="text-lg text-white/85 max-w-2xl drop-shadow">
            Our experienced team brings decades of knowledge in eventing and
            dressage to help you and your horse succeed.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <TrainerCard
          name="Todd Trewin"
          specialty="Eventing Trainer"
          image="/images/ToddBike-682x1024.jpg"
          bio="Todd Trewin has been training horses and riders for over 20 years at Rimrock Equestrian in Fall City, WA. He specializes in eventing, working with horses and riders from the introductory levels through Preliminary. Todd's philosophy centers on building a strong partnership between horse and rider, with an emphasis on confidence, safety, and having fun along the way. Todd has competed extensively in the Pacific Northwest eventing circuit. He is known for producing well-rounded, confident horses that excel in all three phases — dressage, cross-country, and show jumping."
        />

        <TrainerCard
          name="Rachel Brickman"
          specialty="Eventing Trainer"
          bio="Bio coming soon."
        />

        <TrainerCard
          name="Debbie DeWitt"
          specialty="Dressage Trainer"
          bio="Bio coming soon."
        />
      </section>
    </>
  );
}
