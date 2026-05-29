import { notFound } from "next/navigation";
import { VentureLanding } from "../components/venture/VentureLanding";
import { getVentureById } from "../constants/site";

export default function EkhoDigixPage() {
  const venture = getVentureById("ekhodigix");
  if (!venture) notFound();
  return <VentureLanding venture={venture} />;
}
