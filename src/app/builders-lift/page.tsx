import { notFound } from "next/navigation";
import { VentureLanding } from "../components/venture/VentureLanding";
import { getVentureById } from "../constants/site";

export default function BuildersLiftPage() {
  const venture = getVentureById("builders-lift");
  if (!venture) notFound();
  return <VentureLanding venture={venture} />;
}
