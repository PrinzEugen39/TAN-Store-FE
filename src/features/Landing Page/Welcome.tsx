import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import { Featured } from "@/data/Featured";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  {
    name: "Fast Delivery",
    icon: ArrowDownToLine,
    description: "We prioritize our customer satisfaction",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every items on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment. ",
  },
];
export default function Welcome() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center max-w-3xl py-20 mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">acupunture tools</span>.
          </h1>
          <p className="mt-6 text-md max-w-prose text-muted-foreground sm:text-lg">
            Welcome to TAN Store. Everything from needles, pen, Stimulator
            Electrical Nerve, and more.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <Link to="/products" className={buttonVariants()}>Browse our products</Link>
            <Button variant={"outline"}>Login to buy</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="bg-gradient-to-b from-muted/50 to-muted">
        <MaxWidthWrapper className="sm:hidden">
          <div className="flex flex-col items-center">
            <p className="mt-6 font-bold leading-relaxed tracking-wide">
              Featured Products
            </p>
            {Featured.map((component) => (
              <div className="" key={component.title}>
                <Link
                  className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none focus:shadow-md"
                  to={component.href}
                >
                  <img
                    src={component.image}
                    alt="gambar"
                    className="w-[360px] h-32 object-cover rounded-sm"
                  />
                  <div className="mt-4 mb-2 text-lg font-medium">
                    {component.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 text-blue-900 bg-blue-100 rounded-full">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-center text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
