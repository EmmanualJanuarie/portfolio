import { RESOURCES } from "../utils/resources";

interface Work {
  heading: string;
  src: string;
  facts: { head: string; content: string }[];
  btnCaseStudy: { name: string };
  btnView: { name: string; linkTo: string };
}

const workCards: Work[] = [
  {
    heading: "KBS Portal",
    src: RESOURCES.work.pic,
    facts: [
      { head: "Stack", content: "M.E.R.N" },
      { head: "Integration", content: "WhatsApp Content" },
      { head: "Feature", content: "Content Recommendation" },
      { head: "Role", content: "Full Stack Developer Intern" },
      { head: "Company", content: "Kore Business Solutions" },
    ],
    btnCaseStudy: { name: "Case Study" },
    btnView: { name: "View", linkTo: "" },
  },
];

export default function WorkComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
        My Work
      </h2>

      {/* Desktop Table */}
      <div className="hidden lg:block w-full max-w-6xl overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Preview</th>
              <th className="px-6 py-4 text-left font-semibold">Project</th>
              <th className="px-6 py-4 text-left font-semibold">Stack</th>
              <th className="px-6 py-4 text-left font-semibold">Feature</th>
              <th className="px-6 py-4 text-left font-semibold">Company</th>
              <th className="px-6 py-4 text-left font-semibold">Integration</th>
              <th className="px-6 py-4 text-left font-semibold">Role</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {workCards.map((work, idx) => {
              const getFact = (head: string) =>
                work.facts.find((f) => f.head === head)?.content || "-";
              return (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={work.src}
                      alt={work.heading}
                      className="w-36 h-20 object-cover rounded-xl shadow-md"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {work.heading}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{getFact("Stack")}</td>
                  <td className="px-6 py-4 text-gray-700">{getFact("Feature")}</td>
                  <td className="px-6 py-4 text-gray-700">{getFact("Company")}</td>
                  <td className="px-6 py-4 text-gray-700">{getFact("Integration")}</td>
                  <td className="px-6 py-4 text-gray-700">{getFact("Role")}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="bg-white border border-gray-300 text-gray-800 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition">
                      {work.btnCaseStudy.name}
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition">
                      {work.btnView.name}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="block lg:hidden w-full max-w-md space-y-6">
        {workCards.map((work, idx) => {
          const getFact = (head: string) =>
            work.facts.find((f) => f.head === head)?.content || "-";
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={work.src}
                alt={work.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {work.heading}
                </h3>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
                  <p>
                    <span className="font-semibold">Stack:</span> {getFact("Stack")}
                  </p>
                  <p>
                    <span className="font-semibold">Feature:</span> {getFact("Feature")}
                  </p>
                  <p>
                    <span className="font-semibold">Company:</span> {getFact("Company")}
                  </p>
                  <p>
                    <span className="font-semibold">Integration:</span>{" "}
                    {getFact("Integration")}
                  </p>
                  <p className="col-span-2">
                    <span className="font-semibold">Role:</span> {getFact("Role")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                    {work.btnCaseStudy.name}
                  </button>
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                    {work.btnView.name}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
