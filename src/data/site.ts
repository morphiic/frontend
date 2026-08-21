import {
  Database,
  Database as Databases,
  Plug,
  FileBox,
  Users,
  Boxes,
  Layers,
  Workflow,
  Cpu,
  Sparkles,
  ShieldCheck,
  Gauge,
  ArrowRight,
  Building2,
  HardDrive,
  Cloud,
  Network,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#capabilities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export type DataSource = { label: string; icon: LucideIcon };

export const DATA_SOURCES: DataSource[] = [
  { label: 'Databases', icon: Databases },
  { label: 'APIs', icon: Plug },
  { label: 'Files', icon: FileBox },
  { label: 'CRM', icon: Users },
  { label: 'ERP', icon: Boxes },
  { label: 'Data Lakes', icon: Layers },
  { label: 'Applications', icon: Workflow },
  { label: 'Operational Systems', icon: Network },
];

export type Output = { label: string };

export const DATA_OUTPUTS: Output[] = [
  { label: 'Structured Data' },
  { label: 'Enriched Data' },
  { label: 'Validated Data' },
  { label: 'AI-Ready Data' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  closing: string;
  meta: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Cpu,
    title: 'Transform Your Data Automatically',
    subtitle: 'Spend Less Time Building Transformations by Hand',
    description: 'Instead of manually restructuring and preparing every dataset, let Morphiic handle complex transformation workflows with intelligent processing. Transform schemas, restructure information, convert formats, and automate repetitive preparation work — so your engineering team can focus on higher-value data initiatives.',
    closing: 'Your data changes. Your workflow keeps moving.',
    meta: 'AI_ENGINE · V3.2',
  },
  {
    icon: Workflow,
    title: 'Process Data at Enterprise Scale',
    subtitle: 'Keep Up as Your Data Grows',
    description: 'As your data volumes increase, your transformation workflows need to keep pace. Morphiic helps you process large-scale datasets through scalable processing pipelines, giving you the capacity to handle demanding workloads without turning data operations into a bottleneck.',
    closing: 'More data shouldn\'t mean more complexity.',
    meta: 'THROUGHPUT · 12.8M REC/S',
  },
  {
    icon: Layers,
    title: 'Bring Your Data Into One Consistent Structure',
    subtitle: 'Stop Losing Time to Incompatible Formats',
    description: 'Your enterprise data rarely arrives in the same shape. Morphiic helps normalize different structures, formats, and schemas into consistent datasets that are easier to integrate, analyze, and use across your organization.',
    closing: 'Different sources. One dependable data foundation.',
    meta: 'SCHEMA_MAP · 240+ TYPES',
  },
  {
    icon: Sparkles,
    title: 'Give Your Data More Context',
    subtitle: 'Turn Raw Records Into More Meaningful Information',
    description: 'Clean data is useful. Context-rich data is even more powerful. Morphiic enriches your information with metadata, entity intelligence, and contextual signals, helping you create datasets that are more informative and valuable for downstream analytics and AI workloads.',
    closing: 'Add context before intelligence begins.',
    meta: 'ENRICH · 18 SOURCES',
  },
  {
    icon: ShieldCheck,
    title: 'Know You Can Trust Your Data',
    subtitle: 'Catch Data Problems Before They Reach Your AI',
    description: 'Inconsistent, duplicated, or invalid information can affect everything downstream. Morphiic continuously helps you validate, clean, standardize, and monitor your datasets — giving your teams greater confidence in the information powering analytics and AI.',
    closing: 'Better quality in. More reliable outcomes out.',
    meta: 'QUALITY · 97.8% SCORE',
  },
  {
    icon: Gauge,
    title: 'Prepare Data for What Comes Next',
    subtitle: 'Give Your AI Systems the Foundation They Need',
    description: 'Your AI initiatives shouldn\'t be held back by data preparation. Morphiic transforms fragmented enterprise information into structured, enriched, and validated datasets ready to support analytics, machine learning, automation, and AI applications.',
    closing: 'From raw enterprise data to AI-ready intelligence.',
    meta: 'OUTPUT · AI-READY',
  },
];

export type CapabilityGroup = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
  closing: string;
};

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: 'Transformation Engine',
    subtitle: 'Shape Your Data for What Comes Next',
    icon: Cpu,
    items: [
      'Restructure complex datasets',
      'Transform schemas across sources',
      'Convert between data formats',
      'Normalize inconsistent information',
      'Automate repetitive transformations',
    ],
    closing: 'Less manual transformation work and more consistent data.',
  },
  {
    title: 'Processing Layer',
    subtitle: 'Handle Data at the Speed Your Enterprise Demands',
    icon: Workflow,
    items: [
      'Process data in batches',
      'Support streaming workflows',
      'Parse complex information',
      'Classify incoming data',
      'Optimize processing performance',
    ],
    closing: 'Scalable processing without turning data volume into an operational bottleneck.',
  },
  {
    title: 'Enrichment Engine',
    subtitle: 'Turn Raw Information Into Context-Rich Data',
    icon: Sparkles,
    items: [
      'Identify entities',
      'Generate meaningful metadata',
      'Extract contextual information',
      'Augment existing datasets',
    ],
    closing: 'Data that carries more context, meaning, and downstream value.',
  },
  {
    title: 'Quality Framework',
    subtitle: 'Build Confidence Into Every Dataset',
    icon: ShieldCheck,
    items: [
      'Validate incoming data',
      'Detect duplicate records',
      'Normalize inconsistent information',
      'Monitor data quality',
      'Maintain schema consistency',
    ],
    closing: 'Cleaner, more reliable data you can confidently build on.',
  },
];

