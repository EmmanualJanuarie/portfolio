export default function ProfilePictureSkeleton() {
  return (
    <div className="relative w-full h-full rounded-full shadow-xl border border-gray-200 overflow-hidden">
      {/* Gradient shimmer */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                   bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
      />
    </div>
  );
}
