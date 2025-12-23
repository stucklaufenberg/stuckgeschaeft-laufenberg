# Developer Operations — Antigravity

This guide covers the technical management and operational workflows for the **Stuckgeschäft Laufenberg** digital exhibition.

## 🏗 Setup & Development

### Local Development
```bash
npm install
npm run dev
```

### Technology Stack
- **Next.js 16 (App Router)**: Framework.
- **GSAP + ScrollTrigger**: The exhibition engine.
- **Tailwind CSS 4**: Modern styling & tokens.
- **TypeScript**: Type safety.

---

## 📁 Asset & Image Pipeline

As per the PRD, images are the core product. Use the following structure:

### Folder Structure
Place images in `public/projects/[id]/`:
- `material.jpg`: Close-up of texture/craft.
- `detail.jpg`: Focused detail shot.
- `raum.jpg`: Wide space shot (Proof).

### Optimization Checklist
1. **Resolution**: Min 1920px wide (2560px preferred for Heros).
2. **Format**: Next.js automatically converts to WebP/AVIF.
3. **Naming**: Use lowercase, no spaces (e.g., `material.jpg`).

---

## 🛠 Content Management

In the MVP, content is **code-based** for maximum quality control.

- **Projects**: Edit `data/projects.ts` to update descriptions or order.
- **Owner**: All leads are sent to **Timo Laufenberg**.

---

## 🚀 Deployment (Vercel)

The project is optimized for Vercel.

1. **Push to `main`**: Triggers a production deployment.
2. **Preview Deploys**: Pull Requests generate unique preview URLs for CEO approval.

---

## 🔐 Quality Standards
- **Lighthouse**: Target score 90+ across all categories.
- **Reduced Motion**: Respects browser settings by simplifying transitions.
- **SLA**: Leads must be handled within **24h**.
