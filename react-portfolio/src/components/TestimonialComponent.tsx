interface Testimonial {
  company: string;
  employer: string;
  feedback: string;
}

const testimonialCards: Testimonial[] = [
  {
    company: "Kore Business Solutions",
    employer: "Anela Mahamba",
    feedback:
      "Working with this team was an absolute pleasure. Their professionalism, dedication, and expertise delivered exceptional results beyond our expectations.",
  }
];

export default function TestimonialComponent() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-gray-50 flex flex-col items-center gap-12">
      <div className="w-full max-w-6xl overflow-x-auto p-4">
        <table className="min-w-full bg-white rounded-3xl shadow-lg overflow-hidden text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Employer</th>
              <th className="px-4 py-3 text-left font-semibold">Company</th>
              <th className="px-4 py-3 text-left font-semibold">Feedback</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {testimonialCards.map((testimonial, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 font-semibold text-gray-900">{testimonial.employer}</td>
                <td className="px-4 py-4 text-gray-700">{testimonial.company}</td>
                <td className="px-4 py-4 text-gray-800 italic">
                  “{testimonial.feedback}”
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
