import {
  AudioWaveform, Blocks, Code2, Cpu, Disc3, Layers3,
  MonitorPlay, Network, ScanEye, Workflow
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Ventures", href: "#ventures", menu: [
    { label: "SYNTIENT RECORDS", href: "#syntient", detail: "Independent music and entertainment" },
    { label: "Technology", href: "#technology", detail: "Software, AI and digital products" },
    { label: "Creative", href: "#creative", detail: "Music, motion and visual media" }
  ] },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const ventures = [
  {
    id: "syntient", number: "01", eyebrow: "MUSIC & ENTERTAINMENT",
    title: "SYNTIENT RECORDS",
    description: "An independent record label and creative home for original music, artists, and releases.",
    icon: Disc3, href: "https://syntientrecords.com", linkLabel: "Explore the label"
  },
  {
    id: "technology", number: "02", eyebrow: "SOFTWARE & INTELLIGENCE",
    title: "Technology",
    description: "A growing collection of software, AI-powered experiences, experiments, and digital tools.",
    icon: Cpu, href: "#technology", linkLabel: "Explore technology"
  },
  {
    id: "creative", number: "03", eyebrow: "ART & DIGITAL MEDIA",
    title: "Creative Studio",
    description: "Music, motion, visual concepts, and multimedia built around original ideas.",
    icon: MonitorPlay, href: "#creative", linkLabel: "Explore creative work"
  },
  {
    id: "services", number: "04", eyebrow: "COLLABORATION & CONSULTING",
    title: "Professional Services",
    description: "Practical creative and technical collaboration, from AI workflows to custom software concepts.",
    icon: Workflow, href: "#services", linkLabel: "Explore services"
  }
];

export const technologyProjects = [
  {
    name: "BlueNote", category: "AI PRODUCTIVITY",
    description: "An AI-assisted workspace concept bringing notes, tasks, planning, and connected knowledge together.",
    icon: Layers3, status: "Portfolio preview"
  },
  {
    name: "SYNSOUND", category: "AUDIO INTELLIGENCE",
    description: "An audio-focused project exploring signal analysis, enhancement, transcription, and sound intelligence.",
    icon: AudioWaveform, status: "Portfolio preview"
  },
  {
    name: "SYN-STUDIO", category: "CREATIVE TECHNOLOGY",
    description: "A creative technology project within the wider SynovaMedia ecosystem.",
    icon: Blocks, status: "Portfolio preview"
  },
  {
    name: "SYN_LAUNCH", category: "DEVELOPER TOOLING",
    description: "A technical toolkit focused on practical command-line workflows and platform compatibility.",
    icon: Code2, status: "Portfolio preview"
  },
  {
    name: "HyperCurrent", category: "PLATFORM INTELLIGENCE",
    description: "A project exploring real-time platform signals and digital ecosystem monitoring.",
    icon: ScanEye, href: "https://hypercurrent.base44.app", status: "Explore project"
  },
  {
    name: "SonikDev", category: "SONIC DEVELOPMENT",
    description: "A sonic creation platform in the SynovaMedia project collection.",
    icon: Network, href: "https://sonikdev.base44.app", status: "Explore project"
  },
  {
    name: "Synova", category: "AI TOOLS & DISCOVERY",
    description: "An AI tools and creative discovery experience in the SynovaMedia collection.",
    icon: Cpu, href: "https://synova.base44.app", status: "Explore project"
  },
  {
    name: "clAIrvoyant", category: "GENERATIVE AI",
    description: "An experimental AI project exploring symbolic systems and generative interpretation.",
    icon: ScanEye, href: "https://clairvoyantai.lovable.app", status: "Explore project"
  }
];

export const services = [
  {
    title: "AI Development & Integration",
    description: "AI-assisted application development, practical integrations, and intelligent product concepts.",
    icon: Cpu
  },
  {
    title: "AI Consulting & Strategy",
    description: "Identify useful AI opportunities and translate them into realistic, buildable workflows.",
    icon: Network
  },
  {
    title: "Prompt & Generative AI",
    description: "Prompt architecture, generative systems, structured reasoning, and creative AI workflows.",
    icon: ScanEye
  },
  {
    title: "Workflow Engineering",
    description: "Simplify complex processes through automation, system design, and process improvement.",
    icon: Workflow
  },
  {
    title: "Software & Prototyping",
    description: "Custom software concepts, application interfaces, technical prototypes, and implementation.",
    icon: Code2
  },
  {
    title: "Motion & Digital Creative",
    description: "Short-form animation, visual storytelling, and multimedia creative production.",
    icon: MonitorPlay
  }
];