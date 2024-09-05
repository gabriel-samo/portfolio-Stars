import Image from "next/image";

import { Card } from "@/components/Card";
import { testimonials } from "../../data/testimonials";
import { SectionHeader } from "@/components/SectionHeader";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about
          my work."
        />
        <div className="mt-12 md:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
