import { Client } from '@notionhq/client';
import type { Coming, DietaryRequirement } from '../utilities/types';

interface A {
  content: string;
  href: string | null;
}

interface QA {
  question: string;
  answer: A[];
}

type FAQ = { type: 'answer'; text: A[] } | { type: string; text: string };

type Result = {
  [key: string]: QA[];
};

const notion = new Client({ auth: import.meta.env.NOTION_INTEGRATION_SECRET });

export async function getFaqs(): Promise<Result> {
  const page = await notion.pages.retrieve({
    page_id: import.meta.env.NOTION_FAQ_PAGE_ID
  });
  const blocks = await notion.blocks.children.list({
    block_id: page.id
  });

  let faq: FAQ[] = blocks.results.reduce((acc: any, curr: any) => {
    // category
    if (curr?.type === 'heading_2') {
      acc.push({
        type: 'category',
        text: curr.heading_2.rich_text[0].plain_text
      });
      // question
    } else if (curr?.type === 'heading_3') {
      acc.push({
        type: 'question',
        text: curr.heading_3.rich_text[0].plain_text
      });
      // answer
    } else if (
      curr?.type === 'paragraph' &&
      !!curr.paragraph?.rich_text.length
    ) {
      const textItems = curr.paragraph?.rich_text.map((item: any) => {
        return {
          content: item.plain_text,
          href: item.href
        };
      });
      acc.push({
        type: 'answer',
        text: textItems
      });
    }

    return acc;
  }, []);

  const result: Result = {};
  let currentCategory = '';
  let lastQuestion: QA | null = null;

  faq.forEach((item) => {
    if (item.type === 'category') {
      currentCategory = item.text as string;
      result[currentCategory] = [];
    } else if (item.type === 'question') {
      lastQuestion = { question: item.text as string, answer: [] };
      if (currentCategory) {
        result[currentCategory].push(lastQuestion);
      }
    } else if (item.type === 'answer' && lastQuestion) {
      if (Array.isArray(item.text)) {
        lastQuestion.answer = lastQuestion.answer.concat(item.text);
      }
    }
  });

  return result;
}

export async function submitRsvp({
  name,
  email,
  coming,
  dietaryRequirement,
  allergies,
  songChoice,
  specialRequirements
}: {
  name: string;
  email: string;
  coming: Coming;
  dietaryRequirement: DietaryRequirement;
  allergies: string;
  songChoice: string;
  specialRequirements: string;
}) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: import.meta.env.NOTION_RSVP_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        ['Email Address']: {
          email: email
        },
        Coming: {
          select: {
            name: coming
          }
        },
        ['Dietary Requirement']: {
          select: {
            name: dietaryRequirement
          }
        },
        Allergies: {
          rich_text: [
            {
              text: {
                content: allergies
              }
            }
          ]
        },
        ['Song Choice']: {
          rich_text: [
            {
              text: {
                content: songChoice
              }
            }
          ]
        },
        ['Special Requirements']: {
          rich_text: [
            {
              text: {
                content: specialRequirements
              }
            }
          ]
        },
        Created: {
          date: {
            start: new Date().toISOString()
          }
        }
      }
    });

    return response;
  } catch (error) {
    console.error('Error creating page:', error);
  }
}
