import {Link} from "react-router-dom";

const About = () => {
  return (
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
              <div>
                  <h1 className="text-xl font-bold mb-4">Time Management Tips</h1>
                  <ul className="list-disc list-inside mt-2 text-gray-600 text-left items-start ">
                      <li>Set clear goals and deadlines.</li>
                      <li>Break tasks down into manageable segments.</li>
                      <li>Use tools and apps for scheduling and reminders.</li>
                      <li>Prioritize your tasks based on importance and urgency.</li>
                      <li>Eliminate distractions to maintain focus.</li>
                      <li>Take regular breaks to avoid burnout.</li>
                      <li>Practice saying "no" to non-essential tasks.</li>
                      <li>Keep your workspace clean and organized.</li>
                      <li>Develop a consistent sleep routine.</li>
                      <li>Exercise regularly to boost energy levels.</li>
                  </ul>
                  <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Go to List</Link>
              </div>
          </div>
  );
}

export default About;