/** All editable text, links and video URLs for the site. */

const cdn = (file: string) => `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/${file}.mp4`;

export const content = {
  name: 'Ujjwal',

  /**
   * Your email, e.g. "hello@yourdomain.com". When set, the hero form and
   * "Hire me" open an email to you. While empty they show a demo message.
   */
  contactEmail: '',
  demoMessage: 'Demo preview — contact form not connected yet',

  /** Social profile links. Empty links show the demo message. */
  socials: {
    instagram: '',
    twitter: '',
    website: '',
  },

  nav: [
    { label: 'Work', target: 'work' },
    { label: 'Services', target: 'services' },
    { label: 'About', target: 'about' },
  ],
  navTextButton: { label: 'Showreel', target: 'work' },
  navGlassButton: 'Hire me',

  hero: {
    video: cdn('hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a'),
    headingStart: 'Make it',
    headingItalic: 'move',
    headingEnd: '.',
    emailPlaceholder: 'Enter your email',
    subtitle:
      'Motion designer, video editor and VFX artist. Leave your email and get a reply about your next title sequence, reel or campaign.',
    manifesto: 'Watch showreel',
  },

  about: {
    label: 'About me',
    lineOneStart: 'Crafting',
    lineOneItalic: 'motion',
    lineOneEnd: 'for',
    lineTwoItalic: 'stories that move, cut, and glow.',
  },

  featured: {
    video: cdn('hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8'),
    label: 'My Approach',
    text: 'Every project starts with rhythm. I build each frame around the beat, the story and the feeling you want people to leave with.',
    button: 'Explore work',
  },

  philosophy: {
    video: cdn('hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8'),
    left: 'Motion',
    right: 'Story',
    blocks: [
      {
        label: 'Choose your frame',
        text: 'Strong work lives where clear structure meets bold visuals. I plan every cut, curve and transition so the idea lands first and the style carries it further.',
      },
      {
        label: 'Shape the feeling',
        text: 'Pacing, colour and sound decide how a piece feels. I tune all three until the edit feels effortless and stays with people after the last frame.',
      },
    ],
  },

  services: {
    heading: 'What I do',
    label: 'My services',
    cards: [
      {
        video: cdn('hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31'),
        tag: 'Motion',
        title: 'Motion Graphics & VFX',
        description:
          'Title sequences, kinetic type, compositing and effects that make every frame feel finished and alive.',
        link: '',
      },
      {
        video: cdn('hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4'),
        tag: 'Edit',
        title: 'Editing & Colour',
        description:
          'Story-led edits, sound-synced cuts and cinematic grading for films, reels, campaigns and YouTube.',
        link: '',
      },
    ],
  },
};
