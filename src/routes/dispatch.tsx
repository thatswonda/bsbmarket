import { createFileRoute, redirect } from "@tanstack/react-router";

/** /dispatch is a common search path; the canonical page is /rides. */
export const Route = createFileRoute("/dispatch")({
  beforeLoad: () => {
    throw redirect({ to: "/rides", statusCode: 301 });
  },
});
