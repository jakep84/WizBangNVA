"use client";

import {
  Shield,
  Wrench,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock3,
  MapPin,
  ChevronRight,
  Crosshair,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Fingerprint, Focus, ChevronDown } from "lucide-react";
import { pricingCategories, featuredPackages, signatureTuningPackage, signatureUltrasonicPackage } from "./pricing-data";


export default function WizbangSite() {
  const services = [
    {
      title: "Trigger work and tuning",
      desc: "Cleaner break, more consistent pull, and a more predictable reset tailored to your setup.",
      icon: Crosshair,
    },
    {
      title: "Parts installation",
      desc: "Professional install of aftermarket parts and upgrades with fitment and function in mind.",
      icon: Wrench,
    },
    {
      title: "Diagnostics and reliability",
      desc: "Hands-on inspection and troubleshooting for common handgun issues, wear, and performance concerns.",
      icon: Settings2,
    },
    {
      title: "Deep cleaning and inspection",
      desc: "Detailed cleaning, inspection, and service work to bring neglected guns back to a solid baseline.",
      icon: Shield,
    },
    {
      title: "Custom hand stippling",
      desc: "Purposeful grip texture, precise borders, and hand-crafted patterns tailored to your grip.",
      icon: Fingerprint,
    },
    {
      title: "Optics and sights",
      desc: "Optic installation, sight changes, alignment, and zeroing with compatible hardware.",
      icon: Focus,
    },
  ];

  const process = [
    "Reach out with the firearm, the work you want done, and any parts you already have.",
    "Drop-off is arranged at a convenient local public location by appointment.",
    "The firearm is inspected, the work is confirmed, and you are updated if anything unexpected comes up.",
    "Pickup is arranged locally once the job is complete.",
  ];

  const areas = [
    "Fort Belvoir",
    "Alexandria",
    "Kingstowne",
    "Springfield",
    "Lorton",
    "Fairfax County",
  ];

  const highlights = [
    "Private, appointment-based service",
    "Pistols, rifles, shotguns, and more",
    "Local drop-off and pickup",
    "Clear communication throughout the job",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.16),transparent_22%),linear-gradient(to_bottom,#060606,#0b0b0f_35%,#060606)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Northern Virginia
            </div>
            <div className="text-xl font-semibold tracking-tight">WizBang</div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#services"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#process"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Process
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Book a job
            </a>
          </div>
          <a
            href="#pricing"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:hidden"
          >
            Pricing
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-black/30 backdrop-blur-md">
              <Shield className="h-4 w-4" />
              Private firearms service • Local drop-off and pickup
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Precision firearms service for Northern Virginia.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Precision firearms service for Northern Virginia.
              Appointment-based service for Fort Belvoir and the surrounding
              area. Diagnostics, upgrades, cleaning, optics mounting and
              zeroing, and reliability-focused work for pistols, rifles, and
              shotguns.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="sms:15126738809"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.01]"
              >
                <MessageSquare className="h-4 w-4" />
                Text to book
              </a>
              <a
                href="tel:15126738809"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-zinc-300 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="rounded-[26px] border border-white/10 bg-zinc-950/90 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      What clients want
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      What to expect{" "}
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Clock3 className="h-5 w-5 text-zinc-200" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-white">
                      Private workshop
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Work is completed from a private location with no walk-ins
                      or customer traffic.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-white">
                      Clear communication
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      You know what is being done, what is recommended, and when
                      anything unexpected needs to be discussed first.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-white">
                      Local handoff
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Drop-off and pickup are arranged at convenient local
                      public locations by appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Services
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Core Services{" "}
            </h3>
            <p className="mt-4 text-zinc-400 leading-7">
              Built for people who want straight answers, solid work, and a
              process that feels clear from first text to final pickup.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 text-xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {service.desc}
                  </p>
                  <a
                    href="#pricing"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                  >
                    View pricing
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Straightforward pricing
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Gunsmithing price menu
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Browse individual services or choose a complete package. These
                are labor prices in USD. Starting prices may vary with the
                firearm, condition, compatibility and scope of work.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {pricingCategories.map((category) => (
                  <a
                    key={category.id}
                    href={"#pricing-" + category.id}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {category.title}
                  </a>
                ))}
                <a
                  href="#featured-packages"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Featured Packages
                </a>
              </div>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300"
              >
                Ask for a custom quote
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[30px] border border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-6 shadow-2xl shadow-black/30 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                Featured 1911 package
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  {signatureTuningPackage.price}
                </span>
                <span className="text-sm text-zinc-400">labor, parts extra</span>
              </div>
              <h4 className="mt-4 text-xl font-semibold">
                {signatureTuningPackage.name}
              </h4>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {signatureTuningPackage.includes}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Add ultrasonic cleaning
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    +$50 with this package
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-white">
                    {signatureUltrasonicPackage.price}
                  </div>
                  <div className="text-xs text-zinc-400">total labor</div>
                </div>
              </div>
              <a
                href="sms:15126738809"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                <MessageSquare className="h-4 w-4" />
                Request this package
              </a>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Individual services
            </div>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Explore services by category
            </h4>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Select a category to expand the full itemized price list.
              Individual services can be bundled when work overlaps.
            </p>
          </div>

          <div className="mt-7 grid gap-4">
            {pricingCategories.map((category) => (
              <details
                id={"pricing-" + category.id}
                key={category.id}
                className="group scroll-mt-28 rounded-[28px] border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[28px] px-5 py-5 outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:px-7 [&::-webkit-details-marker]:hidden">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <h5 className="text-lg font-semibold text-white sm:text-xl">
                        {category.title}
                      </h5>
                      <span className="text-xs text-zinc-500">
                        {category.items.length} services
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2.5 text-white">
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </span>
                </summary>

                <div className="border-t border-white/10 px-5 py-2 sm:px-7">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-1 border-b border-white/10 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:gap-6"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-medium leading-6 text-zinc-100">
                          {item.name}
                        </div>
                        {item.note && (
                          <p className="mt-0.5 text-xs leading-5 text-zinc-400">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <div className="text-sm font-semibold tabular-nums text-white sm:text-right">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div id="featured-packages" className="mt-16 scroll-mt-28">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Featured Packages
            </div>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Great work, one clear quote.
            </h4>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
              Bundled services for the most common requests. Packages cover
              described labor; replacement parts and extra testing expenses
              are additional.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredPackages.map((item) => (
                <div
                  key={item.name}
                  className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="text-3xl font-semibold tracking-tight text-white">
                    {item.price}
                  </div>
                  <h5 className="mt-4 text-lg font-semibold text-white">
                    {item.name}
                  </h5>
                  <p className="mt-2 text-sm text-zinc-300">
                    {item.description}
                  </p>
                  <p className="mt-3 flex-1 text-xs leading-6 text-zinc-400">
                    {item.includes}
                  </p>
                  <a
                    href="sms:15126738809"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300"
                  >
                    Ask about this package
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 text-xs leading-6 text-zinc-400 sm:px-7">
            Prices shown are labor in USD unless otherwise noted. “From”
            indicates starting price, not a fixed total. Parts, ammunition,
            range fees, specialty machining, refinishing and unexpected repairs
            are extra. Some firearms and custom requests require a written
            estimate. Any changes to the agreed scope are discussed before
            additional work. All services are subject to inspection,
            compatibility and safety/function verification. By appointment
            only; no walk-ins.
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Process
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Simple from first message to final pickup.
              </h3>
              <p className="mt-4 max-w-xl text-zinc-400 leading-7">
                A clear appointment-based process, handled locally from first
                contact to final pickup.
              </p>
            </div>

            <div className="grid gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-zinc-300 leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-sm md:p-10">
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Service area
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Serving Fort Belvoir and nearby Northern Virginia communities.
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-200"
                  >
                    <MapPin className="h-4 w-4 text-zinc-400" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[32px] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/30 md:p-10"
              id="contact"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Book a job
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Start with a quick text
              </h3>
              <p className="mt-4 text-zinc-400 leading-7">
                Send a text with the firearm, the work you want done, and any
                parts you already have. Local drop-off and pickup can be
                arranged by appointment when needed.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="sms:15126738809"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Text
                </a>
                <a
                  href="tel:15126738809"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </div>
              <p className="mt-5 text-sm text-zinc-500">
                By appointment only. No walk-ins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
