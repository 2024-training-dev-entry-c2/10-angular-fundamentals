import { Component } from '@angular/core';
import { signal } from '@angular/core';

interface ToolSection {
  generalTools: {
    title: string;
    subtitle: string;
    link: {
      text: string;
      href: string;
      ariaLabel?: string;
    };
  };
  interactive: {
    items: {
      video: string;
      title: string;
      description: string;
    }[];
  };
  multimedia: {
    video: string;
  };
  competitors?: {
    logos: {
      src: string;
      alt: string;
      name: string;
    }[];
  };
  className?: string;
}
@Component({
  selector: 'app-tools',
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  sections = signal<ToolSection[]>([
    {
      generalTools: {
        title: 'Build perfect docs, together.',
        subtitle:
          'Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.',
        link: {
          text: 'Explore docs & notes',
          href: '#',
          ariaLabel: 'Explorar documentos y notas',
        },
      },
      interactive: {
        items: [
          {
            video: '../../../public/videos/write-building-blocks.mp4',
            title: 'Building blocks',
            description: '100+ content types to communicate any idea.',
          },
          {
            video: '../../../public/videos/write-collaboration.mp4',
            title: 'Collaborative tools',
            description: 'Built for teams to share, suggest, and comment.',
          },
          {
            video: '../../../public/videos/write-ai.mp4',
            title: 'AI-assisted',
            description: 'Edit, draft, translate. Ask and AI will help.',
          },
        ],
      },
      multimedia: {
        video: '../../../public/videos/write-screen-desktop.mp4',
      },
      competitors: {
        logos: [
          {
            src: '../../../public/icon/evernote.svg',
            alt: 'logo de evernote',
            name: 'Evernote',
          },
          {
            src: '../../../public/icon/googleDoc.svg',
            alt: 'logo de google docs',
            name: 'Google Docs',
          },
          {
            src: '../../../public/icon/coda.svg',
            alt: 'logo de coda',
            name: 'Coda',
          },
        ],
      },
    },
    {
      generalTools: {
        title: 'Your workflow. Your way.',
        subtitle:
          'All your projects, goals, calendars, roadmaps, and more—in one tool—personalized to how you and your team work.',
        link: {
          text: 'Explore projects',
          href: '#',
          ariaLabel: 'Explorar proyectos',
        },
      },
      interactive: {
        items: [
          {
            video: '../../../public/videos/plan-todos.mp4',
            title: 'Tasks and to-dos',
            description: 'Tackle any project, big or small.',
          },
          {
            video: '../../../public/videos/plan-customizable.mp4',
            title: 'Custom views',
            description:
              'Visualize work in any format, from calendars to boards.',
          },
          {
            video: '../../../public/videos/plan-automations.mp4',
            title: 'Automations',
            description: 'Put tedious tasks on autopilot.',
          },
        ],
      },
      multimedia: {
        video: '../../../public/videos/plan-screen-desktop.mp4',
      },
      competitors: {
        logos: [
          {
            src: '../../../public/icon/trello.svg',
            alt: 'logo de trello',
            name: 'Trello',
          },
          {
            src: '../../../public/icon/asana.svg',
            alt: 'logo de asana',
            name: 'Asana',
          },
          {
            src: '../../../public/icon/monday.svg',
            alt: 'logo de monday',
            name: 'Monday',
          },
        ],
      },
    },
    {
      generalTools: {
        title: 'Find everything. Instantly.',
        subtitle:
          "No more endless searching. Our built-in AI finds what you're looking for, whether its stored in Notion or one of your other apps.",
        link: {
          text: 'Explore knowledge management',
          href: '#',
          ariaLabel: 'Explorar gestión del conocimiento',
        },
      },
      interactive: {
        items: [
          {
            video: '../../../public/videos/organize-teamspaces.mp4',
            title: 'Teamspaces',
            description: 'Dedicated spaces for every team & project.',
          },
          {
            video: '../../../public/videos/organize-integrations.mp4',
            title: 'Integrations',
            description: 'Connected to all your other tools.',
          },
          {
            video: '../../../public/videos/organize-ai.mp4',
            title: 'Just ask AI',
            description: 'Trusted answers across your apps.',
          },
        ],
      },
      multimedia: {
        video: '../../../public/videos/organize-screen-desktop.mp4',
      },
      competitors: {
        logos: [
          {
            src: '../../../public/icon/confluence.webp',
            alt: 'logo de confluence',
            name: 'Confluence',
          },
          {
            src: '../../../public/icon/sharepoint.webp',
            alt: 'logo de sharepoint',
            name: 'SharePoint',
          },
          {
            src: '../../../public/icon/drive.svg',
            alt: 'logo de google drive',
            name: 'Google Drive',
          },
        ],
      },
    },
    {
      generalTools: {
        title: 'Get a brain boost.',
        subtitle:
          "Built right into your workspace, Notion AI is ready to brainstorm, summarize, help you write, and find what you're looking for.",
        link: {
          text: 'Try Notion AI',
          href: '#',
          ariaLabel: 'Prueba Notion AI',
        },
      },
      interactive: {
        items: [
          {
            video: '../../../public/videos/ai-answers.mp4',
            title: 'Instant answers',
            description: "Ask any question about a team's docs and projects.",
          },
          {
            video: '../../../public/videos/ai-editor.mp4',
            title: 'Personalized editor',
            description: "Generate content that's always relevant.",
          },
          {
            video: '../../../public/videos/ai-connectors.mp4',
            title: 'AI connectors beta',
            description:
              'Access info from Slack, Google Drive and more, right inside Notion.',
          },
        ],
      },
      multimedia: {
        video: '../../../public/videos/ai-screen-desktop.mp4',
      },
      className: 'tools--brain',
    },
  ]);
}
