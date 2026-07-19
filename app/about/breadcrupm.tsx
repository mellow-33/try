import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbHero() {
  return (
    <section className="bg-[#33800c] w-full py-24 px-6 flex flex-col items-center justify-center text-center">
      {/* Titolo Principale */}
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6">
        About Think Green
      </h1>

      {/* Sottotitolo */}
      <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>

      {/* Breadcrumbs con shadcn/ui */}
      <Breadcrumb>
        <BreadcrumbList className="flex items-center justify-center sm:gap-2 text-white/70">
            <BreadcrumbItem>
                <BreadcrumbLink href="/" className="transition-colors hover:text-white text-white/70">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/70">/</BreadcrumbSeparator>
            <BreadcrumbItem>
                <BreadcrumbPage className="transition-colors hover:text-white text-white/70">
                    About
                </BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
    </section>
  );
}