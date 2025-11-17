export default function ReactNativeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-auto py-12">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <img
          src="/images/react_native_app.png"
          alt="React Native App"
          className="w-full h-full object-cover rounded-xl mb-6 shadow"
        />

        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          React Native App — A mobile-first project demonstrating native functionality with dummy data.
        </p>

        <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
        <p className="text-gray-700 mb-4">
          Needed to showcase mobile app UI/UX and device-specific interactions without relying on a backend yet.
        </p>

        <h3 className="text-xl font-semibold mb-2">Your Role</h3>
        <p className="text-gray-700 mb-4">
          Frontend Developer: Implemented navigation, UI components, and dummy data integration.
        </p>

        <h3 className="text-xl font-semibold mb-2">Process / Approach</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Built navigation using React Navigation</li>
          <li>Created UI with TailwindCSS-inspired design for mobile</li>
          <li>Integrated dummy Firebase data for testing</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Challenge: Ensuring smooth navigation on multiple device sizes
            <br />
            Solution: Implemented responsive layout and flexible components
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Results / Outcome</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>App UI tested on multiple devices successfully</li>
          <li>Reusable components created for future projects</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Lessons Learned / Next Steps</h3>
        <p className="text-gray-700 mb-6">
          Learnings: Mobile-first design and responsive navigation. Next: integrate backend and real data.
        </p>
      </div>
    </div>
  );
}