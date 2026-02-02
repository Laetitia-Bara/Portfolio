import Container from "./Container";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
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
