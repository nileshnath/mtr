// ============================================================
// MTR FASHION — B2B Wholesale Apparel Export Platform
// Legal: MTR Fashion | GSTIN: 08BYVPN2162G1Z0
// Factory: Front of Char Bhuja Mandir, Brahma Temple Road,
//          Near Kapaleshwar Temple, Badi Basti, Pushkar,
//          Rajasthan 305022, India
// Single-file React Component | Tailwind CSS | lucide-react
// ============================================================

import React, { useState, useMemo } from 'react';
import {
  Factory, Package, Shield, Building2, Calculator,
  ChevronRight, ChevronLeft, X, Check, CheckCircle,
  Send, MapPin, Mail, Globe, Award, Truck, Clock,
  Layers, Scissors, Tag, Plus, Minus, ShoppingCart,
  Menu, Eye, Leaf, Box, ArrowRight, Filter,
  FileText, AlertCircle, Target, Zap, Hash,
  Ruler, Printer, RotateCcw, Star, Download,
  BarChart3, Scale, Users, TrendingUp
} from 'lucide-react';

// ============================================================
// MOCK DATA
// ============================================================

// Exchange rate for currency toggle
const USD_RATE = 83.2;

const PRODUCTS = [
  {
    id: 1,
    name: 'Purple Paisley Bell Sleeve Boho Maxi',
    sku: 'MTR-SKU-PL-001',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image.jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Purple Floral', 'Indigo Print', 'Dusty Lavender'],
    tags: ['Bestseller', 'Long Dress'],
    techSpecs: {
      composition: '100% Organic Cotton, Hand-Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '120 GSM',
      weaveType: 'Plain Weave, Bell Sleeve Construction',
      printMethod: 'Traditional Sanganeri Hand-Block Print',
      dyeSafety: 'OEKO-TEX Standard 100, Azo-Free Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness (Hand-wash Recommended)',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash, Preshrunk',
    },
  },
  {
    id: 2,
    name: 'Patchwork Boho Handkerchief Hem Mini',
    sku: 'MTR-SKU-SH-002',
    category: 'Short Dresses',
    material: 'Rayon Silk Blend',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(1).jpg',
    dressType: 'short',
    pricing: [
      { qty: '100 Pcs', inr: 400 },
      { qty: '250 Pcs', inr: 375 },
      { qty: '500+ Pcs', inr: 350 },
    ],
    packBundle: 'Case Pack: 12 Units | S(3) M(4) L(3) XL(2)',
    leadTime: '12-15 Days',
    colors: ['Multi-Print Patchwork', 'Earthy Festival Hues', 'Summer Brights'],
    tags: ['Summer Pick', 'Short Dress'],
    techSpecs: {
      composition: '65% Viscose Rayon / 35% Silk Blend',
      threadCount: '100 TPI Warp × 80 TPI Weft',
      gsm: '95 GSM',
      weaveType: 'Patchwork Scarf-cut, Handkerchief Hem',
      printMethod: 'Multi-panel Block Print / Scarf Recut Style',
      dyeSafety: 'ISO 105-E04, Formaldehyde-Free Process',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Silk-touch Finish, Anti-Wrinkle Treatment',
    },
  },
  {
    id: 3,
    name: 'Pink Magenta Paisley Flutter Sleeve Maxi',
    sku: 'MTR-SKU-PL-003',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(2).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Magenta Pink', 'Deep Fuchsia', 'Rose Purple'],
    tags: ['New Arrival', 'Long Dress'],
    techSpecs: {
      composition: '100% Organic Cotton, Hand-Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '115 GSM',
      weaveType: 'Plain Weave, Flutter Sleeve Cut',
      printMethod: 'Traditional Block Print, Floral Paisley Motif',
      dyeSafety: 'OEKO-TEX Standard 100, Azo-Free Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness (Hand-wash Recommended)',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash, Soft Finish',
    },
  },
  {
    id: 4,
    name: 'White Chikankari Embroidered 3-Piece Co-ord Set',
    sku: 'MTR-SKU-CS-004',
    category: 'Co-ord Sets',
    material: 'Embroidered Cotton',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(3).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Set Pack: 6 Sets | S(1) M(2) L(2) XL(1) Per Set',
    leadTime: '18-22 Days',
    colors: ['White / Black Embroidery', 'Off-White', 'Ivory'],
    tags: ['Co-ord Set', 'Embroidered'],
    techSpecs: {
      composition: '100% Soft Cotton with Chikankari Hand Embroidery',
      threadCount: '60 TPI Combed Cotton',
      gsm: '130 GSM',
      weaveType: '3-Piece: Long Jacket + Crop Top + Wide-Leg Pant',
      printMethod: 'Chikankari Hand Embroidery, Lucknow Style',
      dyeSafety: 'OEKO-TEX Certified, Vegan-Friendly Dyes',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Soft Cotton Finish, Pre-Washed',
    },
  },
  {
    id: 5,
    name: 'Dark Paisley A-Line Short Dress',
    sku: 'MTR-SKU-SH-005',
    category: 'Short Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(4).jpg',
    dressType: 'short',
    pricing: [
      { qty: '100 Pcs', inr: 400 },
      { qty: '250 Pcs', inr: 375 },
      { qty: '500+ Pcs', inr: 350 },
    ],
    packBundle: 'Case Pack: 12 Units | S(3) M(4) L(3) XL(2)',
    leadTime: '12-15 Days',
    colors: ['Dark Navy / Gold', 'Black / Tan', 'Midnight Print'],
    tags: ['Short Dress', 'Block Print'],
    techSpecs: {
      composition: '100% Organic Cotton, Hand-Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '120 GSM',
      weaveType: 'A-Line Construction, 3/4 Sleeve, Tassel Tie',
      printMethod: 'Ajrakh / Kalamkari Style Block Print',
      dyeSafety: 'OEKO-TEX Standard 100, Natural Mordant Dyes',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash',
    },
  },
  {
    id: 6,
    name: 'Teal Paisley Puff Sleeve Smocked Midi',
    sku: 'MTR-SKU-PL-006',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(5).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Teal / Jade Green', 'Ocean Blue', 'Forest Teal'],
    tags: ['Bestseller', 'Long Dress'],
    techSpecs: {
      composition: '100% Organic Cotton, Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '115 GSM',
      weaveType: 'Puff Sleeve, Smocked Elasticated Waist',
      printMethod: 'Traditional Hand-Block Print, Floral Paisley',
      dyeSafety: 'OEKO-TEX Standard 100, Azo-Free Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash, Soft Finish',
    },
  },
  {
    id: 7,
    name: 'Black & Gold Paisley Sleeveless Maxi',
    sku: 'MTR-SKU-PL-007',
    category: 'Long Dresses',
    material: 'Rayon Silk Blend',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(6).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-20 Days',
    colors: ['Black / Gold', 'Charcoal / Beige', 'Midnight Tan'],
    tags: ['Premium', 'Long Dress'],
    techSpecs: {
      composition: '70% Viscose Rayon / 30% Mulberry Silk',
      threadCount: '100 TPI Warp × 80 TPI Weft',
      gsm: '100 GSM',
      weaveType: 'Georgette Variant, Fluid Drape, V-Neck Wrap',
      printMethod: 'Large Scale Block Print, Hand-Stamped',
      dyeSafety: 'ISO 105-E04, Formaldehyde-Free',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Silk-touch Finish',
    },
  },
  {
    id: 8,
    name: 'Crimson Paisley Spaghetti Strap Maxi',
    sku: 'MTR-SKU-PL-008',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(7).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Crimson Red', 'Deep Ruby', 'Berry Wine Print'],
    tags: ['Bestseller', 'Long Dress'],
    techSpecs: {
      composition: '100% Cotton, Sanganeri Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '110 GSM',
      weaveType: 'Spaghetti Strap, Tiered Skirt, Smocked Bodice',
      printMethod: 'Sanganeri Hand-Block Print, Floral Motifs',
      dyeSafety: 'OEKO-TEX Standard 100, Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Enzyme Wash, Natural Softener',
    },
  },
  {
    id: 9,
    name: 'White Chikankari Lace Cotton Maxi',
    sku: 'MTR-SKU-WH-009',
    category: 'Long Dresses',
    material: 'Embroidered Cotton',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(8).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '18-22 Days',
    colors: ['Pure White', 'Off-White', 'Ivory'],
    tags: ['Ethnic Wear', 'Long Dress'],
    techSpecs: {
      composition: '100% Soft Cotton with Lace & Eyelet Embroidery',
      threadCount: '60 TPI Combed Cotton',
      gsm: '130 GSM',
      weaveType: '3/4 Sleeve, Gathered Skirt, Round Neck',
      printMethod: 'Schiffli Embroidery + Button Front Detail',
      dyeSafety: 'OEKO-TEX Certified, Optical Brightener-Free',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Mercerized Cotton, Soft Finish',
    },
  },
  {
    id: 10,
    name: 'Coral Pink Paisley Halter Maxi',
    sku: 'MTR-SKU-PL-010',
    category: 'Long Dresses',
    material: 'Rayon Silk Blend',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(9).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Coral Pink / Brown', 'Peach / Tan', 'Rose Gold Print'],
    tags: ['Resort Wear', 'Long Dress'],
    techSpecs: {
      composition: '65% Viscose Rayon / 35% Silk Blend',
      threadCount: '100 TPI Warp × 80 TPI Weft',
      gsm: '95 GSM',
      weaveType: 'Halter V-Neck, Tiered Skirt, Bead Embellishment',
      printMethod: 'Large Paisley Block Print with Bead Detailing',
      dyeSafety: 'ISO 105-E04, Formaldehyde-Free',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Silk-touch Finish, Lightweight',
    },
  },
  {
    id: 11,
    name: 'Emerald Green Peplum Tiered Maxi',
    sku: 'MTR-SKU-PL-011',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(10).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Emerald / Jade', 'Forest Teal', 'Dark Green Multi'],
    tags: ['New Arrival', 'Long Dress'],
    techSpecs: {
      composition: '100% Organic Cotton, Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '110 GSM',
      weaveType: 'Peplum Ruffle Top, Tiered Maxi Skirt',
      printMethod: 'Traditional Hand-Block Print, Geometric Paisley',
      dyeSafety: 'OEKO-TEX Standard 100, Azo-Free Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash',
    },
  },
  {
    id: 12,
    name: 'Earthy Brown Hi-Lo Wrap Boho Dress',
    sku: 'MTR-SKU-PL-012',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(11).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Earthy Brown / Beige', 'Chocolate Tan', 'Natural Khaki'],
    tags: ['Boho Style', 'Long Dress'],
    techSpecs: {
      composition: '100% Cotton, Kalamkari Hand-Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '115 GSM',
      weaveType: 'Hi-Lo Asymmetric Hem, Wrap V-Neck, Bell Sleeve',
      printMethod: 'Kalamkari / Forest Motif Block Print',
      dyeSafety: 'OEKO-TEX Standard 100',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash',
    },
  },
  {
    id: 13,
    name: 'Brown Gold Paisley Wide-Leg Co-ord Set',
    sku: 'MTR-SKU-CS-013',
    category: 'Co-ord Sets',
    material: 'Rayon Silk Blend',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(12).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Set Pack: 6 Sets | S(1) M(2) L(2) XL(1)',
    leadTime: '18-22 Days',
    colors: ['Brown / Gold Print', 'Mocha Tan', 'Earthy Olive'],
    tags: ['Co-ord Set', 'Resort Wear'],
    techSpecs: {
      composition: '65% Viscose Rayon / 35% Silk Blend',
      threadCount: '100 TPI Warp × 80 TPI Weft',
      gsm: '95 GSM',
      weaveType: 'Bell Sleeve Wrap Top + Wide-Leg Palazzo Pant',
      printMethod: 'Large Scale Paisley Block Print',
      dyeSafety: 'ISO 105-E04, Formaldehyde-Free',
      washPersistence: 'Grade 4 Color Fastness',
      shrinkage: '< 3% Post-Wash',
      finish: 'Silk-touch Finish',
    },
  },
  {
    id: 14,
    name: 'Maroon Paisley Halter Backless Maxi',
    sku: 'MTR-SKU-PL-014',
    category: 'Long Dresses',
    material: 'Cotton Block Print',
    moqTier: '100 PC',
    image: 'item/shared%20image%20(14).jpg',
    altImage: 'item/shared%20image%20(13).jpg',
    dressType: 'long',
    pricing: [
      { qty: '100 Pcs', inr: 495 },
      { qty: '250 Pcs', inr: 465 },
      { qty: '500+ Pcs', inr: 425 },
    ],
    packBundle: 'Case Pack: 12 Units | S(2) M(4) L(4) XL(2)',
    leadTime: '15-18 Days',
    colors: ['Maroon / Burgundy', 'Deep Wine Red', 'Dark Berry'],
    tags: ['Bestseller', 'Long Dress'],
    techSpecs: {
      composition: '100% Cotton, Sanganeri Block Printed',
      threadCount: '60 TPI Combed Cotton Weave',
      gsm: '110 GSM',
      weaveType: 'Halter Tie Neck, Open Back, Tiered Skirt',
      printMethod: 'Traditional Sanganeri Block Print, Floral Motifs',
      dyeSafety: 'OEKO-TEX Standard 100, Reactive Dyes',
      washPersistence: 'Grade 3-4 Color Fastness',
      shrinkage: '< 4% Post-Wash',
      finish: 'Natural Enzyme Wash',
    },
  },
];

