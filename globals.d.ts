declare type HobbyDocument = {
    title:  string;
    avatar: string;
    image:  string;
    blurb:  string;
    info:   string[]; // When processing management input, parse input box separated into paragraphs
    link:   string;
}

declare type ExperienceDocument = {
    title:  string;
    date:   string;
    link?:  string;
    blurb:  string;
    info:   string[];
}

declare type ProjectDocument = {
    title:  string; 
    date:   string;
    link?:  string;
    status: string;
    blurb:  string;
    info:   string[];
}