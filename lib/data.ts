// ---------------------------------------------------------------------------
// Site content. Everything marked TODO is placeholder — replace with real info.
// ---------------------------------------------------------------------------

export const site = {
  name: "Fira Pharmaceuticals",
  legalName: "Fira Pharmaceuticals Pvt. Ltd.",
  tagline: "Generic Products",
  motto: "Quality medicines. Honest prices.",
  phone: "+91 98765 43210", // TODO: real phone
  email: "info@firapharma.com", // TODO: real email
  hours: "Mon – Sat · 9:30 AM – 6:30 PM",
};

// Three-way split bar above the main header
export const topLinks = [
  { title: "Fira Pharmaceuticals", sub: "Pvt. Ltd.", href: "/", match: (p: string) => !p.startsWith("/products") },
  { title: "Product Catalogue", sub: "Generic Range", href: "/products", match: (p: string) => p.startsWith("/products") },
  { title: "Partner With Us", sub: "PCD & Distribution", href: "/#partner", match: () => false },
];

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Values", href: "/about#values" },
      { label: "Quality", href: "/about#quality" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Tablets", href: "/products?c=tablets" },
      { label: "Capsules", href: "/products?c=capsules" },
      { label: "Syrups & Suspensions", href: "/products?c=syrups" },
      { label: "Injectables", href: "/products?c=injectables" },
      { label: "Topicals", href: "/products?c=topicals" },
      { label: "Drops", href: "/products?c=drops" },
    ],
  },
  { label: "Quality", href: "/about#quality" },
  { label: "Partner With Us", href: "/#partner" },
  { label: "Contact Us", href: "/contact" },
];

// TODO: replace with real figures
export const stats = [
  { value: 250, suffix: "+", label: "Generic Formulations" },
  { value: 18, suffix: "+", label: "Therapeutic Segments" },
  { value: 1200, suffix: "+", label: "Distributor & Retail Partners" },
  { value: 15, suffix: "+", label: "States Served" },
];

export type CategoryId =
  | "tablets"
  | "capsules"
  | "syrups"
  | "injectables"
  | "topicals"
  | "drops";

export const categories: {
  id: CategoryId;
  name: string;
  blurb: string;
}[] = [
  { id: "tablets", name: "Tablets", blurb: "Film-coated, dispersible & sustained-release" },
  { id: "capsules", name: "Capsules", blurb: "Hard & soft gelatin, enteric-coated" },
  { id: "syrups", name: "Syrups & Suspensions", blurb: "Paediatric & adult oral liquids" },
  { id: "injectables", name: "Injectables", blurb: "Vials & ampoules for critical care" },
  { id: "topicals", name: "Topicals", blurb: "Creams, gels & ointments" },
  { id: "drops", name: "Drops", blurb: "Eye, ear & oral drops" },
];

export const therapies = [
  { name: "Anti-Infectives", desc: "Broad-spectrum antibiotics & antifungals" },
  { name: "Pain & Inflammation", desc: "Analgesics, NSAIDs & muscle relaxants" },
  { name: "Gastro Care", desc: "PPIs, antacids & digestive enzymes" },
  { name: "Cardio-Diabetic", desc: "Anti-hypertensives & anti-diabetics" },
  { name: "Respiratory", desc: "Anti-allergics, cough & cold" },
  { name: "Nutraceuticals", desc: "Multivitamins, calcium & iron" },
  { name: "Dermatology", desc: "Topical steroids & antifungals" },
  { name: "Neuro & CNS", desc: "Neuropathic pain & supplements" },
];

