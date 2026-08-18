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
  description: string;
  meta: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Cpu,
    title: 'AI Data Transformation',
    description: 'Automate complex enterprise transformation workflows with intelligent processing.',
    meta: 'AI_ENGINE · v3.2',
  },
  {
    icon: Workflow,
    title: 'Automated Data Processing',
    description: 'Process large-scale datasets efficiently across distributed pipelines.',
    meta: 'THROUGHPUT · 12.8M rec/s',
  },
  {
    icon: Layers,
    title: 'Data Standardization',
    description: 'Normalize inconsistent structures and formats into unified schemas.',
    meta: 'SCHEMA_MAP · 240+ types',
  },
  {
    icon: Sparkles,
    title: 'Intelligent Data Enrichment',
    description: 'Add contextual intelligence and metadata to every record.',
    meta: 'ENRICH · 18 sources',
  },
  {
    icon: ShieldCheck,
    title: 'Data Quality Optimization',
    description: 'Validate, clean, and improve data reliability continuously.',
    meta: 'QUALITY · 97.8% score',
  },
  {
    icon: Gauge,
    title: 'AI-Ready Data Preparation',
    description: 'Create structured datasets ready for analytics and AI workloads.',
    meta: 'OUTPUT · AI-ready',
  },
];

export type CapabilityGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: 'Transformation Engine',
    icon: Cpu,
    items: ['Data restructuring', 'Schema transformation', 'Format conversion', 'Data normalization', 'Transformation automation'],
  },
  {
    title: 'Processing Layer',
    icon: Workflow,
    items: ['Batch processing', 'Stream processing', 'Data parsing', 'Data classification', 'Processing optimization'],
  },
  {
    title: 'Enrichment Engine',
    icon: Sparkles,
    items: ['Entity identification', 'Metadata generation', 'Context extraction', 'Information augmentation'],
  },
  {
    title: 'Quality Framework',
    icon: ShieldCheck,
    items: ['Data validation', 'Duplicate detection', 'Normalization', 'Quality monitoring', 'Schema consistency'],
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
};

export const PLANS: Plan[] = [
  {
    name: 'Developer',
    tagline: 'For experimentation and API evaluation.',
    description: 'Explore the Morphiic transformation engine with sample datasets and limited throughput.',
    features: ['API access', 'Sample datasets', 'Community support', 'Limited throughput', 'Single workspace'],
    cta: 'Start Free',
    priceNote: 'Free to start',
  },
  {
    name: 'Business',
    tagline: 'For growing data teams.',
    description: 'Scale transformation workflows across your organization with full pipeline automation.',
    features: ['Full API access', 'Batch + stream processing', 'Quality monitoring', 'Enrichment sources', 'Priority support', 'Team workspaces'],
    cta: 'Start Trial',
    highlighted: true,
    priceNote: 'Subscription SaaS',
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale transformation environments.',
    description: 'Dedicated deployments, enterprise licensing, and usage-based transformation at scale.',
    features: ['Dedicated deployment', 'Enterprise licensing', 'Usage-based transformation', 'SSO & SAML', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact Sales',
    priceNote: 'Custom',
  },
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  { q: 'What is Morphiic?', a: 'Morphiic is an AI-powered data transformation engine that converts fragmented, unstructured enterprise data into structured, enriched, validated, and AI-ready intelligence.' },
  { q: 'What types of data can Morphiic transform?', a: 'Morphiic works with data from databases, APIs, files, CRM, ERP, data lakes, applications, and operational systems — across structured, semi-structured, and unstructured formats.' },
  { q: 'How does AI improve data transformation?', a: 'AI analyzes structure, infers schemas, maps formats, enriches context, and validates quality — automating work that traditionally requires extensive manual engineering.' },
  { q: 'Can Morphiic handle large datasets?', a: 'Yes. Morphiic is built for enterprise-scale processing with distributed pipelines optimized for high-volume data throughput.' },
  { q: 'Does Morphiic support batch and streaming workflows?', a: 'Both. The processing layer handles batch processing and real-time stream processing within the same pipeline framework.' },
  { q: 'How does Morphiic improve data quality?', a: 'The quality framework validates, deduplicates, normalizes, and monitors schema consistency — continuously improving data reliability.' },
  { q: 'Can Morphiic integrate with existing enterprise systems?', a: 'Yes. Morphiic connects to existing databases, APIs, applications, and cloud environments through its ingestion layer.' },
  { q: 'Is Morphiic suitable for AI/ML workloads?', a: 'Absolutely. Morphiic produces AI-ready data specifically prepared for analytics, machine learning, and generative AI applications.' },
  { q: 'Does Morphiic provide APIs?', a: 'Yes. Data transformation APIs, pipeline integration guides, and SDK references are part of the developer platform — currently coming soon.' },
  { q: 'Is an enterprise deployment available?', a: 'Yes. Enterprise customers receive dedicated deployments with enterprise licensing, SSO, and custom integrations.' },
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
