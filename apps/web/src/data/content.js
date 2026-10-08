import {
	BrainCircuit,
	Smartphone,
	BarChart3,
	ShoppingCart,
	HeartPulse,
	Building2,
} from 'lucide-react';

export const LOGO_URL =
	'https://horizons-cdn.hostinger.com/1b5ccf1b-238b-4bb8-8cbb-896f7c84e46a/c2f6af938c054679681e838a10d5264e.jpg';

export const IMAGES = {
	hero: 'https://images.hostinger.com/ae645ca9-2f2f-40f4-921d-ccce4d49e10b.png',
	retail: 'https://images.hostinger.com/9302644d-6332-43c5-9972-e2ac305984a8.png',
	healthcare: 'https://images.hostinger.com/d65317ae-f689-4c9b-b49c-25f438947c35.png',
	logistics: 'https://images.hostinger.com/f9d6ddb5-6412-4479-ae00-000747cde6e8.png',
	ai: 'https://images.hostinger.com/4297584f-4027-4948-9887-36fe02fa32ee.png',
	mobile: 'https://images.hostinger.com/279d22c2-cb2a-4dcd-91ff-e149cd0df82a.png',
	data: 'https://images.hostinger.com/ec924c14-844a-4bee-8bd6-3c89a7f2aadb.png',
	team: 'https://images.hostinger.com/8ee57789-66e5-450d-a0d0-a58ceaea21ae.png',
};

export const services = [
	{
		slug: 'ai-transformation',
		icon: BrainCircuit,
		title: 'AI Transformation',
		tagline: 'From pilot models to production intelligence.',
		description:
			'We help enterprises move beyond experiments — identifying high-value use cases, building custom machine-learning and LLM-powered systems, and embedding them safely into daily operations.',
		deliverables: ['AI readiness audit', 'Custom LLM & ML solutions', 'Intelligent process automation', 'MLOps & model governance', 'Team enablement'],
	},
	{
		slug: 'web-mobile',
		icon: Smartphone,
		title: 'Web & Mobile Applications',
		tagline: 'Products people love, engineered to scale.',
		description:
			'Design-led engineering for customer-facing web platforms and native-quality mobile apps. We own the full lifecycle — discovery, UX, architecture, delivery, and continuous improvement.',
		deliverables: ['Product discovery & UX', 'Progressive web apps', 'iOS & Android development', 'Cloud-native backends', 'QA & release engineering'],
	},
	{
		slug: 'data-analytics',
		icon: BarChart3,
		title: 'Data & Analytics',
		tagline: 'Decisions backed by data you can trust.',
		description:
			'We build modern data platforms that unify scattered sources into a single source of truth — with pipelines, warehouses, and dashboards that turn raw numbers into confident decisions.',
		deliverables: ['Data strategy & architecture', 'Pipeline & ETL engineering', 'Warehouse & lakehouse setup', 'BI dashboards & reporting', 'Data quality & governance'],
	},
	{
		slug: 'retail-ecommerce',
		icon: ShoppingCart,
		title: 'Retail & E-Commerce Software',
		tagline: 'Commerce experiences that convert and retain.',
		description:
			'Headless storefronts, order management, inventory intelligence, and personalization engines — purpose-built for retailers who need speed at every step of the customer journey.',
		deliverables: ['Headless commerce builds', 'OMS & inventory systems', 'Personalization engines', 'POS & omnichannel integration', 'Conversion optimization'],
	},
	{
		slug: 'healthcare',
		icon: HeartPulse,
		title: 'Healthcare Software',
		tagline: 'Compliant, compassionate digital health.',
		description:
			'Patient engagement platforms, telehealth systems, and clinical workflow tools built to strict privacy and interoperability standards — without slowing care teams down.',
		deliverables: ['Patient portals & apps', 'Telehealth platforms', 'HL7 / FHIR integration', 'HIPAA-ready architecture', 'Clinical workflow automation'],
	},
	{
		slug: 'enterprise',
		icon: Building2,
		title: 'Enterprise Solutions',
		tagline: 'Systems that hold the business together.',
		description:
			'Custom ERP modules, legacy modernization, system integration, and internal platforms — engineered for reliability, security, and the long life of enterprise software.',
		deliverables: ['Custom ERP & CRM modules', 'Legacy modernization', 'API & system integration', 'Cloud migration', 'Managed support & SLAs'],
	},
];

