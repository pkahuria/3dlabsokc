import Button from "./Button";

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  showPhone?: boolean;
}

export default function CTABanner({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary-accent/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">
          {heading}
        </h2>
        {subtext && (
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={primaryCTA.href} size="lg">
            {primaryCTA.text}
          </Button>
          {secondaryCTA && (
            <>
              <span className="text-slate-400">or</span>
              {secondaryCTA.href ? (
                <Button href={secondaryCTA.href} variant="secondary" size="lg">
                  {secondaryCTA.text}
                </Button>
              ) : (
                <button
                  onClick={secondaryCTA.onClick}
                  className="text-white font-medium hover:text-accent transition-colors"
                >
                  {secondaryCTA.text}
                </button>
              )}
            </>
          )}
          {showPhone && !secondaryCTA && (
            <>
              <span className="text-slate-400">or call</span>
              <a
                href="tel:+14055462228"
                className="text-white font-medium hover:text-accent transition-colors"
              >
                (405) 546-2228
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
