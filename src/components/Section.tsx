import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-12">
      <Container>
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
