declare type HobbyDocument= {
    title:  string;
    avatar: string;
    image:  string;
    blurb:  string;
    info:   string[]; // When processing management input, parse input box separated into paragraphs
    link:   string;
}