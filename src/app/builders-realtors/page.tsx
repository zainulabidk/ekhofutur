import { notFound } from "next/navigation";
import { VentureLanding } from "../components/venture/VentureLanding";
import { getVentureById } from "../constants/site";

export default function BuildersRealtorsPage() {
  const venture = getVentureById("builders");
  if (!venture) notFound();
  return <VentureLanding venture={venture} />;
}