const FACTORY_STAGES = [
  {
    id: 0,
    title: 'Raw Material Procurement & Fabric Inspection',
    subtitle: 'Stage 01',
    Icon: Layers,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    description:
      'Every production run initiates with rigorous raw material verification. We source Grade-6A Mulberry Silk directly from certified Karnataka sericulture farms, Chanderi silk from MP handloom cooperatives, and GOTS-certified organic cotton from Rajasthan agrarian collectives. All incoming fabric lots undergo mandatory spectrophotometric analysis, GSM weight verification, and tensile strength testing before release to the production floor.',
    metrics: [
      { label: 'QC Checkpoints', value: '28 Points' },
      { label: 'Supplier Audit Cycle', value: 'Bi-Annual' },
      { label: 'Batch Rejection Rate', value: '< 2.1%' },
      { label: 'Certified Partners', value: '12 Active' },
    ],
    processes: [
      'GSM Weight Tolerance Testing: ±5 GSM Allowance per Lot',
      'Color Lot Consistency Verification (Spectrophotometer Analysis)',
      'Yarn Count & Tensile Strength Testing per ASTM D2256',
      'Pre-Production Shrinkage Testing on Sample Swatches',
      'Pilling Resistance Grade Assessment (ISO 12945-2)',
    ],
  },
  {
    id: 1,
    title: 'Artisanal Block Carving & Industrial Print Controls',
    subtitle: 'Stage 02',
    Icon: Printer,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4417?w=1200&q=80',
    description:
      "Our artisanal printing division merges Pushkar's 400-year traditional hand-block methodology with industrial precision control systems. Master craftsmen carve teak and sheesham wood blocks ranging 3cm–30cm with sub-millimeter tolerances. 18 active print tables deliver 1,800 meters of printed fabric daily, drawing from a proprietary library of 2,400+ registered block designs with full repeatability controls.",
    metrics: [
      { label: 'Active Print Stations', value: '18 Tables' },
      { label: 'Block Design Library', value: '2,400+ Designs' },
      { label: 'Daily Print Output', value: '1,800 m/Day' },
      { label: 'Dye Safety Compliance', value: 'OEKO-TEX 100%' },
    ],
    processes: [
      'Block Registration Accuracy: ±1.5mm Repeat Tolerance Standard',
      'Mordant Pre-Treatment for Natural Dye Adhesion',
      'Pigment Density Control via Digital Viscosity Meters',
      'Post-Print Steam Setting Cycle: 100°C × 20 Minutes',
      'Excess Dye Wash-Off & Color Lock Fixation Processing',
    ],
  },
  {
    id: 2,
    title: 'CAD Pattern Cutting Matrix & Assembly Floor Operations',
    subtitle: 'Stage 03',
    Icon: Scissors,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
    description:
      'Our 8,000 sq.ft. CAD-driven cutting facility achieves 92.4% fabric utilization efficiency through Gerber AccuMark marker-making systems. 140 industrial Juki and Brother sewing arrays operate across 4 production modules under strict seam tolerance protocols, delivering up to 6,000 finished garment pieces per day with consistent construction standards across all size runs.',
    metrics: [
      { label: 'Industrial Sewing Units', value: '140 Machines' },
      { label: 'Fabric Utilization', value: '92.4% Efficiency' },
      { label: 'Daily Cutting Output', value: '6,000 Pcs/Day' },
      { label: 'Assembly Floor Area', value: '8,000 sq.ft.' },
    ],
    processes: [
      'CAD Marker Optimization using Gerber AccuMark System',
      'Automated Straight-Knife & Band-Knife Fabric Laying',
      'Seam Allowance Precision: ±2mm Construction Tolerance',
      'Multi-Needle Chain Stitch for Structural Stress Seaming',
      'Bartack Reinforcement at All Critical Stress Points',
    ],
  },
  {
    id: 3,
    title: 'Dual-Stage Quality Assurance & AQL Textile Audit',
    subtitle: 'Stage 04',
    Icon: Shield,
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&q=80',
    description:
      'A dual-stage QA methodology applies inline fabric and construction audits during active production, followed by a final AQL 2.5 Level II inspection prior to export packaging. Our 22-inspector QA department operates under ISO 9001:2015 certification with 4-Point Textile Inspection System compliance, achieving a 99.1% defect capture rate and a customer return rate below 0.4%.',
    metrics: [
      { label: 'AQL Standard Applied', value: 'Level 2.5' },
      { label: 'QA Inspectors', value: '22 Dedicated' },
      { label: 'Defect Capture Rate', value: '99.1%' },
      { label: 'Customer Return Rate', value: '< 0.4%' },
    ],
    processes: [
      '4-Point Textile Inspection System (ASTM D5430)',
      'Measurement Specification Audit vs. Approved Tech Pack',
      'Seam Strength Pull Test (ASTM D1683 — 18kg Minimum)',
      'AQL 2.5 Random Sampling Final Batch Inspection',
      'Ironing, Folding & Retail Presentation Verification',
    ],
  },
  {
    id: 4,
    title: 'Export Packing, Compression & Container Loading',
    subtitle: 'Stage 05',
    Icon: Package,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    description:
      'Export-grade bulk compression packing protocols aligned to destination-port customs compliance requirements. We coordinate FCL and LCL container operations through Mundra Port (INMUN), JNPT Mumbai (INJNP), and ICD Jodhpur with FedEx Freight and DHL Supply Chain partnerships. 14 active global shipping lanes deliver a 96.8% on-time performance rate across all destination markets.',
    metrics: [
      { label: 'Active Shipping Lanes', value: '14 Global Routes' },
      { label: 'Primary Export Port', value: 'Mundra (INMUN)' },
      { label: 'On-Time Delivery Rate', value: '96.8%' },
      { label: 'Monthly Container Volume', value: '4–6 × 40ft FCL' },
    ],
    processes: [
      'Individual Polybag Sealing with Silica Gel Moisture Protection',
      'Barcode & QR Label Compliance per Destination Retail Standards',
      'Carton Compression Strength: BCT 500N Min (ISTA 2A Certified)',
      'Vacuum Compression Available for Knitwear & Bulk Apparel',
      'Container CBM Load Optimization Reports per Shipment',
    ],
  },
];

