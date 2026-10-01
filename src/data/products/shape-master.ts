import image from '@/assets/images/products/shape-master.webp';
import modulesImage from '@/assets/images/products/ice-hifo.webp';
import lifestyleImage from '@/assets/images/people/models-white.webp';
import type { Product } from '@/types/product';
import { specificationsIntro, standardTraining } from './shared';

export const shapeMaster: Product = {
  slug: 'shape-master',
  name: 'Shape Master',
  category: 'body',
  categoryLabel: 'Body Contouring',
  icon: 'medical_services',
  technology: 'Cryo-RF Body Sculpting',
  technologyDetail: 'Cryo-Thermal & Vacuum Radiofrequency',
  model: 'MDX-SM4',
  modelTag: 'Multi-Handpiece',
  highlight: 'Multi-applicator RF',
  summary: 'Multi-applicator cryo-RF sculpting that targets stubborn fat for a more defined silhouette.',
  description:
    'Advanced body contouring platform that sculpts, tones, and targets stubborn fat for a defined silhouette with zero downtime.',
  image: { src: image, alt: 'Shape Master body contouring console', fit: 'contain' },
  enquiryLabel: 'Advanced Body Sculpting & Contouring',
  relatedSlugs: ['7d-hifo', 'slim-wave-pro', 'revita-heal'],
  detail: {
    systemRef: 'MDX-SM360-V2',
    deviceClass: 'Class IIa Medical Device',
    eyebrow: 'Non-Invasive Architectural Sculpting',
    tagline: '360° Synchronized Cryo-Lipo & RF Sculpting Workstation',
    overview:
      'The Shape Master system integrates controlled circumferential cryolipolysis, multi-polar high-frequency thermal energy, and pulsed pneumatic vacuum manipulation into a unified clinical aesthetic workstation. Engineered for uncompromising focal fat cell apoptosis and skin contraction across bilateral treatment zones.',
    heroBadges: { primary: 'Cryo-RF Multimodality', secondary: 'Quad-Applicator Active' },
    consoleNote: '15.6" IPS Interaction Console',
    keySpecs: [
      { label: 'Thermal Range', value: '-10°C to +45°C', note: 'Multi-stage tissue preheat & freeze' },
      { label: 'RF Frequency', value: '5.0 MHz', note: 'Focused deep reticular dermis heating', accent: true },
      { label: 'Synchronous Ports', value: '4 Handpieces', note: 'Concurrent multi-region sessions' },
      { label: 'Pneumatic Negative', value: '100 kPa', note: 'Dynamic pulsed cupping protocol', accent: true },
    ],
    gallery: [
      { src: image, alt: 'Shape Master console, front angle', label: 'View 01', fit: 'contain' },
      { src: lifestyleImage, alt: 'Clinical results profile', label: 'Clinical', fit: 'cover' },
      { src: modulesImage, alt: 'Precision handpiece array', label: 'Modules', fit: 'contain' },
    ],
    mechanisms: {
      eyebrow: 'Precision Mechanism of Action',
      title: 'Triple-Action Sculpting Architecture',
      intro:
        'Traditional body shaping modalities act on isolated layers. Shape Master orchestrates three clinically authenticated bio-physical modalities simultaneously to induce natural adipocyte apoptosis while stimulating neocollagenesis.',
      items: [
        {
          icon: 'ac_unit',
          phase: 'Phase 01 / Thermal Extraction',
          title: '360° Surround Cooling',
          body: 'Full-surface silicone heat exchangers administer uniform sub-zero temperatures (-10°C). Unlike dual-plate models, circumferential freezing eliminates thermal dissipation blind spots, causing systematic crystallization and subsequent phagocytic clearance of targeted fat stores.',
          metric: { label: 'Apoptosis Induction:', value: 'Up to 26% Per Cycle' },
        },
        {
          icon: 'electric_bolt',
          phase: 'Phase 02 / Dermal Stimulation',
          title: '5 MHz Multi-Polar RF',
          body: 'Simultaneous high-frequency electromagnetic fields oscillate ionic fluids inside dermal matrices, sustaining therapeutic hyperthermia (+42°C to +45°C) to immediately contract collagen bundles while prompting durable fibroblast proliferation over 90 days.',
          metric: { label: 'Tissue Contraction:', value: 'Immediate & Progressive' },
        },
        {
          icon: 'airwave',
          phase: 'Phase 03 / Micro-Circulation',
          title: 'Endermic Vacuum Mobilization',
          body: 'Programmed vacuum impulses (0 - 100 kPa) gently cup the cutaneous and subcutaneous tissue layers into the treatment cavity. This maximizes contact stability with the cooling arrays while accelerating lymphatic drainage and metabolization of cellular lipid debris.',
          metric: { label: 'Pneumatic Modes:', value: '4 Dynamic Rhythms' },
        },
      ],
    },
    indications: {
      eyebrow: 'Comprehensive Full-Body Versatility',
      title: 'Targeted Treatment Indications',
      intro:
        'Modular anatomical contour handpieces allow medical operators to sculpt every layer from deep visceral fat bulges to subtle submental contours.',
      badge: '4 Specialized Contoured Applicators',
      items: [
        {
          icon: 'face',
          title: 'Submental & Jawline',
          body: 'Micro-focal handpiece designed specifically to target stubborn double chin fat pads, tightening the submandibular framework for a defined cervical-facial profile.',
          duration: '35 Min Protocol',
        },
        {
          icon: 'accessibility_new',
          title: 'Abdomen & Flanks',
          body: 'High-volume bilateral applicators designed to embrace expansive abdominal fields and love handles concurrently, reducing circumferential waistline measurements effortlessly.',
          duration: '45 Min Protocol',
        },
        {
          icon: 'fitness_center',
          title: 'Thighs & Gluteal',
          body: 'Pulsed vacuum combined with RF deeply warms fibrous septae to mitigate dimpling cellulite while tightening inner and outer thigh laxity.',
          duration: '40 Min Protocol',
        },
        {
          icon: 'sports_gymnastics',
          title: 'Arms & Bra Line',
          body: 'Ergonomically contoured curve cups adapted for triceps flaccidity and sub-scapular deposits without tissue slipping or operator fatigue.',
          duration: '30 Min Protocol',
        },
      ],
    },
    specifications: {
      ...specificationsIntro,
      rows: [
        { label: 'Operating Modalities', value: 'Cryolipolysis + Multi-Polar RF + Pulsed Vacuum' },
        { label: 'Main Clinical Console', value: '15.6" True-Color Anti-Glare Capacitive Touchscreen' },
        { label: 'Handpiece Interfaces', value: '3.5" OLED Integrated Micro-Displays on each probe' },
        { label: 'Cryo Thermal Range', value: '-10°C to +45°C (Accurate to ±0.5°C)', numeric: true, accent: true },
        { label: 'RF Output Frequency', value: '5.0 MHz (Multipolar Synchronized)', numeric: true, accent: true },
        { label: 'Pneumatic Negative Pressure', value: '0 to 100 kPa Continuous / Pulsed', numeric: true },
        { label: 'Cooling System Circuit', value: 'Closed-Loop Semiconductor + Liquid Distilled + Air Fan Array' },
        { label: 'Power Requirements', value: 'AC 220V - 240V / 50-60Hz (Optional 110V)', numeric: true },
        { label: 'Regulatory Compliance', value: 'CE Medical 93/42/EEC, ISO 13485:2016 Certified', accent: true },
      ],
      deliveryKit: [
        'Shape Master Primary Clinical Host Unit',
        '4x 360° Synchronized Cryo-RF Applicators (Assorted Sizes)',
        '1x Precision Submental Chin Handpiece',
        'Complete Starter Pack of Antifreeze Membranes',
        'Calibrated Fluid Infusion & Drainage Toolkit',
      ],
      training: standardTraining,
    },
  },
};