export const caseStudies = [
	{
		id: 'northwind-retail',
		industry: 'Retail & E-Commerce',
		title: 'Modernising commerce for a retailer stores',
		image: IMAGES.retail,
		challenge:
			'Northwind ran online and in-store sales on disconnected systems. Stock visibility lagged by hours, promotions broke at checkout, and the legacy storefront could not support a measured 2026 digital rollout.',
		solution:
			'In 2026, Orbusly delivered a phased headless commerce foundation: a unified order management core, real-time inventory sync, and a personalization engine, first validated through a 12-store pilot before the wider rollout.',
		result:
			'The pilot launched in fourteen weeks without interrupting existing store operations, giving Northwind a tested roadmap to extend the platform stores.',
		metrics: [
			{ value: '+18%', label: 'Pilot conversion' },
			{ value: '12', label: 'Pilot stores' },
			{ value: '240', label: 'Rollout stores' },
		],
	},
	{
		id: 'carepoint-clinics',
		industry: 'Healthcare',
		title: 'A patient platform that cut no-shows nearly in half',
		image: IMAGES.healthcare,
		challenge:
			'CarePoint\u2019s 30 clinics juggled phone-booked appointments, paper intake forms, and a portal patients abandoned. No-show rates approached 20% and staff burned hours on manual reminders.',
		solution:
			'We built a HIPAA-ready patient engagement platform — mobile-first booking, digital intake, smart reminders, and telehealth visits — integrated with the existing EHR through FHIR APIs.',
		result:
			'Within two quarters, no-shows fell by 47% and front-desk call volume dropped by a third across all clinics.',
		metrics: [
			{ value: '-47%', label: 'Appointment no-shows' },
			{ value: '120k', label: 'Active patients' },
			{ value: '30', label: 'Clinics onboarded' },
		],
	},
	{
		id: 'meridian-logistics',
		industry: 'Enterprise & Data',
		title: 'A supply-chain control tower across six countries',
		image: IMAGES.logistics,
		challenge:
			'Meridian\u2019s freight data lived in eighteen disconnected systems across six countries. Planners made routing decisions on day-old spreadsheets, and exceptions surfaced only after customers complained.',
		solution:
			'Orbusly engineered a real-time data platform that streams telemetry from every carrier and warehouse into one control tower — with predictive ETAs, exception alerts, and cost analytics.',
		result:
			'Freight spend fell 22% in the first year, and planners now resolve exceptions an average of nine hours earlier.',
		metrics: [
			{ value: '22%', label: 'Freight cost savings' },
			{ value: '18', label: 'Data sources unified' },
			{ value: '6', label: 'Countries live' },
		],
	},
];

