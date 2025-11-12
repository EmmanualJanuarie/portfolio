export default function CertificateCardSkeleton() {
  return (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden cursor-pointer animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-screen h-56 overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)]
                     bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
        />
      </div>

      {/* Text skeleton */}
      <div className="p-4 sm:p-5 text-center">
        {/* Title */}
        <div className="h-6 w-3/4 mx-auto mb-1 rounded-md bg-gray-200 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)]
                       bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
          />
        </div>
        {/* Subtitle */}
        <div className="h-4 w-1/2 mx-auto rounded-md bg-gray-200 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)]
                       bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
          />
        </div>
      </div>
    </div>
  );
}
