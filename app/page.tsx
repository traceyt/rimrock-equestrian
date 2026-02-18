import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/119951944_125647672608789_8049497915006669142_n.jpg"
          alt="Sunset over Rimrock Equestrian"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-lg">
              Rimrock Equestrian
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-6 drop-shadow">
              We believe in having fun with your horse!
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8 drop-shadow">
              Welcome to Rimrock Equestrian, located in beautiful Fall City,
              Washington. We offer boarding, training, and lessons in a
              supportive and encouraging environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-green-dark font-semibold rounded-lg hover:bg-warm-beige transition-colors"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-dark mb-6">
              Your Horse. Your Goals. Our Passion.
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Whether you&apos;re just starting out or competing at the upper
              levels, our team of experienced trainers is here to help you and
              your horse reach your goals.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With over 20 years of experience in eventing and dressage, we
              focus on building strong partnerships between horse and rider —
              with an emphasis on confidence, safety, and fun.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/RickyDH-1-PirateShipA-150x150.jpg"
              alt="Cross-country jump"
              width={150}
              height={150}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/images/RickyDH-2-FlyersA-150x150.jpg"
              alt="Show jumping"
              width={150}
              height={150}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/images/RickyDH-3-DreassageA-150x150.jpg"
              alt="Dressage"
              width={150}
              height={150}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/images/RickyDH-4-RollTopA-150x150.jpg"
              alt="Roll top jump"
              width={150}
              height={150}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="bg-warm-beige py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-dark mb-3 text-center">
            Our Facility
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto mb-12">
            Nestled in the foothills of the Cascades, our property features
            covered and outdoor arenas, spacious stalls, and beautiful pastures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/119797582_125647619275461_2649834810776841602_n.jpg"
                alt="Covered riding arena"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Covered Arena</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/119706390_125647652608791_5073634919980357687_n.jpg"
                alt="Outdoor riding arena"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Outdoor Arena</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/119737604_125647635942126_6124318554995406127_n.jpg"
                alt="Barn stalls with horses"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Spacious Stalls</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/477581637_1163175195817078_5414908960889712182_n.jpg"
                alt="Barn and paddocks"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Barn &amp; Paddocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/about"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-green-dark mb-2 group-hover:text-green-medium transition-colors">
                Meet Our Trainers
              </h3>
              <p className="text-foreground/60">
                Experienced instructors in eventing and dressage ready to help
                you succeed.
              </p>
            </Link>
            <Link
              href="/services"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-green-dark mb-2 group-hover:text-green-medium transition-colors">
                Services &amp; Pricing
              </h3>
              <p className="text-foreground/60">
                Boarding, training, lessons, and clinics — find the right
                program for you.
              </p>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-green-dark mb-2 group-hover:text-green-medium transition-colors">
                Visit Us
              </h3>
              <p className="text-foreground/60">
                Located in beautiful Fall City, WA — just 30 minutes east of
                Seattle.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
