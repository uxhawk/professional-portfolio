import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  endpoint: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ endpoint }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <p className="text-6xl font-extrabold text-brand">Thanks!</p>
        <p className="mt-3 text-body">Your message has been sent. I'll get back to you soon.</p>
        <div className="mt-8">
          <a
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-brand py-2.5 pr-2.5 pl-6 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Back to home
            <span
              className="flex size-7 items-center justify-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
        Let&rsquo;s Connect
      </h1>
      <form action={endpoint} method="POST" onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-bold text-neutral-900">
            Name <span className="font-normal text-brand">(required)</span>
          </Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-bold text-neutral-900">
            Email <span className="font-normal text-brand">(required)</span>
          </Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="font-bold text-neutral-900">
            Message <span className="font-normal text-brand">(required)</span>
          </Label>
          <Textarea id="message" name="message" rows={8} required />
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={status === "sending"}
            className="cursor-pointer rounded-full bg-brand px-8 font-bold text-white hover:bg-brand-dark"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </Button>
          {status === "error" && (
            <p className="text-sm text-destructive">
              Something went wrong sending your message. Please try again, or email{" "}
              <a href="mailto:uxhawk@gmail.com" className="underline">
                uxhawk@gmail.com
              </a>{" "}
              directly.
            </p>
          )}
        </div>
      </form>
    </>
  );
}
