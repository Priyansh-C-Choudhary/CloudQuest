import React from "react";

const KubernetesRoadmap = () => {
  const TOOL = "Kubernetes";

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
          {TOOL} is an open-source container orchestration platform that
          automates the deployment, scaling, and management of containerized
          applications. It ensures high availability and efficient resource
          utilization across your infrastructure.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Automated container deployment and scaling</li>
          <li>Self-healing capabilities for fault tolerance</li>
          <li>Load balancing and service discovery</li>
          <li>Rollbacks and rollouts for updates</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Managing microservices architectures</li>
          <li>Automating application scaling and deployment</li>
          <li>Streamlining CI/CD pipelines</li>
          <li>Orchestrating hybrid and multi-cloud deployments</li>
        </ul>
      </section>

      {/* Real-World Case Studies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Real-World Case Studies</h2>
        <p className="text-gray-300 mb-4">
          Explore how {TOOL} is solving real-world challenges across various
          industries:
        </p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <a
              href="https://kubernetes.io/case-studies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Official Kubernetes Case Studies
            </a>
          </li>
          <li>
            <a
              href="https://cloud.google.com/kubernetes-engine/customers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              GKE (Google Kubernetes Engine) Customer Stories
            </a>
          </li>
        </ul>
      </section>

      {/* Sample Code Snippets Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sample Code Snippets</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg">
{`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80`}
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
              href="https://kubernetes.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=kubernetes+tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              YouTube Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://kubernetesbyexample.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Kubernetes by Example
            </a>
          </li>
          <li>
            <a
              href="https://katacoda.com/courses/kubernetes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Interactive Kubernetes Tutorials
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

export default KubernetesRoadmap;
