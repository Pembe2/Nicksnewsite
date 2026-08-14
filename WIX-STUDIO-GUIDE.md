# Wix Studio Replication Guide

Use Wix Studio and recreate the raw HTML design section-by-section.

## Global styles
Create these site colors: Ink `#11262E`, Ink Secondary `#294149`, Teal `#3D7372`, Sage `#87AAA2`, Sand `#D9C7A5`, Cream `#F4EFE5`, Paper `#FBFAF6`, Muted `#69787D`.

Use Libre Baskerville for headings and DM Sans for body/UI text. Target a 1180px desktop content width. Use roughly 100–110px vertical section padding on desktop and 70–76px on mobile.

## Header
Create an 82px sticky header with Paper background. Left: Visium logo/wordmark. Right: Firm, Practice Areas, Attorney, Insights, Request Consultation. Use a hamburger menu on tablet/mobile.

## Hero
Use a two-column section. Left content:
- Eyebrow: `PATENT • ESTATE • BUSINESS`
- H1: `Protect what you build. Plan for what comes next.`
- Body copy matching `index.html`
- Primary CTA: Request a Consultation
- Secondary CTA: Explore the practice

On the right, reproduce the abstract circle/card composition from the HTML using Wix containers and shapes, or replace it with a strong professional portrait of Nick.

## Positioning strip
Add a full-width Ink strip with centered copy: `Thoughtful counsel at the intersection of innovation, wealth, and business.` Use Sage on the emphasized words.

## Firm introduction
Use a two-column layout. Left: heading `Good legal work starts before there is a problem.` Right: the short firm-positioning copy from `index.html`.

## Practice Areas
Make this the visual center of the page. Use two large primary cards for:
1. Patents & Intellectual Property
2. Estate Planning

Use a 4px Teal top border. Give Patent/IP a Cream background and Estate Planning a very light green-gray background. Below those, use simpler secondary cards for Commercial Lending and Business Services. Link each card to the corresponding existing Wix page.

## Attorney section
Use a Cream background and two columns. Place Nick's professional headshot on the left and his bio on the right. Feature his commercial-banking background prominently because it differentiates the lending/business practice.

## Process
Use an Ink background and four equal columns: Listen, Strategize, Execute, Look Ahead. On tablet use 2x2; on mobile stack vertically.

## Insights
Keep Wix Blog as the CMS. Add a Wix Repeater connected to the blog dataset and display the latest three posts with category, title, and excerpt.

## Consultation
Use a Teal background with two columns. Left: heading, email, and mailing address. Right: use Wix Forms rather than the demo `mailto:` form. Fields: first name, last name, email, matter dropdown, brief description. Add a warning not to submit confidential or time-sensitive information.

## Footer
Use Ink/near-black. Four columns: logo/firm, practice, firm, contact. Include copyright, privacy, accessibility, terms, and any attorney-advertising language approved by the firm.

## Responsive behavior
Desktop: preserve two-column layouts. Tablet: collapse hero, attorney, and consultation to one column. Mobile: stack nearly everything, maintain 15–16px minimum body text, and keep buttons at least 44px tall.

## Motion
Keep interactions subtle: slight card lift on hover, arrows shifting 4–5px, and an optional soft section fade-in. Avoid parallax or dramatic animations.

## SEO
Suggested homepage title: `Visium Law | Patent, Estate Planning & Business Counsel`.
Suggested meta description: `Visium Law provides strategic counsel in patents and intellectual property, estate planning, commercial lending, and business matters.`

Before launch, configure page-specific titles/descriptions, social share image, favicon, descriptive alt text, canonical URLs, and redirects for any changed Wix slugs.

## Pre-launch checklist
Replace placeholders, link all practice cards, connect Wix Blog and Wix Forms, verify all service claims and jurisdictions, review bar advertising requirements and privacy language, test accessibility and mobile layouts, and test every CTA and form notification.
