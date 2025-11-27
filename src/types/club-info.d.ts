declare module '*/club-info.json' {
  export interface ClubInfo {
    clubName: string;
    tagline: string;
    meeting: {
      schedule: string;
      time: string;
      earlyArrival: string;
      location: {
        name: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        mapUrl: string;
      };
    };
    social: {
      facebook: string;
      instagram: string;
    };
    board: Array<{
      name: string;
      position: string;
      order: number;
      email: string;
      phone: string;
      photo?: string;
    }>;
    nonprofit: {
      status: string;
      mission: string;
    };
    calendar: {
      embedUrl: string;
      publicUrl: string;
    };
  }
  const data: ClubInfo;
  export default data;
}