export const posts = [
	{
		slug: 'enterprise-ai-transformation-2026',
		title: 'What Enterprise AI Transformation Actually Looks Like in 2026',
		excerpt:
			'Most AI programs stall between pilot and production. Here is the operating model we use to get intelligent systems into daily workflows — and keep them there.',
		category: 'AI Transformation',
		date: '2026-08-24',
		readTime: '7 min read',
		image: IMAGES.ai,
		body: [
			{
				paragraphs: [
					'Every enterprise we meet has run an AI pilot. Few have an AI system running in production that the business depends on. The gap is rarely the model — it is the operating model around it: unclear ownership, missing data pipelines, and no plan for what happens after the demo.',
					'Successful programs start unglamorously. They pick one workflow with measurable pain, a clear owner, and data that already exists. They define the baseline metric before writing a line of code, and they treat the first production release as the start of the work, not the end.',
				],
			},
			{
				heading: 'The three disciplines that separate pilots from production',
				paragraphs: [
					'First, data engineering before model engineering. In our experience, 70% of the effort in a production AI system is pipelines, quality checks, and access controls. Teams that budget for this ship; teams that discover it mid-project stall.',
					'Second, evaluation as a product feature. Every intelligent system we ship includes a way for users to flag wrong answers, and a weekly review loop that feeds those signals back into the system. Accuracy is a process, not a launch-day property.',
					'Third, governance that enables rather than blocks. Model registries, audit trails, and clear escalation paths let risk teams say yes faster — because they can see exactly what the system does and who is accountable for it.',
				],
			},
			{
				heading: 'Where to start',
				paragraphs: [
					'Pick the workflow where your team already complains the loudest and the data is the cleanest. Ship a narrow system in eight to twelve weeks, measure it honestly, and let that success fund the next one. Transformation is a portfolio of boring wins, compounded.',
				],
			},
		],
	},
	{
		slug: 'mobile-apps-that-survive-scale',
		title: 'Shipping Mobile Apps That Survive Scale',
		excerpt:
			'The architecture decisions that feel premature at 1,000 users become emergencies at 1,000,000. A field guide to building mobile products that grow gracefully.',
		category: 'Web & Mobile',
		date: '2026-07-30',
		readTime: '6 min read',
		image: IMAGES.mobile,
		body: [
			{
				paragraphs: [
					'Most mobile apps do not fail at launch — they fail at their first real growth spurt. The patterns that were fine with a small user base, like chatty APIs and client-side business logic, become outages and app-store one-star reviews under load.',
					'The good news: you do not need to over-engineer on day one. You need to make a small set of decisions that are hard to reverse, correctly.',
				],
			},
			{
				heading: 'Decisions to get right early',
				paragraphs: [
					'Version your API from the first release. Mobile clients live on devices you do not control, and users update when they feel like it. Every backend change must assume two-year-old app versions are still in the wild.',
					'Design offline-first sync for anything users care about. Networks fail in elevators, tunnels, and rural highways. An app that degrades gracefully earns trust that marketing cannot buy.',
					'Instrument everything before you need it. Crash reporting, performance traces, and funnel analytics are cheap to add early and painful to retrofit during an incident.',
				],
			},
			{
				heading: 'The scaling playbook',
				paragraphs: [
					'When growth arrives, scale the boring layers first: CDN-cached content, idempotent APIs, and queue-backed writes. Save exotic infrastructure for the one bottleneck that actually matters — and find that bottleneck with data, not intuition.',
				],
			},
		],
	},
	{
		slug: 'dashboards-to-decisions',
		title: 'From Dashboards to Decisions: Modern Data Analytics',
		excerpt:
			'Companies drown in dashboards yet starve for insight. The fix is not more charts — it is a data platform built around the decisions your teams actually make.',
		category: 'Data & Analytics',
		date: '2026-06-18',
		readTime: '8 min read',
		image: IMAGES.data,
		body: [
			{
				paragraphs: [
					'Ask a leadership team how many dashboards their company has and they will laugh. Ask which three numbers they check every morning and the room goes quiet. The distance between those two answers is where most analytics investments evaporate.',
					'Modern data platforms flip the order of operations. Instead of centralizing data and hoping insight emerges, they start from decisions: what should a merchandiser, a planner, or a clinic manager do differently each day, and what would they need to see to do it?',
				],
			},
			{
				heading: 'Build the decision layer first',
				paragraphs: [
					'We begin every analytics engagement with a decision inventory — a list of recurring choices, their owners, and their dollar impact. Only then do we design pipelines and models. The result is a platform where every dataset exists because a decision needs it.',
					'This discipline also solves the trust problem. When a metric feeds a real decision, its definition gets debated, documented, and owned. Semantic layers and metric stores make that definition executable, so "revenue" means the same thing in every tool.',
				],
			},
			{
				heading: 'Then automate the obvious',
				paragraphs: [
					'Once a decision is well understood, automate the routine version of it. Alerts for exceptions, forecasts for planning, recommendations for the next best action. Dashboards inform humans; decision systems multiply them.',
				],
			},
		],
	},
	{
		slug: 'headless-commerce-field-guide',
		title: 'Headless Commerce: A Field Guide for Retailers',
		excerpt:
			'Headless promises speed and flexibility, but the migration path is littered with stalled projects. What we learned planning a measured 2026 rollout for a 240-store retailer.',
		category: 'Retail & E-Commerce',
		date: '2026-05-12',
		readTime: '6 min read',
		image: IMAGES.retail,
		body: [
			{
				paragraphs: [
					'Headless commerce separates the storefront experience from the commerce engine, letting retailers iterate on customer experience without touching the systems that process orders. Done well, it is transformative. Done casually, it is an expensive way to run two systems instead of one.',
					'The retailers who succeed treat headless as an operating change, not a frontend project. They reorganize teams around the customer journey and give them ownership of the full stack above the commerce core.',
				],
			},
			{
				heading: 'Three rules from the field',
				paragraphs: [
					'Keep the commerce core boring. Orders, payments, and inventory should run on proven, managed services. Innovation belongs at the edge — the storefront, personalization, and content — where speed of iteration matters most.',
					'Unify inventory before you unify anything else. Real-time stock visibility across stores and warehouses is the single highest-ROI integration in retail. Every omnichannel promise — buy online pickup in store, ship from store — depends on it.',
					'Measure the migration in weeks to first value, not months to full cutover. Launch one category or one region on the new stack, prove the conversion lift, and expand from the evidence.',
				],
			},
		],
	},
	{
		slug: 'hipaa-ready-without-slowing-down',
		title: 'Building HIPAA-Ready Software Without Slowing Down',
		excerpt:
			'Compliance and velocity are not enemies. The patterns that let healthcare products ship fast while protecting patient data by design.',
		category: 'Healthcare',
		date: '2026-04-08',
		readTime: '7 min read',
		image: IMAGES.healthcare,
		body: [
			{
				paragraphs: [
					'Healthcare teams often believe they must choose between shipping fast and staying compliant. In our experience building patient platforms, that trade-off is false — but only if compliance is engineered into the architecture from the first sprint rather than audited in at the end.',
					'The teams that move fastest treat HIPAA requirements as design constraints that simplify decisions. Encryption, access controls, and audit logging are not features to negotiate; they are the foundation everything else stands on.',
				],
			},
			{
				heading: 'Patterns that work',
				paragraphs: [
					'Segment PHI aggressively. Keep protected health information in a tightly controlled data zone with its own access policies, and let the rest of the system work with de-identified references. Most features never need to touch raw PHI at all.',
					'Make audit trails automatic. Every read and write of patient data should be logged by the platform, not by developer discipline. When compliance evidence is generated by the system, audits become exports instead of archaeology.',
					'Adopt FHIR early. Interoperability with EHRs is where healthcare projects go to stall. Teams that model data around FHIR resources from day one integrate in weeks; teams that retrofit it budget quarters.',
				],
			},
			{
				heading: 'The velocity dividend',
				paragraphs: [
					'Counterintuitively, these constraints speed teams up. Clear data boundaries mean clearer service boundaries. Automatic audit trails mean fewer review meetings. Compliance by design is not a tax on velocity — it is an architecture for it.',
				],
			},
		],
	},
	{
		slug: 'discipline-of-enterprise-integrations',
		title: 'The Quiet Discipline of Enterprise Integrations',
		excerpt:
			'Nobody celebrates integration work, yet every enterprise system lives or dies by it. Principles from eighteen data sources unified into one control tower.',
		category: 'Enterprise',
		date: '2026-02-19',
		readTime: '5 min read',
		image: IMAGES.logistics,
		body: [
			{
				paragraphs: [
					'Enterprise software rarely fails because of its headline features. It fails at the seams — the interfaces between systems where data is transformed, delayed, or silently dropped. Integration work is unglamorous, and it is where most of the risk in any enterprise program actually lives.',
					'After unifying eighteen data sources into a single supply-chain control tower, we have come to treat integration as a first-class engineering discipline with its own principles.',
				],
			},
			{
				heading: 'Principles from the trenches',
				paragraphs: [
					'Contract first, code second. Every integration begins with a written contract: schemas, SLAs, ownership, and failure behavior. The contract is what lets two teams move independently without breaking each other.',
					'Design for the failure you have not seen yet. Source systems go down, send duplicates, and change schemas without warning. Idempotent consumers, dead-letter queues, and replayable pipelines turn these surprises into non-events.',
					'Observability is not optional. If you cannot answer "is the data flowing, and is it correct?" from a dashboard, you do not have an integration — you have a hope.',
				],
			},
			{
				heading: 'The payoff',
				paragraphs: [
					'When integrations are engineered with this discipline, everything built on top of them moves faster. New data sources onboard in days. Downstream teams trust what they see. The quiet work becomes the loudest advantage.',
				],
			},
		],
	},
];

