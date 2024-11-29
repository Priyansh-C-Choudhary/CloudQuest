import React from "react";
import terraformImage from "../../assets/images/DevOpsTool/terraform.jpg";

const TerraformRoadmap = () => {
  return (
    <div className="w-11/12 mx-auto my-10 p-8 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Terraform Roadmap</h1>
        <p className="text-lg text-gray-400">
          Your comprehensive guide to learning and mastering Terraform.
        </p>
      </header>

      {/* Summary Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-300">
          Terraform is an open-source Infrastructure as Code (IaC) tool that
          enables users to define and provision infrastructure resources in
          human-readable configuration files. It is widely used for automating
          cloud and on-premises deployments.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Multi-cloud support (AWS, Azure, GCP, etc.)</li>
          <li>Infrastructure as Code (IaC) for consistent deployment</li>
          <li>Version control for configurations</li>
          <li>Integration with CI/CD pipelines</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Automating cloud infrastructure deployment</li>
          <li>Managing on-premises and hybrid environments</li>
          <li>Scaling infrastructure with reusable configurations</li>
          <li>Integrating with DevOps workflows</li>
        </ul>
      </section>

      {/* Real-World Case Studies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Real-World Case Studies</h2>
        <p className="text-gray-300 mb-4">
          Explore how organizations are using Terraform to streamline their
          infrastructure management:
        </p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <a
              href="https://www.hashicorp.com/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              HashiCorp Case Studies
            </a>
          </li>
          <li>
            <a
              href="https://aws.amazon.com/solutions/case-studies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              AWS Use Cases with Terraform
            </a>
          </li>
        </ul>
      </section>

      {/* Sample Code Snippets Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sample Code Snippets</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg">
          {`provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}`}
        </pre>
      </section>

      {/* Roadmap Section */}
        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
        <p className="text-gray-300 mb-4">
            Follow this roadmap to master Terraform. Here is a visual roadmap to guide you.
        </p>
        <div className="w-full bg-gray-800 flex items-center justify-center rounded-lg overflow-auto">
            <img
            src={terraformImage}
            alt="Terraform Roadmap"
            className="rounded-lg object-contain w-[1200px] h-auto"
            />
        </div>
        </section>


      {/* Resources Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <a
              href="https://developer.hashicorp.com/terraform/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=terraform+tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              YouTube Tutorials
            </a>
          </li>
          <li>
            <a
              href="https://learn.hashicorp.com/terraform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              HashiCorp Learn
            </a>
          </li>
          <li>
            <a
              href="https://www.terraform.io/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Terraform Intro Guide
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-8">
        © 2024 Terraform Roadmap Hub
      </footer>
    </div>
  );
};

export default TerraformRoadmap;
