import { createFileRoute } from "@tanstack/react-router";
import { FeaturePage, featureHead } from "@/components/FeaturePage";
import { FEATURES } from "@/content/features";

export const Route = createFileRoute("/bookings")({
  head: () => featureHead(FEATURES.bookings),
  component: () => <FeaturePage feature={FEATURES.bookings} />,
});
