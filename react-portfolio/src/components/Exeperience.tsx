import { useState } from "react";
import SectionContainer from "./SectionContainer";

interface CaseStudy {
  name: string;
  objective: string;
  methodology: string[];
  outcome: string;
  evidence?: string[];
}

const caseStudies: CaseStudy[] = [
  {
    name: "Cyber Range for Exploit Development",
    objective:
      "Create a controlled environment to practice exploit development, buffer overflows, lateral movement, and privilege escalation.",
    methodology: [
      "Set up isolated vulnerable VMs (Windows & Linux).",
      "Configured snapshot/rollback automation for safe testing.",
      "Performed Nmap, Masscan, and Enum4Linux reconnaissance.",
      "Developed custom buffer overflow exploits in Python.",
      "Practiced privilege escalation using GTFOBins and Windows token abuse."
    ],
    outcome:
      "Successfully exploited multiple vulnerable machines, developed custom exploits, and improved both offensive and defensive security understanding through iterative lab testing.",
    evidence: [
      "Screenshots of exploit attempts (sanitized)",
      "Terminal logs (non-sensitive)"
    ]
  },
  {
    name: "Web Application Penetration Test – DVWA & Juice Shop",
    objective:
      "Identify and exploit common web application vulnerabilities in intentionally insecure training platforms.",
    methodology: [
      "Performed manual and automated recon using Burp Suite & FFUF.",
      "Exploited XSS (stored & reflected) to steal simulated session tokens.",
      "Performed SQL Injection to dump mock user credentials.",
      "Executed SSRF attack paths to access internal endpoints.",
      "Practiced RCE exploitation via insecure file upload."
    ],
    outcome:
      "Documented each finding with severity, risk, and remediation steps. Gained strong practical experience identifying OWASP Top 10 vulnerabilities.",
    evidence: [
      "Screenshots of Burp Suite requests",
      "Snippets of sanitized payloads"
    ]
  },
  {
    name: "Network Security Audit – Virtual Enterprise Lab",
    objective:
      "Conduct a simulated internal network penetration test to identify weak protocols, open attack paths, and misconfigurations.",
    methodology: [
      "Mapped network via Nmap, Masscan, and ARP scanning.",
      "Identified outdated SMB and RDP services.",
      "Enumerated shared network drives and weak ACLs.",
      "Simulated lateral movement using Pass-the-Hash.",
      "Generated a remediation report based on CIS benchmarks."
    ],
    outcome:
      "Discovered multiple misconfigurations and documented a complete remediation plan. Strengthened understanding of internal enterprise attack surfaces.",
    evidence: [
      "Network topology diagram",
      "Redacted scan results"
    ]
  },
  {
    name: "Automation Scripts for Recon (Python & Bash)",
    objective:
      "Reduce manual effort for reconnaissance and enumeration during penetration tests.",
    methodology: [
      "Built Python scripts for subdomain enumeration & HTTP probe checking.",
      "Automated port scanning with integrated Masscan > Nmap pipelines.",
      "Added Shodan & SecurityTrails API lookups.",
      "Created Bash utilities for quick enumeration of Linux hosts."
    ],
    outcome:
      "Reduced recon time dramatically, enabling more efficient pentest workflows while standardizing output formats.",
    evidence: [
      "Sanitized terminal output",
      "Example snippet of code logic (no API keys)"
    ]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(prev => (prev === index ? null : index));

  return (
    <SectionContainer title="> Experience / Projects / Lab Work">
      <ul className="space-y-4 text-sm sm:text-base md:text-lg">
        {caseStudies.map((study, index) => (
          <li key={index}>
            {/* Title */}
            <button
              onClick={() => toggle(index)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full text-left text-gray-300 hover:text-green-400 transition-colors"
            >
              <span className="text-green-400 font-mono">•</span>
              <span className="font-semibold break-words">{study.name}</span>
            </button>

            {/* Expanded Case Study */}
            {activeIndex === index && (
              <div className="mt-3 p-3 sm:p-4 border border-green-400 bg-neutral-950/70 neon-border animate-fadeIn rounded-md">
                
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-green-400 font-bold text-sm sm:text-base">Objective:</h3>
                  <p className="text-gray-300 mt-1 text-xs sm:text-sm">{study.objective}</p>
                </div>

                <div className="mb-2 sm:mb-3">
                  <h3 className="text-green-400 font-bold text-sm sm:text-base">Methodology / Tools Used:</h3>
                  <ul className="mt-1 list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                    {study.methodology.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-2 sm:mb-3">
                  <h3 className="text-green-400 font-bold text-sm sm:text-base">Outcome / Findings:</h3>
                  <p className="text-gray-300 mt-1 text-xs sm:text-sm">{study.outcome}</p>
                </div>

                {study.evidence && (
                  <div>
                    <h3 className="text-green-400 font-bold text-sm sm:text-base">Evidence (safe to share):</h3>
                    <ul className="mt-1 list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                      {study.evidence.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Experience;
