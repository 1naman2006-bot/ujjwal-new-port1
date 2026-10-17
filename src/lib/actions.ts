import { content } from './content';
import { showDemoToast } from '../components/DemoToast';

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
};

/** Opens a link in a new tab, or shows the demo message when none is set yet. */
export const openOrDemo = (url: string) => {
  if (!url) {
    showDemoToast(content.demoMessage);
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
};

/** Starts an email to Ujjwal, or shows the demo message when no email is set. */
export const emailOrDemo = (fromEmail?: string) => {
  if (!content.contactEmail) {
    showDemoToast(content.demoMessage);
    return;
  }
  const subject = encodeURIComponent('Project enquiry');
  const body = encodeURIComponent(fromEmail ? `Hi ${content.name},\n\nMy email: ${fromEmail}\n\n` : `Hi ${content.name},\n\n`);
  window.location.href = `mailto:${content.contactEmail}?subject=${subject}&body=${body}`;
};
