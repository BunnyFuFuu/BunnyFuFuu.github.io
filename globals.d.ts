/**
 * Modular document, meant to hold Hobby, Experience, and Project documents 
 * (Functionally very similar but held in different db collections)
 */
declare type CardDocument = {
    title: string;
    date?: string;
    image: string;
    link?: string;
    work:  string;
    blurb: string;
    info:  string[];
}