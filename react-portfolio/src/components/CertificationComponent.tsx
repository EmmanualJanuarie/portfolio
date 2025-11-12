import { useState } from "react";
import { RESOURCES } from "../utils/resources";

interface Certification {
  title: string;
  imageSrc: string;
  verifyLink: string;
}

const certifications: Certification[] = [
  {
    title: "DevOps Engineer Expert",
    imageSrc: "/" + RESOURCES.certs.devops_engineer_expert,
    verifyLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/EmmanualJanuarie-0471/35E1E9417CEDE322?sharingId=3C00639A1DE75581",
  },
  {
    title: "Azure Developer Associate",
    imageSrc: RESOURCES.certs.devops_developer_associate,
    verifyLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/EmmanualJanuarie-0471/957F82BB0A63E8DE?sharingId=3C00639A1DE75581",
  },
  {
    title: "Azure AI Fundamentals",
    imageSrc: RESOURCES.certs.ai_fundamentals,
    verifyLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/EmmanualJanuarie-0471/C0E4D42D4395337E?sharingId=3C00639A1DE75581",
  },
  {
    title: "IT Specialist: JavaScript",
    imageSrc: RESOURCES.certs.it_js_spec,
    verifyLink:
      "https://www.credly.com/badges/7899d411-816c-439e-9f6f-8ba624e3bcf9/linked_in_profile",
  },
  {
    title: "IT Specialist: Python",
    imageSrc: RESOURCES.certs.it_python_spec,
    verifyLink:
      "https://www.credly.com/badges/bdc294b5-cefd-410a-b4b0-c820113e832c/linked_in_profile",
  },
  {
    title: "IT Specialist: HTML & CSS",
    imageSrc: RESOURCES.certs.it_web_spec,
    verifyLink:
      "https://www.credly.com/badges/644597e5-02ac-4914-a619-f6d11bd3eda7/linked_in_profile",
  },
  {
    title: "Java Certificate",
    imageSrc: RESOURCES.certs.java_cert,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/XOJ2VIDRFKO1",
  },
  {
    title: "Machine Learning Certificate",
    imageSrc: RESOURCES.certs.ml_aws,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/85MYMKO6BO16",
  },
  {
    title: "Meta React Cert.",
    imageSrc: RESOURCES.certs.react_cert,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/QZ93EHZGNN1S",
  },
  {
    title: "GEN AI with LLMs Cert.",
    imageSrc: RESOURCES.certs.gen_ai_aws,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/WDMJDOSKDE5Y",
  },
  {
    title: "Google Cloud: Gen AI",
    imageSrc: RESOURCES.certs.google_cloud_gen_ai,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/20ZGG261OXFK",
  },
  {
    title: "Backend with Node & Express",
    imageSrc: RESOURCES.certs.IBM_Deve_BackEnd_Node_Exp,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/E1W71RQ2RMQM",
  },
];

export default function CertificationComponent() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      {/* Modal */}
     {selectedCert && (
  <div
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-auto"
    onClick={() => setSelectedCert(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-7xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300"
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute top-4 right-4 z-50 bg-white/10 text-white text-3xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 backdrop-blur-md transition border border-white/20"
      >
        ✕
      </button>

      {/* Info panel */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start p-6 md:p-10 text-center md:text-left text-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {selectedCert.title}
        </h3>
        <a
          href={selectedCert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 font-medium text-lg transition"
        >
          Verify this certification →
        </a>
      </div>

      {/* Image with magnify effect */}
      <div className="flex-1 flex items-center justify-center bg-black p-4 md:p-6">
        <div className="overflow-hidden rounded-md cursor-zoom-in">
          <img
            src={selectedCert.imageSrc}
            alt={selectedCert.title}
            className="max-h-[85vh] w-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
        </div>
      </div>
    </div>
  </div>
)}


      {/* Grid Section */}
      <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            Click a certificate to enlarge and verify its authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition"></div>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h4 className="font-semibold text-gray-800 text-lg mb-1">
                  {cert.title}
                </h4>
                <p className="text-gray-500 text-sm">Click to enlarge & verify</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
