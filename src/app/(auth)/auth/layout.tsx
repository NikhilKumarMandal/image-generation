import type { ReactNode } from "react";
import { Providers } from "~/components/providers";
import { Sparkles, Image as ImageIcon, Zap, Target, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="auth-page flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-cyan-900 lg:flex lg:w-1/2">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Decorative blobs */}
          <div className="absolute top-16 right-16 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute bottom-24 right-28 h-28 w-28 rounded-full bg-cyan-400/15 blur-2xl" />
          <div className="absolute top-1/2 right-8 h-20 w-20 rounded-full bg-sky-400/20 blur-xl" />
          <div className="absolute top-1/3 left-8 h-16 w-16 rounded-full bg-indigo-300/10 blur-xl" />

          <div className="relative z-10 flex flex-col justify-between px-12 py-12 xl:px-16">
            {/* Logo */}
            <Link href="/" className="group flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/30">
                <Sparkles className="h-6 w-6 text-indigo-200" />
              </div>
              <span className="text-xl font-bold tracking-tight text-indigo-50">
                AI Image Generator
              </span>
            </Link>

            {/* Hero Content */}
            <div className="max-w-md">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Advanced AI · Ready to create
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white xl:text-5xl">
                Transform Text into{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Stunning Images
                </span>
              </h1>
              <p className="mb-10 text-base leading-relaxed text-indigo-100/75">
                Join thousands of creators using advanced AI to generate
                beautiful, high-quality images in seconds.
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  {
                    icon: ImageIcon,
                    text: "Text-to-Image Generation",
                    color: "bg-emerald-500/15 border-emerald-400/25 text-emerald-300",
                  },
                  {
                    icon: Zap,
                    text: "Lightning Fast Processing",
                    color: "bg-amber-500/15 border-amber-400/25 text-amber-300",
                  },
                  {
                    icon: Target,
                    text: "High-Quality Outputs",
                    color: "bg-cyan-500/15 border-cyan-400/25 text-cyan-300",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border backdrop-blur-sm ${feature.color}`}>
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-indigo-100/90">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="mt-0.5 text-xs text-indigo-300/70">Images Generated</div>
              </div>
              <div className="border-x border-white/10 text-center">
                <div className="text-2xl font-bold text-white">5K+</div>
                <div className="mt-0.5 text-xs text-indigo-300/70">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-300">4.8★</div>
                <div className="mt-0.5 text-xs text-indigo-300/70">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex flex-1 flex-col justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100 px-6 py-12 lg:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link href="/" className="group inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-indigo-200">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-lg font-bold tracking-tight text-transparent">
                  AI Image Generator
                </span>
              </Link>
            </div>

            {/* Auth Form Container */}
            <div>{children}</div>

            {/* Footer Link */}
            <p className="mt-6 text-center text-sm text-slate-500">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-medium text-indigo-600 transition-colors hover:text-indigo-500"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to homepage
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}