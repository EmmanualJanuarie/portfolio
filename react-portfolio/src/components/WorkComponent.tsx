import { useState } from "react";
import { RESOURCES } from "../utils/resources";
import KbsPortalModal from "./MODALS/KbsPortalModal";
import ReactNativeModal from "./MODALS/ReactNativeModal";
import DataVizModal from "./MODALS/DataVizModal";

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
  {
    heading: "React Native App",
    src: RESOURCES.work.pic,
    facts: [
      { head: "Stack", content: "React Native / Firebase" },
      { head: "Feature", content: "Mobile Functionality" },
      { head: "Role", content: "Frontend Developer" },
      { head: "Company", content: "Personal Project" },
    ],
    btnCaseStudy: { name: "Case Study" },
    btnView: { name: "View", linkTo: "" },
  },
  {
    heading: "Data Visualization",
    src: RESOURCES.work.pic,
    facts: [
      { head: "Stack", content: "Tableau / Power BI" },
      { head: "Feature", content: "Interactive Dashboards" },
      { head: "Role", content: "Data Analyst / Developer" },
      { head: "Company", content: "Personal Project" },
    ],
    btnCaseStudy: { name: "Case Study" },
    btnView: { name: "View", linkTo: "" },
  },
];

export default function WorkComponent() {

  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  
  return (
    <section className="w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">

      {/* Desktop Table */}
      <div className="hidden lg:flex lg:flex-col w-full max-w-7xl gap-6">
        {workCards.map((work, idx) => {
          const getFact = (head: string) =>
            work.facts.find((f) => f.head === head)?.content || "-";

          return (
            <div
              key={idx}
              className="bg-white flex items-center gap-6 rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-4"
            >
              {/* LEFT: IMAGE */}
              <img
                src={work.src}
                alt={work.heading}
                className="w-48 h-32 object-center rounded-xl flex-shrink-0 border-gray-color"
              />

              {/* MIDDLE: TEXT SECTION */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {work.heading}
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                  <p><span className="font-semibold">Stack:</span> {getFact("Stack")}</p>
                  <p><span className="font-semibold">Feature:</span> {getFact("Feature")}</p>
                  <p><span className="font-semibold">Company:</span> {getFact("Company")}</p>
                  <p><span className="font-semibold">Integration:</span> {getFact("Integration")}</p>
                  <p className="col-span-2">
                    <span className="font-semibold">Role:</span> {getFact("Role")}
                  </p>
                </div>
              </div>

              {/* RIGHT: BUTTONS */}
              <div className="flex flex-col justify-center gap-3">
                <button className="bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                  onClick={() => setOpenCaseStudy(work.heading)}
                >
                  {work.btnCaseStudy.name}
                </button>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                  {work.btnView.name}
                </button>
              </div>
            </div>
          );
        })}
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
                className="w-full h-48 object-center"
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

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                    onClick={() => setOpenCaseStudy(work.heading)}
                  >
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
      
      <div>
        {openCaseStudy === "KBS Portal" && (
          <KbsPortalModal onClose={() => setOpenCaseStudy(null)} />
        )}

        {openCaseStudy === "React Native App" && (
          <ReactNativeModal onClose={() => setOpenCaseStudy(null)} />
        )}

        {openCaseStudy === "Data Visualization" && (
          <DataVizModal onClose={() => setOpenCaseStudy(null)} />
        )}
      </div>
    </section>
  );
}