// TODO: replace with the actual product list from the catalogue
export const products: {
  name: string;
  composition: string;
  category: CategoryId;
  therapy: string;
  pack: string;
}[] = [
  { name: "Firacet 650", composition: "Paracetamol 650 mg", category: "tablets", therapy: "Pain & Inflammation", pack: "10 × 15" },
  { name: "Firazith 500", composition: "Azithromycin 500 mg", category: "tablets", therapy: "Anti-Infectives", pack: "10 × 3" },
  { name: "Firapan 40", composition: "Pantoprazole 40 mg", category: "tablets", therapy: "Gastro Care", pack: "10 × 10" },
  { name: "Firaflam", composition: "Aceclofenac 100 mg + Paracetamol 325 mg", category: "tablets", therapy: "Pain & Inflammation", pack: "10 × 10" },
  { name: "Firamet 500", composition: "Metformin 500 mg SR", category: "tablets", therapy: "Cardio-Diabetic", pack: "10 × 10" },
  { name: "Firatel 40", composition: "Telmisartan 40 mg", category: "tablets", therapy: "Cardio-Diabetic", pack: "10 × 10" },
  { name: "Firacet-L", composition: "Levocetirizine 5 mg + Montelukast 10 mg", category: "tablets", therapy: "Respiratory", pack: "10 × 10" },
  { name: "Firaclav 625", composition: "Amoxicillin 500 mg + Clavulanic Acid 125 mg", category: "tablets", therapy: "Anti-Infectives", pack: "10 × 6" },
  { name: "Firarab-DSR", composition: "Rabeprazole 20 mg + Domperidone 30 mg SR", category: "capsules", therapy: "Gastro Care", pack: "10 × 10" },
  { name: "Firaomez 20", composition: "Omeprazole 20 mg", category: "capsules", therapy: "Gastro Care", pack: "10 × 10" },
  { name: "Firavit-Z", composition: "Multivitamin + Multimineral + Zinc", category: "capsules", therapy: "Nutraceuticals", pack: "10 × 10" },
  { name: "Firagaba-NT", composition: "Pregabalin 75 mg + Nortriptyline 10 mg", category: "capsules", therapy: "Neuro & CNS", pack: "10 × 10" },
  { name: "Firadex Syrup", composition: "Dextromethorphan + Chlorpheniramine", category: "syrups", therapy: "Respiratory", pack: "100 ml" },
  { name: "Firacal Suspension", composition: "Calcium + Vitamin D3", category: "syrups", therapy: "Nutraceuticals", pack: "200 ml" },
  { name: "Firazyme Syrup", composition: "Digestive Enzymes", category: "syrups", therapy: "Gastro Care", pack: "200 ml" },
  { name: "Firacet-P Susp.", composition: "Paracetamol 250 mg / 5 ml", category: "syrups", therapy: "Pain & Inflammation", pack: "60 ml" },
  { name: "Firaxone 1g", composition: "Ceftriaxone 1 g", category: "injectables", therapy: "Anti-Infectives", pack: "1 Vial + WFI" },
  { name: "Firadiclo Inj.", composition: "Diclofenac Sodium 75 mg", category: "injectables", therapy: "Pain & Inflammation", pack: "1 ml × 10" },
  { name: "Firapan IV", composition: "Pantoprazole 40 mg", category: "injectables", therapy: "Gastro Care", pack: "1 Vial" },
  { name: "Firaderm Cream", composition: "Clobetasol + Miconazole + Neomycin", category: "topicals", therapy: "Dermatology", pack: "15 g" },
  { name: "Firaflam Gel", composition: "Diclofenac + Linseed Oil + Menthol", category: "topicals", therapy: "Pain & Inflammation", pack: "30 g" },
  { name: "Firaconazole", composition: "Luliconazole 1% Cream", category: "topicals", therapy: "Dermatology", pack: "20 g" },
  { name: "Firamox Eye Drops", composition: "Moxifloxacin 0.5%", category: "drops", therapy: "Anti-Infectives", pack: "5 ml" },
  { name: "Firavit-D Drops", composition: "Vitamin D3 400 IU", category: "drops", therapy: "Nutraceuticals", pack: "15 ml" },
];

export const values = [
  { title: "Quality First", desc: "Every batch is manufactured at WHO-GMP certified facilities and tested before release." },
  { title: "Affordable Access", desc: "Generic medicines that work just as well, at prices patients can actually afford." },
  { title: "Integrity", desc: "Transparent dealings with partners, doctors and patients — no shortcuts." },
  { title: "Reliable Supply", desc: "A distribution network built so that shelves never run empty." },
];

export const process = [
  { step: "01", title: "Formulation", desc: "Proven molecules, bio-equivalent formulations and stable compositions." },
  { step: "02", title: "Manufacturing", desc: "Produced at WHO-GMP certified partner plants under strict SOPs." },
  { step: "03", title: "Quality Control", desc: "Raw material, in-process and finished product testing for every batch." },
  { step: "04", title: "Distribution", desc: "Fast dispatch to distributors, chemists and institutions across India." },
];