export const jobs = [
	{ title: 'Senior Full-Stack Engineer', team: 'Web & Mobile', location: 'Bengaluru · Hybrid', type: 'Full-time' },
	{ title: 'Machine Learning Engineer', team: 'AI Transformation', location: 'Bengaluru · Hybrid', type: 'Full-time' },
	{ title: 'Product Designer', team: 'Design', location: 'Remote · India', type: 'Full-time' },
	{ title: 'Data Engineer', team: 'Data & Analytics', location: 'Pune · Hybrid', type: 'Full-time' },
	{ title: 'Healthcare Solutions Architect', team: 'Healthcare', location: 'Hyderabad · Hybrid', type: 'Full-time' },
	{ title: 'Engagement Manager', team: 'Client Services', location: 'Mumbai', type: 'Full-time' },
];

export const values = [
	{
		title: 'Engineering first',
		description: 'We are builders. Every engagement is led by senior engineers who write code, not slide decks.',
	},
	{
		title: 'Own the outcome',
		description: 'We measure ourselves by the client\u2019s result — conversion, uptime, cost saved — not hours billed.',
	},
	{
		title: 'Radical clarity',
		description: 'Honest timelines, visible progress, no surprises. Clients see what we see, every week.',
	},
	{
		title: 'Built to last',
		description: 'We design for the team that maintains the system after us — documentation, tests, and clean handover.',
	},
];

export const milestones = [
	{ year: '2026', event: 'Orbusly Solutions founded in Indore with a three-person engineering team.' }
];

export const stats = [
	{ value: 120, suffix: '+', label: 'Products delivered' },
	{ value: 14, suffix: '', label: 'Countries served' },
	{ value: 98, suffix: '%', label: 'Client retention' },
	{ value: 2026, suffix: '', label: 'Year founded' },
];
