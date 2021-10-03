export interface CalendarPage {
  Name: {
    title: Array<Title>;
  };
  Date: {
    date: {
      start: string;
    };
  };
  Tags?: {
    multi_select: Array<{
      name: { name: string; id?: string; color?: string };
    }>;
  };
  "Who?": {
    select: {
      name: string;
    };
  };
}

type Title = {
  text: {
    content: string;
  };
};