const CERTIFICATIONS = [
  {
    id: 1,
    name: 'OEKO-TEX Standard 100',
    issuer: 'OEKO-TEX Association, Zurich',
    certNo: 'OT-100-2024-IN-04821',
    valid: 'March 2026',
    scope: 'All textile products, dyes & finishing agents',
    description:
      'Every component — thread, accessory, and print finish — tested against 100+ harmful substances. Ensures consumer safety at every contact point.',
    category: 'Textile Safety',
    colorClass: 'border-green-200 bg-green-50',
    tagClass: 'bg-green-100 text-green-800',
  },
  {
    id: 2,
    name: 'ISO 9001:2015 Quality Management',
    issuer: 'Bureau Veritas Certification India',
    certNo: 'BV-QMS-IN-2024-0394',
    valid: 'December 2026',
    scope: 'Manufacturing, QA frameworks, export packing',
    description:
      'International quality management system standard confirming consistent product quality, traceability, and continuous process improvement protocols.',
    category: 'Quality Systems',
    colorClass: 'border-blue-200 bg-blue-50',
    tagClass: 'bg-blue-100 text-blue-800',
  },
  {
    id: 3,
    name: 'GOTS Organic Textile Standard',
    issuer: 'Control Union Certifications',
    certNo: 'CUC-GOTS-2024-7821',
    valid: 'August 2025',
    scope: 'Organic cotton procurement & processing',
    description:
      'Global Organic Textile Standard certification for environmentally and socially responsible textile supply chain from raw material to finished product.',
    category: 'Organic Compliance',
    colorClass: 'border-emerald-200 bg-emerald-50',
    tagClass: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 4,
    name: 'Sedex SMETA 4-Pillar Audit',
    issuer: 'Sedex Global',
    certNo: 'SMETA-4P-2024-RJ-0219',
    valid: 'February 2026',
    scope: 'Labour, H&S, Environment, Business Ethics',
    description:
      '4-Pillar SMETA audit confirming ethical trading standards, labour rights, occupational health & safety, and environmental practices compliance.',
    category: 'Ethical Trade',
    colorClass: 'border-purple-200 bg-purple-50',
    tagClass: 'bg-purple-100 text-purple-800',
  },
  {
    id: 5,
    name: 'EU REACH Directive Compliance',
    issuer: 'SGS India Pvt. Ltd.',
    certNo: 'SGS-REACH-2024-04-MUB',
    valid: 'April 2026',
    scope: 'All chemical dyes and finishing agents',
    description:
      'Full EU REACH regulation compliance verifying zero restricted hazardous chemical substances across all dye inputs and textile finishing processes.',
    category: 'Chemical Safety',
    colorClass: 'border-orange-200 bg-orange-50',
    tagClass: 'bg-orange-100 text-orange-800',
  },
  {
    id: 6,
    name: 'MSME Udyam Registration',
    issuer: 'Government of India, MoMSME',
    certNo: 'UDYAM-RJ-22-0018442',
    valid: 'Perpetual',
    scope: 'Manufacturing enterprise registration',
    description:
      'Registered manufacturing unit under Ministry of MSME with verified production capacity and export eligibility for RoDTEP and MEIS incentive schemes.',
    category: 'Corporate Registration',
    colorClass: 'border-slate-200 bg-slate-50',
    tagClass: 'bg-slate-100 text-slate-700',
  },
];

// ============================================================
// UTILITY COMPONENTS
// ============================================================

