"use client"
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Play, Download, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "AI-Powered",
    description: "State-of-the-art AI models generate stunning images from your text descriptions.",
    bgColor: "bg-indigo-100",
    color: "text-indigo-600",
  },
  {
    icon: <Play className="h-5 w-5" />,
    title: "Lightning Fast",
    description: "Get your images in seconds, not minutes. Iterate rapidly on your creative ideas.",
    bgColor: "bg-cyan-100",
    color: "text-cyan-600",
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: "High Quality",
    description: "Download high-resolution images ready for professional use.",
    bgColor: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Save & Organize",
    description: "Build your personal library and organize generations into projects.",
    bgColor: "bg-amber-100",
    color: "text-amber-600",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Graphic Designer",
    rating: "5",
    content: "This tool has completely changed my workflow. I can prototype visual ideas in seconds.",
  },
  {
    name: "Mark Rivera",
    role: "Content Creator",
    rating: "5",
    content: "The quality of images is incredible. My audience can't believe these are AI-generated.",
  },
  {
    name: "Priya Nair",
    role: "Marketing Manager",
    rating: "5",
    content: "We use it for all our campaign mockups now. Saves us hours every single week.",
  },
];

function DemoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            See It In{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Type a prompt, get a stunning image — it's that simple.
          </p>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-inner">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-sm text-slate-400 italic">
                "A futuristic city at sunset, cyberpunk style, highly detailed..."
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "from-indigo-200 to-purple-200",
                "from-cyan-200 to-blue-200",
                "from-rose-200 to-orange-200",
                "from-emerald-200 to-teal-200",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
                >
                  <Sparkles className="h-6 w-6 text-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-slate-50/90 backdrop-blur-sm"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-indigo-200">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-[1.1rem] font-bold tracking-tight text-transparent">
              Image Generator
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-150 hover:bg-indigo-50/70 hover:text-indigo-600"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-indigo-400 transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/auth/sign-in">
                <Button variant="ghost" size="sm" className="cursor-pointer text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="sm" className="cursor-pointer gap-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                  Try Free
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="space-y-1 border-t border-slate-100 bg-white/98 px-4 pb-4 pt-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link href="/auth/sign-in" className="flex-1">
                <Button variant="outline" size="sm" className="w-full cursor-pointer border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard" className="flex-1">
                <Button size="sm" className="w-full cursor-pointer gap-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500">
                  Try Free <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-100/30 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="font-medium text-indigo-700">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl">
              Turn Text into{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Images
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Create high-quality images from text prompts in seconds. Iterate
              quickly, save your generations, and build your library.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="cursor-pointer gap-2 px-8 py-6 text-base">
                  <Play className="h-5 w-5" />
                  Try It Free Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="cursor-pointer gap-2 px-8 py-6 text-base">
                  <Play className="h-5 w-5" />
                  See Examples
                </Button>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <p className="mb-8 text-sm text-slate-500">
                Trusted by thousands of creators worldwide
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700">50K+</div>
                  <div className="text-xs text-slate-500">Images Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700">5K+</div>
                  <div className="text-xs text-slate-500">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700">99.9%</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">4.8★</div>
                  <div className="text-xs text-slate-500">User Rating</div>
                </div>
                <div className="col-span-2 text-center sm:col-span-1">
                  <div className="text-2xl font-bold text-slate-700">24/7</div>
                  <div className="text-xs text-slate-500">Image Generation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Features Section */}
      <section id="features" className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Powerful AI Images at Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Fingertips
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to create images with the power of artificial intelligence
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-slate-200 bg-white/70 backdrop-blur-sm transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className={`${feature.bgColor} mb-4 inline-flex items-center justify-center rounded-lg p-3 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Simple. Fast. Professional.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get professional results in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Write Your Prompt",
                description: "Describe what you want to see. Add details like style, lighting, camera, and mood.",
              },
              {
                step: "02",
                title: "Pick Your Settings",
                description: "Set image size and generation parameters, then iterate quickly until it looks right.",
              },
              {
                step: "03",
                title: "Generate & Download",
                description: "Get your image in seconds. Download or save it to your projects.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="ml-4 hidden h-0.5 w-full bg-slate-300 md:block" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Loved by{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Creators
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See what our users are saying about Image Generator
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative border-slate-200 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: Number(testimonial.rating) }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-slate-600">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-100/70 to-cyan-100/70 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Ready to Transform Your Text?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join thousands of creators using AI to bring their ideas to life with images
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="cursor-pointer gap-2 bg-gradient-to-r from-indigo-500 to-cyan-600 px-8 py-6 text-base hover:from-indigo-600 hover:to-cyan-700">
                  <Sparkles className="h-5 w-5" />
                  Try It Free Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="cursor-pointer gap-2 border-slate-300 px-8 py-6 text-base text-slate-700 hover:bg-slate-100">
                  <Download className="h-5 w-5" />
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-600 shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
                    Image Generator
                  </span>
                </div>
                <p className="max-w-md text-slate-600">
                  High-quality image generation powered by artificial intelligence. Turn text prompts into images with cutting-edge AI technology.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-800">Product</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><Link href="#features" className="transition-colors hover:text-indigo-600">Features</Link></li>
                  <li><Link href="#pricing" className="transition-colors hover:text-indigo-600">Pricing</Link></li>
                  <li><Link href="/dashboard" className="transition-colors hover:text-indigo-600">Dashboard</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-800">Support</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><Link href="mailto:support@aiimagegenerator.com" className="transition-colors hover:text-indigo-600">Contact</Link></li>
                  <li><Link href="/dashboard/settings" className="transition-colors hover:text-indigo-600">Account Settings</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <p>&copy; 2026 Image Generator. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}