export type Step = { num: string; title: string; description: string };

export const WORKFLOW_STEPS: Step[] = [
  { num: '01', title: 'INGEST', description: 'Enterprise data enters Morphiic.' },
  { num: '02', title: 'UNDERSTAND', description: 'AI analyzes structure, format, and context.' },
  { num: '03', title: 'TRANSFORM', description: 'Data is restructured and normalized.' },
  { num: '04', title: 'ENRICH', description: 'Additional context and metadata are generated.' },
  { num: '05', title: 'VALIDATE', description: 'Quality and consistency are checked.' },
  { num: '06', title: 'OPTIMIZE', description: 'Data is prepared for downstream workloads.' },
  { num: '07', title: 'DELIVER', description: 'AI-ready data is delivered to analytics and AI systems.' },
];

export type Problem = { title: string; description: string; icon: LucideIcon };

export const PROBLEMS: Problem[] = [
  { title: 'Fragmented Data', description: 'Enterprise information exists across disconnected systems.', icon: Network },
  { title: 'Manual Transformation', description: 'Engineering teams spend significant time preparing datasets.', icon: Cpu },
  { title: 'Inconsistent Quality', description: 'Different schemas and formats reduce reliability.', icon: ShieldCheck },
  { title: 'Slow AI Adoption', description: 'AI projects require clean and accessible data foundations.', icon: Sparkles },
  { title: 'Scaling Complexity', description: 'Large datasets become increasingly difficult to process efficiently.', icon: Gauge },
];

export type TargetUser = { label: string; icon: LucideIcon };

export const TARGET_USERS: TargetUser[] = [
  { label: 'Enterprise Data Teams', icon: Building2 },
  { label: 'Data Engineers', icon: Cpu },
  { label: 'Analytics Teams', icon: Gauge },
  { label: 'AI Engineering Teams', icon: Sparkles },
  { label: 'Data Platform Teams', icon: Layers },
  { label: 'Enterprise IT', icon: Network },
  { label: 'Machine Learning Teams', icon: Workflow },
  { label: 'Technology Organizations', icon: Building2 },
];

export type ScalabilityMetric = { label: string; value: string; suffix?: string };

export const SCALABILITY_METRICS: ScalabilityMetric[] = [
  { label: 'Records Processed', value: '12.8', suffix: 'M/s' },
  { label: 'Active Pipelines', value: '24', suffix: '' },
  { label: 'Transformation Rate', value: '98.4', suffix: '%' },
  { label: 'Uptime SLA', value: '99.99', suffix: '%' },
];

export type Plan = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  priceNote?: string;
  priceAmount?: number;
  currency?: string;
};

