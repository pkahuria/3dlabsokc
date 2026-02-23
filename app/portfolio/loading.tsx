export default function PortfolioLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="bg-primary-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="skeleton h-12 w-1/2 mx-auto rounded mb-6" />
            <div className="skeleton h-6 w-3/4 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Portfolio grid skeleton */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="skeleton h-64 w-full" />
                <div className="p-6">
                  <div className="skeleton h-6 w-3/4 rounded mb-3" />
                  <div className="skeleton h-4 w-full rounded mb-2" />
                  <div className="skeleton h-4 w-2/3 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