function Badge({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    green: 'bg-green-50 text-green-800 border-green-200',
    blue: 'bg-blue-50 text-blue-800 border-blue-200',
  };
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded border tracking-wide ${
        styles[variant] || styles.default
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-2 flex items-center gap-2">
        <span className="block w-5 h-px bg-amber-500" />
        {label}
      </div>
      <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 mt-2.5 max-w-2xl text-sm leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function StatBox({ value, label, sub }) {
  return (
    <div className="border border-slate-200 bg-white p-5 rounded-lg">
      <div className="text-2xl font-black text-slate-900 leading-none">{value}</div>
      <div className="text-sm font-semibold text-slate-700 mt-1.5">{label}</div>
      {sub && <div className="text-xs text-slate-400 mt-0.5">{sub}</div>}
    </div>
  );
}

// ============================================================
// HOME VIEW
// ============================================================

function HomeView({ setActiveTab }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[600px] overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
          alt="Textile manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              B2B Wholesale Export Division — Est. 2023
            </div>
            <h1 className="text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Mass Scale Textile Apparel Export & Custom Manufacturing from{' '}
              <span className="text-amber-400">Pushkar, India</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
              Full-cycle apparel manufacturer servicing global distributors, multi-brand retailers,
              and fashion sourcing agents. Artisanal hand-block heritage fused with industrial-grade
              production infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('catalog')}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded text-sm transition-colors"
              >
                Browse Production Catalogue <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('bulk-calculator')}
                className="flex items-center gap-2 border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Bulk Order Calculator
              </button>
            </div>
          </div>
        </div>
        {/* KPI Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100 PC', label: 'MOQ per Style', Icon: Package },
              { value: '50,000+', label: 'Monthly Unit Capacity', Icon: Factory },
              { value: '15–30 Days', label: 'Production Turnaround', Icon: Clock },
              { value: '14 Routes', label: 'Global Export Lanes', Icon: Globe },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <s.Icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">{s.value}</div>
                  <div className="text-slate-400 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Gateway Cards */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Procurement Pathways"
            title="Direct B2B Access Gateway"
            subtitle="Streamlined routes connecting global buyers directly to our production pipeline. Zero intermediary margins — manufacturer-direct pricing."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Package,
                title: 'Browse Active Production Catalogue',
                description:
                  'Access full digitized line-sheets with real-time MOQ-tiered pricing, fabric specifications, SKU-level technical documentation, and pack bundle structures.',
                action: 'catalog',
                label: 'View Catalogue',
                accent: 'bg-slate-900 text-amber-400',
              },
              {
                Icon: Calculator,
                title: 'Simulate Custom Manufacturing Runs',
                description:
                  'Input fabric choice, volume, and customization requirements. Receive instant production cost projections, CBM estimates, freight calculations, and lead-time matrices.',
                action: 'bulk-calculator',
                label: 'Launch Calculator',
                accent: 'bg-amber-500 text-slate-900',
              },
              {
                Icon: Download,
                title: 'Download Certified Spec Sheet',
                description:
                  'Full digital compliance package: construction standards, active certifications, size measurement charts, AQL QA protocols, and approved tech pack templates.',
                action: 'compliance',
                label: 'View Compliance',
                accent: 'bg-slate-700 text-white',
              },
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => setActiveTab(card.action)}
                className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${card.accent}`}
                >
                  <card.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{card.description}</p>
                <button className="flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {card.label} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Overview Grid */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Corporate Profile"
            title="Operational Infrastructure Highlights"
            subtitle="Verified manufacturer credentials, multi-channel payment infrastructure, and international logistics network details for procurement teams."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stat grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { value: '50,000+', label: 'Units / Month', sub: 'Peak Capacity' },
                { value: '140', label: 'Sewing Arrays', sub: 'Juki & Brother Industrial' },
                { value: '96.8%', label: 'On-Time Delivery', sub: 'Export Average' },
                { value: '8,000', label: 'sq.ft. Floor', sub: 'Cutting & Assembly' },
                { value: '2,400+', label: 'Block Designs', sub: 'Proprietary Print Library' },
                { value: '< 0.4%', label: 'Return Rate', sub: 'Customer Defect Claims' },
                { value: '6', label: 'Certifications', sub: 'OEKO-TEX, ISO, GOTS+' },
                { value: 'USD / INR', label: 'Dual Currency', sub: 'Invoicing Available' },
                { value: 'L/C + Wire', label: 'Payment Modes', sub: 'SWIFT, UPI, Net Banking' },
              ].map((s, i) => (
                <StatBox key={i} value={s.value} label={s.label} sub={s.sub} />
              ))}
            </div>

            {/* Right info panels */}
            <div className="space-y-5">
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <div className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-4">
                  Payment Infrastructure
                </div>
                {[
                  'UPI & IMPS (Domestic India)',
                  'NEFT / RTGS Net Banking',
                  'International SWIFT Wire Transfer',
                  'Letter of Credit (L/C)',
                  'USD, EUR, GBP Invoice Capable',
                ].map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-300 py-1.5 border-b border-slate-700 last:border-0"
                  >
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
                  Export Logistics Hubs
                </div>
                {[
                  { port: 'Mundra Port (INMUN)', type: 'Primary FCL/LCL' },
                  { port: 'JNPT Mumbai (INJNP)', type: 'Secondary FCL' },
                  { port: 'ICD Jodhpur (INJOS)', type: 'Inland Container' },
                  { port: 'Jaipur Air Cargo (JAI)', type: 'Air Freight' },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 text-sm"
                  >
                    <span className="font-medium text-slate-800">{r.port}</span>
                    <Badge>{r.type}</Badge>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">
                  Verified Wholesale Status
                </div>
                <p className="text-sm text-amber-900 leading-relaxed">
                  GSTIN-registered manufacturing entity. Eligible for export incentives under RoDTEP
                  and MEIS. Authorized to issue Tax Invoice, Packing List, and Certificate of
                  Origin.
                </p>
                <div className="mt-3 font-mono text-xs text-amber-700 bg-amber-100 px-3 py-1.5 rounded inline-block">
                  GSTIN: 08BYVPN2162G1Z0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-3">
                Global Distribution
              </div>
              <h2 className="text-3xl font-black text-white mb-5 leading-tight">
                Serving Active Buyers Across 3 Continents
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                Active wholesale relationships with importers and multi-brand retail chains across
                the EU, USA, UK, Australia, UAE, and Southeast Asia. Full customs documentation
                support for all major destination markets.
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                {[
                  'European Union',
                  'USA & Canada',
                  'United Kingdom',
                  'UAE & Gulf Region',
                  'Australia / New Zealand',
                  'Southeast Asia',
                ].map((region, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {region}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Export Countries', value: '18+' },
                { label: 'Active Buyer Accounts', value: '43' },
                { label: 'SKUs in Production', value: '280+' },
                { label: 'Annual Export Volume', value: '$2.4M+' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-black text-amber-400 mb-1">{s.value}</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// CATALOG VIEW
// ============================================================

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</div>
      <div className="space-y-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`block w-full text-left text-sm px-3 py-1.5 rounded transition-colors ${
              value === opt
                ? 'bg-slate-900 text-white font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, onViewSpecs, onAddToCart, inCart, currency = 'INR', onImageClick }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all group">
      <div
        className="relative h-52 overflow-hidden bg-slate-100 cursor-zoom-in"
        onClick={onImageClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Zoom hover overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2.5 shadow-lg">
            <Eye className="w-5 h-5 text-slate-700" />
          </div>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-900/85 text-amber-400 px-2 py-0.5 rounded font-bold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 text-slate-600 text-xs px-2 py-1 rounded font-mono font-semibold">
          {product.sku}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-black text-slate-900 text-sm leading-tight mb-2.5">{product.name}</h3>

        <div className="flex items-center gap-2 mb-4">
          <Badge>{product.material}</Badge>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {product.leadTime}
          </span>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Price Tiers</span>
            <span className="text-xs font-bold text-amber-600">{currency === 'INR' ? '₹ INR' : '$ USD'}</span>
          </div>
          <div className="space-y-1">
            {product.pricing.map((tier, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-slate-500">{tier.qty}</span>
                <span className="font-black text-slate-900">
                  {currency === 'INR'
                    ? `₹${tier.inr.toLocaleString('en-IN')}`
                    : `$${(tier.inr / USD_RATE).toFixed(2)}`
                  }{' '}
                  <span className="text-slate-400 font-normal">/ Unit</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pack Bundle */}
        <div className="text-xs text-slate-500 flex items-start gap-1.5 mb-4">
          <Box className="w-3 h-3 mt-0.5 flex-shrink-0 text-slate-400" />
          <span className="leading-relaxed">{product.packBundle}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onViewSpecs}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold border border-slate-300 text-slate-700 py-2.5 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Fabric Specs
          </button>
          <button
            onClick={onAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-lg transition-colors ${
              inCart
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-slate-900 text-white hover:bg-slate-700'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3.5 h-3.5" /> In RFQ Cart
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" /> Add to RFQ
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function SpecsModal({ product, onClose }) {
  const specRows = [
    { label: 'Fabric Composition', value: product.techSpecs.composition, Icon: Layers },
    { label: 'Thread Count', value: product.techSpecs.threadCount, Icon: Hash },
    { label: 'Fabric Weight (GSM)', value: product.techSpecs.gsm, Icon: Scale },
    { label: 'Weave Type', value: product.techSpecs.weaveType, Icon: Ruler },
    { label: 'Print Methodology', value: product.techSpecs.printMethod, Icon: Printer },
    { label: 'Dye Safety Certification', value: product.techSpecs.dyeSafety, Icon: Shield },
    { label: 'Color Fastness (Wash)', value: product.techSpecs.washPersistence, Icon: Star },
    { label: 'Shrinkage Tolerance', value: product.techSpecs.shrinkage, Icon: Target },
    { label: 'Finishing Treatment', value: product.techSpecs.finish, Icon: Zap },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-start justify-between z-10">
          <div>
            <div className="font-mono text-xs text-slate-400 mb-0.5">{product.sku}</div>
            <h3 className="font-black text-slate-900 text-lg leading-tight">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="amber">Technical Specification Sheet</Badge>
            <Badge variant="green">Export Documentation</Badge>
          </div>

          <div className="space-y-2 mb-6">
            {specRows.map((spec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <spec.Icon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {spec.label}
                  </div>
                  <div className="text-sm text-slate-800 font-semibold mt-0.5">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-5 mb-5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Available Colorways
            </div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="text-sm bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-700 font-medium"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5 mb-5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Pricing Tiers
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.pricing.map((tier, i) => (
                <div key={i} className="text-center bg-slate-900 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">{tier.qty}</div>
                  <div className="text-2xl font-black text-amber-400">₹{tier.inr.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-slate-400 mt-1">${(tier.inr / USD_RATE).toFixed(2)} USD</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Pack Configuration:</strong> {product.packBundle} &nbsp;|&nbsp;{' '}
            <strong>Lead Time:</strong> {product.leadTime}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// IMAGE LIGHTBOX
// ============================================================

function ImageLightbox({ product, imageIndex, setImageIndex, onClose }) {
  const images = product.altImage
    ? [
        { src: product.image, label: 'Front View' },
        { src: product.altImage, label: 'Back View' },
      ]
    : [{ src: product.image, label: product.name }];

  const current = images[imageIndex];
  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/92 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div className="relative w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={current.src}
            alt={product.name}
            className="w-full max-h-[75vh] object-contain"
          />

          {/* Prev/Next arrows for altImage */}
          {hasMultiple && (
            <>
              <button
                onClick={() => setImageIndex(0)}
                disabled={imageIndex === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors disabled:opacity-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setImageIndex(images.length - 1)}
                disabled={imageIndex === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors disabled:opacity-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* View label badge */}
          {hasMultiple && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/80 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
              {current.label}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="mt-4 text-center">
          <div className="text-white font-bold text-base leading-tight">{product.name}</div>
          <div className="text-slate-400 text-xs font-mono mt-1">{product.sku}</div>

          {/* View switcher dots / buttons for altImage */}
          {hasMultiple && (
            <div className="flex justify-center gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`px-4 py-1.5 text-xs font-black rounded-full transition-colors ${
                    i === imageIndex
                      ? 'bg-amber-500 text-slate-900'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dismiss hint */}
        <p className="text-slate-600 text-xs mt-4">Click outside or press × to close</p>
      </div>
    </div>
  );
}

function CatalogView({
  products,
  categoryFilter,
  setCategoryFilter,
  materialFilter,
  setMaterialFilter,
  moqFilter,
  setMoqFilter,
  specsModal,
  setSpecsModal,
  addToCart,
  rfqCart,
}) {
  const [currency, setCurrency] = useState('INR');
  const [lightboxProduct, setLightboxProduct] = useState(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const categories = ['All', 'Long Dresses', 'Short Dresses', 'Co-ord Sets'];
  const materials = ['All', 'Cotton Block Print', 'Rayon Silk Blend', 'Embroidered Cotton'];
  const moqTiers = ['All', '100 PC'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-2 flex items-center gap-2">
            <span className="block w-5 h-px bg-amber-500" />
            Production Catalogue
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Digital Line-Sheet — Active SKUs</h2>
          <p className="text-slate-500 mt-2.5 max-w-2xl text-sm leading-relaxed">
            {products.length} SKU{products.length !== 1 ? 's' : ''} displayed. Toggle currency below. All specs are production-verified.
          </p>
        </div>
        {/* Currency Toggle */}
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 flex-shrink-0">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-1">Display Price:</span>
          {[{ code: 'INR', label: '₹ INR' }, { code: 'USD', label: '$ USD' }].map(c => (
            <button
              key={c.code}
              onClick={() => setCurrency(c.code)}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-colors ${
                currency === c.code
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-5 sticky top-24">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="font-black text-slate-800 text-sm uppercase tracking-wide">
                Filter Production
              </span>
            </div>
            <FilterGroup
              label="Product Category"
              options={categories}
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
            <FilterGroup
              label="Material Composite"
              options={materials}
              value={materialFilter}
              onChange={setMaterialFilter}
            />
            <FilterGroup
              label="Min. Order Criteria"
              options={moqTiers}
              value={moqFilter}
              onChange={setMoqFilter}
            />
            <button
              onClick={() => {
                setCategoryFilter('All');
                setMaterialFilter('All');
                setMoqFilter('All');
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 mt-3 py-2 border border-slate-200 rounded-lg hover:border-slate-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          {products.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <Package className="w-14 h-14 mx-auto mb-3 opacity-20" />
              <p className="font-semibold text-lg">No SKUs match the applied filters</p>
              <p className="text-sm mt-1 mb-4">Adjust filter criteria to view available products</p>
              <button
                onClick={() => {
                  setCategoryFilter('All');
                  setMaterialFilter('All');
                  setMoqFilter('All');
                }}
                className="text-sm text-slate-600 underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewSpecs={() => setSpecsModal(product)}
                  onAddToCart={() => addToCart(product)}
                  inCart={rfqCart.some((p) => p.id === product.id)}
                  currency={currency}
                  onImageClick={() => { setLightboxProduct(product); setLightboxImageIndex(0); }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {specsModal && <SpecsModal product={specsModal} onClose={() => setSpecsModal(null)} />}
      {lightboxProduct && (
        <ImageLightbox
          product={lightboxProduct}
          imageIndex={lightboxImageIndex}
          setImageIndex={setLightboxImageIndex}
          onClose={() => setLightboxProduct(null)}
        />
      )}
    </div>
  );
}

// ============================================================
// FACTORY VIEW
// ============================================================

function FactoryView({ activeStage, setActiveStage }) {
  const stage = FACTORY_STAGES[activeStage];

  return (
    <div>
      {/* Stage Navigation Tabs */}
      <div className="bg-slate-900 border-b border-slate-700 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex min-w-max">
          {FACTORY_STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveStage(i)}
              className={`flex-shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${
                activeStage === i
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {s.subtitle} — {s.title.split(' ').slice(0, 4).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Hero Image */}
      <div className="relative h-72 md:h-96 overflow-hidden bg-slate-900">
        <img
          src={stage.image}
          alt={stage.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <div className="text-xs font-black tracking-[0.3em] text-amber-400 uppercase mb-2">
            {stage.subtitle}
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-2xl">
            {stage.title}
          </h2>
        </div>
        {/* Arrow navigation */}
        <div className="absolute right-6 bottom-8 flex gap-2 z-20">
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center disabled:opacity-25 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveStage(Math.min(FACTORY_STAGES.length - 1, activeStage + 1))}
            disabled={activeStage === FACTORY_STAGES.length - 1}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center disabled:opacity-25 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stage Detail */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Description + Processes */}
          <div className="lg:col-span-2">
            <p className="text-slate-600 text-base leading-relaxed mb-8">{stage.description}</p>

            <div className="bg-slate-900 rounded-2xl p-7">
              <div className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase mb-5">
                Operational Process Protocols
              </div>
              <div className="space-y-4">
                {stage.processes.map((process, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-black">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed pt-0.5">{process}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics + Progress */}
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              Stage Performance Metrics
            </div>
            <div className="space-y-3 mb-7">
              {stage.metrics.map((m, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-2xl font-black text-slate-900 leading-none">{m.value}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                Production Pipeline
              </div>
              <div className="space-y-1.5">
                {FACTORY_STAGES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(i)}
                    className={`w-full flex items-center gap-2.5 text-xs py-2 px-2.5 rounded-lg transition-colors text-left ${
                      i === activeStage
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black ${
                        i < activeStage
                          ? 'bg-green-500 text-white'
                          : i === activeStage
                          ? 'bg-amber-400 text-slate-900'
                          : 'bg-slate-300 text-slate-600'
                      }`}
                    >
                      {i < activeStage ? '✓' : i + 1}
                    </div>
                    <span className="truncate">
                      {s.subtitle}: {s.title.split(' ').slice(0, 4).join(' ')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Dashboard */}
      <div className="bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase mb-1">
                Manufacturing Intelligence
              </div>
              <h3 className="text-2xl font-black text-white">
                Production Infrastructure Statistics
              </h3>
            </div>
            <BarChart3 className="w-8 h-8 text-slate-600" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Sewing Arrays', value: '140', sub: 'Active Units', bar: 70 },
              { label: 'Print Tables', value: '18', sub: 'Active Stations', bar: 90 },
              { label: 'Print Output', value: '1,800m', sub: 'Per Day', bar: 75 },
              { label: 'Cutting Capacity', value: '6,000', sub: 'Pieces/Day', bar: 85 },
              { label: 'QA Inspectors', value: '22', sub: 'Dedicated Staff', bar: 55 },
              { label: 'On-Time Rate', value: '96.8%', sub: 'Global Average', bar: 97 },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center"
              >
                <div className="text-2xl font-black text-amber-400 mb-1">{stat.value}</div>
                <div className="text-white text-xs font-bold mb-0.5">{stat.label}</div>
                <div className="text-slate-500 text-xs mb-3">{stat.sub}</div>
                <div className="h-1 bg-slate-700 rounded-full">
                  <div
                    className="h-1 bg-amber-400 rounded-full transition-all"
                    style={{ width: `${stat.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// BULK CALCULATOR VIEW
// ============================================================

function RFQGeneratedSheet({ rfqForm, calcFabric, calcQty, calcOptions, calcResults, onReset }) {
  const rfqId = `MTR-RFQ-${Date.now().toString().slice(-6)}`;
  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-xs text-slate-700 leading-loose">
        <div className="text-slate-900 font-black text-sm mb-0.5">
          MTR FASHION — WHOLESALE RFQ MANIFEST
        </div>
        <div className="text-slate-500 mb-5 pb-4 border-b border-slate-200">
          Ref: {rfqId} | Generated: {dateStr} | Confidential — B2B Commercial Use Only
        </div>

        <div className="mb-4 pb-4 border-b border-slate-200">
          <div className="font-black text-slate-800 mb-2 text-xs uppercase tracking-widest">
            Buyer Credentials
          </div>
          <div>Company: {rfqForm.companyName || '—'}</div>
          <div>Corporate Email: {rfqForm.email}</div>
          {rfqForm.companyReg && <div>Registration No.: {rfqForm.companyReg}</div>}
          {rfqForm.destinationPort && <div>Destination Port: {rfqForm.destinationPort}</div>}
        </div>

        <div className="mb-4 pb-4 border-b border-slate-200">
          <div className="font-black text-slate-800 mb-2 text-xs uppercase tracking-widest">
            Order Specification
          </div>
          <div>Fabric Material: {calcFabric}</div>
          <div>Order Quantity: {calcQty.toLocaleString()} Units</div>
          <div>Custom Woven Neck Labels: {calcOptions.neckLabel ? 'YES (+$0.45/unit)' : 'NO'}</div>
          <div>Retail Barcode Polybag Prep: {calcOptions.barcode ? 'YES (+$0.30/unit)' : 'NO'}</div>
          <div>
            Certified Organic Packaging: {calcOptions.orgPackage ? 'YES (+$0.85/unit)' : 'NO'}
          </div>
        </div>

        <div className="mb-4 pb-4 border-b border-slate-200">
          <div className="font-black text-slate-800 mb-2 text-xs uppercase tracking-widest">
            Financial Projection (Indicative — EXW Pushkar)
          </div>
          <div>Base Unit Price: ${calcResults.unitPrice} USD</div>
          <div>Customization Surcharge: +${calcResults.addons} USD / Unit</div>
          <div>Total Unit Price (All-In): ${calcResults.unitTotal} USD</div>
          <div>
            Production Subtotal ({calcQty.toLocaleString()} units): $
            {parseFloat(calcResults.productionTotal).toLocaleString()} USD
          </div>
          <div>
            Est. Freight — Sea LCL ({calcResults.totalCBM} CBM): $
            {parseFloat(calcResults.freightCost).toLocaleString()} USD
          </div>
          <div>
            Customs Clearance Lead-Time: {calcResults.customsLeadDays} Business Days
          </div>
          <div>
            Estimated Total Wholesale Invoice: ${parseFloat(calcResults.totalInvoice).toLocaleString()}{' '}
            USD
          </div>
          <div>INR Equivalent (approx. ₹83.20/USD): ₹{parseInt(calcResults.inrTotal).toLocaleString()}</div>
        </div>

        <div>
          <div className="font-black text-slate-800 mb-2 text-xs uppercase tracking-widest">
            Supplier Verification
          </div>
          <div>Manufacturer: MTR Fashion (Legal Entity)</div>
          <div>GSTIN: 08BYVPN2162G1Z0</div>
          <div>MSME: UDYAM-RJ-22-0018442</div>
          <div>Factory: Badi Basti, Pushkar, Rajasthan 305022, India</div>
          <div>Export Email: export@mtrfashion.in</div>
          <div className="mt-3 text-slate-400 italic text-xs leading-relaxed">
            * Auto-generated indicative RFQ. Final binding quotation issued after technical review.
            Valid for 30 days from generation date. Prices subject to change based on order
            confirmation.
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> New Calculation
        </button>
      </div>
    </div>
  );
}

function CalculatorView({
  calcFabric,
  setCalcFabric,
  calcQty,
  setCalcQty,
  calcOptions,
  setCalcOptions,
  calcResults,
  rfqForm,
  setRfqForm,
  rfqGenerated,
  setRfqGenerated,
}) {
  const fabrics = ['Mulberry Silk', 'Chanderi', 'Cotton', 'Rayon Blend'];

  const handleQtyChange = (delta) => {
    setCalcQty((prev) => Math.max(50, Math.min(10000, prev + delta)));
  };

  const toggleOption = (key) => {
    setCalcOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!rfqForm.email || !rfqForm.companyName) return;
    setRfqGenerated(true);
  };

  const handleReset = () => {
    setRfqGenerated(false);
    setRfqForm({ email: '', companyReg: '', destinationPort: '', companyName: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <SectionHeader
        label="Wholesale B2B Tools"
        title="Bulk Order Calculator & RFQ Generator"
        subtitle="Programmatic production cost simulation engine. Adjust fabric, volume, and customization options for accurate wholesale projections and instant RFQ manifest generation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Fabric Selector */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              01 — Fabric Material Selection
            </div>
            <div className="grid grid-cols-2 gap-2">
              {fabrics.map((f) => (
                <button
                  key={f}
                  onClick={() => setCalcFabric(f)}
                  className={`p-3.5 rounded-xl border text-sm font-bold text-left transition-all ${
                    calcFabric === f
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <Layers
                    className={`w-4 h-4 mb-1.5 ${calcFabric === f ? 'text-amber-400' : 'opacity-40'}`}
                  />
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              02 — Order Volume (Units)
            </div>
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => handleQtyChange(-50)}
                className="w-11 h-11 rounded-xl border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={calcQty}
                onChange={(e) =>
                  setCalcQty(Math.max(50, Math.min(10000, parseInt(e.target.value) || 50)))
                }
                className="flex-1 text-center text-3xl font-black text-slate-900 border-0 outline-none bg-transparent"
                min="50"
                max="10000"
              />
              <button
                onClick={() => handleQtyChange(50)}
                className="w-11 h-11 rounded-xl border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mb-2 px-1">
              <span>Min: 50 Units</span>
              <span>Max: 10,000 Units</span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={Math.min(calcQty, 2000)}
              onChange={(e) => setCalcQty(parseInt(e.target.value))}
              className="w-full accent-slate-900"
            />
            <div className="flex justify-between text-xs text-amber-600 font-bold mt-2">
              {calcQty >= 500 ? (
                <span>Volume Tier: 500+ Pcs — Best Rate Applied</span>
              ) : calcQty >= 250 ? (
                <span>Volume Tier: 250+ Pcs Rate Applied</span>
              ) : (
                <span>Volume Tier: 100+ Pcs Standard Rate</span>
              )}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
              03 — Customization Add-ons
            </div>
            <div className="space-y-2.5">
              {[
                {
                  key: 'neckLabel',
                  label: 'Custom Brand Woven Neck Labels',
                  price: '+$0.45 / unit',
                  Icon: Tag,
                },
                {
                  key: 'barcode',
                  label: 'Retail Barcode Polybag Prep',
                  price: '+$0.30 / unit',
                  Icon: Box,
                },
                {
                  key: 'orgPackage',
                  label: 'Certified Organic Packaging Boxes',
                  price: '+$0.85 / unit',
                  Icon: Leaf,
                },
              ].map((opt) => (
                <label
                  key={opt.key}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    calcOptions[opt.key]
                      ? 'border-slate-900 bg-slate-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={calcOptions[opt.key]}
                    onChange={() => toggleOption(opt.key)}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                      calcOptions[opt.key]
                        ? 'bg-slate-900 border-slate-900'
                        : 'border-slate-300'
                    }`}
                  >
                    {calcOptions[opt.key] && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <opt.Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800">{opt.label}</div>
                    <div className="text-xs text-amber-600 font-bold">{opt.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-3 space-y-5">
          {/* Live Projection */}
          <div className="bg-slate-900 rounded-2xl p-7">
            <div className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase mb-6">
              Live Production Cost Projection
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  label: 'Base Unit Price',
                  value: `$${calcResults.unitPrice}`,
                  sub: `EXW Pushkar (${calcFabric})`,
                  color: 'text-white',
                },
                {
                  label: 'Customization Surcharge',
                  value: `+$${calcResults.addons}`,
                  sub: 'Per Unit Add-ons',
                  color: 'text-amber-400',
                },
                {
                  label: 'All-In Unit Price',
                  value: `$${calcResults.unitTotal}`,
                  sub: 'Incl. all add-ons',
                  color: 'text-green-400',
                },
                {
                  label: `× ${calcQty.toLocaleString()} Units`,
                  value: `$${parseFloat(calcResults.productionTotal).toLocaleString()}`,
                  sub: 'Production Subtotal',
                  color: 'text-white',
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">{item.label}</div>
                  <div className={`text-xl font-black ${item.color}`}>{item.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700 pt-5 space-y-3">
              {[
                {
                  label: 'Estimated Freight Volume',
                  value: `${calcResults.totalCBM} CBM`,
                  Icon: Truck,
                },
                {
                  label: 'Est. Freight Cost (Sea LCL)',
                  value: `$${parseFloat(calcResults.freightCost).toLocaleString()}`,
                  Icon: Globe,
                },
                {
                  label: 'Customs Clearance Lead-Time',
                  value: `${calcResults.customsLeadDays} Business Days`,
                  Icon: Clock,
                },
                {
                  label: 'Cargo Insurance Estimate',
                  value: `$${(calcQty * 0.15).toFixed(0)}`,
                  Icon: Shield,
                },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <row.Icon className="w-3.5 h-3.5" />
                    {row.label}
                  </div>
                  <span className="font-bold text-white">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-500 rounded-2xl p-6">
              <div className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">
                Total Estimated Wholesale Invoice
              </div>
              <div className="text-4xl font-black text-slate-900">
                ${parseFloat(calcResults.totalInvoice).toLocaleString()}
              </div>
              <div className="text-slate-800 mt-1 font-semibold">
                ≈ ₹{parseInt(calcResults.inrTotal).toLocaleString()} INR
              </div>
              <div className="text-xs text-slate-800/70 mt-2 leading-relaxed">
                * Indicative estimate. Final invoice subject to formal quotation. EXW pricing
                excludes import duties and destination taxes.
              </div>
            </div>
          </div>

          {/* RFQ Generator */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-800 px-6 py-5">
              <div className="text-xs font-black tracking-widest text-amber-400 uppercase mb-1">
                RFQ Manifest Generator
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enter commercial credentials to generate a structured production order summary ready
                for corporate procurement review and sign-off.
              </p>
            </div>

            <div className="p-6">
              {rfqGenerated ? (
                <RFQGeneratedSheet
                  rfqForm={rfqForm}
                  calcFabric={calcFabric}
                  calcQty={calcQty}
                  calcOptions={calcOptions}
                  calcResults={calcResults}
                  onReset={handleReset}
                />
              ) : (
                <form onSubmit={handleGenerate} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.companyName}
                        onChange={(e) =>
                          setRfqForm((p) => ({ ...p, companyName: e.target.value }))
                        }
                        placeholder="Your Company Ltd."
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={rfqForm.email}
                        onChange={(e) => setRfqForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="buyer@company.com"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Company Reg. No.
                      </label>
                      <input
                        type="text"
                        value={rfqForm.companyReg}
                        onChange={(e) => setRfqForm((p) => ({ ...p, companyReg: e.target.value }))}
                        placeholder="CRN / Business ID"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                        Destination Port
                      </label>
                      <input
                        type="text"
                        value={rfqForm.destinationPort}
                        onChange={(e) =>
                          setRfqForm((p) => ({ ...p, destinationPort: e.target.value }))
                        }
                        placeholder="e.g., Port of Hamburg"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-700 text-white py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Generate RFQ Production Manifest
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Auto-generated manifest based on current calculator inputs. No data is stored.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// COMPLIANCE VIEW
// ============================================================

function CertCard({ cert }) {
  return (
    <div className={`border rounded-2xl p-6 ${cert.colorClass}`}>
      <div className="flex items-start justify-between mb-4">
        <Award className="w-8 h-8 text-slate-700" />
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cert.tagClass}`}>
          {cert.category}
        </span>
      </div>
      <h3 className="font-black text-slate-900 text-base leading-tight mb-2">{cert.name}</h3>
      <p className="text-slate-600 text-xs leading-relaxed mb-4">{cert.description}</p>
      <div className="space-y-1.5 text-xs text-slate-600">
        <div className="flex justify-between gap-2">
          <span className="font-bold text-slate-500 flex-shrink-0">Issuer:</span>
          <span className="text-right">{cert.issuer}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="font-bold text-slate-500 flex-shrink-0">Cert No:</span>
          <span className="font-mono text-right">{cert.certNo}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="font-bold text-slate-500 flex-shrink-0">Valid Until:</span>
          <span className="font-bold text-slate-800">{cert.valid}</span>
        </div>
        <div>
          <span className="font-bold text-slate-500">Scope: </span>
          <span>{cert.scope}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5">
        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
        <span className="text-xs font-black text-green-700">Active & Verified</span>
      </div>
    </div>
  );
}

function LocationProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Map Block */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="bg-slate-800 px-5 py-3.5 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-bold">
              MTR Fashion — Production Headquarters
            </span>
          </div>

          {/* Stylized geo-display */}
          <div className="relative h-80 bg-gradient-to-br from-stone-100 via-amber-50 to-slate-100 overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 500 320"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M 0 80 Q 125 40 250 80 Q 375 120 500 80" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
              <path d="M 0 160 Q 125 130 250 160 Q 375 190 500 160" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
              <path d="M 0 240 Q 125 210 250 240 Q 375 270 500 240" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
              <path d="M 125 0 Q 100 80 125 160 Q 150 240 125 320" stroke="#94a3b8" strokeWidth="1" fill="none" />
              <path d="M 250 0 Q 230 80 250 160 Q 270 240 250 320" stroke="#94a3b8" strokeWidth="1" fill="none" />
              <path d="M 375 0 Q 355 80 375 160 Q 395 240 375 320" stroke="#94a3b8" strokeWidth="1" fill="none" />
              <circle cx="210" cy="155" r="4" fill="#f59e0b" opacity="0.6" />
              <circle cx="210" cy="155" r="12" fill="#f59e0b" opacity="0.15" />
              <circle cx="210" cy="155" r="24" fill="#f59e0b" opacity="0.07" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white border-2 border-amber-500 rounded-2xl shadow-2xl p-5 max-w-sm w-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm">MTR Fashion Export</div>
                    <div className="text-xs text-slate-600 leading-relaxed mt-1">
                      Front of Char Bhuja Mandir
                      <br />
                      Brahma Temple Road
                      <br />
                      Near Kapaleshwar Temple
                      <br />
                      Badi Basti, Pushkar
                      <br />
                      <span className="font-semibold text-slate-800">Rajasthan — 305022, India</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-bold">Lat:</span> 26.4897° N
                  </div>
                  <div>
                    <span className="font-bold">Lon:</span> 74.5511° E
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-t border-slate-200 p-5">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
              Landmark Reference Points
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { name: 'Char Bhuja Mandir', dist: 'Adjacent', type: 'Temple' },
                { name: 'Brahma Temple Road', dist: 'On-Road', type: 'Arterial' },
                { name: 'Kapaleshwar Temple', dist: '< 0.3 km', type: 'Temple' },
                { name: 'Pushkar Bus Stand', dist: '1.2 km', type: 'Transit Hub' },
                { name: 'Ajmer District HQ', dist: '11 km', type: 'District HQ' },
                { name: 'Jaipur International', dist: '147 km', type: 'Air Freight' },
              ].map((lm, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-2.5 text-center">
                  <div className="font-bold text-slate-800 text-xs leading-tight">{lm.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{lm.dist}</div>
                  <div className="text-amber-600 text-xs font-semibold">{lm.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logistics + Contact */}
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="text-xs font-black tracking-widest text-amber-400 uppercase mb-5">
            Cargo Logistics Route
          </div>
          <div className="space-y-4">
            {[
              {
                step: '01',
                from: 'Pushkar Factory',
                to: 'ICD Jodhpur',
                dist: '180 km',
                mode: 'Covered Truck (Road)',
                time: '4–5 Hours',
              },
              {
                step: '02',
                from: 'ICD Jodhpur',
                to: 'Mundra Port (INMUN)',
                dist: '550 km',
                mode: 'Road / Rail Freight',
                time: '18–24 Hours',
              },
              {
                step: '03',
                from: 'Mundra Port',
                to: 'Destination Port',
                dist: 'Varies by Region',
                mode: 'Sea Freight (FCL/LCL)',
                time: '18–35 Days',
              },
            ].map((route, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-slate-900">{route.step}</span>
                  </div>
                  {i < 2 && <div className="w-px flex-1 bg-slate-700 my-1 min-h-[16px]" />}
                </div>
                <div className={i < 2 ? 'pb-4' : ''}>
                  <div className="text-white font-bold text-sm">
                    {route.from}{' '}
                    <span className="text-slate-500">→</span>{' '}
                    {route.to}
                  </div>
                  <div className="text-slate-400 text-xs mt-1">
                    {route.mode} · {route.dist} · {route.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-700">
            <div className="text-xs font-black tracking-widest text-slate-400 uppercase mb-3">
              Alternative Routing
            </div>
            {[
              { port: 'JNPT Mumbai (INJNP)', note: 'Secondary FCL — +2 Days Transit' },
              { port: 'Jaipur Airport (JAI)', note: 'Air Freight — 5–7 Day Delivery' },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-slate-400 py-1.5 border-b border-slate-700/50 last:border-0"
              >
                <ChevronRight className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-300">{r.port}</span>
                  <span className="text-slate-500"> — {r.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
            Corporate Contact
          </div>
          <div className="space-y-4">
            {[
              {
                Icon: MapPin,
                label: 'Factory Address',
                value:
                  'Front of Char Bhuja Mandir, Brahma Temple Road, Near Kapaleshwar Temple, Badi Basti, Pushkar, Rajasthan 305022',
              },
              { Icon: Mail, label: 'Export Enquiries', value: 'export@mtrfashion.in' },
              { Icon: Globe, label: 'GSTIN', value: '08BYVPN2162G1Z0' },
              { Icon: Building2, label: 'MSME Registration', value: 'UDYAM-RJ-22-0018442' },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <c.Icon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {c.label}
                  </div>
                  <div className="text-slate-800 text-xs mt-0.5 leading-relaxed">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceView() {
  const [subTab, setSubTab] = useState('certifications');

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <SectionHeader
        label="Regulatory Compliance"
        title="Certifications & Corporate Verification"
        subtitle="Full transparency on active regulatory compliance infrastructure, certification validity records, and geographical production sourcing profile."
      />

      <div className="flex gap-1 border-b border-slate-200 mb-8">
        {[
          { key: 'certifications', label: 'Compliance Certificates' },
          { key: 'location', label: 'Geo-Location & Logistics Profile' },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setSubTab(t.key)}
            className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors ${
              subTab === t.key
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subTab === 'certifications' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <LocationProfile />
      )}
    </div>
  );
}

// ============================================================
// RFQ MODAL
// ============================================================

function RFQModal({ rfqCart, removeFromCart, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const rfqRef = `MTR-RFQ-${Date.now().toString().slice(-8).toUpperCase()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-slate-950/75 backdrop-blur-sm">
      <div className="bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Wholesale Quote Portal
            </div>
            <div className="text-white font-black text-lg">Request Wholesale Quote</div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                RFQ Submitted Successfully
              </h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                Your wholesale quote request has been received. Our export procurement team will
                respond within 24–48 business hours.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left font-mono text-xs text-slate-600 mb-5">
                <div className="text-slate-900 font-black mb-1">Submission Reference</div>
                <div>Ref: {rfqRef}</div>
                <div>Submitted: {new Date().toLocaleString()}</div>
                <div>Contact: {formData.email}</div>
                <div>Reply-To: export@mtrfashion.in</div>
              </div>
              <button
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Close Portal
              </button>
            </div>
          ) : (
            <>
              {rfqCart.length > 0 && (
                <div className="mb-6">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    Selected Products ({rfqCart.length})
                  </div>
                  <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                    {rfqCart.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3"
                      >
                        <img
                          src={product.image}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-slate-800 truncate">
                            {product.name}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">{product.sku}</div>
                        </div>
                        <div className="text-sm font-black text-slate-900">
                          ${(product.pricing[0].inr / USD_RATE).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors"
                        >
                          <X className="w-3.5 h-3.5 text-slate-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {rfqCart.length === 0 && (
                <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    No products in cart. Submit a general procurement enquiry below, or visit the
                    Production Catalogue to select specific SKUs.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Procurement Manager"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                      placeholder="Brand / Company Name"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="wholesale@company.com"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+1 / +44 / +91..."
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
                    Procurement Brief / Requirements
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    rows={4}
                    placeholder="Describe your requirements: product types, order quantities, target markets, compliance needs, delivery timelines, custom branding, etc."
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-slate-900 text-slate-800 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Wholesale Quote Request
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Our export team responds within 24–48 business hours &nbsp;·&nbsp;
                  export@mtrfashion.in
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="item/Logo.jpg"
                alt="MTR Fashion Logo"
                className="h-14 w-14 object-contain rounded-lg flex-shrink-0"
              />
              <div>
                <div className="font-black text-white text-xl leading-none">MTR FASHION</div>
                <div className="text-xs text-slate-500 tracking-[0.2em] uppercase">
                  Export Division
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Full-cycle apparel manufacturer and textile exporter headquartered in Pushkar,
              Rajasthan. Serving global distributors, sourcing agents, and multi-brand retailers
              since 2023.
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>
                  Front of Char Bhuja Mandir, Brahma Temple Road, Near Kapaleshwar Temple, Badi
                  Basti, Pushkar, Rajasthan 305022
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>export@mtrfashion.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono text-slate-500">GSTIN: 08BYVPN2162G1Z0</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                { key: 'home', label: 'Corporate Overview' },
                { key: 'catalog', label: 'Production Catalogue' },
                { key: 'factory', label: 'Factory Floor' },
                { key: 'bulk-calculator', label: 'Bulk Calculator' },
                { key: 'compliance', label: 'Compliance & Certs' },
              ].map((l) => (
                <li key={l.key}>
                  <button
                    onClick={() => setActiveTab(l.key)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4">
              Active Certifications
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {['OEKO-TEX 100', 'ISO 9001', 'GOTS', 'SMETA 4P', 'EU REACH', 'MSME Udyam'].map(
                (cert) => (
                  <span
                    key={cert}
                    className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
            <div className="text-xs">
              <div className="text-slate-400 uppercase tracking-widest font-bold mb-2">
                Export Ports
              </div>
              <div className="space-y-1.5">
                {[
                  'Mundra Port (INMUN)',
                  'JNPT Mumbai (INJNP)',
                  'ICD Jodhpur (INJOS)',
                  'Jaipur Air Cargo (JAI)',
                ].map((p) => (
                  <div key={p} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            © 2023–2026 MTR Fashion (MTR Export Division). All rights reserved. B2B Wholesale
            Enquiries Only.
          </span>
          <span className="font-mono">UDYAM-RJ-22-0018442 | Est. 2023, Pushkar, Rajasthan, India</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function MTRExport() {
  const [activeTab, setActiveTab] = useState('home');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqCart, setRfqCart] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Catalog state
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [materialFilter, setMaterialFilter] = useState('All');
  const [moqFilter, setMoqFilter] = useState('All');
  const [specsModal, setSpecsModal] = useState(null);

  // Factory state
  const [activeStage, setActiveStage] = useState(0);

  // Calculator state
  const [calcFabric, setCalcFabric] = useState('Mulberry Silk');
  const [calcQty, setCalcQty] = useState(100);
  const [calcOptions, setCalcOptions] = useState({
    neckLabel: false,
    barcode: false,
    orgPackage: false,
  });
  const [rfqForm, setRfqForm] = useState({
    email: '',
    companyReg: '',
    destinationPort: '',
    companyName: '',
  });
  const [rfqGenerated, setRfqGenerated] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (categoryFilter !== 'All' && p.category !== categoryFilter) return false;
      if (materialFilter !== 'All' && p.material !== materialFilter) return false;
      if (moqFilter !== 'All' && p.moqTier !== moqFilter) return false;
      return true;
    });
  }, [categoryFilter, materialFilter, moqFilter]);

  const calcResults = useMemo(() => {
    const prices = {
      'Mulberry Silk': { p100: 18.5, p250: 14.8, p500: 12.2 },
      Chanderi: { p100: 11.2, p250: 8.9, p500: 7.4 },
      Cotton: { p100: 7.8, p250: 6.4, p500: 5.2 },
      'Rayon Blend': { p100: 8.9, p250: 7.2, p500: 5.9 },
    };
    const p = prices[calcFabric] || prices['Cotton'];
    const unitPrice = calcQty >= 500 ? p.p500 : calcQty >= 250 ? p.p250 : p.p100;
    const addons =
      (calcOptions.neckLabel ? 0.45 : 0) +
      (calcOptions.barcode ? 0.3 : 0) +
      (calcOptions.orgPackage ? 0.85 : 0);
    const unitTotal = unitPrice + addons;
    const productionTotal = unitTotal * calcQty;
    const totalCBM = 0.0012 * calcQty;
    const freightCost = totalCBM * 85;
    const insurance = calcQty * 0.15;
    const totalInvoice = productionTotal + freightCost + insurance;
    return {
      unitPrice: unitPrice.toFixed(2),
      addons: addons.toFixed(2),
      unitTotal: unitTotal.toFixed(2),
      productionTotal: productionTotal.toFixed(2),
      totalCBM: totalCBM.toFixed(2),
      freightCost: freightCost.toFixed(2),
      customsLeadDays: calcQty >= 500 ? '18–25' : '12–18',
      totalInvoice: totalInvoice.toFixed(2),
      inrTotal: (totalInvoice * 83.2).toFixed(0),
    };
  }, [calcFabric, calcQty, calcOptions]);

  const addToCart = (product) => {
    setRfqCart((prev) =>
      prev.find((p) => p.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCart = (id) => {
    setRfqCart((prev) => prev.filter((p) => p.id !== id));
  };

  const tabs = [
    { key: 'home', label: 'Overview', Icon: Building2 },
    { key: 'catalog', label: 'Production Catalogue', Icon: Package },
    { key: 'factory', label: 'Factory Floor', Icon: Factory },
    { key: 'bulk-calculator', label: 'Bulk Calculator', Icon: Calculator },
    { key: 'compliance', label: 'Compliance', Icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Announcement Banner */}
      <div className="bg-slate-900 text-center py-2.5 px-4 border-b border-slate-800">
        <span className="text-amber-400 text-xs font-black tracking-[0.15em] uppercase">
          ✦ Now Accepting Bulk Orders for Global Export &nbsp;—&nbsp; Minimum Order Quantity (MOQ):
          100 PC per Style &nbsp;✦
        </span>
      </div>

      {/* Corporate Top Bar */}
      <div className="bg-slate-800 border-b border-slate-700 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span>
              GSTIN:{' '}
              <span className="text-slate-100 font-mono font-semibold">08BYVPN2162G1Z0</span>
            </span>
            <span>
              Est. <span className="text-slate-100 font-semibold">2023</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-500" />
              Badi Basti, Pushkar, Rajasthan, India
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> export@mtrfashion.in
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" /> mtrfashion.in
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <img
                src="item/Logo.jpg"
                alt="MTR Fashion Logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <div className="font-black text-slate-900 text-lg tracking-tight leading-none">
                  MTR FASHION
                </div>
                <div className="text-xs text-slate-400 tracking-[0.18em] uppercase leading-none mt-0.5">
                  Export Division
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-4 h-full text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <tab.Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2.5">
              {rfqCart.length > 0 && (
                <button
                  onClick={() => setRfqModalOpen(true)}
                  className="relative flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-300 rounded-lg text-sm font-bold text-amber-800 hover:bg-amber-100 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="hidden sm:inline">RFQ Cart</span>
                  <span className="w-5 h-5 bg-amber-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                    {rfqCart.length}
                  </span>
                </button>
              )}
              <button
                onClick={() => setRfqModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Request Wholesale Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="xl:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {mobileMenuOpen && (
            <div className="xl:hidden border-t border-slate-100 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 w-full text-left px-3 py-2.5 mt-1 rounded-lg text-sm font-semibold transition-colors ${
                    activeTab === tab.key
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <tab.Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setRfqModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full mt-2 px-3 py-2.5 bg-amber-500 text-slate-900 rounded-lg font-black text-sm"
              >
                <Send className="w-4 h-4" />
                Request Wholesale Quote
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Page Views */}
      <main>
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'catalog' && (
          <CatalogView
            products={filteredProducts}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            materialFilter={materialFilter}
            setMaterialFilter={setMaterialFilter}
            moqFilter={moqFilter}
            setMoqFilter={setMoqFilter}
            specsModal={specsModal}
            setSpecsModal={setSpecsModal}
            addToCart={addToCart}
            rfqCart={rfqCart}
          />
        )}
        {activeTab === 'factory' && (
          <FactoryView activeStage={activeStage} setActiveStage={setActiveStage} />
        )}
        {activeTab === 'bulk-calculator' && (
          <CalculatorView
            calcFabric={calcFabric}
            setCalcFabric={setCalcFabric}
            calcQty={calcQty}
            setCalcQty={setCalcQty}
            calcOptions={calcOptions}
            setCalcOptions={setCalcOptions}
            calcResults={calcResults}
            rfqForm={rfqForm}
            setRfqForm={setRfqForm}
            rfqGenerated={rfqGenerated}
            setRfqGenerated={setRfqGenerated}
          />
        )}
        {activeTab === 'compliance' && <ComplianceView />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {rfqModalOpen && (
        <RFQModal
          rfqCart={rfqCart}
          removeFromCart={removeFromCart}
          onClose={() => setRfqModalOpen(false)}
        />
      )}
    </div>
  );
}
