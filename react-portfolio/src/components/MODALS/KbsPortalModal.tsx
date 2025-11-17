import { RESOURCES } from "../../utils/resources";

export default function KbsPortalModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-auto py-12">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={RESOURCES.work.pic}
          alt="KBS Portal"
          className="w-full h-full object-cover rounded-xl mb-6 shadow"
        />

        {/* Sections */}
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          KBS Portal — A web application for internal company management and WhatsApp integration, aimed at improving workflow efficiency.
        </p>

        <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
        <p className="text-gray-700 mb-4">
          Employees relied on WhatsApp to log work hours and share updates, leading to missed messages and manual tracking errors.
        </p>

        <h3 className="text-xl font-semibold mb-2">My Role</h3>
        <p className="text-gray-700 mb-4">
          Full Stack Developer: Designed backend API, integrated WhatsApp messaging, and implemented content recommendation system.
        </p>

        <h3 className="text-xl font-semibold mb-2">Process / Approach</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Used MERN stack for backend and frontend</li>
          <li>Integrated WhatsApp API to automate messaging</li>
          <li>Designed a dashboard for analytics and content recommendation</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Challenge: Ensuring messages are delivered in real-time without overloading the server. 
            <br />
            Solution: Implemented queuing with Redis and asynchronous processing.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Results / Outcome</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Reduced manual WhatsApp tracking by 80%</li>
          <li>Portal usage increased to 95% of employees in the first month</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Lessons Learned / Next Steps</h3>
        <p className="text-gray-700 mb-6">
          Next, integrate analytics dashboard with AI recommendations. Learned to handle large-scale async messaging efficiently.
        </p>
      </div>
    </div>
  );
}