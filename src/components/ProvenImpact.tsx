import { useEffect, useRef, useState, type FocusEvent, type PointerEvent } from "react";
import "./styles/ProvenImpact.css";

const impactAreas = [
  {
    title: "Cloud Infrastructure & Architecture",
    description:
      "Architect and operate secure, highly available cloud platforms across AWS, Azure, and GCP, balancing scale, resilience, governance, developer experience, and operational efficiency.",
    proof: "Managed 15+ AWS accounts and supported 240+ production servers and platforms across public-facing and internal workloads. Enabled 220+ developers through governed self-service infrastructure and platform capabilities.",
    tools: ["AWS",
      "Azure",
      "GCP",
      "Terraform",
      "Terraform Enterprise",
      "AWS CDK",
      "EC2",
      "ECS",
      "EKS",
      "RDS",
      "Aurora PostgreSQL",
      "S3",
      "IAM",
      "Transit Gateway",
      "Direct Connect",
      "BGP",
      "VPN",
      "Route 53",
      "Akamai"],
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Design and operate container platforms that provide secure workload isolation, predictable resource management, automated scaling, and consistent application delivery across Kubernetes and ECS environments.",
    proof: "Managed multi-region EKS and ECS clusters with resource quotas, admission controls, GitOps, automated scaling, and policy enforcement.",
    tools: ["Kubernetes",
      "EKS",
      "ECS",
      "Docker",
      "Podman",
      "Helm",
      "Kustomize",
      "Argo CD",
      "Argo Rollouts",
      "Karpenter",
      "Kyverno",
      "Cilium",
      "Istio",
      "OPA",
      "Openshift"],
  },
  {
    title: "CI/CD & Deployment Automation",
    description:
      "Build secure, reusable delivery platforms that automate build, test, validation, promotion, deployment, and rollback while increasing engineering velocity and reducing release friction.",
    proof: "Increased deployment frequency by 142% and enabled multiple releases per day through dynamic pipelines, one-click releases, artifact promotion, automated validation, progressive delivery, and rollback automation.",
    tools: ["Jenkins",
      "Tekton",
      "Bitbucket Pipelines",
      "GitHub Actions",
      "GitLab CI",
      "Azure DevOps",
      "Harness",
      "Argo CD",
      "Argo Rollouts",
      "GitOps",
      "LaunchDarkly",
      "JFrog Artifactory",
      "JFrog Xray",
      "Canary Releases",
      "Blue-Green Deployment",
      "Automated Rollback"],
  },
  {
    title: "Monitoring, Observability & Reliability",
    description:
      "Design observability and SRE practices around the signals that matter: latency, errors, traffic, traces, service objectives, and operational health, with automated incident response and measurable reliability outcomes.",
    proof: "Reduced MTTR by 92% and MTTD by 35% through SLI/SLO-driven monitoring, actionable dashboards, automated alerting, PagerDuty workflows, incident triage, and blameless RCA. Built dashboards tracking P75/P99 latency, error count and rate, unique users, traces, service health, and day-over-day performance.",
    tools: ["Datadog",
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "OpenTelemetry",
      "Splunk",
      "Dynatrace",
      "PagerDuty",
      "ELK",
      "Fluent Bit",
      "APM",
      "RUM",
      "SLIs",
      "SLOs",
      "SLAs",
      "Error Budgets",
      "DORA Metrics",
      "Incident Management",
      "RCA",
      "Postmortems",
      "Disaster Recovery",
      "Chaos Engineering"],
  },
  {
    title: "Security, Compliance & Governance",
    description:
      "Embed security into infrastructure and software delivery through identity hardening, supply-chain controls, vulnerability management, runtime security, secrets protection, and continuous compliance.",
    proof: "Raised AWS Security Hub posture from 83% to 97%, eliminated critical vulnerabilities, and strengthened controls supporting HITRUST, HIPAA, and ONC readiness through security automation and governance.",
    tools: ["Wazuh SIEM",
      "SentinelOne",
      "AWS GuardDuty",
      "AWS Inspector",
      "AWS Security Hub",
      "CloudTrail",
      "Trivy",
      "Talisman",
      "SonarQube",
      "OWASP ZAP",
      "OPA",
      "Conftest",
      "IAM",
      "Least Privilege",
      "OIDC",
      "Secrets Management",
      "Secrets Rotation",
      "Secure Secret Injection",
      "Non-Root Containers",
      "SBOM",
      "Cosign",
      "SAST",
      "SCA",
      "DAST",
      "Penetration Testing"],
  },
  {
    title: "FinOps & Cost Optimization",
    description:
      "Treat cloud spend as an engineering responsibility by combining capacity planning, rightsizing, commitment optimization, lifecycle management, database efficiency, and environment scheduling.",
    proof: "Delivered a 75% reduction in annual cloud spend, equivalent to $504K in savings, through rightsizing, Reserved Instances, database optimization, lifecycle policies, resource cleanup, and non-production shutdown schedules.",
    tools: ["AWS Cost Optimization",
      "Rightsizing",
      "Reserved Instances",
      "Capacity Planning",
      "EC2",
      "EBS",
      "S3",
      "ECR",
      "RDS",
      "Aurora PostgreSQL",
      "Lifecycle Policies",
      "Non-Production Scheduling",
      "Budget Governance"],
  },
  {
    title: "Internal Developer Platform (IDP) & Team Enablement",
    description:
      "Build paved paths and self-service platforms that remove infrastructure friction while preserving security, governance, and operational standards.",
    proof: "Built a self-service developer platform used by 220+ developers, reducing infrastructure provisioning lead time by 50% through Backstage, AWS Service Catalog, reusable CI/CD capabilities, and governed automation.",
    tools: ["Backstage",
      "AWS Service Catalog",
      "Internal Developer Platforms",
      "Self-Service Provisioning",
      "GitOps",
      "REST APIs",
      "React",
      "Developer Portals",
      "CI/CD Platforms"],
  },
  {
    title: "Leadership and People Management",
    description:
      "Lead DevSecOps, SRE, and platform teams through clear roadmaps, measurable engineering outcomes, structured execution, and continuous improvement.",
    proof: "Led a 7-person DevSecOps and SRE team supporting 130+ developers and 240+ production systems, with 92% MTTR reduction through stronger engineering practices, incident governance, and operational accountability.",
    tools: ["People Management",
      "Hiring",
      "Mentoring",
      "Coaching",
      "Engineering Roadmaps",
      "OKRs",
      "DORA Metrics",
      "Performance Reviews",
      "Scrum",
      "Sprint Planning",
      "Retrospectives",
      "Stakeholder Management",
      "Architecture Reviews",
      "Cross-Functional Leadership",
      "Incident Management",
      "Change Management"],
  },
  {
    title: "AI, LLMOps & Intelligent Operations",
    description:
      "Design production AI platforms that combine multi-provider LLM access, governance, observability, security guardrails, and automated operational intelligence.",
    proof:
      "Architected a clinician-facing GenAI platform using Azure AI Foundry and Amazon Bedrock with centralized model access, prompt-injection protection, PII redaction, token-aware rate limiting, sequential model fallback, and AI-assisted incident investigation.",
    tools: [
      "Amazon Bedrock",
      "Azure AI Foundry",
      "MLflow",
      "MLflow AI Gateway",
      "Vertex AI",
      "SageMaker",
      "Kubeflow",
      "KServe",
      "DVC",
      "Evidently",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "LangChain",
      "LangSmith",
      "LiteLLM",
      "MCP",
      "RAG",
      "LLM Guardrails",
      "PII Redaction",
      "Prompt-Injection Protection",
      "AI-Assisted Operations"
    ]
  },
];

