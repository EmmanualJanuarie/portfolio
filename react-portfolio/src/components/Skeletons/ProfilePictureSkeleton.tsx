export default function ProfilePictureSkeleton() {
  return (
    <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gray-200">
      {/* Gradient shimmer */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                   bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
      />
    </div>
  );
}
