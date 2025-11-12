export default function SkillsComponent() {
  return (
    <div className="w-full lg:w-11/12 px-4 sm:px-6 lg:px-0">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Skills</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-gray-800">Languages</td>
              <td className="px-4 py-3 text-gray-700">
                TypeScript, Python, C#, Java, JavaScript, SQL
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-800">Frameworks & Libraries</td>
              <td className="px-4 py-3 text-gray-700">
                Node, Express, React, Tailwind, JavaScript, Another
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-800">Platforms & Tools</td>
              <td className="px-4 py-3 text-gray-700">
                GitHub Actions, Netlify, Jira, Trello, Git, CI/CD
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-800">Soft Skills</td>
              <td className="px-4 py-3 text-gray-700">
                Agile/Scrum Methodology, Team Collaboration, Problem Solving & Debugging,
                Adaptability, Time Management, Continuous Learning
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-800">Database & Data Storage</td>
              <td className="px-4 py-3 text-gray-700">
                MongoDB, MySQL, SQLite, Azure Storage
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
