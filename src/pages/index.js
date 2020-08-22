import Link from "next/link";
export default function Index({ vehicle, person }) {
  return (
    <Link as={`/${vehicle}/${person}`} href="/[vehicle]/[person]">
      <a>{`${person}'s ${vehicle}`}</a>
    </Link>
  );
}

export const getInitialprops = () => ({ vehicle: "Bike" });
