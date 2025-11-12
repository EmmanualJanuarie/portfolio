import { useEffect, useState } from "react";
import { RESOURCES } from "../../utils/resources";
import IconComponent from "../ICON/IconComponent";
import ProfilePictureComponent from "../ProfilePicture/ProfilePictureComponent";
import ProfilePictureSkeleton from "../Skeletons/ProfilePictureSkeleton";

export default function HomeComponent() {

  const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 overflow-hidden">
      {/* Background Accent (subtle Apple feel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none" />
      
      {/* LEFT COLUMN */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl w-full space-y-8">
        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Emmanual <span className="text-gray-600">Januarie</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light">
            Fullstack - React Developer • Native React Developer
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-4">
            <span className="px-5 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-800 text-sm sm:text-base font-semibold tracking-wide">
              React Developer
            </span>
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-700">
              <span className="text-sm sm:text-base font-medium">Eastern Cape, ZA</span>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mt-2">
          {[
            { icon: RESOURCES.icon.github, url: "https://github.com/EmmanualJanuarie" },
            { icon: RESOURCES.icon.linkedin, url: "https://www.linkedin.com/in/emmanualjanuarie" },
            { icon: RESOURCES.icon.instagram, url: "https://www.instagram.com/e.man.u.l" },
          ].map(({ icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 shadow-sm p-3 rounded-full hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <IconComponent setSRC={icon} setClassName="w-6 sm:w-7 opacity-80 hover:opacity-100" setURL={""} />
            </a>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-5 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 rounded-full bg-black text-white font-semibold shadow-md hover:bg-gray-800 transition-all duration-200 text-center"
          >
            View Resume
          </a>
          <a
            href="mailto:emmanual.dev@gmail.com"
            className="px-6 py-2 rounded-full bg-white border border-gray-300 font-semibold shadow-sm text-gray-900 hover:bg-gray-50 transition-all duration-200 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN - PROFILE IMAGE */}
      <div className="relative z-10 mt-12 md:mt-0 flex justify-center w-64 sm:w-72 md:w-80 lg:w-96">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-gray-100 to-transparent rounded-full blur-2xl opacity-40" />
          {loading? <ProfilePictureSkeleton /> : <ProfilePictureComponent
            setSRC={RESOURCES.profile.pic}
            setClassName="relative w-full h-full rounded-full shadow-xl border border-gray-200 object-cover"
          />}
        </div>
      </div>
    </section>
  );
}
