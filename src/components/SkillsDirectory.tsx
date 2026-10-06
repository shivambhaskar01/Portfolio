import "./styles/SkillsDirectory.css";

const skillGroups = [
  {
    title: "Cloud, Platform & Networking",
    skills: [
      "AWS", "Azure", "GCP", "Kubernetes", "EKS", "AKS", "GKE", "OpenShift / ROSA",
      "EC2", "ECS", "SQS", "Lambda", "RDS / Aurora", "S3", "IAM", "CloudWatch",
      "CloudFormation", "OpenSearch", "Akamai", "CDK", "Terraform", "Terraform Enterprise",
      "Ansible", "Docker", "Podman", "Helm", "Kustomize", "Karpenter", "Cilium", "Istio",
      "Kyverno", "Linux", "Python", "Go", "Bash", "TypeScript", "FastAPI", "Kafka",
      "PostgreSQL", "Redis", "Backstage", "Internal Developer Platforms", "AWS Service Catalog",
      "Transit Gateway", "Direct Connect", "BGP", "VPN", "Route 53", "TCP/IP", "DNS",
      "TLS / SSL", "Load balancing", "FinOps", "Cost optimization",
    ],
  },
  {
    title: "CI/CD, GitOps & Release Engineering",
    skills: [
      "Git", "Jenkins", "Tekton", "Bitbucket Pipelines", "GitHub Actions", "GitLab CI",
      "Azure DevOps", "Harness", "Argo CD", "Argo Rollouts", "GitOps", "LaunchDarkly",
      "JFrog Artifactory", "JFrog Xray", "OIDC", "SAST", "SCA", "Snyk", "SBOM", "Cosign",
      "OWASP ZAP / DAST", "Canary releases", "Blue-green delivery", "Progressive delivery",
      "Automated rollback",
    ],
  },
  {
    title: "SRE, Reliability & Observability",
    skills: [
      "SRE", "SLIs", "SLOs", "SLAs", "Error budgets", "DORA metrics", "MTTR", "MTTD",
      "Incident management", "Change management", "RCA", "Postmortems", "Capacity planning",
      "On-call operations", "High availability", "Disaster recovery", "Fault tolerance",
      "Distributed systems", "Prometheus", "Grafana", "OpenTelemetry", "Datadog", "Splunk",
      "Dynatrace", "PagerDuty", "ELK / EFK", "Fluent Bit", "APM", "RUM", "Chaos engineering",
      "Gremlin", "Litmus", "k6", "JMeter",
    ],
  },
  {
    title: "Security, DevSecOps & Compliance",
    skills: [
      "DevSecOps", "OPA", "Conftest", "HashiCorp Vault", "CyberArk", "Trivy", "Talisman",
      "Wazuh", "SentinelOne", "GuardDuty", "Security Hub", "Cognito", "Secrets management",
      "IAM hardening", "Vulnerability management", "Penetration testing",
    ],
  },
  {
    title: "AI/ML & Developer Platforms",
    skills: [
      "Amazon Bedrock", "Azure AI Foundry", "Vertex AI", "SageMaker", "MLflow",
      "MLflow AI Gateway", "Kubeflow", "KServe", "DVC", "Evidently", "LangChain", "LangSmith",
      "LiteLLM", "MCP", "RAG", "Agentic AI", "AIBOM", "LLM guardrails",
      "Prompt-injection protection", "PII redaction", "AI-assisted operations", "ML/AI pipelines", "JEV",
    ],
  },
  {
    title: "Leadership & Delivery",
    skills: [
      "Engineering leadership", "People management", "Hiring", "Coaching", "Roadmap ownership",
      "Platform strategy", "Architecture reviews", "Stakeholder management", "Cross-functional execution",
      "Agile", "Scrum", "Jira", "Confluence", "ServiceNow", "OKRs",
    ],
  },
];

const SkillsDirectory = () => (
  <section className="skills-directory" aria-labelledby="skills-directory-title">
    <header className="skills-directory-heading">
      <p>CAPABILITIES</p>
      <h2 id="skills-directory-title">Skills & <span>Expertise</span></h2>
    </header>
    <div className="skills-group-grid">
      {skillGroups.map((group, index) => (
        <section className="skills-group" key={group.title}>
          <h3><span>{`0${index + 1}`}</span>{group.title}</h3>
          <ul>
            {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      ))}
    </div>
  </section>
);

export default SkillsDirectory;