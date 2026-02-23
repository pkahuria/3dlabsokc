export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="bg-primary-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="skeleton h-12 w-1/3 mx-auto rounded mb-6" />
            <div className="skeleton h-6 w-2/3 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Contact content skeleton */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info skeleton */}
            <div>
              <div className="skeleton h-8 w-1/2 rounded mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="skeleton h-10 w-10 rounded-lg" />
                    <div className="flex-1">
                      <div className="skeleton h-5 w-24 rounded mb-2" />
                      <div className="skeleton h-4 w-48 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form skeleton */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="skeleton h-8 w-1/2 rounded mb-6" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <div className="skeleton h-4 w-24 rounded mb-2" />
                    <div className="skeleton h-12 w-full rounded" />
                  </div>
                ))}
                <div className="skeleton h-32 w-full rounded" />
                <div className="skeleton h-12 w-full rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
