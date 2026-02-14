import type { Route } from "./+types/contact";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Contact" }];
}

export default function ContactRoute(_: Route.ComponentProps) {
  return (
    <main>
      <h1>Contact</h1>
      <p>Contact information goes here.</p>
    </main>
  );
}