const ProvenImpact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePointerEnter = (
    event: PointerEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.pointerType !== "touch") setFlippedCard(index);
  };

  const handleBlur = (
    event: FocusEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (!event.currentTarget.matches(":hover")) {
      setFlippedCard((current) => (current === index ? null : current));
    }
  };

  return (
    <section
      className={`proven-impact-section${isVisible ? " is-visible" : ""}`}
      id="proven-impact"
      ref={sectionRef}
      aria-labelledby="proven-impact-title"
    >
      <div className="impact-intro">
        <p className="impact-eyebrow">PLATFORMS · PEOPLE · OUTCOMES</p>
        <h2 id="proven-impact-title">
          Proven <span>Impact</span>
        </h2>
        <p className="impact-summary">
          I build secure, reliable platforms and help engineering teams deliver
          with confidence. A few outcomes from that work:
        </p>
        <div className="impact-metrics" aria-label="Selected outcomes">
          <div>
            <strong>75%</strong>
            <span>cloud cost reduction</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>lower MTTR</span>
          </div>
          <div>
            <strong>142%</strong>
            <span>higher deployment frequency</span>
          </div>
          <div>
            <strong>97%</strong>
            <span>Cloud Security Enhancements</span>
          </div>
        </div>
      </div>

      <div className="impact-card-grid">
        {impactAreas.map((area, index) => {
          const isFlipped = flippedCard === index;
          return (
            <button
              className={`impact-card${isFlipped ? " is-flipped" : ""}`}
              type="button"
              key={area.title}
              aria-label={`${area.title}: ${isFlipped ? "hide details" : "show details"}`}
              aria-pressed={isFlipped}
              onPointerEnter={(event) => handlePointerEnter(event, index)}
              onPointerLeave={(event) => {
                if (event.pointerType !== "touch" && !event.currentTarget.matches(":focus-visible")) {
                  setFlippedCard((current) => (current === index ? null : current));
                }
              }}
              onFocus={() => setFlippedCard(index)}
              onBlur={(event) => handleBlur(event, index)}
              onClick={() => {
                if (window.matchMedia("(hover: none)").matches) {
                  setFlippedCard((current) => (current === index ? null : index));
                }
              }}
            >
              <span className="impact-card-inner">
                <span className="impact-card-face impact-card-front" aria-hidden={isFlipped}>
                  <span className="impact-card-number">{`0${index + 1}`}</span>
                  <span className="impact-card-title">{area.title}</span>
                  <span className="impact-card-hint">Explore impact <span aria-hidden="true">↗</span></span>
                </span>
                <span className="impact-card-face impact-card-back" aria-hidden={!isFlipped}>
                  <span className="impact-card-proof">{area.proof}</span>
                  <span className="impact-card-description">{area.description}</span>
                  <span className="impact-card-tools">
                    {area.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ProvenImpact;