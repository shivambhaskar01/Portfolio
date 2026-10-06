import "./styles/Career.css";

const Career = () => {
  return (
    <div id="career" className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span></span>
          <br /> Timeline
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevSecOps Manager</h4>
                <h5>Woundtech</h5>
                <div className="career-achievements">
                  <span>🏆 Top Performer Award</span>
                  <span>❤️ HEART Award</span>
                  {/* <span>☁️ AWS Developer Associate Certified</span>
                  <span>⚙️ Certified Kubernetes Administrator (CKA)</span> */}
                  <a
                    href="https://www.credly.com/badges/cf8aa935-39b5-43a9-b571-9d44dcbfe4c3/linked_in?t=t2rp76"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☁️ AWS Developer Associate Certified
                  </a>

                  <a
                    href="https://www.credly.com/badges/9b64f897-344c-4494-b848-9b1f9a817ba1/linked_in?t=ti9dcn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚙️ Certified Kubernetes Administrator (CKA)
                  </a>
                  <a
                    href="https://isb-online-bucket.s3.ap-south-2.amazonaws.com/Development/Shivam_Bhaskar_Management_Essentials_distinction_2025_01_03_18_19_00_img.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎓 Management Essentials (Indian School of Business)
                  </a>
                </div>
              </div>
              <h3>2024</h3>
              
            </div>
            <p>
              Lead DevSecOps and SRE team of 7, supporting 240+ production systems and approximately 130 developers across a regulated healthcare environment. Modernized the engineering platform through trunk-based development, reusable and dynamic CI/CD pipelines, artifact promotion, one-click releases, OPA policy enforcement, AWS OIDC, automated testing, SBOM generation, and Cosign signing, increasing deployment frequency by 142%. Led cloud and database optimization initiatives that reduced annual cloud spend by 75% ($504K), while strengthening security posture from 83% to 97% in AWS Security Hub and eliminating critical vulnerabilities. Architected a clinician-facing GenAI platform spanning Azure AI Foundry and Amazon Bedrock with MLflow AI Gateway, LLM guardrails, PII protection, rate limiting, and multi-model fallback, while reducing operational overhead by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>KPMG</h5>
                <div className="career-achievements">
                  <span>🏆 Rockstar Award</span>
                  <span>🏆 Culture Catalyst Award</span>
                  <span>✉ Letter of Appreciation</span>
                </div>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Established enterprise SRE and observability practices for fintech environments by defining SLIs, SLOs, and SLA reporting and building operational dashboards around latency, error rates, and service health. Directed the migration of 300+ banking servers from on-premises environments to Azure and designed resilient multi-region platforms across Azure, Amazon EKS, and OpenShift on AWS, using Terraform Enterprise, reusable modules, Sentinel controls, and automated recovery patterns to sustain 99.9% SLA. Engineered enterprise CI/CD and GitOps platforms using Jenkins, Harness, Azure DevOps, Tekton, Argo CD, and Argo Rollouts, introducing progressive delivery, automated rollback, secure secret injection, and standardized build infrastructure. These initiatives reduced user-reported issues by 20%, improved MTTD by 35%, and reduced release rollback failures by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Analyst</h4>
                <h5>Infosys</h5>
                <div className="career-achievements">
                  <span>☁️ Public Cloud Professional Award</span>
                </div>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Managed cloud governance and production operations across 15+ AWS accounts supporting banking workloads processing millions of daily transactions. Led on-premises to AWS migrations and designed resilient hybrid connectivity using Transit Gateway, Direct Connect, BGP, VPN, and Akamai while enforcing least-privilege access and ITIL-aligned incident and change management across 24×7 environments. Built a governed self-service Internal Developer Platform using AWS Service Catalog, Backstage, React plugins, and REST APIs for 220+ developers, reducing infrastructure provisioning lead time by 50%. Also implemented Prometheus/Grafana observability, APM, RUM, and PagerDuty automation, contributing to a 33% reduction in mean time to resolve production issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer</h4>
                <h5>Ericsson</h5>
                <div className="career-achievements">
                  <a
                    href="https://www.credly.com/badges/bf109f74-abf1-45f6-829a-397a064856fa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☁️ AWS Certified Solutions Architect Associate
                  </a>
                  <span>🏆 5G RAN Certificate</span>
                  <span>🎓 PGDCA (GNDU)</span>
                </div>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Built the foundation of my cloud and reliability engineering career while administering AWS infrastructure for a telecommunications platform and supporting distributed, Kafka-based production workloads. Designed highly available architectures and implemented disaster recovery with AWS Elastic Disaster Recovery, achieving an RTO of under 30 minutes and reducing unplanned downtime incidents by 20% year over year. Established centralized ELK-based observability for real-time log aggregation, search, dashboards, and alerting, improving troubleshooting efficiency by 66%. This role developed the core expertise in cloud infrastructure, distributed systems, automation, reliability, and production operations that shaped my later DevOps and platform engineering work.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech</h4>
                <h5>Rajasthan Technical University</h5>
              </div>
              <h3>2013-2017</h3>
            </div>
            <p>
              At Ericsson, I built and optimized cloud environments on AWS, deploying EC2 instances, configuring CloudWatch monitoring, and managing Linux/Windows systems. I introduced Docker containerization for web applications, improving scalability and reliability. Using Python automation scripts, I streamlined data management, enabled secure file transfers via S3 and SMB protocols, and reduced manual overhead. This role laid the foundation for my expertise in cloud, automation, and DevOps practices.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
