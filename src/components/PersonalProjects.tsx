import "./styles/PersonalProjects.css";

const projects = [
  {
    name: "LLM Gateway",
    repository: "AIGateway",
    category: "AI PLATFORM",
    description:
      "A FastAPI gateway that applies prompt and sensitive-data guardrails, routes requests across model tiers with fallback, caches responses, and exports redacted telemetry.",
    tools: ["Python", "FastAPI", "LangChain", "OpenTelemetry"],
  },
  {
    name: "Platform Ops Copilot",
    repository: "PlatformOps-Copilot",
    category: "AGENTIC AI · MCP",
    description:
      "A grounded operations assistant that searches runbooks and RCAs with hybrid retrieval, then coordinates policy-guarded Kubernetes, Terraform, and CI/CD tools through MCP.",
    tools: ["Python", "Hybrid RAG", "MCP", "OPA"],
  },
  {
    name: "Kubernetes Incident Copilot",
    repository: "Kubernetes-Incident-Copilot",
    category: "SRE · INCIDENT RESPONSE",
    description:
      "A Go-based incident workflow that gathers bounded cluster evidence and produces structured, evidence-backed summaries while OPA prevents unsafe suggested actions.",
    tools: ["Go", "Kubernetes", "OPA", "OpenAI-compatible API"],
  },
  {
    name: "MLOps Platform",
    repository: "MLOps-AIOps-LLMOps-Project",
    category: "MLOPS · AIOPS · LLMOPS",
    description:
      "A full-lifecycle ML platform spanning versioned data, distributed training, model serving, drift monitoring, RAG, and automated remediation across cloud infrastructure.",
    tools: ["DVC", "MLflow", "Kubeflow", "KServe"],
  },
  {
    name: "Secure Kubernetes GitOps",
    repository: "Kubernetes-security-project",
    category: "DEVSECOPS · GITOPS",
    description:
      "A defense-in-depth Kubernetes reference with secure workload defaults, admission policies, service identity, network segmentation, and continuously reconciled delivery.",
    tools: ["Argo CD", "Kyverno", "Istio", "Cilium"],
  },
  {
    name: "OpenStack + Slurm HPC Cluster",
    repository: "OpenStack-Slurm-HPC-Cluster",
    category: "PRIVATE CLOUD · HPC",
    description:
      "An infrastructure-as-code deployment for a private cloud compute cluster, with automated Slurm control and worker node configuration plus a local Docker demo.",
    tools: ["OpenStack", "Slurm", "Terraform", "Ansible"],
  },
  {
    name: "Release Intelligence Platform",
    repository: "CI-CD-metrics-collector",
    category: "CI/CD · ENGINEERING ANALYTICS",
    description:
      "A read-only delivery analytics platform that correlates pipeline, pull request, and deployment data to surface regressions, recurring failures, and resource waste.",
    tools: ["FastAPI", "React", "Bitbucket", "Jira"],
  },
  {
    name: "Chaos Engineering on EKS",
    repository: "Chaos-Engineering",
    category: "RELIABILITY · RESILIENCE",
    description:
      "A practical resilience test suite covering pod failures, network loss, latency, and CPU stress, paired with load tests and documented recovery results.",
    tools: ["EKS", "Litmus", "Gremlin", "k6"],
  },
];

const PersonalProjects = () => (
  <section
    className="personal-projects-section"
    id="projects"
    aria-labelledby="personal-projects-title"
  >
    <header className="projects-heading">
      <div>
        <p className="projects-eyebrow">SELECTED WORK · BUILT IN PUBLIC</p>
        <h2 id="personal-projects-title">
          Personal <span>Projects</span>
        </h2>
        <p className="projects-intro">
          Hands-on explorations in platform engineering, reliability, secure
          delivery, and production AI.
        </p>
      </div>
      <a
        className="projects-all-link"
        href="https://github.com/shivambhaskar01?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        All repositories <span aria-hidden="true">↗</span>
      </a>
    </header>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.repository}>
          <div className="project-card-meta">
            <span>{`0${index + 1}`}</span>
            <span>{project.category}</span>
          </div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-tools" aria-label="Technologies">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <a
            className="project-repository-link"
            href={`https://github.com/shivambhaskar01/${project.repository}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            View repository <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default PersonalProjects;