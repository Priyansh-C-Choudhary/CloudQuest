import React from "react";

const DockerRoadmap = () => {
  const TOOL = "Docker";

  return (
    <div className="w-11/12 mx-auto my-10 p-8 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{TOOL} Roadmap</h1>
        <p className="text-lg text-gray-400">
          Your comprehensive guide to learning and mastering {TOOL}.
        </p>
      </header>

      {/* Summary Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-300">
          {TOOL} is a platform for developing, shipping, and running
          applications inside containers. It simplifies the deployment process
          by packaging code and dependencies together, ensuring consistency
          across environments.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Lightweight containerization for fast deployments</li>
          <li>Cross-platform compatibility</li>
          <li>Integration with CI/CD pipelines</li>
          <li>Portability and consistency across environments</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Containerizing applications for scalability</li>
          <li>Building microservices architectures</li>
          <li>Setting up isolated testing environments</li>
          <li>Deploying portable development environments</li>
        </ul>
      </section>

      {/* Real-World Case Studies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Real-World Case Studies</h2>
        <p className="text-gray-300 mb-4">
          Explore how {TOOL} is solving real-world challenges in various
          industries:
        </p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <a
              href="https://www.docker.com/customers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Docker Customer Success Stories
            </a>
          </li>
          <li>
            <a
              href="https://azure.microsoft.com/en-us/case-studies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Azure Case Studies on Docker
            </a>
          </li>
        </ul>
      </section>

      {/* Sample Code Snippets Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sample Code Snippets</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg">
{`# Pull the Nginx image
docker pull nginx

# Run the Nginx container
docker run -d -p 80:80 nginx

# List running containers
docker ps`}
        </pre>
      </section>

      {/* Roadmap Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
        <p className="text-gray-300 mb-4">
          Follow this roadmap to master {TOOL}. Add a visual roadmap image or
          describe the steps here:
        </p>
        <div className="w-full h-40 bg-gray-800 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">[Insert Roadmap Image]</span>
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <a
              href="https://docs.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=docker+tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              YouTube Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Docker Hub
            </a>
          </li>
          <li>
            <a
              href="https://docs.docker.com/get-started/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Getting Started Guide
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-8">
        © 2024 {TOOL} Roadmap Hub
      </footer>
    </div>
  );
};

export default DockerRoadmap;
