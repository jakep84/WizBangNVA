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
              Private firearms work, done right.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              WizBang provides private firearms service for Fort Belvoir and the
              surrounding Northern Virginia area, with a focus on trigger work,
              tuning, diagnostics, parts installation, deep cleaning, and
              reliability-minded service across pistols, rifles, shotguns, and
              more.
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
                      Confidence in the process
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
              Modern firearms service with a clean client experience.
            </h3>
            <p className="mt-4 text-zinc-400 leading-7">
              Built for people who want straight answers, solid work, and a
              process that feels clear from first text to final pickup.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300">
                    Details on request{" "}
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
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
                No storefront confusion. No random guessing. Just a clear
                appointment-based process handled locally.
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
                Ready when you are.
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
                  Text 512-673-8809
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
