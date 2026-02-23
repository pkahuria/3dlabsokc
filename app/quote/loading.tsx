export default function QuoteLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="bg-primary-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="skeleton h-12 w-1/2 mx-auto rounded mb-6" />
            <div className="skeleton h-6 w-2/3 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Quote form skeleton */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              {/* Personal info fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="skeleton h-4 w-16 rounded mb-2" />
                  <div className="skeleton h-12 w-full rounded" />
                </div>
                <div>
                  <div className="skeleton h-4 w-16 rounded mb-2" />
                  <div className="skeleton h-12 w-full rounded" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="skeleton h-4 w-20 rounded mb-2" />
                  <div className="skeleton h-12 w-full rounded" />
                </div>
                <div>
                  <div className="skeleton h-4 w-24 rounded mb-2" />
                  <div className="skeleton h-12 w-full rounded" />
                </div>
              </div>

              {/* Description field */}
              <div>
                <div className="skeleton h-4 w-32 rounded mb-2" />
                <div className="skeleton h-32 w-full rounded" />
              </div>

              {/* File upload */}
              <div>
                <div className="skeleton h-4 w-24 rounded mb-2" />
                <div className="skeleton h-24 w-full rounded border-2 border-dashed" />
              </div>

              {/* Submit button */}
              <div className="skeleton h-12 w-full rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
