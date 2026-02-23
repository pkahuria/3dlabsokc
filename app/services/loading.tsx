export default function ServicesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="bg-primary-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="skeleton h-12 w-3/4 mx-auto rounded mb-6" />
            <div className="skeleton h-6 w-full mx-auto rounded mb-2" />
            <div className="skeleton h-6 w-2/3 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Services grid skeleton */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="skeleton h-12 w-12 rounded-lg mb-4" />
                <div className="skeleton h-6 w-3/4 rounded mb-3" />
                <div className="skeleton h-4 w-full rounded mb-2" />
                <div className="skeleton h-4 w-full rounded mb-2" />
                <div className="skeleton h-4 w-2/3 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