export const PLANS: Plan[] = [
  {
    name: 'Developer',
    tagline: 'For experimentation and API evaluation.',
    description: 'Explore the Morphiic transformation engine with sample datasets and limited throughput.',
    features: ['API access', 'Sample datasets', 'Community support', 'Limited throughput', 'Single workspace'],
    cta: 'Start Free',
    priceNote: '$10/mo',
    priceAmount: 10,
    currency: 'USD',
  },
  {
    name: 'Business',
    tagline: 'For growing data teams.',
    description: 'Scale transformation workflows across your organization with full pipeline automation.',
    features: ['Full API access', 'Batch + stream processing', 'Quality monitoring', 'Enrichment sources', 'Priority support', 'Team workspaces'],
    cta: 'Start Trial',
    highlighted: true,
    priceNote: 'Subscription SaaS',
    priceAmount: 45,
    currency: 'USD',
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale transformation environments.',
    description: 'Dedicated deployments, enterprise licensing, and usage-based transformation at scale.',
    features: ['Dedicated deployment', 'Enterprise licensing', 'Usage-based transformation', 'SSO & SAML', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact Sales',
    priceNote: 'Custom',
    currency: 'USD',
  },
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  { q: 'What is Morphiic?', a: 'Morphiic is an AI-powered data transformation engine that helps enterprises transform fragmented data into structured, enriched, validated, and AI-ready information. It provides an intelligent layer for data processing, standardization, enrichment, and quality management.' },
  { q: 'What business problems does Morphiic solve?', a: 'Morphiic helps reduce the manual effort involved in preparing enterprise data. It addresses fragmented data sources, inconsistent schemas, repetitive transformations, data quality issues, and the growing complexity of preparing information for analytics and AI.' },
  { q: 'How does Morphiic fit into our existing data infrastructure?', a: 'Morphiic is designed to work as a transformation layer across your existing data environment. It can work with databases, APIs, applications, files, data warehouses, data lakes, and operational systems without requiring you to replace your core infrastructure.' },
  { q: 'Can Morphiic process large volumes of enterprise data?', a: 'Yes. Morphiic is designed for scalable data processing workflows, supporting large datasets and distributed processing environments. This allows organizations to expand their data operations without relying on increasingly manual transformation processes.' },
  { q: 'How does Morphiic improve data quality?', a: 'Morphiic helps validate, normalize, standardize, and monitor enterprise data throughout the transformation process. It can also identify duplicates and schema inconsistencies, helping teams establish more reliable datasets for downstream use.' },
  { q: 'Can Morphiic prepare data for AI and machine learning?', a: 'Yes. Morphiic transforms raw and fragmented enterprise information into structured, enriched, and validated datasets that can serve as stronger foundations for analytics, machine learning, automation, and AI applications.' },
  { q: 'What types of teams can benefit from Morphiic?', a: 'Morphiic is designed for data engineering, analytics, AI/ML, data platform, and enterprise IT teams. It can also support organizations where multiple teams depend on reliable, accessible, and consistently structured enterprise data.' },
  { q: 'Does Morphiic support data enrichment?', a: 'Yes. Morphiic can enrich enterprise information with contextual data, entity identification, metadata, and additional information, helping organizations create datasets with greater context and downstream value.' },
  { q: 'Can Morphiic integrate with modern AI and data technologies?', a: 'Morphiic is designed for modern enterprise data and AI environments. Its technical ecosystem can support technologies such as RAPIDS, CUDA, NeMo, and Triton, depending on the deployment and integration requirements.' },
  { q: 'How can my organization get started with Morphiic?', a: 'Start by sharing your current data environment, transformation challenges, and business requirements with the Morphiic team. From there, the appropriate deployment, processing capacity, integrations, and commercial model can be evaluated for your organization.' },
];

export type ArchLayer = { label: string; icon: LucideIcon };

export const ARCH_SOURCES: ArchLayer[] = [
  { label: 'DATABASES', icon: Database },
  { label: 'CRM', icon: Users },
  { label: 'ERP', icon: Boxes },
  { label: 'APIs', icon: Plug },
  { label: 'FILES', icon: FileBox },
  { label: 'CLOUD STORAGE', icon: Cloud },
  { label: 'DATA LAKES', icon: Layers },
  { label: 'APPLICATIONS', icon: Workflow },
];

export const ARCH_STAGES = ['INGESTION', 'TRANSFORMATION', 'ENRICHMENT', 'QUALITY', 'OPTIMIZATION'];

export const ARCH_DESTINATIONS = [
  'ANALYTICS',
  'MACHINE LEARNING',
  'GENERATIVE AI',
  'BUSINESS INTELLIGENCE',
];

export type DocItem = { title: string; description: string; status: string };

export const DOC_ITEMS: DocItem[] = [
  { title: 'Data Transformation APIs', description: 'Programmatic access to the transformation engine.', status: 'COMING SOON' },
  { title: 'Pipeline Integration Guides', description: 'Connect existing systems to Morphiic pipelines.', status: 'COMING SOON' },
  { title: 'Data Processing Documentation', description: 'Batch, stream, and processing configuration.', status: 'COMING SOON' },
  { title: 'Platform SDK References', description: 'Language-specific SDKs for the Morphiic platform.', status: 'COMING SOON' },
];

export type PipelineRow = { name: string; status: 'Processing' | 'Completed' | 'Validating'; progress: number };

export const PIPELINE_ROWS: PipelineRow[] = [
  { name: 'Customer Data', status: 'Processing', progress: 78 },
  { name: 'CRM Sync', status: 'Completed', progress: 100 },
  { name: 'Transactions', status: 'Processing', progress: 64 },
  { name: 'Product Data', status: 'Validating', progress: 91 },
];

export type QualityMetric = { label: string; value: number };

export const QUALITY_METRICS: QualityMetric[] = [
  { label: 'Completeness', value: 99.1 },
  { label: 'Consistency', value: 98.4 },
  { label: 'Validity', value: 97.2 },
  { label: 'Uniqueness', value: 99.6 },
  { label: 'Accuracy', value: 96.8 },
];

export type TechRef = { name: string; category: string };

export const TECH_REFS: TechRef[] = [
  { name: 'RAPIDS', category: 'Accelerated Data Processing' },
  { name: 'CUDA', category: 'GPU Compute Compatibility' },
  { name: 'NeMo', category: 'AI Model Framework' },
  { name: 'Triton', category: 'Inference Serving' },
];

export type PipelineStage = { name: string; count: string; time: string; rate: string };

export const PIPELINE_STAGES: PipelineStage[] = [
  { name: 'SOURCE', count: '12.8M', time: '0.02s', rate: '100%' },
  { name: 'INGEST', count: '12.8M', time: '0.14s', rate: '99.9%' },
  { name: 'PARSE', count: '12.7M', time: '0.31s', rate: '99.7%' },
  { name: 'TRANSFORM', count: '12.6M', time: '0.58s', rate: '99.4%' },
  { name: 'ENRICH', count: '12.5M', time: '0.42s', rate: '99.1%' },
  { name: 'VALIDATE', count: '12.4M', time: '0.28s', rate: '98.9%' },
  { name: 'OPTIMIZE', count: '12.4M', time: '0.19s', rate: '99.6%' },
  { name: 'OUTPUT', count: '12.4M', time: '0.12s', rate: '100%' },
];

export const SIDEBAR_ITEMS = ['Overview', 'Pipelines', 'Transformations', 'Data Quality', 'Enrichment', 'Analytics', 'Settings'];

export const PROCESSING_CHART = [
  { time: '00:00', value: 8.2 },
  { time: '02:00', value: 9.1 },
  { time: '04:00', value: 7.8 },
  { time: '06:00', value: 10.4 },
  { time: '08:00', value: 11.2 },
  { time: '10:00', value: 9.8 },
  { time: '12:00', value: 12.1 },
  { time: '14:00', value: 11.6 },
  { time: '16:00', value: 12.8 },
  { time: '18:00', value: 10.9 },
  { time: '20:00', value: 9.4 },
  { time: '22:00', value: 8.7 },
];

export const TRANSFORMATION_CHART = [
  { stage: 'Ingest', value: 92 },
  { stage: 'Transform', value: 84 },
  { stage: 'Enrich', value: 76 },
  { stage: 'Validate', value: 91 },
  { stage: 'Deliver', value: 68 },
];

export const DASHBOARD_STATS = [
  { label: 'Records Processed', value: '12.8M' },
  { label: 'Transformation Rate', value: '98.4%' },
  { label: 'Quality Score', value: '97.8%' },
  { label: 'Processing Time', value: '1.42s' },
];

export const PIPELINE_STATUS = [
  { label: 'Active Pipelines', value: '24' },
  { label: 'Processing', value: '8' },
  { label: 'Completed', value: '156' },
  { label: 'Errors', value: '3' },
];

export const RECENT_PIPELINES = [
  { name: 'Customer Data Pipeline', status: 'COMPLETED' },
  { name: 'Transaction Normalization', status: 'PROCESSING' },
  { name: 'Product Enrichment', status: 'COMPLETED' },
  { name: 'CRM Transformation', status: 'VALIDATING' },
];

export const ICONS = { ArrowRight, HardDrive };

/* =========================================================================
   AURALIS AI PRODUCT DATA
   ========================================================================= */

export type AuralisHeroStat = {
  value: string;
  label: string;
  sublabel: string;
};

export const AURALIS_HERO_STATS: AuralisHeroStat[] = [
  { value: '240+', label: 'Schema Formats', sublabel: 'Auto-detected & normalized' },
  { value: '10x', label: 'Ingestion Speed', sublabel: 'GPU-accelerated pipelines' },
  { value: '99.8%', label: 'Quality Precision', sublabel: 'Automated anomaly detection' },
  { value: '<50ms', label: 'Stream Latency', sublabel: 'Real-time inference & enrichment' },
];

export type AuralisModule = {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: { label: string; val: string }[];
};

export const AURALIS_MODULES: AuralisModule[] = [
  {
    id: 'transformation',
    title: 'Autonomous Schema Harmonization',
    badge: 'CORE ENGINE',
    tagline: 'Eliminate manual schema mapping and tedious ETL script maintenance.',
    description:
      'Auralis AI ingests structured, semi-structured, and polymorphic data across 240+ enterprise formats. It automatically infers schema topology, harmonizes disparate field definitions, and constructs unified relational or document representations in milliseconds.',
    highlights: [
      'Zero-code semantic schema alignment and type reconciliation',
      'Continuous handling of schema drift without pipeline interruptions',
      'Cross-database dialect conversion (SQL, NoSQL, Columnar, Parquet)',
      'Deterministic transformation lineage and auditable change logs',
    ],
    metrics: [
      { label: 'Manual ETL Reduction', val: '85%' },
      { label: 'Schema Coverage', val: '240+ Types' },
    ],
  },
  {
    id: 'enrichment',
    title: 'Contextual Semantic Enrichment',
    badge: 'NEURAL LAYER',
    tagline: 'Infuse raw records with deep enterprise domain intelligence.',
    description:
      'Raw data lacks contextual clarity. Auralis AI embeds custom language models directly into your processing stream to detect entities, classify document semantics, resolve ambiguous acronyms, and append synthetic attributes without calling external third-party APIs.',
    highlights: [
      'Automated Named Entity Recognition (NER) across industry domains',
      'Context-aware classification and sentiment/intent tagging',
      'Knowledge-graph linkage and internal taxonomy mapping',
      'Air-gapped semantic processing keeping private data completely isolated',
    ],
    metrics: [
      { label: 'Metadata Enrichment', val: '18+ Signals' },
      { label: 'Privacy Isolation', val: '100% On-Prem / VPC' },
    ],
  },
  {
    id: 'quality',
    title: 'Self-Healing Quality Guardian',
    badge: 'DATA INTEGRITY',
    tagline: 'Proactively flag anomalies and deduplicate records before downstream use.',
    description:
      'Poor data quality quietly degrades AI models and analytics. Auralis AI continuously applies machine-learning classifiers to detect subtle duplicate records, out-of-distribution values, missing values, and corrupted data streams in real time.',
    highlights: [
      'Probabilistic record deduplication across distributed data sources',
      'Real-time anomaly detection for outliers and statistical drift',
      'Automated rule suggestion based on observed data distributions',
      'Granular quality scoring per table, column, and record batch',
    ],
    metrics: [
      { label: 'Deduplication Accuracy', val: '99.4%' },
      { label: 'Anomaly Catch Rate', val: '99.8%' },
    ],
  },
  {
    id: 'serving',
    title: 'High-Throughput Streaming Engine',
    badge: 'PRODUCTION SCALE',
    tagline: 'Process multi-terabyte workloads with low latency and elastic scale.',
    description:
      'Engineered for mission-critical enterprise environments, Auralis AI dynamically balances batch processing and live event streams. Dynamic batching and parallel execution ensure steady throughput even during massive ingestion spikes.',
    highlights: [
      'Sub-50ms p99 latency on high-frequency streaming event topics',
      'Dynamic concurrent model scheduling and dynamic batching',
      'Bi-directional synchronization with modern lakehouses and data warehouses',
      'Enterprise-grade observability, health telemetry, and SLA alerting',
    ],
    metrics: [
      { label: 'Throughput', val: '12.8M Rec/sec' },
      { label: 'Uptime SLA', val: '99.99%' },
    ],
  },
];

export type AuralisWorkflowStep = {
  phase: string;
  title: string;
  description: string;
  capabilities: string[];
  techRef: string;
};

export const AURALIS_WORKFLOW: AuralisWorkflowStep[] = [
  {
    phase: '01. INGESTION & DISCOVERY',
    title: 'Multi-Source Zero-Loss Ingest',
    description: 'Connect databases, event streams, files, and SaaS APIs with automatic protocol negotiation and data validation.',
    capabilities: ['Kafka & Kinesis stream connectors', 'Direct DB CDC & Lakehouse connectors', 'High-throughput memory bandwidth'],
    techRef: 'Hardware-Level CUDA Acceleration',
  },
  {
    phase: '02. NEURAL UNDERSTANDING',
    title: 'Structural & Semantic Parsing',
    description: 'Custom neural models analyze field semantics, detect underlying relationships, and classify ambiguous records.',
    capabilities: ['Dynamic schema topology detection', 'Domain-specific NER parsing', 'Zero third-party API exposure'],
    techRef: 'NVIDIA NeMo Framework',
  },
  {
    phase: '03. GPU TRANSFORMATION',
    title: 'High-Speed Normalization',
    description: 'Transform complex polymorphic records into unified relational and analytical tables at GPU compute velocity.',
    capabilities: ['GPU-accelerated vector transformation', '240+ schema standardization', 'Memory-optimized execution'],
    techRef: 'NVIDIA RAPIDS (cuDF)',
  },
  {
    phase: '04. QUALITY & DEDUPLICATION',
    title: 'Automated Integrity Verification',
    description: 'Apply machine-learning algorithms to detect duplicates, isolate anomalies, and enforce governance rules.',
    capabilities: ['ML-driven fuzzy deduplication', 'Statistical outlier detection', 'Real-time quality scoring'],
    techRef: 'NVIDIA RAPIDS (cuML)',
  },
  {
    phase: '05. ENTERPRISE DELIVERY',
    title: 'Stream & Warehouse Dispatch',
    description: 'Deliver structured, enriched, validated, and AI-ready datasets directly to analytics, ML models, and LLMs.',
    capabilities: ['Real-time event push', 'Lakehouse table publishing', 'Low-latency query endpoints'],
    techRef: 'NVIDIA Triton Inference Server',
  },
];

export type AuralisTechStackItem = {
  name: string;
  role: string;
  description: string;
  benefits: string[];
  badge: string;
};

export const AURALIS_TECH_STACK: AuralisTechStackItem[] = [
  {
    name: 'NVIDIA RAPIDS (cuDF & cuML)',
    role: 'Core Data Science & Transformation Engine',
    description:
      'Powers the high-speed GPU-accelerated ETL and ML quality framework. cuDF transforms fragmented inputs into structured formats across 240+ schemas at GPU speed, while cuML trains machine learning models to detect duplicates and anomalies.',
    benefits: ['GPU-accelerated Pandas & Scikit-learn', 'Instant ETL across 240+ schema types', 'ML-driven duplicate & anomaly detection'],
    badge: 'CORE COMPUTE',
  },
  {
    name: 'NVIDIA NeMo Framework',
    role: 'Language & Semantic Enrichment Engine',
    description:
      'Provides the enterprise-grade toolchain required to fine-tune custom LLMs and Named Entity Recognition (NER) models. Extracts contextual metadata and enriches unstructured records without relying on external third-party APIs.',
    benefits: ['Custom domain-fine-tuned LLMs', 'Contextual entity & metadata extraction', 'Zero external API dependencies / 100% private'],
    badge: 'NEURAL LAYER',
  },
  {
    name: 'NVIDIA Triton Inference Server',
    role: 'Production Serving & Scalable Backend',
    description:
      'Manages concurrent model execution, dynamic batching, and multi-framework workloads to host multi-stage transformation and enrichment models across continuous enterprise data streams with low latency.',
    benefits: ['Concurrent multi-model execution', 'Low-latency dynamic batching', 'Continuous enterprise stream serving'],
    badge: 'MODEL SERVING',
  },
  {
    name: 'NVIDIA CUDA Toolkit',
    role: 'Parallel Computing & Memory Acceleration',
    description:
      'Foundational computing platform providing low-level compiler tools and libraries to build custom kernels for hardware-level data restructuring, format conversions, and maximum memory bandwidth during ingestion spikes.',
    benefits: ['Custom GPU restructuring kernels', 'Maximum memory throughput', 'Hardware-optimized data conversions'],
    badge: 'FOUNDATIONAL',
  },
];

export type AuralisUseCase = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const AURALIS_USE_CASES: AuralisUseCase[] = [
  {
    title: 'Enterprise Data Lake Consolidation',
    category: 'Data Engineering & Platform',
    challenge: 'Dozens of siloed databases and ERP systems resulting in incompatible tables, weeks of manual ETL script maintenance, and stale data.',
    solution: 'Auralis AI autonomously ingests and maps 240+ schemas into unified lakehouse tables with zero code intervention.',
    outcome: '90% reduction in data prep turnaround; daily ingestion pipelines finish in minutes rather than hours.',
  },
  {
    title: 'Real-Time Financial Intelligence',
    category: 'Fintech & Capital Markets',
    challenge: 'High-frequency transaction records with heterogeneous schemas, ambiguous vendor names, and latent duplicate entries.',
    solution: 'GPU-accelerated stream normalization with cuDF and cuML for instant deduplication and NeMo for merchant entity resolution.',
    outcome: 'Sub-50ms transaction enrichment and 99.8% accurate anomaly detection before downstream ledger posting.',
  },
  {
    title: 'GenAI & LLM Training Data Preparation',
    category: 'AI & Machine Learning',
    challenge: 'Unstructured enterprise documents and customer interactions filled with noise, sensitive information, and formatting errors.',
    solution: 'Self-hosted NeMo and Triton pipelines parse, clean, redact, and enrich training corpora entirely within on-premise security boundaries.',
    outcome: 'High-fidelity token datasets generated 8x faster with guaranteed compliance and zero third-party API exposure.',
  },
  {
    title: 'Healthcare & Clinical Records Harmonization',
    category: 'HealthTech & Life Sciences',
    challenge: 'EHR systems and clinical labs generating non-standardized diagnostics, proprietary codes, and unstructured clinical notes.',
    solution: 'Auralis AI applies custom clinical NER models to extract medical entities, normalize terminology, and build compliant records.',
    outcome: 'Interoperable clinical datasets ready for research analytics with zero manual transcription bottleneck.',
  },
];

export type AuralisProductFAQ = {
  question: string;
  answer: string;
};

export const AURALIS_PRODUCT_FAQS: AuralisProductFAQ[] = [
  {
    question: 'How is Auralis AI different from traditional ETL/ELT tools?',
    answer:
      'Traditional ETL tools require data engineers to manually write, test, and maintain schema mapping rules for every new data source. Auralis AI uses accelerated AI models (NVIDIA RAPIDS & NeMo) to autonomously infer schemas, harmonize field definitions, enrich context, and validate data quality in real time with minimal manual configuration.',
  },
  {
    question: 'Can Auralis AI be deployed entirely on-premise or within our private cloud (VPC)?',
    answer:
      'Yes. Auralis AI is engineered for total data sovereignty. With self-hosted models running on NVIDIA Triton Inference Server and NeMo, zero data leaves your security boundary—no third-party LLM API calls are made.',
  },
  {
    question: 'How does Auralis AI handle high-volume data spikes?',
    answer:
      'Auralis AI leverages NVIDIA CUDA kernels and GPU-accelerated cuDF processing to achieve extreme parallel throughput (up to 12.8M records/sec). Ingestion spikes that usually stall CPU-based workers are processed seamlessly at hardware memory bandwidth.',
  },
  {
    question: 'What data sources and destinations are supported out of the box?',
    answer:
      'Auralis AI connects natively to relational databases (PostgreSQL, MySQL, Oracle, SQL Server), cloud warehouses (Snowflake, BigQuery, Redshift, Databricks), stream brokers (Kafka, Kinesis, RabbitMQ), object storage (S3, GCS, Azure Blob), and 240+ standard enterprise file & API formats.',
  },
  {
    question: 'How does Auralis AI detect duplicates and anomalies?',
    answer:
      'Auralis AI employs GPU-accelerated cuML machine learning algorithms to compute probabilistic similarity scores across fragmented records, recognizing duplicates even when names, formats, or addresses contain discrepancies, while flagging statistical anomalies in real time.',
  },
];

