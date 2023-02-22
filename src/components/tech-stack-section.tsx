import Link from "next/link";

export default function TechStackSection() {
  return <div className="mx-auto max-w-screen-lg py-6">
    <div className="section-title">
      How this page was created?
    </div>
    <div className="section-text">
      Please check tech stack <Link href="/about" className="underline">here</Link>
    </div>
  </div>
}