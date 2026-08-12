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
      <div className="rounded-lg border border-neutral-200 bg-band p-8 text-center">
        <p className="text-lg font-bold text-neutral-900">Thanks for reaching out!</p>
        <p className="mt-2 text-body">Your message has been sent. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-bold text-neutral-900">
          Name
        </Label>
        <Input id="name" name="name" autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-bold text-neutral-900">
          Email <span className="font-normal text-brand">(required)</span>
        </Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-bold text-neutral-900">
          Message
        </Label>
        <Textarea id="message" name="message" rows={8} />
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
  );
}
