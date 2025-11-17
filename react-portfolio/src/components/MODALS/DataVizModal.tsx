// Modal 3: Tableau / Power BI Project
export default function DataVizModal({ onClose }: { onClose: () => void }) {
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
          src="/images/data_viz_project.png"
          alt="Data Visualization"
          className="w-full h-full object-cover rounded-xl mb-6 shadow"
        />

        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          Data Visualization Project — Interactive dashboards built with Tableau / Power BI for business insights.
        </p>

        <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
        <p className="text-gray-700 mb-4">
          Business data was scattered and hard to analyze, causing slow decision-making.
        </p>

        <h3 className="text-xl font-semibold mb-2">Your Role</h3>
        <p className="text-gray-700 mb-4">
          Data Analyst & Developer: Built dashboards, integrated multiple data sources, and created visual KPIs.
        </p>

        <h3 className="text-xl font-semibold mb-2">Process / Approach</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Cleaned and connected multiple data sources</li>
          <li>Designed dashboards in Tableau and Power BI</li>
          <li>Tested for usability and visual clarity</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Challenge: Combining inconsistent data sources
            <br />
            Solution: SQL preprocessing and Excel transformations
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Results / Outcome</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Interactive dashboards used by management for KPI tracking</li>
          <li>Decision-making speed improved by 40%</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Lessons Learned / Next Steps</h3>
        <p className="text-gray-700 mb-6">
          Next: Automate data updates for dashboards. Learned to visualize complex business data effectively.
        </p>
      </div>
    </div>
  );
}