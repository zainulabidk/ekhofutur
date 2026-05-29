import { notFound } from "next/navigation";
import { VentureLanding } from "../components/venture/VentureLanding";
import { getVentureById } from "../constants/site";

export default function SkillbytePage() {
  const venture = getVentureById("skillbyte");
  if (!venture) notFound();
  return <VentureLanding venture={venture} />;
}
